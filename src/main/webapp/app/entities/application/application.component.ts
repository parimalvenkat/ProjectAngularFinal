import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx'
import {ActivatedRoute, Router} from '@angular/router';

import { JhiEventManager, JhiAlertService,JhiParseLinks,JhiDataUtils } from 'ng-jhipster';

import { Observable } from 'rxjs/Rx';
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
    application:Application;

    constructor(
        private applicationService: ApplicationService,
        private jhiAlertService: JhiAlertService,
        private dataUtils: JhiDataUtils,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        document.getElementById('search').innerText="";
        this.applicationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.applications = res.json;
                this.originalApp = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    cloneApplication(application){
        this.application=application;
        this.application.name=this.application.name+"(cloned)";
        this.application.id=null;
        console.log(this.application);
        this.subscribeToSaveResponse(
            this.applicationService.create(this.application));
            this.loadAll();
    }

    private subscribeToSaveResponse(result: Observable<Application>) {
        result.subscribe((res: Application) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Application) {
        this.eventManager.broadcast({ name: 'applicationListModification', content: 'OK'});
       
    }
    private onSaveError() {
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
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

    downloadJSON(application){

        console.log(''+ application);
        var sJson = '{\n"NAME": "' + application.name + '",\n'+
            '"DESCRIPTION": "' + application.description + '",\n'+
            '"SECRET": "' + application.secret + '",\n'+
            '"VERSION": "' + application.version + '",\n'+
            '"CONTAINER_IMAGE": "' + application.containerImage + '",\n'+
            '"NUMBER_OF_CORES": "' + application.numberOfCores + '",\n'+
            '"NUMBER_OF_INSTANCES": "' + application.numberOfInstances + '",\n'+
            '"MEMORY": "' + application.memory + '"\n}';

        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
        element.setAttribute('download', application.name+".json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click(); // simulate click
        document.body.removeChild(element);
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

}
