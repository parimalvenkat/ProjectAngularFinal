webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"all-space\\\"> <div class=\\\"breadcrumb-container\\\"> <ol class=\\\"breadcrumb\\\"> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"false\\\"> <a routerLink=\\\"/\\\">Home</a> </li> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"true\\\"> <a><span>Applications</span></a> </li> </ol> </div> <div class=\\\"page-title-container\\\"> <div class=\\\"page-title-column1\\\"> <h4 class=\\\"page-title-column1-title index-font\\\">Application</h4> <p class=\\\"page-title-helptext\\\">Create or view Application</p> </div> <div class=\\\"page-title-column2\\\" align=\\\"right\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"search\\\" style=\\\"height: 38px;width: 30%;display: inline-block;border-radius: 0px\\\" (keydown)=\\\"searchItem()\\\" [(ngModel)]=\\\"search\\\"> <button type=\\\"reset\\\" (click)=\\\"loadAll()\\\" onclick=\\\"document.getElementById('search').value = ''\\\" class=\\\"btn btn-primary fa fa-close addbtn btn-sm\\\" style=\\\"position:relative;left:-5px;height: 38px;top: -1px;margin-right: 15px;max-width: 35px;margin-bottom: 3px;border-radius: 0px;\\\"> </button> <button style=\\\"position: relative;top: -3px;\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"button\\\" data-toggle=\\\"modal\\\" data-target=\\\"#poper\\\" [routerLink]=\\\"['/', { outlets: { popup: ['application-new'] } }]\\\" class=\\\"btn btn-primary addbtn float_right\\\"><i class=\\\"fa fa-plus-circle\\\" aria-hidden=\\\"true\\\"></i> Import Application</button> </div> </div> <jhi-alert></jhi-alert> <div class=\\\"row\\\" style=\\\"margin-left: 50px\\\"> <div class=\\\"col-sm-3 mb-4\\\" *ngFor=\\\"let application of applications ;trackBy: trackId\\\"> <div class=\\\"card\\\" style=\\\"border-color: #00BCD4\\\"> <img onerror=\\\"this.onerror=null;this.src='https://i.imgur.com/T1Wfiis.png';\\\" class=\\\"card-img-top\\\" [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"padding: 20px;width: 100%;height: 130px\\\"> <div class=\\\"card-body added-card\\\"> <h3 class=\\\"card-title m-0 paricolor colorblue\\\" style=\\\"font-family: Roboto, sans-serif;font-style: normal;font-weight:bold\\\">{{application.name}} <span class=\\\"badge badge-pill badge-info pull-right\\\">{{application.version}}</span> </h3> <p class=\\\"card-text samplecolor\\\" style=\\\"height: 90px; overflow: auto\\\">{{application.description}}</p> </div> <div class=\\\"card-footer newclass\\\"> <div class=\\\"float-left\\\"> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['../application', application.id ]\\\" class=\\\"btn btn-info btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"view\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-eye\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"edit\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-pencil\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" (click)=\\\"cloneApplication(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"clone\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-clone\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-danger btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"delete\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-remove\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" (click)=\\\"downloadJSON(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"export application\\\" style=\\\"cursor:pointer\\\"> <span class=\\\"fa fa-download\\\"></span> </button> </div> <div class=\\\"float-right\\\"> <button *ngIf=\\\"{{application.deployed}}\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment-new-app/' + application.id } }]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-cog\\\"></span> <span class=\\\"d-none d-md-inline\\\">Deploy</span> </button> </div> </div> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sPzFiY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOHFCQUE4cUIsV0FBVyxzQkFBc0IsNFBBQTRQLFVBQVUsYUFBYSxVQUFVLG1CQUFtQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixpREFBaUQsVUFBVSx5SUFBeUksV0FBVyw2QkFBNkIsRUFBRSxtU0FBbVMsMEdBQTBHLDJDQUEyQyw0RUFBNEUsb0RBQW9ELFlBQVksK0lBQStJLG1CQUFtQixxQkFBcUIsa0JBQWtCLDBEQUEwRCxxQkFBcUIsc0VBQXNFLG9CQUFvQix5QkFBeUIsb2JBQW9iLFdBQVcsaURBQWlELEVBQUUsb2lCQUFvaUIsV0FBVyxtREFBbUQsRUFBRSxraEJBQWtoQixzQkFBc0IseUNBQXlDLFdBQVcsZ0RBQWdELEVBQUUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFsbC1zcGFjZVxcXCI+IDxkaXYgY2xhc3M9XFxcImJyZWFkY3J1bWItY29udGFpbmVyXFxcIj4gPG9sIGNsYXNzPVxcXCJicmVhZGNydW1iXFxcIj4gPGxpIGNsYXNzPVxcXCJicmVhZGNydW1iLXN0eWxlXFxcIiBbY2xhc3MuYWN0aXZlXT1cXFwiZmFsc2VcXFwiPiA8YSByb3V0ZXJMaW5rPVxcXCIvXFxcIj5Ib21lPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItc3R5bGVcXFwiIFtjbGFzcy5hY3RpdmVdPVxcXCJ0cnVlXFxcIj4gPGE+PHNwYW4+QXBwbGljYXRpb25zPC9zcGFuPjwvYT4gPC9saT4gPC9vbD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZS1jb2x1bW4xXFxcIj4gPGg0IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbHVtbjEtdGl0bGUgaW5kZXgtZm9udFxcXCI+QXBwbGljYXRpb248L2g0PiA8cCBjbGFzcz1cXFwicGFnZS10aXRsZS1oZWxwdGV4dFxcXCI+Q3JlYXRlIG9yIHZpZXcgQXBwbGljYXRpb248L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbHVtbjJcXFwiIGFsaWduPVxcXCJyaWdodFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzZWFyY2hcXFwiIGlkPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJzZWFyY2hcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6IDM4cHg7d2lkdGg6IDMwJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogMHB4XFxcIiAoa2V5ZG93bik9XFxcInNlYXJjaEl0ZW0oKVxcXCIgWyhuZ01vZGVsKV09XFxcInNlYXJjaFxcXCI+IDxidXR0b24gdHlwZT1cXFwicmVzZXRcXFwiIChjbGljayk9XFxcImxvYWRBbGwoKVxcXCIgb25jbGljaz1cXFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlID0gJydcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmEgZmEtY2xvc2UgYWRkYnRuIGJ0bi1zbVxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6LTVweDtoZWlnaHQ6IDM4cHg7dG9wOiAtMXB4O21hcmdpbi1yaWdodDogMTVweDttYXgtd2lkdGg6IDM1cHg7bWFyZ2luLWJvdHRvbTogM3B4O2JvcmRlci1yYWRpdXM6IDBweDtcXFwiPiA8L2J1dHRvbj4gPGJ1dHRvbiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTNweDtcXFwiICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIlsnUk9MRV9BRE1JTicsJ1JPTEVfVVNFUiddXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtdG9nZ2xlPVxcXCJtb2RhbFxcXCIgZGF0YS10YXJnZXQ9XFxcIiNwb3BlclxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnYXBwbGljYXRpb24tbmV3J10gfSB9XVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBhZGRidG4gZmxvYXRfcmlnaHRcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzLWNpcmNsZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gSW1wb3J0IEFwcGxpY2F0aW9uPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6IDUwcHhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tMyBtYi00XFxcIiAqbmdGb3I9XFxcImxldCBhcHBsaWNhdGlvbiBvZiBhcHBsaWNhdGlvbnMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwiYm9yZGVyLWNvbG9yOiAjMDBCQ0Q0XFxcIj4gPGltZyBvbmVycm9yPVxcXCJ0aGlzLm9uZXJyb3I9bnVsbDt0aGlzLnNyYz0naHR0cHM6Ly9pLmltZ3VyLmNvbS9UMVdmaWlzLnBuZyc7XFxcIiBjbGFzcz1cXFwiY2FyZC1pbWctdG9wXFxcIiBbc3JjXT1cXFwiJ2RhdGE6JyArIGFwcGxpY2F0aW9uLmxvZ29Db250ZW50VHlwZSArICc7YmFzZTY0LCcgKyBhcHBsaWNhdGlvbi5sb2dvXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMjBweDt3aWR0aDogMTAwJTtoZWlnaHQ6IDEzMHB4XFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5IGFkZGVkLWNhcmRcXFwiPiA8aDMgY2xhc3M9XFxcImNhcmQtdGl0bGUgbS0wIHBhcmljb2xvciBjb2xvcmJsdWVcXFwiIHN0eWxlPVxcXCJmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDpib2xkXFxcIj57e2FwcGxpY2F0aW9uLm5hbWV9fSA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1pbmZvIHB1bGwtcmlnaHRcXFwiPnt7YXBwbGljYXRpb24udmVyc2lvbn19PC9zcGFuPiA8L2gzPiA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0IHNhbXBsZWNvbG9yXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiA5MHB4OyBvdmVyZmxvdzogYXV0b1xcXCI+e3thcHBsaWNhdGlvbi5kZXNjcmlwdGlvbn19PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1mb290ZXIgbmV3Y2xhc3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1sZWZ0XFxcIj4gPGJ1dHRvbiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2FwcGxpY2F0aW9uJywgYXBwbGljYXRpb24uaWQgXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwidmlld1xcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnYXBwbGljYXRpb24vJysgYXBwbGljYXRpb24uaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZWRpdFxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImNsb25lQXBwbGljYXRpb24oYXBwbGljYXRpb24pXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiIHRpdGxlPVxcXCJjbG9uZVxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jbG9uZVxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdhcHBsaWNhdGlvbi8nKyBhcHBsaWNhdGlvbi5pZCArICcvZGVsZXRlJ30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZGVsZXRlXFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwiZG93bmxvYWRKU09OKGFwcGxpY2F0aW9uKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZXhwb3J0IGFwcGxpY2F0aW9uXFxcIiBzdHlsZT1cXFwiY3Vyc29yOnBvaW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZG93bmxvYWRcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1yaWdodFxcXCI+IDxidXR0b24gKm5nSWY9XFxcInt7YXBwbGljYXRpb24uZGVwbG95ZWR9fVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2RlcGxveW1lbnQtbmV3LWFwcC8nICsgYXBwbGljYXRpb24uaWQgfSB9XVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY29nXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiPkRlcGxveTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application.component.html\n");

/***/ })

})