import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { Stages } from './stages.model';
import { StagesService } from './stages.service';

@Component({
    selector: 'jhi-stages-detail',
    templateUrl: './stages-detail.component.html'
})
export class StagesDetailComponent implements OnInit, OnDestroy {

    stages: Stages;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private stagesService: StagesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInStages();
    }

    load(id) {
        this.stagesService.find(id).subscribe((stages) => {
            this.stages = stages;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInStages() {
        this.eventSubscriber = this.eventManager.subscribe(
            'stagesListModification',
            (response) => this.load(this.stages.id)
        );
    }
}
