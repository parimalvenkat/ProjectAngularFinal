import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Stages } from './stages.model';
import { StagesService } from './stages.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-stages',
    templateUrl: './stages.component.html'
})
export class StagesComponent implements OnInit, OnDestroy {
stages: Stages[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private stagesService: StagesService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.stagesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.stages = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInStages();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Stages) {
        return item.id;
    }
    registerChangeInStages() {
        this.eventSubscriber = this.eventManager.subscribe('stagesListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
