import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    VersionManagementService,
    VersionManagementPopupService,
    VersionManagementComponent,
    VersionManagementDetailComponent,
    VersionManagementDialogComponent,
    VersionManagementPopupComponent,
    VersionManagementDeletePopupComponent,
    VersionManagementDeleteDialogComponent,
    versionManagementRoute,
    versionManagementPopupRoute,
} from './';
import {MatCheckboxModule} from "@angular/material";

const ENTITY_STATES = [
    ...versionManagementRoute,
    ...versionManagementPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        MatCheckboxModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        VersionManagementComponent,
        VersionManagementDetailComponent,
        VersionManagementDialogComponent,
        VersionManagementDeleteDialogComponent,
        VersionManagementPopupComponent,
        VersionManagementDeletePopupComponent,
    ],
    entryComponents: [
        VersionManagementComponent,
        VersionManagementDialogComponent,
        VersionManagementPopupComponent,
        VersionManagementDeleteDialogComponent,
        VersionManagementDeletePopupComponent,
    ],
    providers: [
        VersionManagementService,
        VersionManagementPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OptimizerVersionManagementModule {}
