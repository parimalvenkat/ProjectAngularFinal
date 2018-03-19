import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    TenantDetailsService,
    TenantDetailsPopupService,
    TenantDetailsComponent,
    TenantDetailsDetailComponent,
    TenantDetailsDialogComponent,
    TenantDetailsPopupComponent,
    TenantDetailsDeletePopupComponent,
    TenantDetailsDeleteDialogComponent,
    tenantDetailsRoute,
    tenantDetailsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tenantDetailsRoute,
    ...tenantDetailsPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TenantDetailsComponent,
        TenantDetailsDetailComponent,
        TenantDetailsDialogComponent,
        TenantDetailsDeleteDialogComponent,
        TenantDetailsPopupComponent,
        TenantDetailsDeletePopupComponent,
    ],
    entryComponents: [
        TenantDetailsComponent,
        TenantDetailsDialogComponent,
        TenantDetailsPopupComponent,
        TenantDetailsDeleteDialogComponent,
        TenantDetailsDeletePopupComponent,
    ],
    providers: [
        TenantDetailsService,
        TenantDetailsPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1TenantDetailsModule {}
