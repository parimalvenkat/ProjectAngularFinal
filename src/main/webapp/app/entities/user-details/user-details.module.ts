import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    UserDetailsService,
    UserDetailsPopupService,
    UserDetailsComponent,
    UserDetailsDetailComponent,
    UserDetailsDialogComponent,
    UserDetailsPopupComponent,
    UserDetailsDeletePopupComponent,
    UserDetailsDeleteDialogComponent,
    userDetailsRoute,
    userDetailsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...userDetailsRoute,
    ...userDetailsPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        UserDetailsComponent,
        UserDetailsDetailComponent,
        UserDetailsDialogComponent,
        UserDetailsDeleteDialogComponent,
        UserDetailsPopupComponent,
        UserDetailsDeletePopupComponent,
    ],
    entryComponents: [
        UserDetailsComponent,
        UserDetailsDialogComponent,
        UserDetailsPopupComponent,
        UserDetailsDeleteDialogComponent,
        UserDetailsDeletePopupComponent,
    ],
    providers: [
        UserDetailsService,
        UserDetailsPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1UserDetailsModule {}
