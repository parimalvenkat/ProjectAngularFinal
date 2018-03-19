import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    StagesService,
    StagesPopupService,
    StagesComponent,
    StagesDetailComponent,
    StagesDialogComponent,
    StagesPopupComponent,
    StagesDeletePopupComponent,
    StagesDeleteDialogComponent,
    stagesRoute,
    stagesPopupRoute,
} from './';

const ENTITY_STATES = [
    ...stagesRoute,
    ...stagesPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        StagesComponent,
        StagesDetailComponent,
        StagesDialogComponent,
        StagesDeleteDialogComponent,
        StagesPopupComponent,
        StagesDeletePopupComponent,
    ],
    entryComponents: [
        StagesComponent,
        StagesDialogComponent,
        StagesPopupComponent,
        StagesDeleteDialogComponent,
        StagesDeletePopupComponent,
    ],
    providers: [
        StagesService,
        StagesPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1StagesModule {}
