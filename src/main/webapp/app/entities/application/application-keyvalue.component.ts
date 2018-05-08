import { Component, OnInit, OnDestroy,Input,NgModule } from '@angular/core';
import { Subscription } from 'rxjs/Rx'
import {ActivatedRoute, Router} from '@angular/router';

import { JhiEventManager, JhiAlertService,JhiParseLinks,JhiDataUtils } from 'ng-jhipster';

import { Application } from './application.model';
import { ApplicationService } from './application.service';
import {Principal} from "../../shared";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ApplicationPopupService} from './application-popup.service';

@Component({
    selector: 'jhi-applicationkeyvalue',
    templateUrl: './application-keyvalue.component.html',
})

export class ApplicationKeyvalueComponent {

    applications: Application[];
    currentAccount: any;
    eventSubscriber: Subscription;
    search : string;


    constructor(
        private applicationService: ApplicationService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        public activeModal: NgbActiveModal,

        private principal: Principal,
        private router: Router,
        private activatedRoute: ActivatedRoute,


    ) {
    }





    clear() {
        this.activeModal.dismiss('cancel');
    }

}
@Component({
    selector: 'jhi-application-keyvalue-popup',
    template: ''
})
export class ApplicationKeyvaluePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private applicationPopupService: ApplicationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.applicationPopupService
                .open(ApplicationKeyvalueComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
