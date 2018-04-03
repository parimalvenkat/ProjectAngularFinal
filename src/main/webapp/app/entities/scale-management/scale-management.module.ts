import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    ScaleManagementService,
    ScaleManagementPopupService,
    ScaleManagementComponent,
    ScaleManagementDetailComponent,
    ScaleManagementDialogComponent,
    ScaleManagementPopupComponent,
    ScaleManagementDeletePopupComponent,
    ScaleManagementDeleteDialogComponent,
    scaleManagementRoute,
    scaleManagementPopupRoute,
} from './';

const ENTITY_STATES = [
    ...scaleManagementRoute,
    ...scaleManagementPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ScaleManagementComponent,
        ScaleManagementDetailComponent,
        ScaleManagementDialogComponent,
        ScaleManagementDeleteDialogComponent,
        ScaleManagementPopupComponent,
        ScaleManagementDeletePopupComponent,
    ],
    entryComponents: [
        ScaleManagementComponent,
        ScaleManagementDialogComponent,
        ScaleManagementPopupComponent,
        ScaleManagementDeleteDialogComponent,
        ScaleManagementDeletePopupComponent,
    ],
    providers: [
        ScaleManagementService,
        ScaleManagementPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1ScaleManagementModule {}
