import { Component, OnInit, AfterViewInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Register } from './register.service';
import {NavbarComponent} from '../../layouts/navbar/navbar.component'
import { LoginModalService, EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE } from '../../shared';


@Component({
    selector: 'jhi-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit, AfterViewInit {
    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    //registeraccount : jhi_user;
    success: boolean;
    mobileNumber : number;
    country : string;
    modalRef: NgbModalRef;
    navbar : NavbarComponent;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    @ViewChild('myInput')
    myInputVariable: any;


    constructor(
        private loginModalService: LoginModalService,
        private registerService: Register,
        private elementRef: ElementRef,
        private router: Router,
        private renderer: Renderer
    ) {
    }

    ngOnInit() {
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    }

    reset() {
        this.myInputVariable.nativeElement.value = '';
        this.imageChangedEvent='';
        this.croppedImage='';
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.registerAccount.imageUrl=image.split("base64,")[1];
        this.croppedImage = image;
        this.registerAccount.imageType=image.split(";base64,")[0];
        this.registerAccount.imageType=this.registerAccount.imageType.split("data:")[1];
        
    }
    imageLoaded() {
       // console.log("Imge Loaded");
    }
    loadImageFailed() {
       // console.log("Imge Load Failed");
    }

    register() {
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.country = null;
            this.mobileNumber = null;
            this.registerAccount.langKey = 'en';
            this.registerService.save(this.registerAccount).subscribe(() => {
                this.success = true;
            }, (response) => this.processError(response));
        }
    }
    singin() {
        this.router.navigate(['/']);
        this.navbar.home = true;

    }

    openLogin() {
        this.modalRef = this.loginModalService.open();
    }

    private processError(response) {
        this.success = null;
        if (response.status === 400 && response.json().type === LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response.json().type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = 'ERROR';
        }
    }
}
