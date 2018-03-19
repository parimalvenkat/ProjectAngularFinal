import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { InboundOutbound } from './inbound-outbound.model';
import { InboundOutboundService } from './inbound-outbound.service';

@Component({
    selector: 'jhi-inbound-outbound-detail',
    templateUrl: './inbound-outbound-detail.component.html'
})
export class InboundOutboundDetailComponent implements OnInit, OnDestroy {

    inboundOutbound: InboundOutbound;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private inboundOutboundService: InboundOutboundService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInInboundOutbounds();
    }

    load(id) {
        this.inboundOutboundService.find(id).subscribe((inboundOutbound) => {
            this.inboundOutbound = inboundOutbound;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInInboundOutbounds() {
        this.eventSubscriber = this.eventManager.subscribe(
            'inboundOutboundListModification',
            (response) => this.load(this.inboundOutbound.id)
        );
    }
}
