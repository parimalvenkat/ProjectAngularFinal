import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { InboundOutbound } from './inbound-outbound.model';
import { InboundOutboundService } from './inbound-outbound.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-inbound-outbound',
    templateUrl: './inbound-outbound.component.html'
})
export class InboundOutboundComponent implements OnInit, OnDestroy {
inboundOutbounds: InboundOutbound[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private inboundOutboundService: InboundOutboundService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.inboundOutboundService.query().subscribe(
            (res: ResponseWrapper) => {
                this.inboundOutbounds = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInInboundOutbounds();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: InboundOutbound) {
        return item.id;
    }
    registerChangeInInboundOutbounds() {
        this.eventSubscriber = this.eventManager.subscribe('inboundOutboundListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
