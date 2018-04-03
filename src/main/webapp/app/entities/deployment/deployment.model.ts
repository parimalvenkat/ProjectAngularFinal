import { BaseEntity } from './../../shared';
import {InboundOutbound} from "../inbound-outbound";

export class Deployment implements BaseEntity {
    constructor(
        public id?: number,
        public appName?: string,
        public containerImage?: string,
        public numberOfInstances?: string,
        public numberOfCores?: number,
        public memory?: number,
        public secret?: string,

        public descriptions?: string,
        public pods?: string,
        public applications?: string,
        public tenant?: string,
        public stage?: string,
        public deploymentToApplications?: BaseEntity,
        public inboundOutboundPorts?: InboundOutbound[],
    ) {
    }
}


