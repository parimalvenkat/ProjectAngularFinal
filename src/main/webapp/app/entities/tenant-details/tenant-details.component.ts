import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantDetails } from './tenant-details.model';
import { TenantDetailsService } from './tenant-details.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-details',
    templateUrl: './tenant-details.component.html'
})
export class TenantDetailsComponent implements OnInit, OnDestroy {
tenantDetails: TenantDetails[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tenantDetailsService: TenantDetailsService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tenantDetailsService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenantDetails = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTenantDetails();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: TenantDetails) {
        return item.id;
    }
    registerChangeInTenantDetails() {
        this.eventSubscriber = this.eventManager.subscribe('tenantDetailsListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
