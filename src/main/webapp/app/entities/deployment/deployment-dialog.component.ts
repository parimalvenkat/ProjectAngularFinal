


import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import {Observable, Subscription} from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { Stages } from './../stages/stages.model';
import { TenantDetails } from './../tenant-details/tenant-details.model';
import { Repositories } from './../repositories/repositories.model';
import { Deployment } from './deployment.model';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { DeploymentPopupService } from './deployment-popup.service';
import { DeploymentService } from './deployment.service';
import { TenantDetailsService } from './../tenant-details/tenant-details.service';
import { StagesService } from './../stages/stages.service';
import { RepositoriesService } from './../repositories/repositories.service';
import {Application} from '../application/application.model';
import {ApplicationService} from '../application/application.service';
import {AppService} from '../../app.service';
import {InboundOutbound} from '../inbound-outbound/inbound-outbound.model';

@Component({
    selector: 'jhi-deployment-dialog',
    templateUrl: './deployment-dialog.component.html'
})
export class DeploymentDialogComponent implements OnInit {

    deployments: Deployment;
    isSaving: boolean;
    stages: Stages;
    tenants: TenantDetails;
    repositories: Repositories;
    private subscription: Subscription;
    applications: Application;
    inboundOutboundPorts: any[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private deploymentsService: DeploymentService,
        private repositoryService: RepositoriesService,
        private stagesService: StagesService,
        private tenantService: TenantDetailsService,
        private eventManager: JhiEventManager,
        public router: Router,
        private route: ActivatedRoute,
        private appService: AppService,
        private applicationService: ApplicationService
    ) {
        this.deployments = new Deployment();
    }

    ngOnInit() {
        this.isSaving = false;
        this.getAllStages();
        this.getAllTenants();
        this.getAllRepositories();
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.deployments.descriptions=this.applications.description;
        this.deployments.applications=this.deployments.appName;
        this.deployments.deploymentToApplications = this.applications;
       this.appService.loading.showLoading();
        this.isSaving = true;
        if(this.inboundOutboundPorts && this.inboundOutboundPorts.length > 0){
            this.deployments.inboundOutbound = [];
            for(const data of this.inboundOutboundPorts){
                let dataObj:InboundOutbound;
                dataObj = new InboundOutbound(0,data.protocol,data.key,data.value,null);
                this.deployments.inboundOutbound.push(dataObj);
            }
        }

        if (this.deployments.id !== undefined) {
            this.subscribeToSaveResponse(
                this.deploymentsService.update(this.deployments));
        } else {
            console.log('create deployment');
            console.log(this.deployments);
            this.subscribeToSaveResponse(
                this.deploymentsService.create(this.deployments));

        }
        this.updateApplication();
    }

    updateApplication() {
        this.applications.deployed=true;
        this.subscribeToSaveResponse(
            this.applicationService.update(this.applications));
    }

    getAllStages() {
        this.stagesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.stages = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllTenants() {
        this.tenantService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenants = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllRepositories() {
        this.repositoryService.query().subscribe(
            (res: ResponseWrapper) => {
                this.repositories = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    private subscribeToSaveResponse(result: Observable<Deployment>) {
        result.subscribe((res: Deployment) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Deployment) {
        this.eventManager.broadcast({ name: 'deploymentsListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
        //this.router.navigateByUrl('/deployment', { skipLocationChange: true });
        this.appService.loading.timeoutLoading({execute: ()=>{
            this.router.navigateByUrl('/deployment', { skipLocationChange: true });
        }}, 1000);
    }

    private onSaveError() {
        this.isSaving = false;
        this.appService.loading.hideLoading();
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-deployments-popup',
    template: ''
})
export class DeploymentPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private deploymentsPopupService: DeploymentPopupService
    ) { }

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['appid']){
                this.deploymentsPopupService
                    .opennew(DeploymentDialogComponent as Component, null, params['appid']);
            } else if (params['id']) {
                this.deploymentsPopupService
                    .open(DeploymentDialogComponent as Component, params['id']);
            } else {
                this.deploymentsPopupService
                    .open(DeploymentDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
