webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar ng_bootstrap_1 = __webpack_require__(\"./node_modules/@ng-bootstrap/ng-bootstrap/index.js\");\r\nvar ng_jhipster_1 = __webpack_require__(\"./node_modules/ng-jhipster/index.js\");\r\nvar application_popup_service_1 = __webpack_require__(\"./src/main/webapp/app/entities/application/application-popup.service.ts\");\r\nvar application_service_1 = __webpack_require__(\"./src/main/webapp/app/entities/application/application.service.ts\");\r\nvar image_1 = __webpack_require__(\"./src/main/webapp/app/entities/image/index.ts\");\r\nvar inbound_outbound_1 = __webpack_require__(\"./src/main/webapp/app/entities/inbound-outbound/index.ts\");\r\nvar repositories_1 = __webpack_require__(\"./src/main/webapp/app/entities/repositories/index.ts\");\r\nvar ApplicationDialogComponent = /** @class */ (function () {\r\n    function ApplicationDialogComponent(router, activatedRoute, activeModal, dataUtils, jhiAlertService, applicationService, imageService, inboundOutboundService, repositoryService, elementRef, eventManager) {\r\n        this.router = router;\r\n        this.activatedRoute = activatedRoute;\r\n        this.activeModal = activeModal;\r\n        this.dataUtils = dataUtils;\r\n        this.jhiAlertService = jhiAlertService;\r\n        this.applicationService = applicationService;\r\n        this.imageService = imageService;\r\n        this.inboundOutboundService = inboundOutboundService;\r\n        this.repositoryService = repositoryService;\r\n        this.elementRef = elementRef;\r\n        this.eventManager = eventManager;\r\n        this.fileName = \"\";\r\n        this.fileToUpload = null;\r\n        this.createApp = false;\r\n        this.InboundOutbounds = [];\r\n        this.InboundOutbounds.push({ protocol: 'tcp', key: '', value: '' });\r\n    }\r\n    ApplicationDialogComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.isSaving = false;\r\n        this.imageService.query()\r\n            .subscribe(function (res) { _this.images = res.json; }, function (res) { return _this.onError(res.json); });\r\n        this.inboundOutboundService.query()\r\n            .subscribe(function (res) { _this.InboundOutbounds = res.json; }, function (res) { return _this.onError(res.json); });\r\n        this.getAllRepositories();\r\n    };\r\n    ApplicationDialogComponent.prototype.checkURL = function () {\r\n        if (String(this.router.url).includes(\"edit\")) {\r\n            this.ModalTitle = \"Edit Application\";\r\n            this.event = \"Update\";\r\n            this.createApp = false;\r\n            this.jsonFileContent = '{\\n\"NAME\": \"' + this.application.name + '\",\\n' +\r\n                '\"DESCRIPTION\": \"' + this.application.description + '\",\\n' +\r\n                '\"SECRET\": \"' + this.application.secret + '\",\\n' +\r\n                '\"VERSION\": \"' + this.application.version + '\",\\n' +\r\n                '\"CONTAINER_IMAGE\": \"' + this.application.containerImage + '\",\\n' +\r\n                '\"NUMBER_OF_CORES\": \"' + this.application.numberOfCores + '\",\\n' +\r\n                '\"NUMBER_OF_INSTANCES\": \"' + this.application.numberOfInstances + '\",\\n' +\r\n                '\"MEMORY\": \"' + this.application.memory + '\"\\n}';\r\n        }\r\n        else {\r\n            this.ModalTitle = \"Create an Application\";\r\n            this.event = \"Create\";\r\n            this.createApp = true;\r\n        }\r\n    };\r\n    ApplicationDialogComponent.prototype.byteSize = function (field) {\r\n        return this.dataUtils.byteSize(field);\r\n    };\r\n    ApplicationDialogComponent.prototype.openFile = function (contentType, field) {\r\n        return this.dataUtils.openFile(contentType, field);\r\n    };\r\n    ApplicationDialogComponent.prototype.setFileData = function (event, entity, field, isImage) {\r\n        this.fileName = event.currentTarget.files[0].name;\r\n        this.dataUtils.setFileData(event, entity, field, isImage);\r\n    };\r\n    ApplicationDialogComponent.prototype.setJsonFileData = function (event, entity, field, isImage) {\r\n        var _this = this;\r\n        this.fileName = event.currentTarget.files[0].name;\r\n        // this.dataUtils.setFileData(event, entity, field, isImage);\r\n        var file = event.target.files[0];\r\n        var reader = new FileReader();\r\n        reader.readAsText(file);\r\n        reader.onload = function () {\r\n            // this.form.get('avatar').setValue({\r\n            //   filename: file.name,\r\n            //   filetype: file.type,\r\n            //   value: reader.result.split(',')[1]\r\n            // })\r\n            _this.jsonFileContent = reader.result;\r\n            var json = JSON.parse(reader.result);\r\n            console.log(json);\r\n            _this.application.name = json.NAME;\r\n            _this.application.description = json.DESCRIPTION;\r\n            _this.application.version = json.VERSION;\r\n            _this.application.secret = json.SECRET;\r\n            _this.application.containerImage = json.CONTAINER_IMAGE;\r\n            _this.application.numberOfInstances = json.NUMBER_OF_INSTANCES;\r\n            _this.application.numberOfCores = json.NUMBER_OF_CORES;\r\n            _this.application.memory = json.MEMORY;\r\n        };\r\n    };\r\n    ApplicationDialogComponent.prototype.updatejson = function (event) {\r\n        this.jsonFileContent = event.target.value;\r\n        var json = JSON.parse(event.target.value);\r\n        this.application.name = json.NAME;\r\n        this.application.description = json.DESCRIPTION;\r\n        this.application.version = json.VERSION;\r\n        this.application.secret = json.SECRET;\r\n        this.application.containerImage = json.CONTAINER_IMAGE;\r\n        this.application.numberOfInstances = json.NUMBER_OF_INSTANCES;\r\n        this.application.numberOfCores = json.NUMBER_OF_CORES;\r\n        this.application.memory = json.MEMORY;\r\n    };\r\n    ApplicationDialogComponent.prototype.handleFileInput = function (files) {\r\n        this.fileToUpload = files.item(0);\r\n    };\r\n    ApplicationDialogComponent.prototype.upload = function () {\r\n        var fileBrowser = this.fileInput.nativeElement;\r\n        if (fileBrowser.files && fileBrowser.files[0]) {\r\n            var formData = new FormData();\r\n            formData.append('files', fileBrowser.files[0]);\r\n            var xhr = new XMLHttpRequest();\r\n            xhr.open('POST', '/api/Data/UploadFiles', true);\r\n            xhr.onload = function () {\r\n                if (this['status'] === 200) {\r\n                    var responseText = this['responseText'];\r\n                    var files = JSON.parse(responseText);\r\n                    //todo: emit event\r\n                }\r\n                else {\r\n                    //todo: error handling\r\n                }\r\n            };\r\n            xhr.send(formData);\r\n        }\r\n    };\r\n    ApplicationDialogComponent.prototype.clearInputImage = function (field, fieldContentType, idInput) {\r\n        this.dataUtils.clearInputImage(this.application, this.elementRef, field, fieldContentType, idInput);\r\n        this.fileName = \"\";\r\n    };\r\n    ApplicationDialogComponent.prototype.clear = function () {\r\n        this.activeModal.dismiss('cancel');\r\n    };\r\n    ApplicationDialogComponent.prototype.save = function () {\r\n        this.isSaving = true;\r\n        /* if(this.InboundOutbounds && this.InboundOutbounds.length > 0){\r\n              this.application.inboundOutboundPorts = [];\r\n              for(const data of this.InboundOutbounds){\r\n                  let dataObj:InboundOutbound;\r\n                  dataObj = new InboundOutbound (0,data.protocol,data.key,data.value,null);\r\n                  this.application.inboundOutboundPorts.push(dataObj);\r\n              }\r\n          } */\r\n        if (this.application.id !== undefined) {\r\n            this.subscribeToSaveResponse(this.applicationService.update(this.application));\r\n        }\r\n        else {\r\n            this.subscribeToSaveResponse(this.applicationService.create(this.application));\r\n        }\r\n    };\r\n    ApplicationDialogComponent.prototype.subscribeToSaveResponse = function (result) {\r\n        var _this = this;\r\n        result.subscribe(function (res) {\r\n            return _this.onSaveSuccess(res);\r\n        }, function (res) { return _this.onSaveError(); });\r\n    };\r\n    ApplicationDialogComponent.prototype.onSaveSuccess = function (result) {\r\n        this.eventManager.broadcast({ name: 'applicationListModification', content: 'OK' });\r\n        this.isSaving = false;\r\n        this.activeModal.dismiss(result);\r\n    };\r\n    ApplicationDialogComponent.prototype.onSaveError = function () {\r\n        this.isSaving = false;\r\n    };\r\n    ApplicationDialogComponent.prototype.onError = function (error) {\r\n        this.jhiAlertService.error(error.message, null, null);\r\n    };\r\n    ApplicationDialogComponent.prototype.getAllRepositories = function () {\r\n        var _this = this;\r\n        this.repositoryService.query().subscribe(function (res) {\r\n            _this.repositories = res.json;\r\n        }, function (res) { return _this.onError(res.json); });\r\n    };\r\n    ApplicationDialogComponent.prototype.trackImageById = function (index, item) {\r\n        return item.id;\r\n    };\r\n    ApplicationDialogComponent.prototype.trackInboundOutboundById = function (index, item) {\r\n        return item.id;\r\n    };\r\n    ApplicationDialogComponent.prototype.getSelected = function (selectedVals, option) {\r\n        if (selectedVals) {\r\n            for (var i = 0; i < selectedVals.length; i++) {\r\n                if (option.id === selectedVals[i].id) {\r\n                    return selectedVals[i];\r\n                }\r\n            }\r\n        }\r\n        return option;\r\n    };\r\n    __decorate([\r\n        core_1.ViewChild('fileInput'),\r\n        __metadata(\"design:type\", Object)\r\n    ], ApplicationDialogComponent.prototype, \"fileInput\", void 0);\r\n    ApplicationDialogComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'jhi-application-dialog',\r\n            template: __webpack_require__(\"./src/main/webapp/app/entities/application/application-dialog.component.html\")\r\n        }),\r\n        __metadata(\"design:paramtypes\", [router_1.Router,\r\n            router_1.ActivatedRoute,\r\n            ng_bootstrap_1.NgbActiveModal,\r\n            ng_jhipster_1.JhiDataUtils,\r\n            ng_jhipster_1.JhiAlertService,\r\n            application_service_1.ApplicationService,\r\n            image_1.ImageService,\r\n            inbound_outbound_1.InboundOutboundService,\r\n            repositories_1.RepositoriesService,\r\n            core_1.ElementRef,\r\n            ng_jhipster_1.JhiEventManager])\r\n    ], ApplicationDialogComponent);\r\n    return ApplicationDialogComponent;\r\n}());\r\nexports.ApplicationDialogComponent = ApplicationDialogComponent;\r\nvar ApplicationPopupComponent = /** @class */ (function () {\r\n    function ApplicationPopupComponent(route, applicationPopupService) {\r\n        this.route = route;\r\n        this.applicationPopupService = applicationPopupService;\r\n    }\r\n    ApplicationPopupComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.routeSub = this.route.params.subscribe(function (params) {\r\n            if (params['id']) {\r\n                _this.applicationPopupService\r\n                    .open(ApplicationDialogComponent, params['id']);\r\n            }\r\n            else {\r\n                _this.applicationPopupService\r\n                    .open(ApplicationDialogComponent);\r\n            }\r\n        });\r\n    };\r\n    ApplicationPopupComponent.prototype.ngOnDestroy = function () {\r\n        this.routeSub.unsubscribe();\r\n    };\r\n    ApplicationPopupComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'jhi-application-popup',\r\n            template: ''\r\n        }),\r\n        __metadata(\"design:paramtypes\", [router_1.ActivatedRoute,\r\n            application_popup_service_1.ApplicationPopupService])\r\n    ], ApplicationPopupComponent);\r\n    return ApplicationPopupComponent;\r\n}());\r\nexports.ApplicationPopupComponent = ApplicationPopupComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQudHM/ZWNhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUFrRztBQUVsRyxvRkFBeUQ7QUFJekQsK0ZBQTREO0FBQzVELCtFQUE0RTtBQUc1RSxpSUFBb0U7QUFDcEUscUhBQTJEO0FBQzNELG1GQUErQztBQUMvQyx5R0FBOEU7QUFHOUUsaUdBQWtFO0FBU2xFO0lBa0JJLG9DQUNZLE1BQWMsRUFDZCxjQUE4QixFQUMvQixXQUEyQixFQUMxQixTQUF1QixFQUN2QixlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsWUFBMEIsRUFDMUIsc0JBQThDLEVBQzlDLGlCQUFzQyxFQUN0QyxVQUFzQixFQUN0QixZQUE2QjtRQVY3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQXBCbEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUk1QixpQkFBWSxHQUFTLElBQUksQ0FBQztRQUUxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBaUJ2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUMsS0FB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O0lBdkJRLHlCQUF5QjtRQUpyQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7eUNBTXFCLHVCQUFjO1lBQ0ksbURBQXVCO09BTm5ELHlCQUF5QixDQXdCckM7SUFBRCxnQ0FBQztDQUFBO0FBeEJZLDhEQUF5QiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24tZGlhbG9nLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCxWaWV3Q2hpbGQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlFdmVudE1hbmFnZXIsIEpoaUFsZXJ0U2VydmljZSxKaGlEYXRhVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi5tb2RlbCc7XG5pbXBvcnQge0FwcGxpY2F0aW9uUG9wdXBTZXJ2aWNlfSBmcm9tICcuL2FwcGxpY2F0aW9uLXBvcHVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEltYWdlLCBJbWFnZVNlcnZpY2UgfSBmcm9tICcuLi9pbWFnZSc7XG5pbXBvcnQgeyBJbmJvdW5kT3V0Ym91bmQsIEluYm91bmRPdXRib3VuZFNlcnZpY2UgfSBmcm9tICcuLi9pbmJvdW5kLW91dGJvdW5kJztcbmltcG9ydCB7IFJlc3BvbnNlV3JhcHBlciB9IGZyb20gICcuLi8uLi9zaGFyZWQnO1xuXG5pbXBvcnQge1JlcG9zaXRvcmllcywgUmVwb3NpdG9yaWVzU2VydmljZX0gZnJvbSBcIi4uL3JlcG9zaXRvcmllc1wiO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFwcGxpY2F0aW9uLWRpYWxvZycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgZmlsZUlucHV0O1xuXG4gICAgYXBwbGljYXRpb246IEFwcGxpY2F0aW9uO1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuXG4gICAgaW1hZ2VzOiBJbWFnZVtdO1xuICAgIHB1YmxpYyBmaWxlTmFtZSA6IHN0cmluZz1cIlwiO1xuICAgIHJlcG9zaXRvcmllcyA6IFJlcG9zaXRvcmllcztcbiAgICBJbmJvdW5kT3V0Ym91bmRzOiBhbnlbXTtcbiAgICBJbmJvdW5kT3V0Ym91bmQgOiBJbmJvdW5kT3V0Ym91bmRbXTtcbiAgICBmaWxlVG9VcGxvYWQ6IEZpbGUgPSBudWxsO1xuICAgIGpzb25GaWxlQ29udGVudDogU3RyaW5nO1xuICAgIGNyZWF0ZUFwcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIE1vZGFsVGl0bGU6IFN0cmluZztcbiAgICBldmVudDogU3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBkYXRhVXRpbHM6IEpoaURhdGFVdGlscyxcbiAgICAgICAgcHJpdmF0ZSBqaGlBbGVydFNlcnZpY2U6IEpoaUFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvblNlcnZpY2U6IEFwcGxpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVNlcnZpY2U6IEltYWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBpbmJvdW5kT3V0Ym91bmRTZXJ2aWNlOiBJbmJvdW5kT3V0Ym91bmRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlcG9zaXRvcnlTZXJ2aWNlOiBSZXBvc2l0b3JpZXNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBKaGlFdmVudE1hbmFnZXIsXG4gICAgICAvLyAgcHJpdmF0ZSBhcHBsaWNhdGlvbmltcG9ydDpBcHBsaWNhdGlvbkltcG9ydENvbXBvbmVudCxcbiAgICApIHtcbiAgICAgICAgdGhpcy5JbmJvdW5kT3V0Ym91bmRzPVtdO1xuICAgICAgICB0aGlzLkluYm91bmRPdXRib3VuZHMucHVzaCh7cHJvdG9jb2w6J3RjcCcsa2V5OicnLCB2YWx1ZTonJ30pO1xuXG4gICAgfVxuXG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW1hZ2VTZXJ2aWNlLnF1ZXJ5KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2VXcmFwcGVyKSA9PiB7IHRoaXMuaW1hZ2VzID0gcmVzLmpzb247IH0sIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKSk7XG4gICAgICAgIHRoaXMuaW5ib3VuZE91dGJvdW5kU2VydmljZS5xdWVyeSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4geyB0aGlzLkluYm91bmRPdXRib3VuZHMgPSByZXMuanNvbjsgfSwgKHJlczogUmVzcG9uc2VXcmFwcGVyKSA9PiB0aGlzLm9uRXJyb3IocmVzLmpzb24pKTtcbiAgICAgICAgdGhpcy5nZXRBbGxSZXBvc2l0b3JpZXMoKTtcbiAgICB9XG4gICAgY2hlY2tVUkwoKXtcbiAgICAgICAgaWYoU3RyaW5nKHRoaXMucm91dGVyLnVybCkuaW5jbHVkZXMoXCJlZGl0XCIpKXtcbiAgICAgICAgICAgIHRoaXMuTW9kYWxUaXRsZT1cIkVkaXQgQXBwbGljYXRpb25cIjtcbiAgICAgICAgICAgIHRoaXMuZXZlbnQ9XCJVcGRhdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQXBwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmpzb25GaWxlQ29udGVudCA9ICd7XFxuXCJOQU1FXCI6IFwiJyArIHRoaXMuYXBwbGljYXRpb24ubmFtZSArICdcIixcXG4nK1xuICAgICAgICAgICAgJ1wiREVTQ1JJUFRJT05cIjogXCInICsgdGhpcy5hcHBsaWNhdGlvbi5kZXNjcmlwdGlvbiArICdcIixcXG4nK1xuICAgICAgICAgICAgJ1wiU0VDUkVUXCI6IFwiJyArIHRoaXMuYXBwbGljYXRpb24uc2VjcmV0ICsgJ1wiLFxcbicrXG4gICAgICAgICAgICAnXCJWRVJTSU9OXCI6IFwiJyArIHRoaXMuYXBwbGljYXRpb24udmVyc2lvbiArICdcIixcXG4nK1xuICAgICAgICAgICAgJ1wiQ09OVEFJTkVSX0lNQUdFXCI6IFwiJyArIHRoaXMuYXBwbGljYXRpb24uY29udGFpbmVySW1hZ2UgKyAnXCIsXFxuJytcbiAgICAgICAgICAgICdcIk5VTUJFUl9PRl9DT1JFU1wiOiBcIicgKyB0aGlzLmFwcGxpY2F0aW9uLm51bWJlck9mQ29yZXMgKyAnXCIsXFxuJytcbiAgICAgICAgICAgICdcIk5VTUJFUl9PRl9JTlNUQU5DRVNcIjogXCInICsgdGhpcy5hcHBsaWNhdGlvbi5udW1iZXJPZkluc3RhbmNlcyArICdcIixcXG4nK1xuICAgICAgICAgICAgJ1wiTUVNT1JZXCI6IFwiJyArIHRoaXMuYXBwbGljYXRpb24ubWVtb3J5ICsgJ1wiXFxufSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuTW9kYWxUaXRsZT1cIkNyZWF0ZSBhbiBBcHBsaWNhdGlvblwiO1xuICAgICAgICAgICAgdGhpcy5ldmVudD1cIkNyZWF0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVBcHAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnl0ZVNpemUoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLmJ5dGVTaXplKGZpZWxkKTtcbiAgICB9XG5cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZSwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVV0aWxzLm9wZW5GaWxlKGNvbnRlbnRUeXBlLCBmaWVsZCk7XG4gICAgfVxuXG4gICAgc2V0RmlsZURhdGEoZXZlbnQsIGVudGl0eSwgZmllbGQsIGlzSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5maWxlTmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXNbMF0ubmFtZTtcbiAgICAgICAgdGhpcy5kYXRhVXRpbHMuc2V0RmlsZURhdGEoZXZlbnQsIGVudGl0eSwgZmllbGQsIGlzSW1hZ2UpO1xuICAgIH1cblxuICAgIHNldEpzb25GaWxlRGF0YShldmVudCwgZW50aXR5LCBmaWVsZCwgaXNJbWFnZSkge1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZXZlbnQuY3VycmVudFRhcmdldC5maWxlc1swXS5uYW1lO1xuICAgICAgICAvLyB0aGlzLmRhdGFVdGlscy5zZXRGaWxlRGF0YShldmVudCwgZW50aXR5LCBmaWVsZCwgaXNJbWFnZSk7XG4gICAgICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmZvcm0uZ2V0KCdhdmF0YXInKS5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAvLyAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAvLyAgIGZpbGV0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgICAvLyAgIHZhbHVlOiByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLmpzb25GaWxlQ29udGVudCA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ubmFtZSA9IGpzb24uTkFNRTtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uZGVzY3JpcHRpb24gPSBqc29uLkRFU0NSSVBUSU9OO1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi52ZXJzaW9uID0ganNvbi5WRVJTSU9OO1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5zZWNyZXQgPSBqc29uLlNFQ1JFVDtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uY29udGFpbmVySW1hZ2UgPSBqc29uLkNPTlRBSU5FUl9JTUFHRTtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ubnVtYmVyT2ZJbnN0YW5jZXMgPSBqc29uLk5VTUJFUl9PRl9JTlNUQU5DRVM7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLm51bWJlck9mQ29yZXMgPSBqc29uLk5VTUJFUl9PRl9DT1JFUztcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ubWVtb3J5ID0ganNvbi5NRU1PUlk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlanNvbihldmVudCl7XG4gICAgICAgIHRoaXMuanNvbkZpbGVDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5uYW1lID0ganNvbi5OQU1FO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmRlc2NyaXB0aW9uID0ganNvbi5ERVNDUklQVElPTjtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi52ZXJzaW9uID0ganNvbi5WRVJTSU9OO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnNlY3JldCA9IGpzb24uU0VDUkVUO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmNvbnRhaW5lckltYWdlID0ganNvbi5DT05UQUlORVJfSU1BR0U7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24ubnVtYmVyT2ZJbnN0YW5jZXMgPSBqc29uLk5VTUJFUl9PRl9JTlNUQU5DRVM7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb24ubnVtYmVyT2ZDb3JlcyA9IGpzb24uTlVNQkVSX09GX0NPUkVTO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLm1lbW9yeSA9IGpzb24uTUVNT1JZO1xuICAgIH1cblxuICAgIGhhbmRsZUZpbGVJbnB1dChmaWxlczogRmlsZUxpc3QpIHtcbiAgICAgICAgdGhpcy5maWxlVG9VcGxvYWQgPSBmaWxlcy5pdGVtKDApO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB1cGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGZpbGVCcm93c2VyID0gdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGZpbGVCcm93c2VyLmZpbGVzICYmIGZpbGVCcm93c2VyLmZpbGVzWzBdKSB7XG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzJywgZmlsZUJyb3dzZXIuZmlsZXNbMF0pO1xuICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJy9hcGkvRGF0YS9VcGxvYWRGaWxlcycsIHRydWUpO1xuICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpc1snc3RhdHVzJ10gPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IHRoaXNbJ3Jlc3BvbnNlVGV4dCddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIC8vdG9kbzogZW1pdCBldmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy90b2RvOiBlcnJvciBoYW5kbGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuXG5cbiAgICBjbGVhcklucHV0SW1hZ2UoZmllbGQ6IHN0cmluZywgZmllbGRDb250ZW50VHlwZTogc3RyaW5nLCBpZElucHV0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhVXRpbHMuY2xlYXJJbnB1dEltYWdlKHRoaXMuYXBwbGljYXRpb24sIHRoaXMuZWxlbWVudFJlZiwgZmllbGQsIGZpZWxkQ29udGVudFR5cGUsIGlkSW5wdXQpO1xuICAgICAgICB0aGlzLmZpbGVOYW1lID0gXCJcIjtcbiAgICB9XG4gXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcblxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgLyogaWYodGhpcy5JbmJvdW5kT3V0Ym91bmRzICYmIHRoaXMuSW5ib3VuZE91dGJvdW5kcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24uaW5ib3VuZE91dGJvdW5kUG9ydHMgPSBbXTtcbiAgICAgICAgICAgIGZvcihjb25zdCBkYXRhIG9mIHRoaXMuSW5ib3VuZE91dGJvdW5kcyl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFPYmo6SW5ib3VuZE91dGJvdW5kO1xuICAgICAgICAgICAgICAgIGRhdGFPYmogPSBuZXcgSW5ib3VuZE91dGJvdW5kICgwLGRhdGEucHJvdG9jb2wsZGF0YS5rZXksZGF0YS52YWx1ZSxudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLmluYm91bmRPdXRib3VuZFBvcnRzLnB1c2goZGF0YU9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKi9cblxuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbi5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TZXJ2aWNlLnVwZGF0ZSh0aGlzLmFwcGxpY2F0aW9uKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKFxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TZXJ2aWNlLmNyZWF0ZSh0aGlzLmFwcGxpY2F0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN1YnNjcmliZVRvU2F2ZVJlc3BvbnNlKHJlc3VsdDogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbj4pIHtcbiAgICAgICAgcmVzdWx0LnN1YnNjcmliZSgocmVzOiBBcHBsaWNhdGlvbikgPT5cbiAgICAgICAgICAgIHRoaXMub25TYXZlU3VjY2VzcyhyZXMpLCAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vblNhdmVFcnJvcigpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MocmVzdWx0OiBBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAnYXBwbGljYXRpb25MaXN0TW9kaWZpY2F0aW9uJywgY29udGVudDogJ09LJ30pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmpoaUFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5tZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgICB9XG4gICAgZ2V0QWxsUmVwb3NpdG9yaWVzKCkge1xuICAgICAgICB0aGlzLnJlcG9zaXRvcnlTZXJ2aWNlLnF1ZXJ5KCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogUmVzcG9uc2VXcmFwcGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvc2l0b3JpZXM9IHJlcy5qc29uO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlV3JhcHBlcikgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRyYWNrSW1hZ2VCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IEltYWdlKSB7XG4gICAgICAgIHJldHVybiBpdGVtLmlkO1xuICAgIH1cblxuICAgIHRyYWNrSW5ib3VuZE91dGJvdW5kQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBJbmJvdW5kT3V0Ym91bmQpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWQoc2VsZWN0ZWRWYWxzOiBBcnJheTxhbnk+LCBvcHRpb246IGFueSkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWxzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb24uaWQgPT09IHNlbGVjdGVkVmFsc1tpXS5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRWYWxzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktYXBwbGljYXRpb24tcG9wdXAnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvblBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcm91dGVTdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvblBvcHVwU2VydmljZTogQXBwbGljYXRpb25Qb3B1cFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBpZiAoIHBhcmFtc1snaWQnXSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uUG9wdXBTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5vcGVuKEFwcGxpY2F0aW9uRGlhbG9nQ29tcG9uZW50IGFzIENvbXBvbmVudCwgcGFyYW1zWydpZCddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblBvcHVwU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAub3BlbihBcHBsaWNhdGlvbkRpYWxvZ0NvbXBvbmVudCBhcyBDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application-dialog.component.ts\n");

/***/ })

})