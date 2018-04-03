import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { ScaleManagement } from './scale-management.model';
import { ScaleManagementService } from './scale-management.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-scale-management',
    templateUrl: './scale-management.component.html'
})
export class ScaleManagementComponent implements OnInit, OnDestroy {
scaleManagements: ScaleManagement[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private scaleManagementService: ScaleManagementService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.scaleManagementService.query().subscribe(
            (res: ResponseWrapper) => {
                this.scaleManagements = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInScaleManagements();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ScaleManagement) {
        return item.id;
    }
    registerChangeInScaleManagements() {
        this.eventSubscriber = this.eventManager.subscribe('scaleManagementListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
