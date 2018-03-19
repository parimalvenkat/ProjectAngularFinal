import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantContactDetails } from './tenant-contact-details.model';
import { TenantContactDetailsService } from './tenant-contact-details.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-contact-details',
    templateUrl: './tenant-contact-details.component.html'
})
export class TenantContactDetailsComponent implements OnInit, OnDestroy {
tenantContactDetails: TenantContactDetails[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tenantContactDetailsService: TenantContactDetailsService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tenantContactDetailsService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenantContactDetails = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTenantContactDetails();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: TenantContactDetails) {
        return item.id;
    }
    registerChangeInTenantContactDetails() {
        this.eventSubscriber = this.eventManager.subscribe('tenantContactDetailsListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
