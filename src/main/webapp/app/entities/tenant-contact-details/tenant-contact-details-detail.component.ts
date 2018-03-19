import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { TenantContactDetails } from './tenant-contact-details.model';
import { TenantContactDetailsService } from './tenant-contact-details.service';

@Component({
    selector: 'jhi-tenant-contact-details-detail',
    templateUrl: './tenant-contact-details-detail.component.html'
})
export class TenantContactDetailsDetailComponent implements OnInit, OnDestroy {

    tenantContactDetails: TenantContactDetails;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tenantContactDetailsService: TenantContactDetailsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTenantContactDetails();
    }

    load(id) {
        this.tenantContactDetailsService.find(id).subscribe((tenantContactDetails) => {
            this.tenantContactDetails = tenantContactDetails;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTenantContactDetails() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tenantContactDetailsListModification',
            (response) => this.load(this.tenantContactDetails.id)
        );
    }
}
