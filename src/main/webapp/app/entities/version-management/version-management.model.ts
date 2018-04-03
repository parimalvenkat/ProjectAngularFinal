import { BaseEntity } from './../../shared';

export class VersionManagement implements BaseEntity {
    constructor(
        public id?: number,
        public version?: string,
        public action?: string,
        public deployments?: BaseEntity,
    ) {
    }
}
