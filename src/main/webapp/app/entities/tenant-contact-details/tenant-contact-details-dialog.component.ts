import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantContactDetails } from './tenant-contact-details.model';
import { TenantContactDetailsPopupService } from './tenant-contact-details-popup.service';
import { TenantContactDetailsService } from './tenant-contact-details.service';
import { TenantDetails, TenantDetailsService } from '../tenant-details';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-contact-details-dialog',
    templateUrl: './tenant-contact-details-dialog.component.html'
})
export class TenantContactDetailsDialogComponent implements OnInit {

    tenantContactDetails: TenantContactDetails;
    isSaving: boolean;

    tenantdetails: TenantDetails[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private tenantContactDetailsService: TenantContactDetailsService,
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
        if (this.tenantContactDetails.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tenantContactDetailsService.update(this.tenantContactDetails));
        } else {
            this.subscribeToSaveResponse(
                this.tenantContactDetailsService.create(this.tenantContactDetails));
        }
    }

    private subscribeToSaveResponse(result: Observable<TenantContactDetails>) {
        result.subscribe((res: TenantContactDetails) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: TenantContactDetails) {
        this.eventManager.broadcast({ name: 'tenantContactDetailsListModification', content: 'OK'});
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
    selector: 'jhi-tenant-contact-details-popup',
    template: ''
})
export class TenantContactDetailsPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantContactDetailsPopupService: TenantContactDetailsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tenantContactDetailsPopupService
                    .open(TenantContactDetailsDialogComponent as Component, params['id']);
            } else {
                this.tenantContactDetailsPopupService
                    .open(TenantContactDetailsDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
