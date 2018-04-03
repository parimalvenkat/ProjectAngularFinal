import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ScaleManagement } from './scale-management.model';
import { ScaleManagementService } from './scale-management.service';

@Injectable()
export class ScaleManagementPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private scaleManagementService: ScaleManagementService

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
                // this.scaleManagementService.find(id).subscribe((scaleManagement) => {
                //     this.ngbModalRef = this.scaleManagementModalRef(component, scaleManagement);
                //     resolve(this.ngbModalRef);
                // });
                this.ngbModalRef = this.scaleManagementModalRef(component, new ScaleManagement());
                this.ngbModalRef.componentInstance.dId = id;
                resolve(this.ngbModalRef);
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.scaleManagementModalRef(component, new ScaleManagement());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    scaleManagementModalRef(component: Component, scaleManagement: ScaleManagement): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.scaleManagement = scaleManagement;
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
