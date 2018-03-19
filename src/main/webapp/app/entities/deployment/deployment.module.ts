import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Try1SharedModule } from '../../shared';
import {
    DeploymentService,
    DeploymentPopupService,
    DeploymentComponent,
    DeploymentDetailComponent,
    DeploymentDialogComponent,
    DeploymentPopupComponent,
    DeploymentDeletePopupComponent,
    DeploymentDeleteDialogComponent,
    deploymentRoute,
    deploymentPopupRoute,
} from './';

const ENTITY_STATES = [
    ...deploymentRoute,
    ...deploymentPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DeploymentComponent,
        DeploymentDetailComponent,
        DeploymentDialogComponent,
        DeploymentDeleteDialogComponent,
        DeploymentPopupComponent,
        DeploymentDeletePopupComponent,
    ],
    entryComponents: [
        DeploymentComponent,
        DeploymentDialogComponent,
        DeploymentPopupComponent,
        DeploymentDeleteDialogComponent,
        DeploymentDeletePopupComponent,
    ],
    providers: [
        DeploymentService,
        DeploymentPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1DeploymentModule {}
