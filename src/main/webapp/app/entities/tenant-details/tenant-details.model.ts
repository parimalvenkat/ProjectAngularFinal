import { BaseEntity } from './../../shared';

export class TenantDetails implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public contactname?: string,
        public contactemail?: string,
        public tenantDetialsToStages?: BaseEntity[],
        public tenantDetailsToTenantContactdetails?: BaseEntity[],
        public tenantDetailsToStages?: BaseEntity[],
    ) {
    }
}
