webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div class=\\\"container mt-5\\\"> <table class=\\\"table text-center lightblue\\\"> <jhi-alert-error></jhi-alert-error> <thead class=\\\"thead-light\\\"> <tr> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Application</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Name</th> </tr> </thead> <tbody> <tr *ngIf=\\\"nodes\\\"> <td>{{nodes.id}} </td> <td>{{nodes.masterUrl}} </td> </tr> </tbody> </table> <div class=\\\"row mt-3\\\"> <div class=\\\"col-md-1\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> </div> <div class=\\\"offset-10 col-md-1\\\"> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> </div> <div *ngIf=\\\"application\\\"> <h2 style=\\\"font-weight: bold\\\"><span>Application</span> {{application.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span>Name</span></dt> <dd> <span>{{application.name}}</span> </dd> <dt><span>Description</span></dt> <dd> <span>{{application.description}}</span> </dd> <dt><span>Version</span></dt> <dd> <span>{{application.version}}</span> </dd> <dt><span>Logo</span></dt> <dd> <div *ngIf=\\\"application.logo\\\"> <a (click)=\\\"openFile(application.logoContentType, application.logo)\\\"> <img [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"max-width: 100%;\\\" alt=\\\"application image\\\"/> </a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRldGFpbC5jb21wb25lbnQuaHRtbD9hMmZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdVQUFnVSxVQUFVLGFBQWEsaUJBQWlCLDJNQUEyTSxxSEFBcUgsV0FBVyxxQ0FBcUMsRUFBRSwySEFBMkgseUlBQXlJLGdCQUFnQiwrSEFBK0gsa0JBQWtCLDZEQUE2RCx5QkFBeUIseURBQXlELHFCQUFxQiw4TUFBOE0sc0RBQXNELGlMQUFpTCwyRUFBMkUsV0FBVyxpREFBaUQsRUFBRSwySEFBMkgiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRleHQtY2VudGVyIGxpZ2h0Ymx1ZVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDx0aGVhZCBjbGFzcz1cXFwidGhlYWQtbGlnaHRcXFwiPiA8dHI+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIiBzY29wZT1cXFwiY29sXFxcIj5BcHBsaWNhdGlvbjwvdGg+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIiBzY29wZT1cXFwiY29sXFxcIj5OYW1lPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nSWY9XFxcIm5vZGVzXFxcIj4gPHRkPnt7bm9kZXMuaWR9fSA8L3RkPiA8dGQ+e3tub2Rlcy5tYXN0ZXJVcmx9fSA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8ZGl2IGNsYXNzPVxcXCJyb3cgbXQtM1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwib2Zmc2V0LTEwIGNvbC1tZC0xXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnbm9kZXMvJysgbm9kZXMuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJhcHBsaWNhdGlvblxcXCI+IDxoMiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGRcXFwiPjxzcGFuPkFwcGxpY2F0aW9uPC9zcGFuPiB7e2FwcGxpY2F0aW9uLmlkfX08L2gyPiA8aHI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuPk5hbWU8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e2FwcGxpY2F0aW9uLm5hbWV9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3thcHBsaWNhdGlvbi5kZXNjcmlwdGlvbn19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+VmVyc2lvbjwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7YXBwbGljYXRpb24udmVyc2lvbn19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+TG9nbzwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcImFwcGxpY2F0aW9uLmxvZ29cXFwiPiA8YSAoY2xpY2spPVxcXCJvcGVuRmlsZShhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGUsIGFwcGxpY2F0aW9uLmxvZ28pXFxcIj4gPGltZyBbc3JjXT1cXFwiJ2RhdGE6JyArIGFwcGxpY2F0aW9uLmxvZ29Db250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBhcHBsaWNhdGlvbi5sb2dvXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOiAxMDAlO1xcXCIgYWx0PVxcXCJhcHBsaWNhdGlvbiBpbWFnZVxcXCIvPiA8L2E+IDwvZGl2PiA8L2RkPiA8L2RsPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2FwcGxpY2F0aW9uLycrIGFwcGxpY2F0aW9uLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application-detail.component.html\n");

/***/ })

})