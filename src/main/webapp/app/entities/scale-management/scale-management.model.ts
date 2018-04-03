import { BaseEntity } from './../../shared';

export class ScaleManagement implements BaseEntity {
    constructor(
        public id?: number,
        public instancenos?: number,
        public deployments?: BaseEntity,
    ) {
    }
}
