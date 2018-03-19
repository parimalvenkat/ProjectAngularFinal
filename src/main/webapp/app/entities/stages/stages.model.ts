import { BaseEntity } from './../../shared';

export class Stages implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public tenantDetails?: BaseEntity,
    ) {
    }
}
