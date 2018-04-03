import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { VersionManagement } from './version-management.model';
import { VersionManagementService } from './version-management.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-version-management',
    templateUrl: './version-management.component.html'
})
export class VersionManagementComponent implements OnInit, OnDestroy {
versionManagements: VersionManagement[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private versionManagementService: VersionManagementService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.versionManagementService.query().subscribe(
            (res: ResponseWrapper) => {
                this.versionManagements = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInVersionManagements();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: VersionManagement) {
        return item.id;
    }
    registerChangeInVersionManagements() {
        this.eventSubscriber = this.eventManager.subscribe('versionManagementListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
