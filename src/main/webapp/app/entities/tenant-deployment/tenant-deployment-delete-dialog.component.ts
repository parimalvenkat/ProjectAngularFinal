import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TenantDeployment } from './tenant-deployment.model';
import { TenantDeploymentPopupService } from './tenant-deployment-popup.service';
import { TenantDeploymentService } from './tenant-deployment.service';

@Component({
    selector: 'jhi-tenant-deployment-delete-dialog',
    templateUrl: './tenant-deployment-delete-dialog.component.html'
})
export class TenantDeploymentDeleteDialogComponent {

    tenantDeployment: TenantDeployment;

    constructor(
        private tenantDeploymentService: TenantDeploymentService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tenantDeploymentService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'tenantDeploymentListModification',
                content: 'Deleted an tenantDeployment'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tenant-deployment-delete-popup',
    template: ''
})
export class TenantDeploymentDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tenantDeploymentPopupService: TenantDeploymentPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.tenantDeploymentPopupService
                .open(TenantDeploymentDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
