import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    InboundOutboundService,
    InboundOutboundPopupService,
    InboundOutboundComponent,
    InboundOutboundDetailComponent,
    InboundOutboundDialogComponent,
    InboundOutboundPopupComponent,
    InboundOutboundDeletePopupComponent,
    InboundOutboundDeleteDialogComponent,
    inboundOutboundRoute,
    inboundOutboundPopupRoute,
} from './';

const ENTITY_STATES = [
    ...inboundOutboundRoute,
    ...inboundOutboundPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        InboundOutboundComponent,
        InboundOutboundDetailComponent,
        InboundOutboundDialogComponent,
        InboundOutboundDeleteDialogComponent,
        InboundOutboundPopupComponent,
        InboundOutboundDeletePopupComponent,
    ],
    entryComponents: [
        InboundOutboundComponent,
        InboundOutboundDialogComponent,
        InboundOutboundPopupComponent,
        InboundOutboundDeleteDialogComponent,
        InboundOutboundDeletePopupComponent,
    ],
    providers: [
        InboundOutboundService,
        InboundOutboundPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1InboundOutboundModule {}
