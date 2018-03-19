import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Deployment } from './deployment.model';
import { DeploymentService } from './deployment.service';

@Component({
    selector: 'jhi-deployment-detail',
    templateUrl: './deployment-detail.component.html'
})
export class DeploymentDetailComponent implements OnInit, OnDestroy {

    deployment: Deployment;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private deploymentService: DeploymentService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInDeployments();
    }

    load(id) {
        this.deploymentService.find(id).subscribe((deployment) => {
            this.deployment = deployment;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInDeployments() {
        this.eventSubscriber = this.eventManager.subscribe(
            'deploymentListModification',
            (response) => this.load(this.deployment.id)
        );
    }
}
