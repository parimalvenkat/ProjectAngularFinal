import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TenantDeployment } from './tenant-deployment.model';
import { TenantDeploymentPopupService } from './tenant-deployment-popup.service';
import { TenantDeploymentService } from './tenant-deployment.service';
import { TenantDetails, TenantDetailsService } from '../tenant-details';
import { Deployment, DeploymentService } from '../deployment';
import { Stages, StagesService } from '../stages';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-tenant-deployment-dialog',
    templateUrl: './tenant-deployment-dialog.component.html'
})
export class TenantDeploymentDialogComponent implements OnInit {

    tenantDeployment: TenantDeployment;
    isSaving: boolean;

    tenantdepoloymenttodetails: TenantDetails[];

    tenantdeploymenttodeployments: Deployment[];

    tenantdeploymenttostages: Stages[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private tenantDeploymentService: TenantDeploymentService,
        private tenantDetailsService: TenantDetailsService,
        private deploymentService: DeploymentService,
        private stagesService: StagesService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.tenantDetailsService
            .query({filter: 'tenantdeployment-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tenantDeployment.tenantDepoloymentToDetails || !this.tenantDeployment.tenantDepoloymentToDetails.id) {
                    this.tenantdepoloymenttodetails = res.json;
                } else {
                    this.tenantDetailsService
                        .find(this.tenantDeployment.tenantDepoloymentToDetails.id)
                        .subscribe((subRes: TenantDetails) => {
                            this.tenantdepoloymenttodetails = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.deploymentService
            .query({filter: 'tenantdeployment-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tenantDeployment.tenantDeploymentToDeployment || !this.tenantDeployment.tenantDeploymentToDeployment.id) {
                    this.tenantdeploymenttodeployments = res.json;
                } else {
                    this.deploymentService
                        .find(this.tenantDeployment.tenantDeploymentToDeployment.id)
                        .subscribe((subRes: Deployment) => {
                            this.tenantdeploymenttodeployments = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
        this.stagesService
            .query({filter: 'tenantdeployment-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.tenantDeployment.tenantDeploymentToStages || !this.tenantDeployment.tenantDeploymentToStages.id) {
                    this.tenantdeploymenttostages = res.json;
                } else {
                    this.stagesService
                        .find(this.tenantDeployment.tenantDeploymentToStages.id)
                        .subscribe((subRes: Stages) => {
                            this.tenantdeploymenttostages = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tenantDeployment.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tenantDeploymentService.update(this.tenantDeployment));
        } else {
            this.subscribeToSaveResponse(
                this.tenantDeploymentService.create(this.tenantDeployment));
        }
    }

    private subscribeToSaveResponse(result: Observable<TenantDeployment>) {
        result.subscribe((res: TenantDeployment) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: TenantDeployment) {
        this.eventManager.broadcast({ name: 'tenantDeploymentListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackTenantDetailsById(index: number, item: TenantDetails) {
        return item.id;
    }

    trackDeploymentById(index: number, item: Deployment) {
        return item.id;
    }

    trackStagesById(index: number, item: Stages) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-tenant-deployment-popup',
    template: ''
})
export class TenantDeploymentPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantDeploymentPopupService: TenantDeploymentPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tenantDeploymentPopupService
                    .open(TenantDeploymentDialogComponent as Component, params['id']);
            } else {
                this.tenantDeploymentPopupService
                    .open(TenantDeploymentDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
