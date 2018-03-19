import { BaseEntity } from './../../shared';

export class Image implements BaseEntity {
    constructor(
        public id?: number,
        public secret?: string,
        public containerImage?: string,
    ) {
    }
}
