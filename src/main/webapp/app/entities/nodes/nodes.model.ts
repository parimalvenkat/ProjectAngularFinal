import { BaseEntity } from './../../shared';

export class Nodes implements BaseEntity {
    constructor(
        public id?: number,
        public masterUrl?: string,
    ) {
    }
}
