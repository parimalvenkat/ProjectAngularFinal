import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ScaleManagement } from './scale-management.model';
import { ScaleManagementPopupService } from './scale-management-popup.service';
import { ScaleManagementService } from './scale-management.service';

@Component({
    selector: 'jhi-scale-management-delete-dialog',
    templateUrl: './scale-management-delete-dialog.component.html'
})
export class ScaleManagementDeleteDialogComponent {

    scaleManagement: ScaleManagement;

    constructor(
        private scaleManagementService: ScaleManagementService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.scaleManagementService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'scaleManagementListModification',
                content: 'Deleted an scaleManagement'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-scale-management-delete-popup',
    template: ''
})
export class ScaleManagementDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private scaleManagementPopupService: ScaleManagementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.scaleManagementPopupService
                .open(ScaleManagementDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
