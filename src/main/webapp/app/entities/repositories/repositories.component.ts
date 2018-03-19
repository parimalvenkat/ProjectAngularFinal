import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Repositories } from './repositories.model';
import { RepositoriesService } from './repositories.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-repositories',
    templateUrl: './repositories.component.html'
})
export class RepositoriesComponent implements OnInit, OnDestroy {
repositories: Repositories[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private repositoriesService: RepositoriesService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.repositoriesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.repositories = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInRepositories();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Repositories) {
        return item.id;
    }
    registerChangeInRepositories() {
        this.eventSubscriber = this.eventManager.subscribe('repositoriesListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
