import { BaseEntity } from './../../shared';

export class TenantDeployment implements BaseEntity {
    constructor(
        public id?: number,
        public tenantDepoloymentToDetails?: BaseEntity,
        public tenantDeploymentToDeployment?: BaseEntity,
        public tenantDeploymentToStages?: BaseEntity,
    ) {
    }
}
