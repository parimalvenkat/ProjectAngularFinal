import { Component, OnInit, OnDestroy,ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService,JhiDataUtils } from 'ng-jhipster';

import { Application } from './application.model';
import {ApplicationPopupService} from './application-popup.service';
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


    @ViewChild('fileInput') fileInput;

    application: Application;
    isSaving: boolean;

    images: Image[];
    public fileName : string="";
    repositories : Repositories;
    InboundOutbounds: any[];
    InboundOutbound : InboundOutbound[];
    fileToUpload: File = null;
    jsonFileContent: String;
    createApp: boolean = false;
    jsonFileSelect: boolean=false;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    @ViewChild('myInput')
    myInputVariable: any;
    @ViewChild('myJSONInput')
    myJSONInputVariable: any;
    isEdit: boolean = false;

    ModalTitle: String;
    event: String;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public activeModal: NgbActiveModal,
        private dataUtils: JhiDataUtils,
        private jhiAlertService: JhiAlertService,
        private applicationService: ApplicationService,
        private imageService: ImageService,
        private inboundOutboundService: InboundOutboundService,
        private repositoryService: RepositoriesService,
        private elementRef: ElementRef,
        private eventManager: JhiEventManager,
      //  private applicationimport:ApplicationImportComponent,
    ) {
        this.InboundOutbounds=[];
        this.InboundOutbounds.push({protocol:'tcp',key:'', value:''});

    }



    ngOnInit() {
        if(String(this.router.url).includes("edit")){
            this.ModalTitle="Edit Application";
            this.event="Update";
            this.createApp = false;
            this.jsonFileContent = '{\n"NAME": "' + this.application.name + '",\n'+
            '"DESCRIPTION": "' + this.application.description + '",\n'+
            '"SECRET": "' + this.application.secret + '",\n'+
            '"VERSION": "' + this.application.version + '",\n'+
            '"CONTAINER_IMAGE": "' + this.application.containerImage + '",\n'+
            '"NUMBER_OF_CORES": "' + this.application.numberOfCores + '",\n'+
            '"NUMBER_OF_INSTANCES": "' + this.application.numberOfInstances + '",\n'+
            '"MEMORY": "' + this.application.memory + '"\n}';
        }
        else{
            this.ModalTitle="Create an Application";
            this.event="Create";
            this.createApp = true;
        }
        this.isSaving = false;
        this.imageService.query()
            .subscribe((res: ResponseWrapper) => { this.images = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.inboundOutboundService.query()
            .subscribe((res: ResponseWrapper) => { this.InboundOutbounds = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.getAllRepositories();
    }
    checkURL(){
       
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

    setJsonFileData(event, entity, field, isImage) {
        this.jsonFileSelect=true;
        this.fileName = event.currentTarget.files[0].name;
        // this.dataUtils.setFileData(event, entity, field, isImage);
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            // this.form.get('avatar').setValue({
            //   filename: file.name,
            //   filetype: file.type,
            //   value: reader.result.split(',')[1]
            // })
            this.jsonFileContent = reader.result;
            var json = JSON.parse(reader.result);
            console.log(json);
            this.application.name = json.NAME;
            this.application.description = json.DESCRIPTION;
            this.application.version = json.VERSION;
            this.application.secret = json.SECRET;
            this.application.containerImage = json.CONTAINER_IMAGE;
            this.application.numberOfInstances = json.NUMBER_OF_INSTANCES;
            this.application.numberOfCores = json.NUMBER_OF_CORES;
            this.application.memory = json.MEMORY;
        };
    }

    updatejson(event){
        this.jsonFileContent = event.target.value;
        var json = JSON.parse(event.target.value);
        this.application.name = json.NAME;
        this.application.description = json.DESCRIPTION;
        this.application.version = json.VERSION;
        this.application.secret = json.SECRET;
        this.application.containerImage = json.CONTAINER_IMAGE;
        this.application.numberOfInstances = json.NUMBER_OF_INSTANCES;
        this.application.numberOfCores = json.NUMBER_OF_CORES;
        this.application.memory = json.MEMORY;
    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
    }


    private upload() {
        const fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files && fileBrowser.files[0]) {
          const formData = new FormData();
          formData.append('files', fileBrowser.files[0]);
          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/api/Data/UploadFiles', true);
          xhr.onload = function () {
            if (this['status'] === 200) {
                const responseText = this['responseText'];
                const files = JSON.parse(responseText);
                //todo: emit event
            } else {
              //todo: error handling
            }
          };
          xhr.send(formData);
        }
      }

      


    clearInputImage(field: string, fieldContentType: string, idInput: string) {
        this.dataUtils.clearInputImage(this.application, this.elementRef, field, fieldContentType, idInput);
        this.fileName = "";
    }

    clearJSON(){
        this.jsonFileSelect=false;
        this.myJSONInputVariable.nativeElement.value='';
    }
    clear() {
        this.activeModal.dismiss('cancel');
    }

    reset() {
        this.isEdit=true;
        this.myInputVariable.nativeElement.value = '';
        this.imageChangedEvent='';
        this.croppedImage='';
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(image: string) {
        this.application.logo=image.split("base64,")[1];
        this.croppedImage = image;
        this.application.logoContentType=image.split(";base64,")[0];
        this.application.logoContentType=this.application.logoContentType.split("data:")[1];
        
    }
    imageLoaded() {
       // console.log("Imge Loaded");
    }
    loadImageFailed() {
       // console.log("Imge Load Failed");
    }

    save() {


        this.isSaving = true;
      /* if(this.InboundOutbounds && this.InboundOutbounds.length > 0){
            this.application.inboundOutboundPorts = [];
            for(const data of this.InboundOutbounds){
                let dataObj:InboundOutbound;
                dataObj = new InboundOutbound (0,data.protocol,data.key,data.value,null);
                this.application.inboundOutboundPorts.push(dataObj);
            }
        } */

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
                this.repositories= res.json;
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
