import { BaseEntity } from './../../shared';

export class UserDetails implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public eMail?: string,
        public mobileNumber?: number,
        public country?: string,
    ) {
    }
}
