import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Application } from './application.model';
import { ApplicationService } from './application.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-application',
    templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit, OnDestroy {
applications: Application[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private applicationService: ApplicationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.applicationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.applications = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInApplications();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Application) {
        return item.id;
    }
    registerChangeInApplications() {
        this.eventSubscriber = this.eventManager.subscribe('applicationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
