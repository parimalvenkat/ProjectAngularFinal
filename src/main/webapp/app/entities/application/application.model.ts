import { BaseEntity } from './../../shared';
import {InboundOutbound} from "../inbound-outbound";

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
        public logoContentType?: string,
        public logo?: any,
        public secret?: string,
        public containerImage?: string,
        public inboundOutboundPorts?: InboundOutbound[],
        public numberOfInstances?: string,
        public numberOfCores?: number,
        public memory?: number,

    ) {
    }
}
