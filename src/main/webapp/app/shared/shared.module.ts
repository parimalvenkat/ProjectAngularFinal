import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import {FilterPipe} from "../entities/nodes";

import {
    Try1SharedLibsModule,
    Try1SharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    JhiLoginModalComponent,
    Principal,
    HasAnyAuthorityDirective,


} from './';
import {JhiSocialComponent} from './social/social.component';
import {SocialService} from "./social/social.service";
import {CompositeInputFieldComponent} from "../entities/compositeinputfield/compositeinputfield.component";
import {WizardComponent} from "../entities/wizardcomponent/wizard.component";
import {WizardStepComponent} from "../entities/wizardcomponent/wizard-step.component";
import {MatProgressSpinnerModule, MatSliderModule} from "@angular/material";
import {SliderWidget} from "./slider/slider.widget";
import {LoadingWidget} from "./loading/loading.widget";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule,MatSortModule}  from "@angular/material";
import {NodesComponent} from "../entities/nodes"
/*
import {AppService} from "./app.service";
*/

@NgModule({
    imports: [
        Try1SharedLibsModule,
        Try1SharedCommonModule,
        MatSliderModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,CompositeInputFieldComponent,
        WizardComponent,
        WizardStepComponent,
        SliderWidget,
        LoadingWidget
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe,
        FilterPipe,
        SocialService
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        Try1SharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        CompositeInputFieldComponent,
        WizardComponent,
        WizardStepComponent,
        SliderWidget,
        LoadingWidget,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Try1SharedModule {}
