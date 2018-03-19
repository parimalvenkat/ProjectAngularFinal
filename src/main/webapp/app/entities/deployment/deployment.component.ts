import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Deployment } from './deployment.model';
import { DeploymentService } from './deployment.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-deployment',
    templateUrl: './deployment.component.html'
})
export class DeploymentComponent implements OnInit, OnDestroy {
deployments: Deployment[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private deploymentService: DeploymentService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.deploymentService.query().subscribe(
            (res: ResponseWrapper) => {
                this.deployments = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDeployments();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Deployment) {
        return item.id;
    }
    registerChangeInDeployments() {
        this.eventSubscriber = this.eventManager.subscribe('deploymentListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
