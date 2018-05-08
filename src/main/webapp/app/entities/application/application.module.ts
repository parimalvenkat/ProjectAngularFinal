import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Try1DeploymentModule} from '../deployment/deployment.module'
import {Try1StagesModule} from "../stages/stages.module";
import {Try1TenantDetailsModule} from "../tenant-details/tenant-details.module";
import { Try1SharedModule } from '../../shared';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { ImageCropperModule } from 'ngx-image-cropper';

import {
    ApplicationService,
    ApplicationPopupService,
    ApplicationComponent,
    ApplicationDetailComponent,
    ApplicationDialogComponent,
    ApplicationPopupComponent,
    ApplicationDeletePopupComponent,
    ApplicationDeleteDialogComponent,
    ApplicationKeyvalueComponent,
    applicationRoute,
    applicationPopupRoute,
} from './';
import {ApplicationKeyvaluePopupComponent} from "./application-keyvalue.component";

const ENTITY_STATES = [
    ...applicationRoute,
    ...applicationPopupRoute,
];

@NgModule({
    imports: [
        ImageCropperModule,
        Try1SharedModule,
        Try1DeploymentModule,
        Try1TenantDetailsModule,
        Try1StagesModule,
        RouterModule.forRoot(ENTITY_STATES, {useHash: true}),
    ],
    declarations: [
        ApplicationComponent,
        ApplicationDetailComponent,
        ApplicationDialogComponent,
        ApplicationDeleteDialogComponent,
        ApplicationPopupComponent,
        ApplicationDeletePopupComponent,
        ApplicationKeyvalueComponent,

    ],
    entryComponents: [
        ApplicationComponent,
        ApplicationDialogComponent,
        ApplicationPopupComponent,
        ApplicationDeleteDialogComponent,
        ApplicationDeletePopupComponent,
        ApplicationKeyvalueComponent,
    ],
    providers: [
        ApplicationService,
        ApplicationPopupService,
/*
        NgbActiveModal
*/
    ],
    exports: [


    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1ApplicationModule {}
