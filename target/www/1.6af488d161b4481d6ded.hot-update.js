webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\" style=\\\"background-color: #e9ecef\\\"> <h4 class=\\\"modal-title colorblue\\\" id=\\\"myApplicationLabel\\\" style=\\\"font-family: Roboto, sans-serif\\\">{{this.ModalTitle}}</h4> <button type=\\\"button\\\" class=\\\"close colorblue\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <form-wizard> <jhi-alert-error></jhi-alert-error> <wizard-step [title]=\\\"'Upload Data Files'\\\"> {{checkURL()}} <div *ngIf=\\\"createApp\\\" class=\\\"form-group\\\" style=\\\"margin-left: 5px\\\"> <div style=\\\"margin-top: 5px; padding-top: 10px\\\"> <div class=\\\"fileUpload btn button-primary\\\"> <span>Upload logo</span> <input type=\\\"file\\\" (select)=\\\"C:/Optimizer/try1/src/main/webapp/content/images/optimizer.png\\\" id=\\\"file_logo\\\" class=\\\"upload\\\" onload=\\\"setFileData($event,application,'logo',true)\\\" (change)=\\\"setFileData($event, application, 'logo', true)\\\" accept=\\\"image/*\\\"/> <span>Upload json</span> <input type=\\\"file\\\" id=\\\"file_json\\\" class=\\\"upload\\\" (change)=\\\"setJsonFileData($event, application, 'json', false)\\\" accept=\\\".json\\\"/> </div> <span *ngIf=\\\"application.logo\\\"> <button type=\\\"button\\\" (click)=\\\"clearInputImage('logo', 'logoContentType', 'fileImage')\\\" class=\\\"btn btn-secondary btn-xs\\\"> Remove</button> </span> <br> <br> <img [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"max-height: 100px;\\\" *ngIf=\\\"application.logo\\\" alt=\\\"application image\\\"/> <div *ngIf=\\\"jsonFileContent\\\"> <div>Name: {{application.name}}</div> <div>Description: {{application.description}}</div> <div>Version: {{application.version}}</div> <div>Secret: {{application.secret}}</div> <div>Container Image: {{application.containerImage}}</div> <div>Number of Cores: {{application.numberOfCores}}</div> <div>Number of Instances: {{application.numberOfInstances}}</div> <div>Memory: {{application.memory}}</div> </div> </div> <input type=\\\"hidden\\\" class=\\\"form-control\\\" name=\\\"logo\\\" id=\\\"field_logo\\\" [(ngModel)]=\\\"application.logo\\\"/> <input type=\\\"hidden\\\" class=\\\"form-control\\\" name=\\\"logoContentType\\\" id=\\\"field_logoContentType\\\" [(ngModel)]=\\\"application.logoContentType\\\"/> </div> <div *ngIf=\\\"!createApp\\\"> <div> <textarea style=\\\"width:600px;height:250px\\\" (change)=\\\"updatejson($event)\\\">{{this.jsonFileContent}}</textarea> </div> <div class=\\\"fileUpload btn button-primary\\\"> <span>Upload logo</span> <input type=\\\"file\\\" class=\\\"upload\\\" (change)=\\\"setFileData($event, application, 'logo', true)\\\" accept=\\\"image/*\\\"/> </div> <span *ngIf=\\\"application.logo\\\"> <button type=\\\"button\\\" (click)=\\\"clearInputImage('logo', 'logoContentType', 'fileImage')\\\" class=\\\"btn btn-secondary btn-xs\\\"> Remove</button> </span> <br> <br> <img [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"max-height: 100px;\\\" *ngIf=\\\"application.logo\\\" alt=\\\"application image\\\"/> </div> </wizard-step> <wizard-step [title]=\\\"'Finish'\\\" (onComplete)=\\\"save()\\\"> <h4 style=\\\"margin-top: 20px;margin-left: 18px;color: #0899cc; font-family: Roboto, sans-serif\\\">click DONE to {{this.event}} your application.</h4> <jhi-alert-error></jhi-alert-error> </wizard-step> </form-wizard> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbD9kZWM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBSQUEwUixpQkFBaUIsK0hBQStILG1IQUFtSCxZQUFZLHdHQUF3Ryw4d0JBQTh3Qix3REFBd0QsdUdBQXVHLGtCQUFrQiwyQkFBMkIseUJBQXlCLHVCQUF1QixxQkFBcUIsc0JBQXNCLG9CQUFvQiwrQkFBK0IsNEJBQTRCLCtCQUErQiwyQkFBMkIsbUNBQW1DLCtCQUErQixzQkFBc0Isb0JBQW9CLDhWQUE4VixpREFBaUQsc0JBQXNCLG1kQUFtZCx3REFBd0Qsd0tBQXdLLGtCQUFrQixlQUFlLG1EQUFtRCxZQUFZIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNlOWVjZWZcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlIGNvbG9yYmx1ZVxcXCIgaWQ9XFxcIm15QXBwbGljYXRpb25MYWJlbFxcXCIgc3R5bGU9XFxcImZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWZcXFwiPnt7dGhpcy5Nb2RhbFRpdGxlfX08L2g0PiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlIGNvbG9yYmx1ZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxmb3JtLXdpemFyZD4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHdpemFyZC1zdGVwIFt0aXRsZV09XFxcIidVcGxvYWQgRGF0YSBGaWxlcydcXFwiPiB7e2NoZWNrVVJMKCl9fSA8ZGl2ICpuZ0lmPVxcXCJjcmVhdGVBcHBcXFwiIGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDVweFxcXCI+IDxkaXYgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDVweDsgcGFkZGluZy10b3A6IDEwcHhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmaWxlVXBsb2FkIGJ0biBidXR0b24tcHJpbWFyeVxcXCI+IDxzcGFuPlVwbG9hZCBsb2dvPC9zcGFuPiA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgKHNlbGVjdCk9XFxcIkM6L09wdGltaXplci90cnkxL3NyYy9tYWluL3dlYmFwcC9jb250ZW50L2ltYWdlcy9vcHRpbWl6ZXIucG5nXFxcIiBpZD1cXFwiZmlsZV9sb2dvXFxcIiBjbGFzcz1cXFwidXBsb2FkXFxcIiBvbmxvYWQ9XFxcInNldEZpbGVEYXRhKCRldmVudCxhcHBsaWNhdGlvbiwnbG9nbycsdHJ1ZSlcXFwiIChjaGFuZ2UpPVxcXCJzZXRGaWxlRGF0YSgkZXZlbnQsIGFwcGxpY2F0aW9uLCAnbG9nbycsIHRydWUpXFxcIiBhY2NlcHQ9XFxcImltYWdlLypcXFwiLz4gPHNwYW4+VXBsb2FkIGpzb248L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBpZD1cXFwiZmlsZV9qc29uXFxcIiBjbGFzcz1cXFwidXBsb2FkXFxcIiAoY2hhbmdlKT1cXFwic2V0SnNvbkZpbGVEYXRhKCRldmVudCwgYXBwbGljYXRpb24sICdqc29uJywgZmFsc2UpXFxcIiBhY2NlcHQ9XFxcIi5qc29uXFxcIi8+IDwvZGl2PiA8c3BhbiAqbmdJZj1cXFwiYXBwbGljYXRpb24ubG9nb1xcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJjbGVhcklucHV0SW1hZ2UoJ2xvZ28nLCAnbG9nb0NvbnRlbnRUeXBlJywgJ2ZpbGVJbWFnZScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXhzXFxcIj4gUmVtb3ZlPC9idXR0b24+IDwvc3Bhbj4gPGJyPiA8YnI+IDxpbWcgW3NyY109XFxcIidkYXRhOicgKyBhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGUgKyAnO2Jhc2U2NCwnICsgYXBwbGljYXRpb24ubG9nb1xcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDEwMHB4O1xcXCIgKm5nSWY9XFxcImFwcGxpY2F0aW9uLmxvZ29cXFwiIGFsdD1cXFwiYXBwbGljYXRpb24gaW1hZ2VcXFwiLz4gPGRpdiAqbmdJZj1cXFwianNvbkZpbGVDb250ZW50XFxcIj4gPGRpdj5OYW1lOiB7e2FwcGxpY2F0aW9uLm5hbWV9fTwvZGl2PiA8ZGl2PkRlc2NyaXB0aW9uOiB7e2FwcGxpY2F0aW9uLmRlc2NyaXB0aW9ufX08L2Rpdj4gPGRpdj5WZXJzaW9uOiB7e2FwcGxpY2F0aW9uLnZlcnNpb259fTwvZGl2PiA8ZGl2PlNlY3JldDoge3thcHBsaWNhdGlvbi5zZWNyZXR9fTwvZGl2PiA8ZGl2PkNvbnRhaW5lciBJbWFnZToge3thcHBsaWNhdGlvbi5jb250YWluZXJJbWFnZX19PC9kaXY+IDxkaXY+TnVtYmVyIG9mIENvcmVzOiB7e2FwcGxpY2F0aW9uLm51bWJlck9mQ29yZXN9fTwvZGl2PiA8ZGl2Pk51bWJlciBvZiBJbnN0YW5jZXM6IHt7YXBwbGljYXRpb24ubnVtYmVyT2ZJbnN0YW5jZXN9fTwvZGl2PiA8ZGl2Pk1lbW9yeToge3thcHBsaWNhdGlvbi5tZW1vcnl9fTwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxpbnB1dCB0eXBlPVxcXCJoaWRkZW5cXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxvZ29cXFwiIGlkPVxcXCJmaWVsZF9sb2dvXFxcIiBbKG5nTW9kZWwpXT1cXFwiYXBwbGljYXRpb24ubG9nb1xcXCIvPiA8aW5wdXQgdHlwZT1cXFwiaGlkZGVuXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJsb2dvQ29udGVudFR5cGVcXFwiIGlkPVxcXCJmaWVsZF9sb2dvQ29udGVudFR5cGVcXFwiIFsobmdNb2RlbCldPVxcXCJhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGVcXFwiLz4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcIiFjcmVhdGVBcHBcXFwiPiA8ZGl2PiA8dGV4dGFyZWEgc3R5bGU9XFxcIndpZHRoOjYwMHB4O2hlaWdodDoyNTBweFxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZWpzb24oJGV2ZW50KVxcXCI+e3t0aGlzLmpzb25GaWxlQ29udGVudH19PC90ZXh0YXJlYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZpbGVVcGxvYWQgYnRuIGJ1dHRvbi1wcmltYXJ5XFxcIj4gPHNwYW4+VXBsb2FkIGxvZ288L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwidXBsb2FkXFxcIiAoY2hhbmdlKT1cXFwic2V0RmlsZURhdGEoJGV2ZW50LCBhcHBsaWNhdGlvbiwgJ2xvZ28nLCB0cnVlKVxcXCIgYWNjZXB0PVxcXCJpbWFnZS8qXFxcIi8+IDwvZGl2PiA8c3BhbiAqbmdJZj1cXFwiYXBwbGljYXRpb24ubG9nb1xcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiAoY2xpY2spPVxcXCJjbGVhcklucHV0SW1hZ2UoJ2xvZ28nLCAnbG9nb0NvbnRlbnRUeXBlJywgJ2ZpbGVJbWFnZScpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXhzXFxcIj4gUmVtb3ZlPC9idXR0b24+IDwvc3Bhbj4gPGJyPiA8YnI+IDxpbWcgW3NyY109XFxcIidkYXRhOicgKyBhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGUgKyAnO2Jhc2U2NCwnICsgYXBwbGljYXRpb24ubG9nb1xcXCIgc3R5bGU9XFxcIm1heC1oZWlnaHQ6IDEwMHB4O1xcXCIgKm5nSWY9XFxcImFwcGxpY2F0aW9uLmxvZ29cXFwiIGFsdD1cXFwiYXBwbGljYXRpb24gaW1hZ2VcXFwiLz4gPC9kaXY+IDwvd2l6YXJkLXN0ZXA+IDx3aXphcmQtc3RlcCBbdGl0bGVdPVxcXCInRmluaXNoJ1xcXCIgKG9uQ29tcGxldGUpPVxcXCJzYXZlKClcXFwiPiA8aDQgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDIwcHg7bWFyZ2luLWxlZnQ6IDE4cHg7Y29sb3I6ICMwODk5Y2M7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWZcXFwiPmNsaWNrIERPTkUgdG8ge3t0aGlzLmV2ZW50fX0geW91ciBhcHBsaWNhdGlvbi48L2g0PiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8L3dpemFyZC1zdGVwPiA8L2Zvcm0td2l6YXJkPiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application-dialog.component.html\n");

/***/ })

})