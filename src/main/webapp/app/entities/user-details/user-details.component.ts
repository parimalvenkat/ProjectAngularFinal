import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { UserDetails } from './user-details.model';
import { UserDetailsService } from './user-details.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-user-details',
    templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit, OnDestroy {
userDetails: UserDetails[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private userDetailsService: UserDetailsService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.userDetailsService.query().subscribe(
            (res: ResponseWrapper) => {
                this.userDetails = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInUserDetails();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: UserDetails) {
        return item.id;
    }
    registerChangeInUserDetails() {
        this.eventSubscriber = this.eventManager.subscribe('userDetailsListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
