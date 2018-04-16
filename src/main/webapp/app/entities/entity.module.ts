import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Try1NodesModule } from './nodes/nodes.module';
import { Try1RepositoriesModule } from './repositories/repositories.module';
import { Try1UserDetailsModule } from './user-details/user-details.module';
import { Try1TenantDeploymentModule } from './tenant-deployment/tenant-deployment.module';
import { Try1TenantDetailsModule } from './tenant-details/tenant-details.module';
import { Try1DeploymentModule } from './deployment/deployment.module';
import { Try1StagesModule } from './stages/stages.module';
import { Try1TenantContactDetailsModule } from './tenant-contact-details/tenant-contact-details.module';
import { Try1ApplicationModule } from './application/application.module';
import { Try1ImageModule } from './image/image.module';
import { Try1InboundOutboundModule } from './inbound-outbound/inbound-outbound.module';
import {Try1ScaleManagementModule} from './scale-management/scale-management.module';
import {Try1VersionManagementModule} from "./version-management/version-management.module";

import { Try1TenantModule } from './tenant/tenant.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Try1NodesModule,
        Try1RepositoriesModule,
        Try1UserDetailsModule,
        Try1TenantDeploymentModule,
        Try1TenantDetailsModule,
        Try1DeploymentModule,
        Try1StagesModule,
        Try1TenantContactDetailsModule,
        Try1ApplicationModule,
        Try1ImageModule,
        Try1InboundOutboundModule,
        Try1ScaleManagementModule,
        Try1VersionManagementModule,
        
       
        Try1TenantModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Try1EntityModule {}
