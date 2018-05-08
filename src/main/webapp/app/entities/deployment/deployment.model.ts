import { BaseEntity } from './../../shared';
import {InboundOutbound} from "../inbound-outbound";

export class Deployment implements BaseEntity {
    constructor(
        public id?: number,
        public descriptions?: string,
        public pods?: string,
        public applications?: string,
        public tenant?: string,
        public stage?: string,
        public deploymentToApplications?: BaseEntity,




//yet to create in DB and bean ... local variables copied from older project
        public appName?: string,
        public containerImage?: string,
        public numberOfInstances?: string,
        public numberOfCores?: number,
        public memory?: number,
        public secret?: string,
        public inboundOutbound?: InboundOutbound[],
    ) {
    }
}


