webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/repositories/repositories.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"all-space\\\"> <div class=\\\"breadcrumb-container\\\"> <ol class=\\\"breadcrumb\\\"> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"false\\\"> <a routerLink=\\\"/\\\">Home</a> </li> <li class=\\\"breadcrumb-style\\\" [class.active]=\\\"true\\\"> <a><span>Repositories</span></a> </li> </ol> </div> <div class=\\\"page-title-container\\\"> <div class=\\\"page-title-column1\\\"> <h4 class=\\\"page-title-column1-title index-font\\\">Repositories</h4> <p class=\\\"page-title-helptext\\\">Create or view Repositories</p> </div> <div class=\\\"page-title-column2\\\" align=\\\"right\\\"> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"search\\\" id=\\\"search\\\" placeholder=\\\"search\\\" style=\\\"height: 38px;width: 30%;display: inline-block;border-radius: 0px\\\" (keypress)=\\\"searchItem()\\\" [(ngModel)]=\\\"search\\\"> <button type=\\\"reset\\\" onclick=\\\"document.getElementById('search').value = ''\\\" class=\\\"btn btn-primary fa fa-close addbtn btn-sm\\\" style=\\\"position:relative;left:-5px;height: 38px;top: -1px;margin-right: 15px;max-width: 35px;margin-bottom: 3px;border-radius: 0px;\\\"> </button> <button style=\\\"position: relative;top: -3px;\\\" *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: ['repositories-new'] } }]\\\" class=\\\"btn btn-primary addbtn float_right\\\"><i class=\\\"fa fa-plus-circle\\\" aria-hidden=\\\"true\\\"></i> Create Repositories</button> </div> </div> <jhi-alert></jhi-alert> <div class=\\\"row\\\" style=\\\"margin: 0 30px\\\" *ngIf=\\\"repositories\\\"> </div> <table class=\\\"table width100pct\\\" style=\\\"margin-bottom:0; border: 1px solid #e4e3e3;\\\" id=\\\"optimizer\\\"> <thead> <tr> <th class=\\\"colorblue\\\"><span>ID</span></th> <th class=\\\"colorblue\\\"><span>Protocol</span></th> <th class=\\\"colorblue\\\"><span>Hostname</span></th> <th class=\\\"colorblue\\\"><span>Port</span></th> <th class=\\\"colorblue\\\"><span>User Name</span></th> <th class=\\\"colorblue\\\"><span>Password</span></th> <th class=\\\"colorblue\\\"><span>Secret</span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let repositories of repositories ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['../repositories', repositories.id ]\\\">{{repositories.id}}</a></td> <td>{{repositories.protocol}}</td> <td>{{repositories.hostname}}</td> <td>{{repositories.port}}</td> <td>{{repositories.userName}}</td> <td>{{repositories.password}}</td> <td>{{repositories.secret}}</td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['../repositories', repositories.id ]\\\" class=\\\"btn btn-info btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"view\\\" style=\\\"background-color:#03e8f2; border-color:#03e8f2; cursor:pointer\\\"> <span class=\\\"fa fa-eye\\\"></span> </button> <button type=\\\"submit\\\" *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" [routerLink]=\\\"['/', { outlets: { popup: 'repositories/'+ repositories.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"edit\\\" style=\\\"background-color:#03c2f2;border-color:#03c2f2; cursor:pointer;\\\"> <span class=\\\"fa fa-pencil\\\"></span> </button> <button type=\\\"submit\\\" *jhiHasAnyAuthority=\\\"'ROLE_ADMIN'\\\" [routerLink]=\\\"['/', { outlets: { popup: 'repositories/'+ repositories.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-danger btn-sm\\\" data-toggle=\\\"tooltip\\\" data-placement=\\\"top\\\" title=\\\"delete\\\" style=\\\"background-color:#039ef2;border-color:#039ef2;cursor:pointer;\\\"> <span class=\\\"fa fa-remove\\\"></span> </button> </div> </td> </tr> </tbody> </table> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50Lmh0bWw/ZDIzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnckJBQWdyQixXQUFXLHNCQUFzQix1T0FBdU8sVUFBVSxhQUFhLFVBQVUsbUJBQW1CLGdCQUFnQixtQkFBbUIsbUJBQW1CLGlEQUFpRCxVQUFVLDhFQUE4RSxXQUFXLDhCQUE4QixFQUFFLG1UQUFtVCwyQkFBMkIsNGNBQTRjLG9GQUFvRixpQkFBaUIsZ0JBQWdCLHVCQUF1QixZQUFZLHVCQUF1QixZQUFZLG1CQUFtQixZQUFZLHVCQUF1QixZQUFZLHVCQUF1QixZQUFZLHFCQUFxQiwrUkFBK1Isc0JBQXNCLGtKQUFrSixXQUFXLG1EQUFtRCxFQUFFLHNMQUFzTCxxQkFBcUIsZ0JBQWdCLHNJQUFzSSxXQUFXLHFEQUFxRCxFQUFFLHVMQUF1TCxxQkFBcUIsZUFBZSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvcmVwb3NpdG9yaWVzL3JlcG9zaXRvcmllcy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhbGwtc3BhY2VcXFwiPiA8ZGl2IGNsYXNzPVxcXCJicmVhZGNydW1iLWNvbnRhaW5lclxcXCI+IDxvbCBjbGFzcz1cXFwiYnJlYWRjcnVtYlxcXCI+IDxsaSBjbGFzcz1cXFwiYnJlYWRjcnVtYi1zdHlsZVxcXCIgW2NsYXNzLmFjdGl2ZV09XFxcImZhbHNlXFxcIj4gPGEgcm91dGVyTGluaz1cXFwiL1xcXCI+SG9tZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJicmVhZGNydW1iLXN0eWxlXFxcIiBbY2xhc3MuYWN0aXZlXT1cXFwidHJ1ZVxcXCI+IDxhPjxzcGFuPlJlcG9zaXRvcmllczwvc3Bhbj48L2E+IDwvbGk+IDwvb2w+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInBhZ2UtdGl0bGUtY29sdW1uMVxcXCI+IDxoNCBjbGFzcz1cXFwicGFnZS10aXRsZS1jb2x1bW4xLXRpdGxlIGluZGV4LWZvbnRcXFwiPlJlcG9zaXRvcmllczwvaDQ+IDxwIGNsYXNzPVxcXCJwYWdlLXRpdGxlLWhlbHB0ZXh0XFxcIj5DcmVhdGUgb3IgdmlldyBSZXBvc2l0b3JpZXM8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXRpdGxlLWNvbHVtbjJcXFwiIGFsaWduPVxcXCJyaWdodFxcXCI+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzZWFyY2hcXFwiIGlkPVxcXCJzZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJzZWFyY2hcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6IDM4cHg7d2lkdGg6IDMwJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogMHB4XFxcIiAoa2V5cHJlc3MpPVxcXCJzZWFyY2hJdGVtKClcXFwiIFsobmdNb2RlbCldPVxcXCJzZWFyY2hcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInJlc2V0XFxcIiBvbmNsaWNrPVxcXCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWUgPSAnJ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmYSBmYS1jbG9zZSBhZGRidG4gYnRuLXNtXFxcIiBzdHlsZT1cXFwicG9zaXRpb246cmVsYXRpdmU7bGVmdDotNXB4O2hlaWdodDogMzhweDt0b3A6IC0xcHg7bWFyZ2luLXJpZ2h0OiAxNXB4O21heC13aWR0aDogMzVweDttYXJnaW4tYm90dG9tOiAzcHg7Ym9yZGVyLXJhZGl1czogMHB4O1xcXCI+IDwvYnV0dG9uPiA8YnV0dG9uIHN0eWxlPVxcXCJwb3NpdGlvbjogcmVsYXRpdmU7dG9wOiAtM3B4O1xcXCIgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiJ1JPTEVfQURNSU4nXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiBbJ3JlcG9zaXRvcmllcy1uZXcnXSB9IH1dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGFkZGJ0biBmbG9hdF9yaWdodFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXBsdXMtY2lyY2xlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiBDcmVhdGUgUmVwb3NpdG9yaWVzPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiBzdHlsZT1cXFwibWFyZ2luOiAwIDMwcHhcXFwiICpuZ0lmPVxcXCJyZXBvc2l0b3JpZXNcXFwiPiA8L2Rpdj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB3aWR0aDEwMHBjdFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MDsgYm9yZGVyOiAxcHggc29saWQgI2U0ZTNlMztcXFwiIGlkPVxcXCJvcHRpbWl6ZXJcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiPjxzcGFuPklEPC9zcGFuPjwvdGg+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIj48c3Bhbj5Qcm90b2NvbDwvc3Bhbj48L3RoPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZVxcXCI+PHNwYW4+SG9zdG5hbWU8L3NwYW4+PC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiPjxzcGFuPlBvcnQ8L3NwYW4+PC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiPjxzcGFuPlVzZXIgTmFtZTwvc3Bhbj48L3RoPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZVxcXCI+PHNwYW4+UGFzc3dvcmQ8L3NwYW4+PC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiPjxzcGFuPlNlY3JldDwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgcmVwb3NpdG9yaWVzIG9mIHJlcG9zaXRvcmllcyA7dHJhY2tCeTogdHJhY2tJZFxcXCI+IDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnLi4vcmVwb3NpdG9yaWVzJywgcmVwb3NpdG9yaWVzLmlkIF1cXFwiPnt7cmVwb3NpdG9yaWVzLmlkfX08L2E+PC90ZD4gPHRkPnt7cmVwb3NpdG9yaWVzLnByb3RvY29sfX08L3RkPiA8dGQ+e3tyZXBvc2l0b3JpZXMuaG9zdG5hbWV9fTwvdGQ+IDx0ZD57e3JlcG9zaXRvcmllcy5wb3J0fX08L3RkPiA8dGQ+e3tyZXBvc2l0b3JpZXMudXNlck5hbWV9fTwvdGQ+IDx0ZD57e3JlcG9zaXRvcmllcy5wYXNzd29yZH19PC90ZD4gPHRkPnt7cmVwb3NpdG9yaWVzLnNlY3JldH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLi4vcmVwb3NpdG9yaWVzJywgcmVwb3NpdG9yaWVzLmlkIF1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIiBkYXRhLXRvZ2dsZT1cXFwidG9vbHRpcFxcXCIgZGF0YS1wbGFjZW1lbnQ9XFxcInRvcFxcXCIgdGl0bGU9XFxcInZpZXdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiMwM2U4ZjI7IGJvcmRlci1jb2xvcjojMDNlOGYyOyBjdXJzb3I6cG9pbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCInUk9MRV9BRE1JTidcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAncmVwb3NpdG9yaWVzLycrIHJlcG9zaXRvcmllcy5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZWRpdFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IzAzYzJmMjtib3JkZXItY29sb3I6IzAzYzJmMjsgY3Vyc29yOnBvaW50ZXI7XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdyZXBvc2l0b3JpZXMvJysgcmVwb3NpdG9yaWVzLmlkICsgJy9kZWxldGUnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlciBidG4tc21cXFwiIGRhdGEtdG9nZ2xlPVxcXCJ0b29sdGlwXFxcIiBkYXRhLXBsYWNlbWVudD1cXFwidG9wXFxcIiB0aXRsZT1cXFwiZGVsZXRlXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojMDM5ZWYyO2JvcmRlci1jb2xvcjojMDM5ZWYyO2N1cnNvcjpwb2ludGVyO1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZXBvc2l0b3JpZXMvcmVwb3NpdG9yaWVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/repositories/repositories.component.html\n");

/***/ })

})