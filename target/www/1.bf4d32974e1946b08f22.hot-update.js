webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"all-space\\\"> <div class=\\\"breadcrumb-container\\\"> <ol class=\\\"breadcrumb\\\"> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"false\\\"> <a routerLink=\\\"/\\\">Home</a> </li> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"true\\\"> <a><span>Applications</span></a> </li> </ol> </div> <div class=\\\"page-title-container\\\"> <div class=\\\"page-title-column1\\\"> <h4 class=\\\"page-title-column1-title index-font\\\">Application</h4> <p class=\\\"page-title-helptext\\\">Create or view Application</p> </div> <div class=\\\"page-title-column2\\\" align=\\\"right\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"search\\\" style=\\\"height: 38px;width: 30%;display: inline-block;border-radius: 0px\\\" (keydown)=\\\"searchItem()\\\" [(ngModel)]=\\\"search\\\"> <button type=\\\"reset\\\" (click)=\\\"loadAll()\\\" onclick=\\\"document.getElementById('search').value = ''\\\" class=\\\"btn btn-primary fa fa-close addbtn btn-sm\\\" style=\\\"position:relative;left:-5px;height: 38px;top: -1px;margin-right: 15px;max-width: 35px;margin-bottom: 3px;border-radius: 0px;\\\"> </button> <button style=\\\"position: relative;top: -3px;\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"button\\\" data-toggle=\\\"modal\\\" data-target=\\\"#poper\\\" [routerLink]=\\\"['/', { outlets: { popup: ['application-new'] } }]\\\" class=\\\"btn btn-primary addbtn float_right\\\"><i class=\\\"fa fa-plus-circle\\\" aria-hidden=\\\"true\\\"></i> Import Application</button> </div> </div> <jhi-alert></jhi-alert> <div class=\\\"row\\\" style=\\\"margin-left: 50px\\\"> <div class=\\\"col-sm-3 mb-4\\\" *ngFor=\\\"let application of applications ;trackBy: trackId\\\"> <div class=\\\"card\\\" style=\\\"border-color: #00BCD4; width: 290px\\\"> <img onerror=\\\"this.onerror=null;this.src='https://i.imgur.com/T1Wfiis.png';\\\" class=\\\"card-img-top\\\" [src]=\\\"'data:' + application.logoContentType + ';base64,' + application.logo\\\" style=\\\"padding: 20px;width: 100%;height: 200px\\\"> <div class=\\\"card-body added-card\\\"> <h3 class=\\\"card-title m-0 paricolor colorblue\\\" style=\\\"font-family: Roboto, sans-serif;font-style: normal;font-weight:bold\\\">{{application.name}} <span class=\\\"badge badge-pill badge-info pull-right\\\">{{application.version}}</span> </h3> <p class=\\\"card-text samplecolor\\\" style=\\\"height: 90px; overflow: auto\\\">{{application.description}}</p> </div> <div class=\\\"card-footer newclass\\\"> <div class=\\\"float-left\\\"> <button *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"submit\\\" [routerLink]=\\\"['../application', application.id ]\\\" class=\\\"btn btn-info btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"view\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-eye\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"edit\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-pencil\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"submit\\\" (click)=\\\"cloneApplication(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"clone\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-clone\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'application/'+ application.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" class=\\\"btn btn-danger btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"delete\\\" style=\\\"cursor: pointer\\\"> <span class=\\\"fa fa-remove\\\"></span> </button> <button *jhiHasAnyAuthority=\\\"['ROLE_ADMIN','ROLE_USER']\\\" type=\\\"submit\\\" (click)=\\\"downloadJSON(application)\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"export application\\\" style=\\\"cursor:pointer\\\"> <span class=\\\"fa fa-download\\\"></span> </button> </div> <div class=\\\"float-right\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment-new-app/' + application.id } }]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-cog\\\"></span> <span class=\\\"d-none d-md-inline\\\">Deploy</span> </button> </div> </div> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sPzFiY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOHFCQUE4cUIsV0FBVyxzQkFBc0IsNFBBQTRQLFVBQVUsYUFBYSxVQUFVLG1CQUFtQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixpREFBaUQsVUFBVSx5SUFBeUksV0FBVyw2QkFBNkIsRUFBRSxtU0FBbVMsc0VBQXNFLGtEQUFrRCwyQ0FBMkMsNEVBQTRFLG9EQUFvRCxZQUFZLCtJQUErSSxtQkFBbUIscUJBQXFCLGtCQUFrQiwwREFBMEQscUJBQXFCLHNFQUFzRSxvQkFBb0IseUJBQXlCLGdkQUFnZCxXQUFXLGlEQUFpRCxFQUFFLGdrQkFBZ2tCLFdBQVcsbURBQW1ELEVBQUUsNGpCQUE0akIsV0FBVyxnREFBZ0QsRUFBRSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWxsLXNwYWNlXFxcIj4gPGRpdiBjbGFzcz1cXFwiYnJlYWRjcnVtYi1jb250YWluZXJcXFwiPiA8b2wgY2xhc3M9XFxcImJyZWFkY3J1bWJcXFwiPiA8bGkgY2xhc3M9XFxcImJyZWFkY3J1bWItc3R5bGVcXFwiIFtjbGFzcy5hY3RpdmVdPVxcXCJmYWxzZVxcXCI+IDxhIHJvdXRlckxpbms9XFxcIi9cXFwiPkhvbWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1zdHlsZVxcXCIgW2NsYXNzLmFjdGl2ZV09XFxcInRydWVcXFwiPiA8YT48c3Bhbj5BcHBsaWNhdGlvbnM8L3NwYW4+PC9hPiA8L2xpPiA8L29sPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicGFnZS10aXRsZS1jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbHVtbjFcXFwiPiA8aDQgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMS10aXRsZSBpbmRleC1mb250XFxcIj5BcHBsaWNhdGlvbjwvaDQ+IDxwIGNsYXNzPVxcXCJwYWdlLXRpdGxlLWhlbHB0ZXh0XFxcIj5DcmVhdGUgb3IgdmlldyBBcHBsaWNhdGlvbjwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMlxcXCIgYWxpZ249XFxcInJpZ2h0XFxcIj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInNlYXJjaFxcXCIgaWQ9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcInNlYXJjaFxcXCIgc3R5bGU9XFxcImhlaWdodDogMzhweDt3aWR0aDogMzAlO2Rpc3BsYXk6IGlubGluZS1ibG9jaztib3JkZXItcmFkaXVzOiAwcHhcXFwiIChrZXlkb3duKT1cXFwic2VhcmNoSXRlbSgpXFxcIiBbKG5nTW9kZWwpXT1cXFwic2VhcmNoXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJyZXNldFxcXCIgKGNsaWNrKT1cXFwibG9hZEFsbCgpXFxcIiBvbmNsaWNrPVxcXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUgPSAnJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYSBmYS1jbG9zZSBhZGRidG4gYnRuLXNtXFxcIiBzdHlsZT1cXFwicG9zaXRpb246cmVsYXRpdmU7bGVmdDotNXB4O2hlaWdodDogMzhweDt0b3A6IC0xcHg7bWFyZ2luLXJpZ2h0OiAxNXB4O21heC13aWR0aDogMzVweDttYXJnaW4tYm90dG9tOiAzcHg7Ym9yZGVyLXJhZGl1czogMHB4O1xcXCI+IDwvYnV0dG9uPiA8YnV0dG9uIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtM3B4O1xcXCIgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX0FETUlOJywnUk9MRV9VU0VSJ11cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLXRhcmdldD1cXFwiI3BvcGVyXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogWydhcHBsaWNhdGlvbi1uZXcnXSB9IH1dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGFkZGJ0biBmbG9hdF9yaWdodFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXMtY2lyY2xlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBJbXBvcnQgQXBwbGljYXRpb248L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDogNTBweFxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1zbS0zIG1iLTRcXFwiICpuZ0Zvcj1cXFwibGV0IGFwcGxpY2F0aW9uIG9mIGFwcGxpY2F0aW9ucyA7dHJhY2tCeTogdHJhY2tJZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJib3JkZXItY29sb3I6ICMwMEJDRDQ7IHdpZHRoOiAyOTBweFxcXCI+IDxpbWcgb25lcnJvcj1cXFwidGhpcy5vbmVycm9yPW51bGw7dGhpcy5zcmM9J2h0dHBzOi8vaS5pbWd1ci5jb20vVDFXZmlpcy5wbmcnO1xcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCIgW3NyY109XFxcIidkYXRhOicgKyBhcHBsaWNhdGlvbi5sb2dvQ29udGVudFR5cGUgKyAnO2Jhc2U2NCwnICsgYXBwbGljYXRpb24ubG9nb1xcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDIwcHg7d2lkdGg6IDEwMCU7aGVpZ2h0OiAyMDBweFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keSBhZGRlZC1jYXJkXFxcIj4gPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlIG0tMCBwYXJpY29sb3IgY29sb3JibHVlXFxcIiBzdHlsZT1cXFwiZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtmb250LXN0eWxlOiBub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZFxcXCI+e3thcHBsaWNhdGlvbi5uYW1lfX0gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtaW5mbyBwdWxsLXJpZ2h0XFxcIj57e2FwcGxpY2F0aW9uLnZlcnNpb259fTwvc3Bhbj4gPC9oMz4gPHAgY2xhc3M9XFxcImNhcmQtdGV4dCBzYW1wbGVjb2xvclxcXCIgc3R5bGU9XFxcImhlaWdodDogOTBweDsgb3ZlcmZsb3c6IGF1dG9cXFwiPnt7YXBwbGljYXRpb24uZGVzY3JpcHRpb259fTwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmQtZm9vdGVyIG5ld2NsYXNzXFxcIj4gPGRpdiBjbGFzcz1cXFwiZmxvYXQtbGVmdFxcXCI+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX0FETUlOJywnUk9MRV9VU0VSJ11cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL2FwcGxpY2F0aW9uJywgYXBwbGljYXRpb24uaWQgXVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mbyBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwidmlld1xcXCIgc3R5bGU9XFxcImN1cnNvcjogcG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX0FETUlOJywnUk9MRV9VU0VSJ11cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdhcHBsaWNhdGlvbi8nKyBhcHBsaWNhdGlvbi5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiIHRpdGxlPVxcXCJlZGl0XFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCJbJ1JPTEVfQURNSU4nLCdST0xFX1VTRVInXVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJjbG9uZUFwcGxpY2F0aW9uKGFwcGxpY2F0aW9uKVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiY2xvbmVcXFwiIHN0eWxlPVxcXCJjdXJzb3I6IHBvaW50ZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtY2xvbmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX0FETUlOJywnUk9MRV9VU0VSJ11cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdhcHBsaWNhdGlvbi8nKyBhcHBsaWNhdGlvbi5pZCArICcvZGVsZXRlJ30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZGVsZXRlXFxcIiBzdHlsZT1cXFwiY3Vyc29yOiBwb2ludGVyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCJbJ1JPTEVfQURNSU4nLCdST0xFX1VTRVInXVxcXCIgdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJkb3dubG9hZEpTT04oYXBwbGljYXRpb24pXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVxcXCIgZGF0YS10b2dnbGU9XFxcInRvb2x0aXBcXFwiIGRhdGEtcGxhY2VtZW50PVxcXCJ0b3BcXFwiIHRpdGxlPVxcXCJleHBvcnQgYXBwbGljYXRpb25cXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1kb3dubG9hZFxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZsb2F0LXJpZ2h0XFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnZGVwbG95bWVudC1uZXctYXBwLycgKyBhcHBsaWNhdGlvbi5pZCB9IH1dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1jb2dcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCI+RGVwbG95PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application.component.html\n");

/***/ })

})