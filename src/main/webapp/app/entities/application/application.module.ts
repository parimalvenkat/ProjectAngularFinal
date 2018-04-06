import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Try1DeploymentModule} from '../deployment/deployment.module'
import {Try1StagesModule} from "../stages/stages.module";
import {Try1TenantDetailsModule} from "../tenant-details/tenant-details.module";
import {WizardComponent} from "../../entities/wizardcomponent/wizard.component";
import {WizardStepComponent} from "../../entities/wizardcomponent/wizard-step.component";
import { Try1SharedModule } from '../../shared';
import {
    ApplicationService,
    ApplicationPopupService,
    ApplicationComponent,
    ApplicationDetailComponent,
    ApplicationDialogComponent,
    ApplicationPopupComponent,
    ApplicationDeletePopupComponent,
    ApplicationDeleteDialogComponent,
    applicationRoute,
    applicationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...applicationRoute,
    ...applicationPopupRoute,
];

@NgModule({
    imports: [
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

    ],
    entryComponents: [
        ApplicationComponent,
        ApplicationDialogComponent,
        ApplicationPopupComponent,
        ApplicationDeleteDialogComponent,
        ApplicationDeletePopupComponent,
    ],
    providers: [
        ApplicationService,
        ApplicationPopupService,
    ],
    exports: [


    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1ApplicationModule {}
