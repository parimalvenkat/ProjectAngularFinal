/**
 * Created by MOAB on 25-Oct-17.
 */

import { Component, OnInit } from '@angular/core';
import { ApplicationService } from './../application/application.service';
import { Application } from './../application/application.model';
import { Deployment } from './../deployment/deployment.model';
import { Stages } from './../stages/stages.model';
import { TenantDetails } from './../tenant-details/tenant-details.model';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { JhiEventManager, JhiParseLinks, JhiAlertService, JhiDataUtils } from 'ng-jhipster';
import { DeploymentService } from './../deployment/deployment.service';
import { TenantDetailsService } from './../tenant-details/tenant-details.service';
import { StagesService } from './../stages/stages.service';

@Component({
    selector: 'jhi-deployments-dropdown',
    template: `
    <div class="row">
        <div class="col-sm">
            <div class="dropdown show" ngbDropdown routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a class="btn btn-secondary dropdown-toggle" role="button" ngbDropdownToggle href="javascript:void(0);" id="entity-menu">
                Tenants List
            </a>

            <div class="dropdown-menu" ngbDropdownMenu>
                <a class="dropdown-item"   *ngFor="let tenant of tenants;trackBy: trackId; let id = index">{{tenant.name}}</a>
            </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="dropdown show" ngbDropdown routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a class="btn btn-secondary dropdown-toggle" role="button"
             ngbDropdownToggle href="javascript:void(0);" id="entity-menu">
                Stages List
            </a>
            <div class="dropdown-menu" ngbDropdownMenu>
                <a class="dropdown-item" *ngFor="let stage of stages;trackBy: trackId; let id = index">{{stage.name}}</a>
            </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="dropdown show" ngbDropdown routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a class="btn btn-secondary dropdown-toggle" role="button" ngbDropdownToggle href="javascript:void(0);" id="entity-menu">
                Applications List
            </a>

            <div class="dropdown-menu" ngbDropdownMenu>
                <a class="dropdown-item"
                *ngFor="let application of applications;trackBy: trackId; let id = index">{{application.name}}</a>
            </div>
            </div>
        </div>
    </div>
    `,
    styles: [``]
})
export class DeploymentDropdownComponent implements OnInit {

    applications: Application;
    deployments: Deployment;
    stages: Stages;
    tenantdetails: TenantDetails;

    constructor(
        private applicationService: ApplicationService,
        private deploymentService: DeploymentService,
        private tenantService: TenantDetailsService,
        private stagesService: StagesService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager
    ) { }

    ngOnInit() {
        this.getAllApplications();
        this.getAllDeployments();
        this.getAllStages();
        this.getAllTenants();
    }

    getAllApplications() {
        this.applicationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.applications = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    getAllDeployments() {
        this.deploymentService.query().subscribe(
            (res: ResponseWrapper) => {
                this.deployments = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
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
                this.tenantdetails = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
