import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    TenantService,
    TenantPopupService,
    TenantComponent,
    TenantDetailComponent,
    TenantDialogComponent,
    TenantPopupComponent,
    TenantDeletePopupComponent,
    TenantDeleteDialogComponent,
    tenantRoute,
    tenantPopupRoute,
    TenantResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...tenantRoute,
    ...tenantPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TenantComponent,
        TenantDetailComponent,
        TenantDialogComponent,
        TenantDeleteDialogComponent,
        TenantPopupComponent,
        TenantDeletePopupComponent,
    ],
    entryComponents: [
        TenantComponent,
        TenantDialogComponent,
        TenantPopupComponent,
        TenantDeleteDialogComponent,
        TenantDeletePopupComponent,
    ],
    providers: [
        TenantService,
        TenantPopupService,
        TenantResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1TenantModule {}
