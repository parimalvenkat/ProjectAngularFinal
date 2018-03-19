import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Repositories } from './repositories.model';
import { RepositoriesService } from './repositories.service';

@Component({
    selector: 'jhi-repositories-detail',
    templateUrl: './repositories-detail.component.html'
})
export class RepositoriesDetailComponent implements OnInit, OnDestroy {

    repositories: Repositories;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private repositoriesService: RepositoriesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInRepositories();
    }

    load(id) {
        this.repositoriesService.find(id).subscribe((repositories) => {
            this.repositories = repositories;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInRepositories() {
        this.eventSubscriber = this.eventManager.subscribe(
            'repositoriesListModification',
            (response) => this.load(this.repositories.id)
        );
    }
}
