import { BaseEntity } from './../../shared';

export class Repositories implements BaseEntity {
    constructor(
        public id?: number,
        public protocol?: string,
        public hostname?: string,
        public port?: number,
        public userName?: string,
        public password?: string,
        public secret?: string,
    ) {
    }
}
