import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { ScaleManagement } from './scale-management.model';
import { ScaleManagementService } from './scale-management.service';

@Component({
    selector: 'jhi-scale-management-detail',
    templateUrl: './scale-management-detail.component.html'
})
export class ScaleManagementDetailComponent implements OnInit, OnDestroy {

    scaleManagement: ScaleManagement;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private scaleManagementService: ScaleManagementService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInScaleManagements();
    }

    load(id) {
        this.scaleManagementService.find(id).subscribe((scaleManagement) => {
            this.scaleManagement = scaleManagement;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInScaleManagements() {
        this.eventSubscriber = this.eventManager.subscribe(
            'scaleManagementListModification',
            (response) => this.load(this.scaleManagement.id)
        );
    }
}
