import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ScaleManagement } from './scale-management.model';
import { ScaleManagementPopupService } from './scale-management-popup.service';
import { ScaleManagementService } from './scale-management.service';
import { Deployment, DeploymentService } from '../deployment';
import { ResponseWrapper } from '../../shared';
import {AppService} from "../../app.service";

@Component({
    selector: 'jhi-scale-management-dialog',
    templateUrl: './scale-management-dialog.component.html'
})
export class ScaleManagementDialogComponent implements OnInit {

    scaleManagement: ScaleManagement;
    isSaving: boolean;

    deployments: Deployment[];

    public dId: number;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private scaleManagementService: ScaleManagementService,
        private deploymentsService: DeploymentService,
        private eventManager: JhiEventManager,
        private appService: AppService
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.deploymentsService
            .query({filter: 'id-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.scaleManagement.deployments || !this.scaleManagement.deployments.id) {
                    this.deployments = res.json;
                    if(this.deployments){
                        for(let depl of this.deployments){
                            if(depl.id == this.dId){
                                this.scaleManagement.deployments = depl;
                                break;
                            }
                        }
                    }
                } else {
                    this.deploymentsService
                        .find(this.scaleManagement.deployments.id)
                        .subscribe((subRes: Deployment) => {
                            this.deployments = [subRes].concat(res.json);
                            if(this.deployments){
                                for(let depl of this.deployments){
                                    if(depl.id == this.dId){
                                        this.scaleManagement.deployments = depl;
                                        break;
                                    }
                                }
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
        let scaleObesrvable: Observable<ScaleManagement>;
        if (this.scaleManagement.id !== undefined) {
            this.subscribeToSaveResponse(
                scaleObesrvable = this.scaleManagementService.update(this.scaleManagement));
        } else {
            this.subscribeToSaveResponse(
                scaleObesrvable = this.scaleManagementService.create(this.scaleManagement));
        }
        scaleObesrvable.subscribe(()=>{
            this.appService.loading.hideLoading();
        }, ()=>{
            this.appService.loading.hideLoading();
        });

    }

    private subscribeToSaveResponse(result: Observable<ScaleManagement>) {
        result.subscribe((res: ScaleManagement) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: ScaleManagement) {
        this.eventManager.broadcast({ name: 'scaleManagementListModification', content: 'OK'});
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
    selector: 'jhi-scale-management-popup',
    template: ''
})
export class ScaleManagementPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private scaleManagementPopupService: ScaleManagementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.scaleManagementPopupService
                    .open(ScaleManagementDialogComponent as Component, params['id']);
            } else {
                this.scaleManagementPopupService
                    .open(ScaleManagementDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
