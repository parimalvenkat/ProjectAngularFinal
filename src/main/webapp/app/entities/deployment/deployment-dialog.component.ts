import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Deployment } from './deployment.model';
import { DeploymentPopupService } from './deployment-popup.service';
import { DeploymentService } from './deployment.service';
import { Application, ApplicationService } from '../application';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-deployment-dialog',
    templateUrl: './deployment-dialog.component.html'
})
export class DeploymentDialogComponent implements OnInit {

    deployment: Deployment;
    isSaving: boolean;

    applications: Application[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private deploymentService: DeploymentService,
        private applicationService: ApplicationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.applicationService.query()
            .subscribe((res: ResponseWrapper) => { this.applications = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.deployment.id !== undefined) {
            this.subscribeToSaveResponse(
                this.deploymentService.update(this.deployment));
        } else {
            this.subscribeToSaveResponse(
                this.deploymentService.create(this.deployment));
        }
    }

    private subscribeToSaveResponse(result: Observable<Deployment>) {
        result.subscribe((res: Deployment) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Deployment) {
        this.eventManager.broadcast({ name: 'deploymentListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
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
            if ( params['id'] ) {
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
}
