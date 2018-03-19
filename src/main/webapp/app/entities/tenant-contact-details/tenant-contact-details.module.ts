import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    TenantContactDetailsService,
    TenantContactDetailsPopupService,
    TenantContactDetailsComponent,
    TenantContactDetailsDetailComponent,
    TenantContactDetailsDialogComponent,
    TenantContactDetailsPopupComponent,
    TenantContactDetailsDeletePopupComponent,
    TenantContactDetailsDeleteDialogComponent,
    tenantContactDetailsRoute,
    tenantContactDetailsPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tenantContactDetailsRoute,
    ...tenantContactDetailsPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TenantContactDetailsComponent,
        TenantContactDetailsDetailComponent,
        TenantContactDetailsDialogComponent,
        TenantContactDetailsDeleteDialogComponent,
        TenantContactDetailsPopupComponent,
        TenantContactDetailsDeletePopupComponent,
    ],
    entryComponents: [
        TenantContactDetailsComponent,
        TenantContactDetailsDialogComponent,
        TenantContactDetailsPopupComponent,
        TenantContactDetailsDeleteDialogComponent,
        TenantContactDetailsDeletePopupComponent,
    ],
    providers: [
        TenantContactDetailsService,
        TenantContactDetailsPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1TenantContactDetailsModule {}
