import { BaseEntity } from './../../shared';
import {InboundOutbound} from '../inbound-outbound';

export class Application implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public version?: string,
        public logoContentType?: any,
        public logo?: any,
        public created?: any,
        public updated?: any,
        public deployed?: boolean,
        public secret?: string,
        public containerImage?: string,
        public inboundOutboundPorts?: InboundOutbound[],
        public numberOfInstances?: string,
        public numberOfCores?: number,
        public memory?: number,
        public key?: string,
        public value?: string,

    ) {
    }
}
