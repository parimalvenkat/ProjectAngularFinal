import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    TenantDeploymentService,
    TenantDeploymentPopupService,
    TenantDeploymentComponent,
    TenantDeploymentDetailComponent,
    TenantDeploymentDialogComponent,
    TenantDeploymentPopupComponent,
    TenantDeploymentDeletePopupComponent,
    TenantDeploymentDeleteDialogComponent,
    tenantDeploymentRoute,
    tenantDeploymentPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tenantDeploymentRoute,
    ...tenantDeploymentPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TenantDeploymentComponent,
        TenantDeploymentDetailComponent,
        TenantDeploymentDialogComponent,
        TenantDeploymentDeleteDialogComponent,
        TenantDeploymentPopupComponent,
        TenantDeploymentDeletePopupComponent,
    ],
    entryComponents: [
        TenantDeploymentComponent,
        TenantDeploymentDialogComponent,
        TenantDeploymentPopupComponent,
        TenantDeploymentDeleteDialogComponent,
        TenantDeploymentDeletePopupComponent,
    ],
    providers: [
        TenantDeploymentService,
        TenantDeploymentPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1TenantDeploymentModule {}
