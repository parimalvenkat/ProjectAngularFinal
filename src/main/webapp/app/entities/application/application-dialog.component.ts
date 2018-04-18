import { Component, OnInit, OnDestroy,ElementRef, AfterViewInit,ViewChild  } from '@angular/core';
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
    ModalTitle: String;
    event: String;
    defaultimage :String ="89504e470d0a1a0a0000000d49484452000000990000009008030000002c8d39400000000467414d410000b18f0bfc6105000000206348524d00007a26000080840000fa00000080e8000075300000ea6000003a98000017709cba513c00000234504c54450000000797cd0899cd0799cc0899cc0799cc089acc0899cd0897cb0d99cc089acc089acb0897cb0899cc009fcf089acc0799cd0899cc089acc0899cc0798cc0899cc0899cc0899cc0898cc0899cc0899cd0899cc0999cd0099cc079acc00a2d10898cc0f96d20899cc0b9bc80898cc059aca0998ca0799cb0699cc0897c70080bf0899cc0897ca079ccd089acd0697cb099acb079acc099bc80799cb0b95ca0095d5099acd0899cb0999cd069bcd079acc099acc0899cc0899cc0799cd0799cc099ccb0899cc0898cc0998cb0699cc0899cc0899cd0899cc0899cc0999cc089acc0899cd0799cd0999cb0898cb089acc089acd0899cb0899cb0997d00799cd0999cc0798ca0999cc0996cd0899cd0899cd0999cb0000000898ca089acb0898ca0899cc0798cc009fbf0a98c90899cc0899cc0899cc079acd0799cc0899cd0a9ccb0c92ce0899cc0897ca0898cc0a99cc0c97d10899cd0899cc0898cd099acc0798cd0899cd0899cd0799cb0897cf099acc0899cc099acc0999cc0798cc0898cc0899cb0e9cc60698cb0898cc0899cc0799cc0899cc0898cd0898cb009dc40a9bcd0899cc0899cc0997cb0899cc0998ca0899cb0999cc0899cb0799cc0598ce0999cc089acc0899cc079ac90899cb0899cc089bcb0899cc0998cc0799cb069bcd0899cc089acc0a9dce0899cc099ace0899cb0899cd0092db0099cc079ace0997c60899cc0899cc099acb089cce0999cd0999cc0799cc0899cb089acc0099cc0998cd0799cb0898cc0798ca0999cc0899ccffffff75dcb064000000ba74524e53004cbbefdfcfbfa78014834440e3109a6cd397e1abe7a5ed9ff399f993058d0b881182177c307470282004fb60249f2c58ab1c6c180c95f2702e6fb0f1f2ad693bb9a65450f7a3d7c31e9ce96776c4ba65c19d1b8f78483c38b7cb94015c5d61db68083487eb9b8bcd7f3115e265c23216dada5cb348caf38a2072e0d1556df684124ff164afd461880d33cc7d3bd9529873998c2fd0c4c826c6dc40a0b36729e4c71ad872f7c1070f491b5fd5531fd0914b80a10a526bec6a5ad6b8251600000001624b4744bbd4b6774c0000000774494d4507e10a150b372a7b525b88000009124944415478daed9cf77f5a3710c09fcd03838d49ed94a6b44e471ac0f06c6c6cd3bd1283a1bb4dbcdbb431f1e81ea9bb47dad44947d295a43b1deede7beaafebc318ac3be9e94982987efaf1fd6889d3979374ba3b091b466dd2d4ec2184982be2f5f97c2dfe408d1aeb24ad84114f5ba3a14a12241c690f351acb964d3c32725aa3b16ce9e09275361acb96cd5cb2d31b8d654b984b7646a3b16cd9c2253bb3d158b644b86467351acb96b3b9645d8dc6328cad5c30724ea3b90ce35c3ed9798de6328cf3f964db1acd651817f0c9b69ff281a3b1ce78b7a843824fe63fc55c49bf658f12e971ecd0db93e293b508bf4e5f7fbfb0dd1d2cbd3a4e9cd73a3098e6fbffb298a9fe21bedac08adace8c3ed8d08595512eba18b75d72e965971337b9e2caab7a59b557ef28b7eeec9581105acc166b18b4649b2d57acb2e446701099c857da0a493db06baea547b8eefa6a43f70d374a6295e5a69be930b2ed96b5965dbb75c032cd507fc56a43a31125ae9278b36b5f0b2ccdb486d53205acde2a4d4b72cca3ccb5c236ce03d34163c16ce73161b4e5e54038921eb0d54e329b395507301b6d4a9bcb16cf607282b3104695c04205f58125649abb4295d06e3d25604eb2ed3669b0be750523a4479a6ccf3a93798664c96e5f673272872c59af8ef6b0b9d7e7cb9b399dcfca874c5d4a7af3a999f1ee62e5b3997d7b66a7148f897e69b290b4439d9b6fe2d5568a417f87ac0adbdc0a45ad2129b45caa4d70b84417dae5c02ca592d6e40e578577de75b78b927b669a25c0eebd4f05ccdd6a9e7851464dd67552234d6a608611bc5fa06ecbe803926a1e1c7b4808b6ff6155303660a1a4639f829ec4a2c86213ea6086f1c8a37c6d8f3dfe84929ead4f3ee504f6f4b0922617ab85c7951545f7f2c1c2513d3023c95bbe799d8c27c39dd1b076ce19e3682be895fa932d1c5ddab5dc04e78cd14929ca32ca2ab3746dc6998182941393466bd6d334cc6a9aae21e1370cce84f6ebe849b2fbc9948ef0b85264b30b53670e7ad865a1e25f793264323ae3ea5a382653d292e1ede120530d6957df51acc9d26ca740d051b12fd7ca99a9d9da571a6bb239d6085193c49c14d81367b25144d28bd57a55c99e61bedcb34c9f99fd8234b68470e0b9e7f19f0fbe80f5aa9e9c2358818ff9faada53f3be616e5c53ec584e24cf174440d2cc3a440f8ec0d956b1c2e64248f1dcd10ae2545d41cc712063b84d1570f7b373216cd8f55670d15617c22365965525cc9481eed9c109e0ea5e91c7233d90c91262353a8a5b396e9649c19daffd19c0219f6d0dd2eca858237d01c74a8a1b56165c8f0a986978a4a010d47d9e8b2920a8f64c8b0378d23ed0ace96b1374c70b244910c6dbf01ac5e185b8562699f6f3165cbbcdf7f087dd203fb7a95c99055f0748a529e096109a2c5d164926468916397d6954838edcf90b83632033a376b9041af33ee308ec734bdf3d073c68850fac02a013196249905dc6d46349805ec90167525393024dc5992646410347a45c359b4d57c4232b87ee1f21d95245b048d624bcc4b93816036098fbd6907303c61707b2f485b424cd64a2b8da2997608b727b012b0560785e39954cfbdc29ee0dcc3f191433ec5eca925bab5499aecb0b0e78bb4d29750e3ce977960af1cc14a8ed2cdaf0ac73b4cf57c4dd8f3755ae91bb8f54d1ed93146c971baf98470bcb7a89ea6b0679056ca9400229c1a18671d817bcc8470bc82341938d6d8cd62f9d12e18e015cb14c87cd264e02a8d5707f3c627aae142a0c9cfbdcfd6249b9327737245e577bea663d51990751391d064c28ed06bc4899e00b2a0b0ab3c19886887899e8cd14ac4fe4c9e0c9c79939a64a04820363c4d263e033ac0c6d32403a753a7b02b4d3622ec19015e41fc2d9c04665fe2a70d74829a10df94025fdaaa454647366ebe6081ee3a2e0cb741d8a775950db32fb1d320f0ba33946d2d254e295f49f0578295072f519776a0411c04716a9b559915eaddae41360b341c1275ed12659f8cbb017391907d14470958a9497c7cc583b634f594243b6088248415c3687f5612674de05d4916b55a0af71f6fa3cfbe0312d577df53047bff03a0fd246afe501e8c7daf01cbbc1f29928193c9f8f813d47c54818c391c51654fed11d8328cdf98a3695281acc8785e78dddaa7f286c582416f11074a734ad728cc71852a68e30afb13a6e76c715aedfe156f1f62a13bea616934540b652f675426d3303efd0c7ffe24eaf1f917525c07c6d0e7c6708f2fbf522233e6993170f92d264586eff7d8d841f5b97e9419238ffde1a83b973588f53269953520495415367b637ef3e28a6631b75dfd4c1fd5f7b49c3dc0a9dba755c17a99b9b4345e7fb0b16bd8f5764bbcc68c221b40a99b8c9b452ce3a5d62302eb603c28bbad744c6624390fd0987724f4f31cef6c27c8f59957527e56a18ec90ca38d63075cfca4bc53a9fe57a4ae8516b13ece24449437665978a1e728b4da5a8e574ec5280f8faf2d79a7c6a024099604ef6d6c1ade294c57febe5a53ac2e250fba7b8871c096b51f19711fddc3c75455c7b15a64abae2598c62579b9afd5274d82c4c193e613bc3e980c1c3a19ee1b51bde56f085c3cfdc32cbf13195ddaeae6bf33b5f49e127e7d9c38cba6ea4bdab813d937554ddf1e757ae6b8f93b0db0a4b8d4d15e893c1c6d567df436217898abf13234e9722456eb358e64ab8b31232efb28a3ed3e465ca47203e3389babc17fd045cff73f2881fdb8cb0dac6e64e4a7832a643fbb82d58f8c1cf9451e6cdc559bfc3a73272361f9c3f35709b2fad98c90df7e97259308f0eb693354c315c98c84b2ba92f5cb929d585edfd9247f482f3489da403d6de651f8ff257ffeb59e36fb5b1ecce10ea7d0ba66cb3ada4cf1b12f27682f648cee6ae14c832cbf14ae031807ad1c662f7934c9c23349ee6f34349e4723b44a421748591a64b9d99555cea2698021342ad3ecedca2992e53a2b013a42b396a4698050996b0bc87202fe3905323346790580a6196e1bd431c5bcfe29bac6b415b2e62c4cdda2913a80552fcd179c7bb891b152fd7d752d60b65f6b27a443f4aa549dac8296ab09cc9680f8e8d02033fa4a751aafee8fb0644587cc5e6cc3dae9b9b4b89d9b8d930db20db20db20db2ff0bd97627b2446d7a6b977f1cc82ed7fa4f40f594eacb7744b6589bda7a488c4b666a5e8ed455f6b4d364f1d233cce985ffc27f0db525904838ff5ca336f9172624c67fa5d58c6c0000002574455874646174653a63726561746500323031372d31302d32315431313a35353a34322b30323a30306ea8d3320000002574455874646174653a6d6f6469667900323031372d31302d32315431313a35353a34322b30323a30301ff56b8e0000000049454e44ae426082";
    defaultimagetype: String="image/png";
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
        this.isSaving = false;
        this.imageService.query()
            .subscribe((res: ResponseWrapper) => { this.images = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.inboundOutboundService.query()
            .subscribe((res: ResponseWrapper) => { this.InboundOutbounds = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.getAllRepositories();
    }
    checkURL(){
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

    clear() {
        this.activeModal.dismiss('cancel');
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
