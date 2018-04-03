import { BaseEntity } from './../../shared';

export class InboundOutbound implements BaseEntity {
    constructor(
        public id?: number,
        public protocol?: string,
        public inbound?: number,
        public outbound?: number,
        public applications?: BaseEntity,
    ) {
    }
}
