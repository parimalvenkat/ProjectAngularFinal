import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantDeployment } from './tenant-deployment.model';
import { TenantDeploymentService } from './tenant-deployment.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-deployment',
    templateUrl: './tenant-deployment.component.html'
})
export class TenantDeploymentComponent implements OnInit, OnDestroy {
tenantDeployments: TenantDeployment[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tenantDeploymentService: TenantDeploymentService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tenantDeploymentService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenantDeployments = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTenantDeployments();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: TenantDeployment) {
        return item.id;
    }
    registerChangeInTenantDeployments() {
        this.eventSubscriber = this.eventManager.subscribe('tenantDeploymentListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
