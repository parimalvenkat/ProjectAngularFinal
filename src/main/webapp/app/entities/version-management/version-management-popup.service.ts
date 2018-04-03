import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VersionManagement } from './version-management.model';
import { VersionManagementService } from './version-management.service';
import {ApplicationService} from "../application/application.service";
import {ResponseWrapper} from "../../shared/model/response-wrapper.model";
import {Application} from "../application/application.model";

@Injectable()
export class VersionManagementPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private versionManagementService: VersionManagementService,
        private applicationService: ApplicationService
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
                // this.versionManagementService.find(id).subscribe((versionManagement) => {
                //     this.ngbModalRef = this.versionManagementModalRef(component, versionManagement);
                //     resolve(this.ngbModalRef);
                // });
                this.ngbModalRef = this.versionManagementModalRef(component, new VersionManagement());
                this.ngbModalRef.componentInstance.param = id;
                resolve(this.ngbModalRef);

            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.versionManagementModalRef(component, new VersionManagement());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    versionManagementModalRef(component: Component, versionManagement: VersionManagement): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.versionManagement = versionManagement;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
