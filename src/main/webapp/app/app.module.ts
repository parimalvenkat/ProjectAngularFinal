import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { Try1SharedModule, UserRouteAccessService } from './shared';
import { Try1AppRoutingModule} from './app-routing.module';
import { Try1HomeModule } from './home/home.module';
import { Try1AdminModule } from './admin/admin.module';
import { Try1AccountModule } from './account/account.module';
import { Try1EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import {AppService} from "./app.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


/*import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule,MatSortModule}  from "@angular/material";
import {NodesComponent} from "../app/entities/nodes"
import {AppService} from "./app.service";*/

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Try1AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Try1SharedModule,
        Try1HomeModule,
        Try1AdminModule,
        Try1AccountModule,
        Try1EntityModule,
       /* HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,*/


        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
       /* NodesComponent*/
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
       AppService,

    ],
    bootstrap: [ JhiMainComponent ]
})
export class Try1AppModule {}
