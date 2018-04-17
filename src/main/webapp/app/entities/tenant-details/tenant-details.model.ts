import { BaseEntity } from './../../shared';

export class TenantDetails implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public contact_name?: string,
        public contact_email?: string,
        public tenantDetailsToTenantContactdetails?: BaseEntity[],
        public tenantDetailsToStages?: BaseEntity[],
    ) {
    }
}
