import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Deployment } from './deployment.model';
import { DeploymentPopupService } from './deployment-popup.service';
import { DeploymentService } from './deployment.service';

@Component({
    selector: 'jhi-deployment-delete-dialog',
    templateUrl: './deployment-delete-dialog.component.html'
})
export class DeploymentDeleteDialogComponent {

    deployment: Deployment;

    constructor(
        private deploymentService: DeploymentService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.deploymentService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'deploymentListModification',
                content: 'Deleted an deployment'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-deployment-delete-popup',
    template: ''
})
export class DeploymentDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private deploymentPopupService: DeploymentPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.deploymentPopupService
                .open(DeploymentDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
