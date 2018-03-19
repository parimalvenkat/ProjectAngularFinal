import { BaseEntity } from './../../shared';

export class TenantContactDetails implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public eMail?: string,
        public mobileNumber?: number,
        public country?: string,
        public tenantDetails?: BaseEntity,
    ) {
    }
}
