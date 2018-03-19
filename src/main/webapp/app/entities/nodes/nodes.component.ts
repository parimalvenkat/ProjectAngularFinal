import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { Nodes } from './nodes.model';
import { NodesService } from './nodes.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-nodes',
    templateUrl: './nodes.component.html'
})
export class NodesComponent implements OnInit, OnDestroy {
nodes: Nodes[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private nodesService: NodesService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.nodesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.nodes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInNodes();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Nodes) {
        return item.id;
    }
    registerChangeInNodes() {
        this.eventSubscriber = this.eventManager.subscribe('nodesListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
