/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Observable, Subscription } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import {Stages} from "../stages";
import {TenantDetails} from "../tenant-details";
import {Repositories} from "../repositories";
import {InboundOutbound,InboundOutboundService} from "../inbound-outbound";
import {TenantDetailsService} from "../tenant-details";
import {StagesService} from "../stages";
import {RepositoriesService} from "../repositories";

import { Deployment } from './deployment.model';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

import { DeploymentPopupService } from './deployment-popup.service';
import { DeploymentService } from './deployment.service';
import { Application, ApplicationService } from '../application';

import {AppService} from "../../app.service";



@Component({
    selector: 'jhi-deployment-dialog',
    templateUrl: './deployment-dialog.component.html'
})
export class DeploymentDialogComponent implements OnInit {

    deployments: Deployment;
    isSaving: boolean;
    stages: Stages;
    tenantdetails: TenantDetails;
    repositories: Repositories;
    applications: Application;
    inboundOutbound: any[];
   // InboundOutbound : InboundOutbound[];


    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private deploymentService: DeploymentService,
        private repositoryService:RepositoriesService,
        private stagesService: StagesService,
        private tenantdetailService: TenantDetailsService,
        private applicationService: ApplicationService,
        private eventManager: JhiEventManager,
        public router: Router,
        private route: ActivatedRoute,
        private inboundOutboundService: InboundOutboundService,



        private appService: AppService



    ) {
        this.inboundOutbound=[];
        this.inboundOutbound.push({protocol:'tcp',key:'', value:''});
    }

    ngOnInit() {
        this.isSaving = false;
        this.getAllRepositories();
        this.getAllStages();
        this.getAllTenantDetails();
        this.applicationService.query()
            .subscribe((res: ResponseWrapper) => { this.applications = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
            this.inboundOutboundService.query()
            .subscribe((res: ResponseWrapper) => { this.inboundOutbound = res.json; }, (res: ResponseWrapper) => this.onError(res.json));

        }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {


       // this.appService.loading.showLoading();

        this.isSaving = true;
        if(this.inboundOutbound && this.inboundOutbound.length > 0){
            this.deployments.inboundOutbound = [];
            for(const data of this.inboundOutbound){
                let dataObj:InboundOutbound;
                dataObj = new InboundOutbound(0,data.protocol,data.key,data.value,null);
                this.deployments.inboundOutbound.push(dataObj);
            }
        }

        if (this.deployments.id !== undefined) {
            this.subscribeToSaveResponse(
                this.deploymentService.update(this.deployments));
        } else {
            this.subscribeToSaveResponse(
                this.deploymentService.create(this.deployments));
        }
        console.log("data check",this.deploymentService.create(this.deployments));
        this.subscribeToSaveResponse(this.deploymentService.create(this.deployments));

    }



    getAllStages() {
        this.stagesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.stages = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllTenantDetails() {
        this.tenantdetailService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenantdetails = res.json;
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
        this.eventManager.broadcast({ name: 'deploymentListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
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

    trackApplicationById(index: number, item: Application) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-deployment-popup',
    template: ''
})
export class DeploymentPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private deploymentPopupService: DeploymentPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if (params['appid']){
                this.deploymentPopupService
                    .opennew(DeploymentDialogComponent as Component, null, params['appid']);
            } else if (params['id']) {
                this.deploymentPopupService
                    .open(DeploymentDialogComponent as Component, params['id']);
            } else {
                this.deploymentPopupService
                    .open(DeploymentDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
} */


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
