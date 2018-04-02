import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import {NavbarService} from "./navbar.service";
import { ProfileService } from '../profiles/profile.service';
import { Principal, LoginModalService, LoginService} from '../../shared';
import { StateStorageService } from '../../shared/auth/state-storage.service';


import { VERSION } from '../../app.constants';

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',

    styleUrls: [
        'navbar.css'
    ]
})
export class NavbarComponent implements OnInit{
    inProduction: boolean;
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;
    version: string;
    authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    regist: boolean;



    constructor(
        private loginService: LoginService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private profileService: ProfileService,
        private router: Router,
        private eventManager: JhiEventManager,
        private stateStorageService: StateStorageService,


    ) {
        this.version = VERSION ? 'v' + VERSION : '';
        this.isNavbarCollapsed = true;
    }

    ngOnInit() {
        this.profileService.getProfileInfo().then((profileInfo) => {
            this.inProduction = profileInfo.inProduction;
            this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    }

    collapseNavbar() {
        this.regist=false;
        this.isNavbarCollapsed = true;

    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }


    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    getImageUrl() {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;

    }

    toggle()
    {

        this.regist=true;

    }

userlogin()
{
    this.loginService.login({
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
    }).then(() => {
        this.authenticationError = false;

        if (this.router.url === '/register' || (/^\/activate\//.test(this.router.url)) ||
            (/^\/reset\//.test(this.router.url))) {
            this.router.navigate(['']);
        }

        this.eventManager.broadcast({
            name: 'authenticationSuccess',
            content: 'Sending Authentication Success'
        });

        // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
        // // since login is succesful, go to stored previousState and clear previousState
        const redirect = this.stateStorageService.getUrl();
        if (redirect) {
            this.stateStorageService.storeUrl(null);
            this.router.navigate([redirect]);
        }
    }).catch(() => {
        this.authenticationError = true;
    });
}
}
