webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/deployment/deployment.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"all-space\\\"> <div class=\\\"breadcrumb-container\\\"> <ol class=\\\"breadcrumb\\\"> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"false\\\"> <a routerLink=\\\"/\\\">Home</a> </li> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"true\\\"> <a><span>Deployments</span></a> </li> </ol> </div> <div class=\\\"page-title-container\\\"> <div class=\\\"page-title-column1\\\"> <h4 class=\\\"page-title-column1-title index-font\\\">Deployment</h4> <p class=\\\"page-title-helptext\\\">Create new application deployments or view existing deployments</p> </div> <div class=\\\"page-title-column2\\\" align=\\\"right\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"search\\\" style=\\\"height: 38px;width: 30%;display: inline-block;border-radius: 0px\\\" (keypress)=\\\"searchItem()\\\" [(ngModel)]=\\\"search\\\"> <button type=\\\"submit\\\" (click)=\\\"clearItems()\\\" class=\\\"btn btn-primary fa fa-close addbtn btn-sm\\\" style=\\\"position:relative;left:-5px;height: 38px;top: -1px;margin-right: 15px;max-width: 35px;margin-bottom: 3px;border-radius: 0px;\\\"> </button> <button style=\\\"position: relative;top: -3px;\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: ['deployment-new'] } }]\\\" class=\\\"btn btn-primary addbtn float_right\\\"><i class=\\\"fa fa-plus-circle\\\" aria-hidden=\\\"true\\\"></i> Create Deployment</button> </div> </div> <jhi-alert></jhi-alert> <div *ngIf=\\\"deployments\\\"> <div class=\\\"container-fluid mt-3\\\" *ngFor=\\\"let deployment of deployments ;trackBy: trackId\\\"> <div class=\\\"row\\\" style=\\\"border: 1px solid #00BCD4\\\"> <div class=\\\"col-md-2\\\" style=\\\"padding:0px\\\"> <div class=\\\"card\\\" style=\\\"border:0;border-right: 1px solid #00BCD4\\\"> <img onerror=\\\"https://i.imgur.com/SBntdac.png\\\" [src]=\\\"'data:' + deployment.deploymentstoApplications.logoContentType + ';base64,' + application.logo\\\" style=\\\"padding: 5px;width: 150px;height: 96px;display: block;margin: 0 auto;\\\"> <div class=\\\"card-footer text-center\\\"> <span class=\\\"colorblue\\\">{{deployment.applications}}</span> </div> </div> {{deployment.applications}} </div> <div class=\\\"col-md-10\\\"> <div class=\\\"row mt-2 lowerborder\\\"> <div class=\\\"col-md-12\\\"> <p class=\\\"page-title-helptext\\\">{{deployment.descriptions}}</p> </div> </div> <div class=\\\"row\\\"> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['../deployment', deployment.id ]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa-eye\\\" style=\\\"color:#00BCD4;font-size: 40px;cursor:pointer;padding-top: 15px;\\\"></i> <h5 style=\\\"color: #00BCD4;font-size: 15px\\\">VIEW</h5> </div> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['/', { outlets: { popup: 'scale-management/' + deployment.id } }]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa-plane\\\"></i> <h5 style=\\\"color: #00BCD4 ;font-size: 15px\\\">SCALE UP</h5> </div> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['/', { outlets: { popup: 'version-management/' + 'upgrade:' + deployment.id } }]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa fa-calendar-plus-o\\\"></i> <h5 style=\\\"color: #00BCD4 ;font-size: 15px\\\">VERSION UPGRADE</h5> </div> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['/', { outlets: { popup: 'version-management/' + 'degrade:' + deployment.id } }]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa fa-calendar-minus-o\\\"></i> <h5 style=\\\"color: #00BCD4;font-size: 15px\\\">VERSION DOWNGRADE</h5> </div> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment/'+ deployment.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa-pencil-square-o\\\"></i> <h5 style=\\\"color: #00BCD4 ;font-size: 15px\\\">EDIT</h5> </div> <div class=\\\"col-md-2 text-center hovdiv\\\" style=\\\"cursor: pointer;\\\" onclick=\\\"this.navigateByUrl()\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment/'+ deployment.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\"> <i class=\\\"fa fa-trash-o\\\"></i> <h5 style=\\\"color: #00BCD4 ;font-size: 15px\\\">DELETE</h5> </div> </div> </div> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlcGxveW1lbnQvZGVwbG95bWVudC5jb21wb25lbnQuaHRtbD9jZTQyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGl0QkFBaXRCLFdBQVcsc0JBQXNCLHdNQUF3TSxVQUFVLGFBQWEsVUFBVSxtQkFBbUIsZ0JBQWdCLG1CQUFtQixtQkFBbUIsaURBQWlELFVBQVUsNEZBQTRGLFdBQVcsNEJBQTRCLEVBQUUsbVJBQW1SLGdLQUFnSywrSkFBK0osbURBQW1ELGFBQWEsYUFBYSxlQUFlLGVBQWUsd0VBQXdFLHlCQUF5Qix3QkFBd0IseUJBQXlCLG9JQUFvSSx5QkFBeUIsMEdBQTBHLHlKQUF5SixnQkFBZ0IsZUFBZSxrQkFBa0IsbUNBQW1DLHNHQUFzRywwREFBMEQsV0FBVyw2Q0FBNkMsRUFBRSxtRkFBbUYsMEdBQTBHLDBEQUEwRCxXQUFXLDREQUE0RCxFQUFFLGdHQUFnRyxpSEFBaUgsMERBQTBELFdBQVcsNERBQTRELEVBQUUsZ0dBQWdHLG1IQUFtSCwwREFBMEQsV0FBVywrQ0FBK0MsRUFBRSw2RkFBNkYsc0dBQXNHLDBEQUEwRCxXQUFXLGlEQUFpRCxFQUFFLHFGQUFxRiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGVwbG95bWVudC9kZXBsb3ltZW50LmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImFsbC1zcGFjZVxcXCI+IDxkaXYgY2xhc3M9XFxcImJyZWFkY3J1bWItY29udGFpbmVyXFxcIj4gPG9sIGNsYXNzPVxcXCJicmVhZGNydW1iXFxcIj4gPGxpIGNsYXNzPVxcXCJicmVhZGNydW1iLXN0eWxlXFxcIiBbY2xhc3MuYWN0aXZlXT1cXFwiZmFsc2VcXFwiPiA8YSByb3V0ZXJMaW5rPVxcXCIvXFxcIj5Ib21lPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItc3R5bGVcXFwiIFtjbGFzcy5hY3RpdmVdPVxcXCJ0cnVlXFxcIj4gPGE+PHNwYW4+RGVwbG95bWVudHM8L3NwYW4+PC9hPiA8L2xpPiA8L29sPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZS1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbHVtbjFcXFwiPiA8aDQgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMS10aXRsZSBpbmRleC1mb250XFxcIj5EZXBsb3ltZW50PC9oND4gPHAgY2xhc3M9XFxcInBhZ2UtdGl0bGUtaGVscHRleHRcXFwiPkNyZWF0ZSBuZXcgYXBwbGljYXRpb24gZGVwbG95bWVudHMgb3IgdmlldyBleGlzdGluZyBkZXBsb3ltZW50czwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMlxcXCIgYWxpZ249XFxcInJpZ2h0XFxcIj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNlYXJjaFxcXCIgaWQ9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcInNlYXJjaFxcXCIgc3R5bGU9XFxcImhlaWdodDogMzhweDt3aWR0aDogMzAlO2Rpc3BsYXk6IGlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOiAwcHhcXFwiIChrZXlwcmVzcyk9XFxcInNlYXJjaEl0ZW0oKVxcXCIgWyhuZ01vZGVsKV09XFxcInNlYXJjaFxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbGVhckl0ZW1zKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgZmEgZmEtY2xvc2UgYWRkYnRuIGJ0bi1zbVxcXCIgc3R5bGU9XFxcInBvc2l0aW9uOnJlbGF0aXZlO2xlZnQ6LTVweDtoZWlnaHQ6IDM4cHg7dG9wOiAtMXB4O21hcmdpbi1yaWdodDogMTVweDttYXgtd2lkdGg6IDM1cHg7bWFyZ2luLWJvdHRvbTogM3B4O2JvcmRlci1yYWRpdXM6IDBweDtcXFwiPiA8L2J1dHRvbj4gPGJ1dHRvbiBzdHlsZT1cXFwicG9zaXRpb246IHJlbGF0aXZlO3RvcDogLTNweDtcXFwiICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIlsnUk9MRV9BRE1JTicsJ1JPTEVfVVNFUiddXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ2RlcGxveW1lbnQtbmV3J10gfSB9XVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBhZGRidG4gZmxvYXRfcmlnaHRcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzLWNpcmNsZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gQ3JlYXRlIERlcGxveW1lbnQ8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2ICpuZ0lmPVxcXCJkZXBsb3ltZW50c1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZCBtdC0zXFxcIiAqbmdGb3I9XFxcImxldCBkZXBsb3ltZW50IG9mIGRlcGxveW1lbnRzIDt0cmFja0J5OiB0cmFja0lkXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwiYm9yZGVyOiAxcHggc29saWQgIzAwQkNENFxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yXFxcIiBzdHlsZT1cXFwicGFkZGluZzowcHhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwiYm9yZGVyOjA7Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwQkNENFxcXCI+IDxpbWcgb25lcnJvcj1cXFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TQm50ZGFjLnBuZ1xcXCIgW3NyY109XFxcIidkYXRhOicgKyBkZXBsb3ltZW50LmRlcGxveW1lbnRzdG9BcHBsaWNhdGlvbnMubG9nb0NvbnRlbnRUeXBlICsgJztiYXNlNjQsJyArIGFwcGxpY2F0aW9uLmxvZ29cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiA1cHg7d2lkdGg6IDE1MHB4O2hlaWdodDogOTZweDtkaXNwbGF5OiBibG9jazttYXJnaW46IDAgYXV0bztcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkLWZvb3RlciB0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiPnt7ZGVwbG95bWVudC5hcHBsaWNhdGlvbnN9fTwvc3Bhbj4gPC9kaXY+IDwvZGl2PiB7e2RlcGxveW1lbnQuYXBwbGljYXRpb25zfX0gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMFxcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBtdC0yIGxvd2VyYm9yZGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTEyXFxcIj4gPHAgY2xhc3M9XFxcInBhZ2UtdGl0bGUtaGVscHRleHRcXFwiPnt7ZGVwbG95bWVudC5kZXNjcmlwdGlvbnN9fTwvcD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMiB0ZXh0LWNlbnRlciBob3ZkaXZcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXI7XFxcIiBvbmNsaWNrPVxcXCJ0aGlzLm5hdmlnYXRlQnlVcmwoKVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2RlcGxveW1lbnQnLCBkZXBsb3ltZW50LmlkIF1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIiBzdHlsZT1cXFwiY29sb3I6IzAwQkNENDtmb250LXNpemU6IDQwcHg7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZy10b3A6IDE1cHg7XFxcIj48L2k+IDxoNSBzdHlsZT1cXFwiY29sb3I6ICMwMEJDRDQ7Zm9udC1zaXplOiAxNXB4XFxcIj5WSUVXPC9oNT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yIHRleHQtY2VudGVyIGhvdmRpdlxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlcjtcXFwiIG9uY2xpY2s9XFxcInRoaXMubmF2aWdhdGVCeVVybCgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3NjYWxlLW1hbmFnZW1lbnQvJyArIGRlcGxveW1lbnQuaWQgfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1wbGFuZVxcXCI+PC9pPiA8aDUgc3R5bGU9XFxcImNvbG9yOiAjMDBCQ0Q0IDtmb250LXNpemU6IDE1cHhcXFwiPlNDQUxFIFVQPC9oNT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yIHRleHQtY2VudGVyIGhvdmRpdlxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlcjtcXFwiIG9uY2xpY2s9XFxcInRoaXMubmF2aWdhdGVCeVVybCgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3ZlcnNpb24tbWFuYWdlbWVudC8nICsgJ3VwZ3JhZGU6JyArIGRlcGxveW1lbnQuaWQgfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYSBmYS1jYWxlbmRhci1wbHVzLW9cXFwiPjwvaT4gPGg1IHN0eWxlPVxcXCJjb2xvcjogIzAwQkNENCA7Zm9udC1zaXplOiAxNXB4XFxcIj5WRVJTSU9OIFVQR1JBREU8L2g1PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTIgdGV4dC1jZW50ZXIgaG92ZGl2XFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyO1xcXCIgb25jbGljaz1cXFwidGhpcy5uYXZpZ2F0ZUJ5VXJsKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAndmVyc2lvbi1tYW5hZ2VtZW50LycgKyAnZGVncmFkZTonICsgZGVwbG95bWVudC5pZCB9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhIGZhLWNhbGVuZGFyLW1pbnVzLW9cXFwiPjwvaT4gPGg1IHN0eWxlPVxcXCJjb2xvcjogIzAwQkNENDtmb250LXNpemU6IDE1cHhcXFwiPlZFUlNJT04gRE9XTkdSQURFPC9oNT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC0yIHRleHQtY2VudGVyIGhvdmRpdlxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlcjtcXFwiIG9uY2xpY2s9XFxcInRoaXMubmF2aWdhdGVCeVVybCgpXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2RlcGxveW1lbnQvJysgZGVwbG95bWVudC5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXBlbmNpbC1zcXVhcmUtb1xcXCI+PC9pPiA8aDUgc3R5bGU9XFxcImNvbG9yOiAjMDBCQ0Q0IDtmb250LXNpemU6IDE1cHhcXFwiPkVESVQ8L2g1PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTIgdGV4dC1jZW50ZXIgaG92ZGl2XFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyO1xcXCIgb25jbGljaz1cXFwidGhpcy5uYXZpZ2F0ZUJ5VXJsKClcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZGVwbG95bWVudC8nKyBkZXBsb3ltZW50LmlkICsgJy9kZWxldGUnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1vXFxcIj48L2k+IDxoNSBzdHlsZT1cXFwiY29sb3I6ICMwMEJDRDQgO2ZvbnQtc2l6ZTogMTVweFxcXCI+REVMRVRFPC9oNT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXBsb3ltZW50L2RlcGxveW1lbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXBsb3ltZW50L2RlcGxveW1lbnQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/deployment/deployment.component.html\n");

/***/ })

})