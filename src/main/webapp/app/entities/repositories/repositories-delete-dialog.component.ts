import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Repositories } from './repositories.model';
import { RepositoriesPopupService } from './repositories-popup.service';
import { RepositoriesService } from './repositories.service';

@Component({
    selector: 'jhi-repositories-delete-dialog',
    templateUrl: './repositories-delete-dialog.component.html'
})
export class RepositoriesDeleteDialogComponent {

    repositories: Repositories;

    constructor(
        private repositoriesService: RepositoriesService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.repositoriesService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'repositoriesListModification',
                content: 'Deleted an repositories'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-repositories-delete-popup',
    template: ''
})
export class RepositoriesDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private repositoriesPopupService: RepositoriesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.repositoriesPopupService
                .open(RepositoriesDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
