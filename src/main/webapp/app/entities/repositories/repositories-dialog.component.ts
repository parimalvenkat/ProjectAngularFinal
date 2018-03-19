import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Repositories } from './repositories.model';
import { RepositoriesPopupService } from './repositories-popup.service';
import { RepositoriesService } from './repositories.service';

@Component({
    selector: 'jhi-repositories-dialog',
    templateUrl: './repositories-dialog.component.html'
})
export class RepositoriesDialogComponent implements OnInit {

    repositories: Repositories;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private repositoriesService: RepositoriesService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.repositories.id !== undefined) {
            this.subscribeToSaveResponse(
                this.repositoriesService.update(this.repositories));
        } else {
            this.subscribeToSaveResponse(
                this.repositoriesService.create(this.repositories));
        }
    }

    private subscribeToSaveResponse(result: Observable<Repositories>) {
        result.subscribe((res: Repositories) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Repositories) {
        this.eventManager.broadcast({ name: 'repositoriesListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-repositories-popup',
    template: ''
})
export class RepositoriesPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private repositoriesPopupService: RepositoriesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.repositoriesPopupService
                    .open(RepositoriesDialogComponent as Component, params['id']);
            } else {
                this.repositoriesPopupService
                    .open(RepositoriesDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
