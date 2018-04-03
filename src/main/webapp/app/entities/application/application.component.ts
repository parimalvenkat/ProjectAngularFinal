import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx'
import {ActivatedRoute, Router} from '@angular/router';

import { JhiEventManager, JhiAlertService,JhiParseLinks,JhiDataUtils } from 'ng-jhipster';

import { Application } from './application.model';
import { ApplicationService } from './application.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-application',
    templateUrl: './application.component.html'
})
export class ApplicationComponent implements OnInit, OnDestroy {
applications: Application[];
originalApp: Application[];
    currentAccount: any;
    eventSubscriber: Subscription;
    search : string;

    constructor(
        private applicationService: ApplicationService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.applicationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.applications = res.json;
                this.originalApp = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }



    searchItem(){
        if(!this.search || this.search.trim() === ''){
            this.loadAll();
        } else {
            let result: Application[] = [];
            for(let app of this.originalApp){
                if(app.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||  app.description.toLowerCase().indexOf(this.search.toLowerCase()) > -1){
                    result.push(app);
                }
            }
            this.applications = result;
        }
    }










    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInApplications();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Application) {
        return item.id;
    }


    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }



    registerChangeInApplications() {
        this.eventSubscriber = this.eventManager.subscribe('applicationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
