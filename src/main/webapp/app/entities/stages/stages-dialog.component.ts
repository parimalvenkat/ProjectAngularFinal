import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Stages } from './stages.model';
import { StagesPopupService } from './stages-popup.service';
import { StagesService } from './stages.service';
import { TenantDetails, TenantDetailsService } from '../tenant-details';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-stages-dialog',
    templateUrl: './stages-dialog.component.html'
})
export class StagesDialogComponent implements OnInit {

    stages: Stages;
    isSaving: boolean;

    tenantdetails: TenantDetails[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private stagesService: StagesService,
        private tenantDetailsService: TenantDetailsService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.tenantDetailsService.query()
            .subscribe((res: ResponseWrapper) => { this.tenantdetails = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.stages.id !== undefined) {
            this.subscribeToSaveResponse(
                this.stagesService.update(this.stages));
        } else {
            this.subscribeToSaveResponse(
                this.stagesService.create(this.stages));
        }
    }

    private subscribeToSaveResponse(result: Observable<Stages>) {
        result.subscribe((res: Stages) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Stages) {
        this.eventManager.broadcast({ name: 'stagesListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackTenantDetailsById(index: number, item: TenantDetails) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-stages-popup',
    template: ''
})
export class StagesPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private stagesPopupService: StagesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.stagesPopupService
                    .open(StagesDialogComponent as Component, params['id']);
            } else {
                this.stagesPopupService
                    .open(StagesDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
