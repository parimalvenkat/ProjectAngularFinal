import { BaseEntity } from './../../shared';

export class Application implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public created?: any,
        public updated?: any,
        public version?: number,
        public applicationToImages?: BaseEntity[],
        public applicationToInOutbounds?: BaseEntity[],
    ) {
    }
}
