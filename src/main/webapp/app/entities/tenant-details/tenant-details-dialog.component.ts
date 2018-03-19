import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantDetails } from './tenant-details.model';
import { TenantDetailsPopupService } from './tenant-details-popup.service';
import { TenantDetailsService } from './tenant-details.service';
import { Stages, StagesService } from '../stages';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-details-dialog',
    templateUrl: './tenant-details-dialog.component.html'
})
export class TenantDetailsDialogComponent implements OnInit {

    tenantDetails: TenantDetails;
    isSaving: boolean;

    stages: Stages[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private tenantDetailsService: TenantDetailsService,
        private stagesService: StagesService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.stagesService.query()
            .subscribe((res: ResponseWrapper) => { this.stages = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tenantDetails.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tenantDetailsService.update(this.tenantDetails));
        } else {
            this.subscribeToSaveResponse(
                this.tenantDetailsService.create(this.tenantDetails));
        }
    }

    private subscribeToSaveResponse(result: Observable<TenantDetails>) {
        result.subscribe((res: TenantDetails) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: TenantDetails) {
        this.eventManager.broadcast({ name: 'tenantDetailsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackStagesById(index: number, item: Stages) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-tenant-details-popup',
    template: ''
})
export class TenantDetailsPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantDetailsPopupService: TenantDetailsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tenantDetailsPopupService
                    .open(TenantDetailsDialogComponent as Component, params['id']);
            } else {
                this.tenantDetailsPopupService
                    .open(TenantDetailsDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
