import { Component, OnInit, OnDestroy,ElementRef, AfterViewInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';


import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService,JhiDataUtils } from 'ng-jhipster';

import { Application } from './application.model';
import { ApplicationPopupService } from './application-popup.service';
import { ApplicationService } from './application.service';
import { Image, ImageService } from '../image';
import { InboundOutbound, InboundOutboundService } from '../inbound-outbound';
import { ResponseWrapper } from  '../../shared';

import {Repositories, RepositoriesService} from "../repositories";
import {NgModule} from "@angular/compiler/src/core";

@Component({
    selector: 'jhi-application-dialog',
    templateUrl: './application-dialog.component.html'
})


export class ApplicationDialogComponent implements OnInit {

    application: Application;
    isSaving: boolean;

    images: Image[];
    public fileName : string="";
    reposotories : Repositories;
    InboundOutbounds: any[];
    InboundOutbound : InboundOutbound[];

    constructor(
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private applicationService: ApplicationService,
        private imageService: ImageService,
        private inboundOutboundService: InboundOutboundService,
        private repositoryService: RepositoriesService,
        private elementRef: ElementRef,
        private eventManager: JhiEventManager,
    ) {
        this.InboundOutbounds=[];
        this.InboundOutbounds.push({protocol:'tcp',key:'', value:''});

    }

    ngOnInit() {
        this.isSaving = false;
        this.imageService.query()
            .subscribe((res: ResponseWrapper) => { this.images = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.inboundOutboundService.query()
            .subscribe((res: ResponseWrapper) => { this.InboundOutbounds = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
         this.getAllRepositories();
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entity, field, isImage) {
        this.fileName = event.currentTarget.files[0].name;
        this.dataUtils.setFileData(event, entity, field, isImage);
    }

    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.application, this.elementRef, field, fieldContentType, idInput);
        this.fileName = "";
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {

        this.isSaving = true;
        if(this.InboundOutbounds && this.InboundOutbounds.length > 0){
            this.application.inboundOutboundPorts = [];
            for(const data of this.InboundOutbounds){
                let dataObj:InboundOutbound;
                dataObj = new InboundOutbound(0,data.protocol,data.key,data.value,null);
                this.application.inboundOutboundPorts.push(dataObj);
            }
        }

        if (this.application.id !== undefined) {
            this.subscribeToSaveResponse(
                this.applicationService.update(this.application));
        } else {
            this.subscribeToSaveResponse(
                this.applicationService.create(this.application));
        }
           }

    private subscribeToSaveResponse(result: Observable<Application>) {
        result.subscribe((res: Application) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Application) {
        this.eventManager.broadcast({ name: 'applicationListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }
    getAllRepositories() {
        this.repositoryService.query().subscribe(
            (res: ResponseWrapper) => {
                this.reposotories= res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    trackImageById(index: number, item: Image) {
        return item.id;
    }

    trackInboundOutboundById(index: number, item: InboundOutbound) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-application-popup',
    template: ''
})
export class ApplicationPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private applicationPopupService: ApplicationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.applicationPopupService
                    .open(ApplicationDialogComponent as Component, params['id']);
            } else {
                this.applicationPopupService
                    .open(ApplicationDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
