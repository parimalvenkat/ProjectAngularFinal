import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Deployment } from './deployment.model';
import { DeploymentService } from './deployment.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import {Stages} from "../stages/stages.model";
import {TenantDetails} from "../tenant-details";
import {Application} from "../application/application.model";
import {ApplicationService} from "../application/application.service";
import {TenantDetailsService} from "../tenant-details";
import {StagesService} from "../stages/stages.service";
import {MatDialog} from "@angular/material";
import {DialogContentComponent} from "./dialog-content/dialog-content.component";

@Component({
    selector: 'jhi-deployment',
    templateUrl: './deployment.component.html'
})
export class DeploymentComponent implements OnInit, OnDestroy {
    deployments: Deployment[];
    currentAccount: any;
    eventSubscriber: Subscription;
    search:string;
    orgDeployments: Deployment[];
    stages: Stages;
    tenantdetails: TenantDetails;
    application: Application;

    constructor(
        private applicationService: ApplicationService,
        private tenantDetailsService: TenantDetailsService,
        private stagesService: StagesService,
        private deploymentService: DeploymentService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal,
       public dialog: MatDialog
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
    searchItem(){
        if(!this.search || this.search.trim() === ''){
            this.loadAll();
        } else {
            let result: Deployment[] = [];
            for(let app of this.orgDeployments){
                if(app.applications.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||  app.containerImage.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || app.descriptions.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || app.tenant.toLowerCase().indexOf(this.search.toLowerCase()) > -1){
                    result.push(app);
                }
            }
            this.deployments = result;
        }
    }

    clearItems(){
        this.search = "";
        this.loadAll();
    }

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDeployments();
        this.getAllApplications();
        this.getAllTenantdetails();
        this.getAllStages();
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
    getAllStages() {
        this.stagesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.stages = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllTenantdetails() {
        this.tenantDetailsService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tenantdetails = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllApplications() {
        this.applicationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.application = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
    openDialog() {
        let dialogRef = this.dialog.open(DialogContentComponent, {
           width: '600px',
            data: 'This text is passed into the dialog!'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("Dialog closed: "+result);
            //this.dialogResult = result;
        });
    }
}
