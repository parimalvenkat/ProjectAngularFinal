import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tenant } from './tenant.model';
import { TenantPopupService } from './tenant-popup.service';
import { TenantService } from './tenant.service';
import { Stages, StagesService } from '../stages';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-dialog',
    templateUrl: './tenant-dialog.component.html'
})
export class TenantDialogComponent implements OnInit {

    tenant: Tenant;
    isSaving: boolean;

    stages: Stages[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private tenantService: TenantService,
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
        if (this.tenant.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tenantService.update(this.tenant));
        } else {
            this.subscribeToSaveResponse(
                this.tenantService.create(this.tenant));
        }
    }

    private subscribeToSaveResponse(result: Observable<Tenant>) {
        result.subscribe((res: Tenant) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Tenant) {
        this.eventManager.broadcast({ name: 'tenantListModification', content: 'OK'});
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
    selector: 'jhi-tenant-popup',
    template: ''
})
export class TenantPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantPopupService: TenantPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tenantPopupService
                    .open(TenantDialogComponent as Component, params['id']);
            } else {
                this.tenantPopupService
                    .open(TenantDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
