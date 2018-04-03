import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { VersionManagement } from './version-management.model';
import { VersionManagementPopupService } from './version-management-popup.service';
import { VersionManagementService } from './version-management.service';
import { Deployment, DeploymentService } from '../deployment';
import { ResponseWrapper } from '../../shared';
import {AppService} from "../../app.service";
import {Application} from "../application/application.model";
import {ApplicationService} from "../application/application.service";

@Component({
    selector: 'jhi-version-management-dialog',
    templateUrl: './version-management-dialog.component.html'
})
export class VersionManagementDialogComponent implements OnInit {

    versionManagement: VersionManagement;
    isSaving: boolean;
    applications: Application[];
    uiApplications: Application[];
    deployments: Deployment[];

    public param: string;
    public action: string;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private versionManagementService: VersionManagementService,
        private deploymentsService: DeploymentService,
        private eventManager: JhiEventManager,
        private appService: AppService,
        private applicationsService: ApplicationService
    ) {

    }

    ngOnInit() {
        this.uiApplications = [];
        let tempDep: Deployment;
        this.isSaving = false;
        let rparams: string[];
        if(this.param){
            rparams = this.param.split(":");
        }
        this.versionManagement.action = rparams[0];
        this.deploymentsService
            .query({filter: 'id-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.versionManagement.deployments || !this.versionManagement.deployments.id) {
                    this.deployments = res.json;
                    if(this.deployments){
                        for(let depl of this.deployments){
                            if(depl.id == Number(rparams[1])){
                                this.versionManagement.deployments = depl;
                                tempDep = depl;
                            }
                        }

                        this.applicationsService.query().subscribe(
                            (res: ResponseWrapper) => {
                                this.applications = res.json;
                                if(this.applications) {
                                    for (let app of this.applications) {
                                        if (tempDep && tempDep.appName.toLowerCase().indexOf(app.name.toLowerCase()) > -1) {
                                            this.uiApplications.push(app);
                                        }
                                    }
                                }
                            }
                        );

                    }
                } else {
                    this.deploymentsService
                        .find(this.versionManagement.deployments.id)
                        .subscribe((subRes: Deployment) => {
                            this.deployments = [subRes].concat(res.json);
                            if(this.deployments){
                                for(let depl of this.deployments){
                                    if(depl.id == Number(rparams[1])){
                                        this.versionManagement.deployments = depl;
                                        tempDep = depl;
                                    }
                                }
                                this.applicationsService.query().subscribe(
                                    (res: ResponseWrapper) => {
                                        this.applications = res.json;
                                        if(this.applications) {
                                            for (let app of this.applications) {
                                                if (tempDep && tempDep.appName.toLowerCase().indexOf(app.name.toLowerCase()) > -1) {
                                                    this.uiApplications.push(app);
                                                }
                                            }
                                        }
                                    }
                                );
                            }
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.appService.loading.showLoading();
        this.isSaving = true;
        let vManager: Observable<VersionManagement>;
        if (this.versionManagement.id !== undefined) {
            this.subscribeToSaveResponse(
                vManager = this.versionManagementService.update(this.versionManagement));
        } else {
            this.subscribeToSaveResponse(
                vManager = this.versionManagementService.create(this.versionManagement));
        }
        vManager.subscribe(()=>{
            this.appService.loading.hideLoading();
        }, ()=>{
            this.appService.loading.hideLoading();
        });
    }

    private subscribeToSaveResponse(result: Observable<VersionManagement>) {
        result.subscribe((res: VersionManagement) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: VersionManagement) {
        this.eventManager.broadcast({ name: 'versionManagementListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackDeploymentsById(index: number, item: Deployment) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-version-management-popup',
    template: ''
})
export class VersionManagementPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private versionManagementPopupService: VersionManagementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.versionManagementPopupService
                    .open(VersionManagementDialogComponent as Component, params['id']);
            } else {
                this.versionManagementPopupService
                    .open(VersionManagementDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
