import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { VersionManagement } from './version-management.model';
import { VersionManagementService } from './version-management.service';

@Component({
    selector: 'jhi-version-management-detail',
    templateUrl: './version-management-detail.component.html'
})
export class VersionManagementDetailComponent implements OnInit, OnDestroy {

    versionManagement: VersionManagement;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private versionManagementService: VersionManagementService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInVersionManagements();
    }

    load(id) {
        this.versionManagementService.find(id).subscribe((versionManagement) => {
            this.versionManagement = versionManagement;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInVersionManagements() {
        this.eventSubscriber = this.eventManager.subscribe(
            'versionManagementListModification',
            (response) => this.load(this.versionManagement.id)
        );
    }
}
