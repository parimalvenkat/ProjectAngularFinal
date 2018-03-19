import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { InboundOutbound } from './inbound-outbound.model';
import { InboundOutboundPopupService } from './inbound-outbound-popup.service';
import { InboundOutboundService } from './inbound-outbound.service';

@Component({
    selector: 'jhi-inbound-outbound-delete-dialog',
    templateUrl: './inbound-outbound-delete-dialog.component.html'
})
export class InboundOutboundDeleteDialogComponent {

    inboundOutbound: InboundOutbound;

    constructor(
        private inboundOutboundService: InboundOutboundService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.inboundOutboundService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'inboundOutboundListModification',
                content: 'Deleted an inboundOutbound'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-inbound-outbound-delete-popup',
    template: ''
})
export class InboundOutboundDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private inboundOutboundPopupService: InboundOutboundPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.inboundOutboundPopupService
                .open(InboundOutboundDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
