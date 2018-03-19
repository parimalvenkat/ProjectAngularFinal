import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { TenantDeployment } from './tenant-deployment.model';
import { TenantDeploymentService } from './tenant-deployment.service';

@Component({
    selector: 'jhi-tenant-deployment-detail',
    templateUrl: './tenant-deployment-detail.component.html'
})
export class TenantDeploymentDetailComponent implements OnInit, OnDestroy {

    tenantDeployment: TenantDeployment;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tenantDeploymentService: TenantDeploymentService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTenantDeployments();
    }

    load(id) {
        this.tenantDeploymentService.find(id).subscribe((tenantDeployment) => {
            this.tenantDeployment = tenantDeployment;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTenantDeployments() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tenantDeploymentListModification',
            (response) => this.load(this.tenantDeployment.id)
        );
    }
}
