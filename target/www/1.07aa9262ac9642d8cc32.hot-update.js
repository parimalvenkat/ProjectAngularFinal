webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/repositories/repositories-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"repositories\\\"> <h2 style=\\\"font-weight: bold\\\"><span>Repositories</span> {{repositories.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span>Protocol</span></dt> <dd> <span>{{repositories.protocol}}</span> </dd> <dt><span>Hostname</span></dt> <dd> <span>{{repositories.hostname}}</span> </dd> <dt><span>Port</span></dt> <dd> <span>{{repositories.port}}</span> </dd> <dt><span>User Name</span></dt> <dd> <span>{{repositories.userName}}</span> </dd> <dt><span>Password</span></dt> <dd> <span>{{repositories.password}}</span> </dd> <dt><span>Secret</span></dt> <dd> <span>{{repositories.secret}}</span> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'repositories/'+ repositories.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> <div class=\\\"container mt-5\\\"> <table class=\\\"table text-center lightblue\\\"> <jhi-alert-error></jhi-alert-error> <thead class=\\\"thead-light\\\"> <tr> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Nodes</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Master Url</th> </tr> </thead> <tbody> <tr *ngIf=\\\"nodes\\\"> <td>{{nodes.id}} </td> <td>{{nodes.masterUrl}} </td> </tr> </tbody> </table> <div class=\\\"row mt-3\\\"> <div class=\\\"col-md-1\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> </div> <div class=\\\"offset-10 col-md-1\\\"> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sPzE4NzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEdBQTRHLGlCQUFpQixtSUFBbUksdUJBQXVCLDBEQUEwRCx1QkFBdUIsc0RBQXNELG1CQUFtQiwyREFBMkQsdUJBQXVCLDBEQUEwRCx1QkFBdUIsd0RBQXdELHFCQUFxQiw4SUFBOEksMkVBQTJFLFdBQVcsbURBQW1ELEVBQUUsMkhBQTJILGlWQUFpVixVQUFVLGFBQWEsaUJBQWlCLDJNQUEyTSxxSEFBcUgsV0FBVyxxQ0FBcUMsRUFBRSwySEFBMkgiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2ICpuZ0lmPVxcXCJyZXBvc2l0b3JpZXNcXFwiPiA8aDIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkXFxcIj48c3Bhbj5SZXBvc2l0b3JpZXM8L3NwYW4+IHt7cmVwb3NpdG9yaWVzLmlkfX08L2gyPiA8aHI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuPlByb3RvY29sPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tyZXBvc2l0b3JpZXMucHJvdG9jb2x9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPkhvc3RuYW1lPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tyZXBvc2l0b3JpZXMuaG9zdG5hbWV9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPlBvcnQ8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3JlcG9zaXRvcmllcy5wb3J0fX08L3NwYW4+IDwvZGQ+IDxkdD48c3Bhbj5Vc2VyIE5hbWU8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3JlcG9zaXRvcmllcy51c2VyTmFtZX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+UGFzc3dvcmQ8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3JlcG9zaXRvcmllcy5wYXNzd29yZH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+U2VjcmV0PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tyZXBvc2l0b3JpZXMuc2VjcmV0fX08L3NwYW4+IDwvZGQ+IDwvZGw+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAncmVwb3NpdG9yaWVzLycrIHJlcG9zaXRvcmllcy5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGV4dC1jZW50ZXIgbGlnaHRibHVlXFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHRoZWFkIGNsYXNzPVxcXCJ0aGVhZC1saWdodFxcXCI+IDx0cj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPk5vZGVzPC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPk1hc3RlciBVcmw8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdJZj1cXFwibm9kZXNcXFwiPiA8dGQ+e3tub2Rlcy5pZH19IDwvdGQ+IDx0ZD57e25vZGVzLm1hc3RlclVybH19IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDxkaXYgY2xhc3M9XFxcInJvdyBtdC0zXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTFcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJvZmZzZXQtMTAgY29sLW1kLTFcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdub2Rlcy8nKyBub2Rlcy5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9yZXBvc2l0b3JpZXMvcmVwb3NpdG9yaWVzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3JlcG9zaXRvcmllcy9yZXBvc2l0b3JpZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/repositories/repositories-detail.component.html\n");

/***/ })

})