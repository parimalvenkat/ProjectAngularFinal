import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { InboundOutbound } from './inbound-outbound.model';
import { InboundOutboundPopupService } from './inbound-outbound-popup.service';
import { InboundOutboundService } from './inbound-outbound.service';

@Component({
    selector: 'jhi-inbound-outbound-dialog',
    templateUrl: './inbound-outbound-dialog.component.html'
})
export class InboundOutboundDialogComponent implements OnInit {

    inboundOutbound: InboundOutbound;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private inboundOutboundService: InboundOutboundService,
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
        if (this.inboundOutbound.id !== undefined) {
            this.subscribeToSaveResponse(
                this.inboundOutboundService.update(this.inboundOutbound));
        } else {
            this.subscribeToSaveResponse(
                this.inboundOutboundService.create(this.inboundOutbound));
        }
    }

    private subscribeToSaveResponse(result: Observable<InboundOutbound>) {
        result.subscribe((res: InboundOutbound) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: InboundOutbound) {
        this.eventManager.broadcast({ name: 'inboundOutboundListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-inbound-outbound-popup',
    template: ''
})
export class InboundOutboundPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private inboundOutboundPopupService: InboundOutboundPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.inboundOutboundPopupService
                    .open(InboundOutboundDialogComponent as Component, params['id']);
            } else {
                this.inboundOutboundPopupService
                    .open(InboundOutboundDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
