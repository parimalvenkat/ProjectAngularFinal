import { NgModule, CUSTOM_ELEMENTS_SCHEMA,ApplicationModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Try1StagesModule} from "../stages/stages.module";
import {Try1TenantDetailsModule} from "../tenant-details/tenant-details.module";

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
    DeploymentDropdownComponent,

} from './';
import {DialogContentComponent} from "./dialog-content/dialog-content.component";
import {Try1ScaleManagementModule} from "../scale-management/scale-management.module";
import {MatSliderModule, MatChipsModule, MatDialogModule} from "@angular/material";

const ENTITY_STATES = [
    ...deploymentRoute,
    ...deploymentPopupRoute,
];

@NgModule({
    imports: [
        Try1SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true }),
        MatSliderModule,
        MatDialogModule,
        RouterModule.forChild(ENTITY_STATES),
        Try1ScaleManagementModule,
        Try1TenantDetailsModule,
        Try1StagesModule


    ],
    declarations: [
        DeploymentComponent,
        DeploymentDetailComponent,
        DeploymentDialogComponent,
        DeploymentDeleteDialogComponent,
        DeploymentPopupComponent,
        DeploymentDeletePopupComponent,
        DeploymentDropdownComponent,
        DialogContentComponent
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
