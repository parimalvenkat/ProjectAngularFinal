import { BaseEntity } from './../../shared';

export class Deployment implements BaseEntity {
    constructor(
        public id?: number,
        public descriptions?: string,
        public pods?: string,
        public applications?: string,
        public tenant?: string,
        public stage?: string,
        public deploymentToApplications?: BaseEntity,
    ) {
    }
}
