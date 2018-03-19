import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Stages } from './stages.model';
import { StagesPopupService } from './stages-popup.service';
import { StagesService } from './stages.service';

@Component({
    selector: 'jhi-stages-delete-dialog',
    templateUrl: './stages-delete-dialog.component.html'
})
export class StagesDeleteDialogComponent {

    stages: Stages;

    constructor(
        private stagesService: StagesService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.stagesService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'stagesListModification',
                content: 'Deleted an stages'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-stages-delete-popup',
    template: ''
})
export class StagesDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private stagesPopupService: StagesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.stagesPopupService
                .open(StagesDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
