webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\" style=\\\"background-color: #e9ecef\\\"> <h4 class=\\\"modal-title colorblue\\\" id=\\\"myApplicationLabel\\\" style=\\\"font-family: Roboto, sans-serif\\\">{{this.ModalTitle}}</h4> <button type=\\\"button\\\" class=\\\"close colorblue\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <form-wizard> <jhi-alert-error></jhi-alert-error> <wizard-step [title]=\\\"'Upload Data Files'\\\"> {{checkURL()}} <div *ngIf=\\\"createApp\\\" class=\\\"form-group\\\" style=\\\"margin-left: 5px\\\"> <div style=\\\"margin-top: 5px; padding-top: 10px\\\"> <div class=\\\"fileUpload btn button-primary\\\"> <div class=\\\"row mb-4\\\"> <div class=\\\"col-md-6 mt-4\\\"> <span>Upload logo</span> <input type=\\\"file\\\" id=\\\"file_logo\\\" class=\\\"upload\\\" (change)=\\\"setFileData($event, application, 'logo', true)\\\" accept=\\\"image/*\\\"/> </div> <div class=\\\"col-md-6\\\"> <img [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"max-height: 100px;\\\" *ngIf=\\\"application.logo\\\" alt=\\\"application image\\\"/> <span *ngIf=\\\"application.logo\\\"> <button type=\\\"button\\\" (click)=\\\"clearInputImage('logo', 'logoContentType', 'fileImage')\\\" class=\\\"btn btn-secondary btn-xs\\\">Remove</button> </span> <input type=\\\"hidden\\\" class=\\\"form-control\\\" name=\\\"logo\\\" id=\\\"field_logo\\\" [(ngModel)]=\\\"application.logo\\\"/> </div></div> <hr style=\\\"width:767px\\\"/> <div class=\\\"row\\\"> <div class=\\\"col-md-6 mt-5\\\"> <span>Upload json</span> <input type=\\\"file\\\" id=\\\"file_json\\\" class=\\\"upload\\\" (change)=\\\"setJsonFileData($event, application, 'json', false)\\\" accept=\\\".json\\\"/> </div> <div class=\\\"col-md-6\\\"> <span *ngIf=\\\"this.jsonFileSelect\\\"> <button type=\\\"button\\\" (click)=\\\"clearJSON()\\\" class=\\\"btn btn-secondary btn-xs\\\">Remove</button> </span> <div *ngIf=\\\"jsonFileSelect\\\"> <div>Name: {{application.name}}</div> <div>Description: {{application.description}}</div> <div>Version: {{application.version}}</div> <div>Secret: {{application.secret}}</div> <div>Container Image: {{application.containerImage}}</div> <div>Number of Cores: {{application.numberOfCores}}</div> <div>Number of Instances: {{application.numberOfInstances}}</div> <div>Memory: {{application.memory}}</div> </div> <input type=\\\"hidden\\\" class=\\\"form-control\\\" name=\\\"logoContentType\\\" id=\\\"field_logoContentType\\\" [(ngModel)]=\\\"application.logoContentType\\\"/> </div> </div> </div></div></div> <br> <br> <div *ngIf=\\\"!createApp\\\"> <div> <textarea style=\\\"width:600px;height:250px\\\" (change)=\\\"updatejson($event)\\\">{{this.jsonFileContent}}</textarea> </div> <div class=\\\"fileUpload btn button-primary\\\"> <span>Upload logo</span> <input type=\\\"file\\\" class=\\\"upload\\\" (change)=\\\"setFileData($event, application, 'logo', true)\\\" accept=\\\"image/*\\\"/> </div> <span *ngIf=\\\"application.logo\\\"> <button type=\\\"button\\\" (click)=\\\"clearInputImage('logo', 'logoContentType', 'fileImage')\\\" class=\\\"btn btn-secondary btn-xs\\\"> Remove</button> </span> <br> <br> <img [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"max-height: 100px;\\\" *ngIf=\\\"application.logo\\\" alt=\\\"application image\\\"/> </div> </wizard-step> <wizard-step [title]=\\\"'Finish'\\\" (onComplete)=\\\"save()\\\"> <h4 style=\\\"margin-top: 20px;margin-left: 18px;color: #0899cc; font-family: Roboto, sans-serif\\\">click DONE to {{this.event}} your application.</h4> <jhi-alert-error></jhi-alert-error> </wizard-step> </form-wizard> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbD9kZWM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBSQUEwUixpQkFBaUIsK0hBQStILG1IQUFtSCxZQUFZLHdHQUF3RyxtWEFBbVgsd0RBQXdELCt6QkFBK3pCLGtCQUFrQiwyQkFBMkIseUJBQXlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLCtCQUErQiwyQkFBMkIsbUNBQW1DLCtCQUErQixzQkFBc0Isb0JBQW9CLDBRQUEwUSxpREFBaUQsc0JBQXNCLG1kQUFtZCx3REFBd0Qsd0tBQXdLLGtCQUFrQixlQUFlLG1EQUFtRCxZQUFZIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNlOWVjZWZcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlIGNvbG9yYmx1ZVxcXCIgaWQ9XFxcIm15QXBwbGljYXRpb25MYWJlbFxcXCIgc3R5bGU9XFxcImZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWZcXFwiPnt7dGhpcy5Nb2RhbFRpdGxlfX08L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlIGNvbG9yYmx1ZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxmb3JtLXdpemFyZD4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHdpemFyZC1zdGVwIFt0aXRsZV09XFxcIidVcGxvYWQgRGF0YSBGaWxlcydcXFwiPiB7e2NoZWNrVVJMKCl9fSA8ZGl2ICpuZ0lmPVxcXCJjcmVhdGVBcHBcXFwiIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDVweFxcXCI+IDxkaXYgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDVweDsgcGFkZGluZy10b3A6IDEwcHhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmaWxlVXBsb2FkIGJ0biBidXR0b24tcHJpbWFyeVxcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBtYi00XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgbXQtNFxcXCI+IDxzcGFuPlVwbG9hZCBsb2dvPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgaWQ9XFxcImZpbGVfbG9nb1xcXCIgY2xhc3M9XFxcInVwbG9hZFxcXCIgKGNoYW5nZSk9XFxcInNldEZpbGVEYXRhKCRldmVudCwgYXBwbGljYXRpb24sICdsb2dvJywgdHJ1ZSlcXFwiIGFjY2VwdD1cXFwiaW1hZ2UvKlxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTZcXFwiPiA8aW1nIFtzcmNdPVxcXCInZGF0YTonICsgYXBwbGljYXRpb24ubG9nb0NvbnRlbnRUeXBlICsgJztiYXNlNjQsJyArIGFwcGxpY2F0aW9uLmxvZ29cXFwiIHN0eWxlPVxcXCJtYXgtaGVpZ2h0OiAxMDBweDtcXFwiICpuZ0lmPVxcXCJhcHBsaWNhdGlvbi5sb2dvXFxcIiBhbHQ9XFxcImFwcGxpY2F0aW9uIGltYWdlXFxcIi8+IDxzcGFuICpuZ0lmPVxcXCJhcHBsaWNhdGlvbi5sb2dvXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImNsZWFySW5wdXRJbWFnZSgnbG9nbycsICdsb2dvQ29udGVudFR5cGUnLCAnZmlsZUltYWdlJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBidG4teHNcXFwiPlJlbW92ZTwvYnV0dG9uPiA8L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxvZ29cXFwiIGlkPVxcXCJmaWVsZF9sb2dvXFxcIiBbKG5nTW9kZWwpXT1cXFwiYXBwbGljYXRpb24ubG9nb1xcXCIvPiA8L2Rpdj48L2Rpdj4gPGhyIHN0eWxlPVxcXCJ3aWR0aDo3NjdweFxcXCIvPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNiBtdC01XFxcIj4gPHNwYW4+VXBsb2FkIGpzb248L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBpZD1cXFwiZmlsZV9qc29uXFxcIiBjbGFzcz1cXFwidXBsb2FkXFxcIiAoY2hhbmdlKT1cXFwic2V0SnNvbkZpbGVEYXRhKCRldmVudCwgYXBwbGljYXRpb24sICdqc29uJywgZmFsc2UpXFxcIiBhY2NlcHQ9XFxcIi5qc29uXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+IDxzcGFuICpuZ0lmPVxcXCJ0aGlzLmpzb25GaWxlU2VsZWN0XFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImNsZWFySlNPTigpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXhzXFxcIj5SZW1vdmU8L2J1dHRvbj4gPC9zcGFuPiA8ZGl2ICpuZ0lmPVxcXCJqc29uRmlsZVNlbGVjdFxcXCI+IDxkaXY+TmFtZToge3thcHBsaWNhdGlvbi5uYW1lfX08L2Rpdj4gPGRpdj5EZXNjcmlwdGlvbjoge3thcHBsaWNhdGlvbi5kZXNjcmlwdGlvbn19PC9kaXY+IDxkaXY+VmVyc2lvbjoge3thcHBsaWNhdGlvbi52ZXJzaW9ufX08L2Rpdj4gPGRpdj5TZWNyZXQ6IHt7YXBwbGljYXRpb24uc2VjcmV0fX08L2Rpdj4gPGRpdj5Db250YWluZXIgSW1hZ2U6IHt7YXBwbGljYXRpb24uY29udGFpbmVySW1hZ2V9fTwvZGl2PiA8ZGl2Pk51bWJlciBvZiBDb3Jlczoge3thcHBsaWNhdGlvbi5udW1iZXJPZkNvcmVzfX08L2Rpdj4gPGRpdj5OdW1iZXIgb2YgSW5zdGFuY2VzOiB7e2FwcGxpY2F0aW9uLm51bWJlck9mSW5zdGFuY2VzfX08L2Rpdj4gPGRpdj5NZW1vcnk6IHt7YXBwbGljYXRpb24ubWVtb3J5fX08L2Rpdj4gPC9kaXY+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxvZ29Db250ZW50VHlwZVxcXCIgaWQ9XFxcImZpZWxkX2xvZ29Db250ZW50VHlwZVxcXCIgWyhuZ01vZGVsKV09XFxcImFwcGxpY2F0aW9uLmxvZ29Db250ZW50VHlwZVxcXCIvPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PjwvZGl2PjwvZGl2PiA8YnI+IDxicj4gPGRpdiAqbmdJZj1cXFwiIWNyZWF0ZUFwcFxcXCI+IDxkaXY+IDx0ZXh0YXJlYSBzdHlsZT1cXFwid2lkdGg6NjAwcHg7aGVpZ2h0OjI1MHB4XFxcIiAoY2hhbmdlKT1cXFwidXBkYXRlanNvbigkZXZlbnQpXFxcIj57e3RoaXMuanNvbkZpbGVDb250ZW50fX08L3RleHRhcmVhPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZmlsZVVwbG9hZCBidG4gYnV0dG9uLXByaW1hcnlcXFwiPiA8c3Bhbj5VcGxvYWQgbG9nbzwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImZpbGVcXFwiIGNsYXNzPVxcXCJ1cGxvYWRcXFwiIChjaGFuZ2UpPVxcXCJzZXRGaWxlRGF0YSgkZXZlbnQsIGFwcGxpY2F0aW9uLCAnbG9nbycsIHRydWUpXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiLz4gPC9kaXY+IDxzcGFuICpuZ0lmPVxcXCJhcHBsaWNhdGlvbi5sb2dvXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImNsZWFySW5wdXRJbWFnZSgnbG9nbycsICdsb2dvQ29udGVudFR5cGUnLCAnZmlsZUltYWdlJylcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeSBidG4teHNcXFwiPiBSZW1vdmU8L2J1dHRvbj4gPC9zcGFuPiA8YnI+IDxicj4gPGltZyBbc3JjXT1cXFwiJ2RhdGE6JyArIGFwcGxpY2F0aW9uLmxvZ29Db250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBhcHBsaWNhdGlvbi5sb2dvXFxcIiBzdHlsZT1cXFwibWF4LWhlaWdodDogMTAwcHg7XFxcIiAqbmdJZj1cXFwiYXBwbGljYXRpb24ubG9nb1xcXCIgYWx0PVxcXCJhcHBsaWNhdGlvbiBpbWFnZVxcXCIvPiA8L2Rpdj4gPC93aXphcmQtc3RlcD4gPHdpemFyZC1zdGVwIFt0aXRsZV09XFxcIidGaW5pc2gnXFxcIiAob25Db21wbGV0ZSk9XFxcInNhdmUoKVxcXCI+IDxoNCBzdHlsZT1cXFwibWFyZ2luLXRvcDogMjBweDttYXJnaW4tbGVmdDogMThweDtjb2xvcjogIzA4OTljYzsgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZlxcXCI+Y2xpY2sgRE9ORSB0byB7e3RoaXMuZXZlbnR9fSB5b3VyIGFwcGxpY2F0aW9uLjwvaDQ+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDwvd2l6YXJkLXN0ZXA+IDwvZm9ybS13aXphcmQ+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application-dialog.component.html\n");

/***/ })

})