import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Deployment } from './deployment.model';
import { DeploymentService } from './deployment.service';
import {ApplicationService} from "../application/application.service";
import {Application} from "../application/application.model";

@Injectable()
export class DeploymentPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private deploymentService: DeploymentService,
        private applicationsService: ApplicationService


    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.deploymentService.find(id).subscribe((deployment) => {
                    this.ngbModalRef = this.deploymentModalRef(component, deployment);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.deploymentModalRef(component, new Deployment());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    opennew(component: Component, id?: number | any, appid?:number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (appid) {
                this.applicationsService.find(appid).subscribe((applications) => {
                    this.ngbModalRef = this.deploymentModalRefApp(component, null, applications);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.deploymentModalRef(component, new Deployment());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    deploymentModalRefApp(component: Component, deployments: Deployment, applications: Application): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.applications = applications;
        modalRef.componentInstance.deployments = new Deployment();
        modalRef.componentInstance.deployments.appName = applications.name;
        modalRef.componentInstance.deployments.numberOfCores = applications.numberOfCores;
        modalRef.componentInstance.deployments.numberOfInstances = applications.numberOfInstances;
        modalRef.componentInstance.deployments.memory = applications.memory;
        modalRef.componentInstance.deployments.secret = applications.secret;
        modalRef.componentInstance.deployments.containerImage = applications.containerImage;
        modalRef.componentInstance.deployments.description = applications.description;
        modalRef.componentInstance.deployments.inboundOutboundPorts = applications.inboundOutboundPorts;
        modalRef.componentInstance.inboundOutboundPorts = [];
        if(applications.inboundOutboundPorts && applications.inboundOutboundPorts.length > 0){
            for(let ports of applications.inboundOutboundPorts){
                modalRef.componentInstance.inboundOutboundPorts.push({protocol:ports.protocol, key:ports.inbound, value:ports.outbound});
            }
        } else {
            modalRef.componentInstance.inboundOutboundPorts.push({protocol:'tcp', key:'', value:''});
        }

        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }




    deploymentModalRef(component: Component, deployment: Deployment): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.deployment = deployment;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
