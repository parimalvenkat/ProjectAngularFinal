import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Nodes } from './nodes.model';
import { NodesPopupService } from './nodes-popup.service';
import { NodesService } from './nodes.service';

@Component({
    selector: 'jhi-nodes-dialog',
    templateUrl: './nodes-dialog.component.html'
})
export class NodesDialogComponent implements OnInit {

    nodes: Nodes;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private nodesService: NodesService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.nodes.id !== undefined) {
            this.subscribeToSaveResponse(
                this.nodesService.update(this.nodes));
        } else {
            this.subscribeToSaveResponse(
                this.nodesService.create(this.nodes));
        }
    }

    private subscribeToSaveResponse(result: Observable<Nodes>) {
        result.subscribe((res: Nodes) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Nodes) {
        this.eventManager.broadcast({ name: 'nodesListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-nodes-popup',
    template: ''
})
export class NodesPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private nodesPopupService: NodesPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.nodesPopupService
                    .open(NodesDialogComponent as Component, params['id']);
            } else {
                this.nodesPopupService
                    .open(NodesDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
