webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"all-space\\\"> <div class=\\\"breadcrumb-container\\\"> <ol class=\\\"breadcrumb\\\"> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"false\\\"> <a routerLink=\\\"/\\\">Home</a> </li> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"true\\\"> <a><span>Applications</span></a> </li> </ol> </div> <div class=\\\"page-title-container\\\"> <div class=\\\"page-title-column1\\\"> <h4 class=\\\"page-title-column1-title index-font\\\">Application</h4> <p class=\\\"page-title-helptext\\\">Create or view Application</p> </div> <div class=\\\"page-title-column2\\\" align=\\\"right\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"search\\\" style=\\\"height: 38px;width: 30%;display: inline-block;border-radius: 0px\\\" (keydown)=\\\"searchItem()\\\" [(ngModel)]=\\\"search\\\"> <button type=\\\"reset\\\" (click)=\\\"loadAll()\\\" onclick=\\\"document.getElementById('search').value = ''\\\" class=\\\"btn btn-primary fa fa-close addbtn btn-sm\\\" style=\\\"position:relative;left:-5px;height: 38px;top: -1px;margin-right: 15px;max-width: 35px;margin-bottom: 3px;border-radius: 0px;\\\"> </button> <button style=\\\"position: relative;top: -3px;\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"button\\\" data-toggle=\\\"modal\\\" data-target=\\\"#poper\\\" [routerLink]=\\\"['/', { outlets: { popup: ['application-new'] } }]\\\" class=\\\"btn btn-primary addbtn float_right\\\"><i class=\\\"fa fa-plus-circle\\\" aria-hidden=\\\"true\\\"></i> Import Application</button> </div> </div> <jhi-alert></jhi-alert> <div class=\\\"row\\\" style=\\\"margin-left: 50px\\\"> <div class=\\\"col-sm-3 mb-4\\\" *ngFor=\\\"let application of applications ;trackBy: trackId\\\"> <div class=\\\"card\\\" style=\\\"border-color: #00BCD4\\\"> <img onerror=\\\"this.onerror=null;this.src='https://i.imgur.com/T1Wfiis.png';\\\" class=\\\"card-img-top\\\" [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"padding: 20px;width: 100%;height: 130px\\\"> <div class=\\\"card-body added-card\\\"> <h3 class=\\\"card-title m-0 paricolor colorblue\\\" style=\\\"font-family: Roboto, sans-serif;font-style: normal;font-weight:bold\\\">{{application.name}} <span class=\\\"badge badge-pill badge-info pull-right\\\">{{application.version}}</span> </h3> <p class=\\\"card-text samplecolor\\\" style=\\\"height: 90px; overflow: auto\\\">{{application.description}}</p> </div> <div class=\\\"card-footer\\\"> <div class=\\\"float-left\\\"> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['../application', application.id ]\\\" class=\\\"btn btn-info btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"view\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-eye\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"edit\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-pencil\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" (click)=\\\"cloneApplication(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"clone\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-clone\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-danger btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"delete\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-remove\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"submit\\\" (click)=\\\"downloadJSON(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"export application\\\" style=\\\"cursor:pointer\\\"> <span class=\\\"fa fa-download\\\"></span> </button> </div> <div class=\\\"float-right\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment-new-app/' + application.id } }]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-cog\\\"></span> <span class=\\\"d-none d-md-inline\\\">Deploy</span> </button> </div> </div> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sPzFiY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOHFCQUE4cUIsV0FBVyxzQkFBc0IsNFBBQTRQLFVBQVUsYUFBYSxVQUFVLG1CQUFtQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixpREFBaUQsVUFBVSx5SUFBeUksV0FBVyw2QkFBNkIsRUFBRSxtU0FBbVMsMEdBQTBHLDJDQUEyQyw0RUFBNEUsb0RBQW9ELFlBQVksK0lBQStJLG1CQUFtQixxQkFBcUIsa0JBQWtCLDBEQUEwRCxxQkFBcUIsc0VBQXNFLG9CQUFvQix5QkFBeUIsMmFBQTJhLFdBQVcsaURBQWlELEVBQUUsb2lCQUFvaUIsV0FBVyxtREFBbUQsRUFBRSw4aUJBQThpQixXQUFXLGdEQUFnRCxFQUFFIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbGwtc3BhY2VcXFwiPiA8ZGl2IGNsYXNzPVxcXCJicmVhZGNydW1iLWNvbnRhaW5lclxcXCI+IDxvbCBjbGFzcz1cXFwiYnJlYWRjcnVtYlxcXCI+IDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1zdHlsZVxcXCIgW2NsYXNzLmFjdGl2ZV09XFxcImZhbHNlXFxcIj4gPGEgcm91dGVyTGluaz1cXFwiL1xcXCI+SG9tZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJicmVhZGNydW1iLXN0eWxlXFxcIiBbY2xhc3MuYWN0aXZlXT1cXFwidHJ1ZVxcXCI+IDxhPjxzcGFuPkFwcGxpY2F0aW9uczwvc3Bhbj48L2E+IDwvbGk+IDwvb2w+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMVxcXCI+IDxoNCBjbGFzcz1cXFwicGFnZS10aXRsZS1jb2x1bW4xLXRpdGxlIGluZGV4LWZvbnRcXFwiPkFwcGxpY2F0aW9uPC9oND4gPHAgY2xhc3M9XFxcInBhZ2UtdGl0bGUtaGVscHRleHRcXFwiPkNyZWF0ZSBvciB2aWV3IEFwcGxpY2F0aW9uPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZS1jb2x1bW4yXFxcIiBhbGlnbj1cXFwicmlnaHRcXFwiPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwic2VhcmNoXFxcIiBpZD1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwic2VhcmNoXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OiAzOHB4O3dpZHRoOiAzMCU7ZGlzcGxheTogaW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6IDBweFxcXCIgKGtleWRvd24pPVxcXCJzZWFyY2hJdGVtKClcXFwiIFsobmdNb2RlbCldPVxcXCJzZWFyY2hcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInJlc2V0XFxcIiAoY2xpY2spPVxcXCJsb2FkQWxsKClcXFwiIG9uY2xpY2s9XFxcImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZSA9ICcnXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZhIGZhLWNsb3NlIGFkZGJ0biBidG4tc21cXFwiIHN0eWxlPVxcXCJwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0Oi01cHg7aGVpZ2h0OiAzOHB4O3RvcDogLTFweDttYXJnaW4tcmlnaHQ6IDE1cHg7bWF4LXdpZHRoOiAzNXB4O21hcmdpbi1ib3R0b206IDNweDtib3JkZXItcmFkaXVzOiAwcHg7XFxcIj4gPC9idXR0b24+IDxidXR0b24gc3R5bGU9XFxcInBvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IC0zcHg7XFxcIiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCJbJ1JPTEVfQURNSU4nLCdST0xFX1VTRVInXVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjcG9wZXJcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ2FwcGxpY2F0aW9uLW5ldyddIH0gfV1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYWRkYnRuIGZsb2F0X3JpZ2h0XFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtcGx1cy1jaXJjbGVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IEltcG9ydCBBcHBsaWNhdGlvbjwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDxqaGktYWxlcnQ+PC9qaGktYWxlcnQ+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1MHB4XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLXNtLTMgbWItNFxcXCIgKm5nRm9yPVxcXCJsZXQgYXBwbGljYXRpb24gb2YgYXBwbGljYXRpb25zIDt0cmFja0J5OiB0cmFja0lkXFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgc3R5bGU9XFxcImJvcmRlci1jb2xvcjogIzAwQkNENFxcXCI+IDxpbWcgb25lcnJvcj1cXFwidGhpcy5vbmVycm9yPW51bGw7dGhpcy5zcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vVDFXZmlpcy5wbmcnO1xcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgW3NyY109XFxcIidkYXRhOicgKyBhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGUgKyAnO2Jhc2U2NCwnICsgYXBwbGljYXRpb24ubG9nb1xcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDIwcHg7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMzBweFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBhZGRlZC1jYXJkXFxcIj4gPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlIG0tMCBwYXJpY29sb3IgY29sb3JibHVlXFxcIiBzdHlsZT1cXFwiZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtmb250LXN0eWxlOiBub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZFxcXCI+e3thcHBsaWNhdGlvbi5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyBwdWxsLXJpZ2h0XFxcIj57e2FwcGxpY2F0aW9uLnZlcnNpb259fTwvc3Bhbj4gPC9oMz4gPHAgY2xhc3M9XFxcImNhcmQtdGV4dCBzYW1wbGVjb2xvclxcXCIgc3R5bGU9XFxcImhlaWdodDogOTBweDsgb3ZlcmZsb3c6IGF1dG9cXFwiPnt7YXBwbGljYXRpb24uZGVzY3JpcHRpb259fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiZmxvYXQtbGVmdFxcXCI+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9hcHBsaWNhdGlvbicsIGFwcGxpY2F0aW9uLmlkIF1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcInZpZXdcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ2FwcGxpY2F0aW9uLycrIGFwcGxpY2F0aW9uLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcImVkaXRcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9uZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiY2xvbmVcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvbmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnYXBwbGljYXRpb24vJysgYXBwbGljYXRpb24uaWQgKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcImRlbGV0ZVxcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcImRvd25sb2FkSlNPTihhcHBsaWNhdGlvbilcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcImV4cG9ydCBhcHBsaWNhdGlvblxcXCIgc3R5bGU9XFxcImN1cnNvcjpwb2ludGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWRvd25sb2FkXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZmxvYXQtcmlnaHRcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdkZXBsb3ltZW50LW5ldy1hcHAvJyArIGFwcGxpY2F0aW9uLmlkIH0gfV1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWNvZ1xcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIj5EZXBsb3k8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application.component.html\n");

/***/ })

})