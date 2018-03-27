import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { Try1SharedModule } from '../../shared';
import { NgModel } from '@angular/forms';
import {
    NodesService,
    NodesPopupService,
    NodesComponent,
    NodesDetailComponent,
    NodesDialogComponent,
    NodesPopupComponent,
    NodesDeletePopupComponent,
    NodesDeleteDialogComponent,
    nodesRoute,
    nodesPopupRoute,
} from './';

const ENTITY_STATES = [
    ...nodesRoute,
    ...nodesPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        NodesComponent,
        NodesDetailComponent,
        NodesDialogComponent,
        NodesDeleteDialogComponent,
        NodesPopupComponent,
        NodesDeletePopupComponent,
        FilterPipe,


    ],
    entryComponents: [
        NodesComponent,
        NodesDialogComponent,
        NodesPopupComponent,
        NodesDeleteDialogComponent,
        NodesDeletePopupComponent,

    ],
    providers: [
        NodesService,
        NodesPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1NodesModule {}

