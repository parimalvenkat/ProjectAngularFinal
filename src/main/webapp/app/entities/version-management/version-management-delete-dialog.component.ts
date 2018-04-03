import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { VersionManagement } from './version-management.model';
import { VersionManagementPopupService } from './version-management-popup.service';
import { VersionManagementService } from './version-management.service';

@Component({
    selector: 'jhi-version-management-delete-dialog',
    templateUrl: './version-management-delete-dialog.component.html'
})
export class VersionManagementDeleteDialogComponent {

    versionManagement: VersionManagement;

    constructor(
        private versionManagementService: VersionManagementService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.versionManagementService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'versionManagementListModification',
                content: 'Deleted an versionManagement'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-version-management-delete-popup',
    template: ''
})
export class VersionManagementDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private versionManagementPopupService: VersionManagementPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.versionManagementPopupService
                .open(VersionManagementDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
