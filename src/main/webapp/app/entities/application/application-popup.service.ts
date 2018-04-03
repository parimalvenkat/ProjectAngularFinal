import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Application } from './application.model';
import { ApplicationService } from './application.service';

@Injectable()
export class ApplicationPopupService {
    applicationsModalRef(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }

    private ngbModalRef: NgbModalRef;

    constructor(
        private datePipe: DatePipe,
        private modalService: NgbModal,
        private router: Router,
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
            let rparams: string[];
            if(id){
                rparams = id.split(":");
            }

            if(id && rparams.length >1){
                this.applicationService.find(Number(rparams[0])).subscribe((applications) => {
                    this.ngbModalRef = this.applicationModalRef(component, applications);
                    this.ngbModalRef.componentInstance.applications.id = null;
                    resolve(this.ngbModalRef);
                });
            }
            else if (id && rparams.length < 2) {
                this.applicationService.find(id).subscribe((applications) => {
                    this.ngbModalRef = this.applicationModalRef(component, applications);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.applicationModalRef(component, new Application());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    applicationModalRef(component: Component, application: Application): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.application = application;
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
