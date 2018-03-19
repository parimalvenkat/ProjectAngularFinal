import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TenantContactDetails } from './tenant-contact-details.model';
import { TenantContactDetailsPopupService } from './tenant-contact-details-popup.service';
import { TenantContactDetailsService } from './tenant-contact-details.service';

@Component({
    selector: 'jhi-tenant-contact-details-delete-dialog',
    templateUrl: './tenant-contact-details-delete-dialog.component.html'
})
export class TenantContactDetailsDeleteDialogComponent {

    tenantContactDetails: TenantContactDetails;

    constructor(
        private tenantContactDetailsService: TenantContactDetailsService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tenantContactDetailsService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'tenantContactDetailsListModification',
                content: 'Deleted an tenantContactDetails'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tenant-contact-details-delete-popup',
    template: ''
})
export class TenantContactDetailsDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantContactDetailsPopupService: TenantContactDetailsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.tenantContactDetailsPopupService
                .open(TenantContactDetailsDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
