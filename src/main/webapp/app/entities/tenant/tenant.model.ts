import { BaseEntity } from './../../shared';

export class Tenant implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public contact_name?: string,
        public contact_email?: string,
        public stages?: BaseEntity[],
        public ys?: BaseEntity[],
        public ns?: BaseEntity[],
    ) {
    }
}
