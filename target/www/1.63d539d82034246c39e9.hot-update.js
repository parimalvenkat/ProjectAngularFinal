webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/nodes/nodes-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div> <table class=\\\"table table-bordered\\\"> <thead> <tr> <th scope=\\\"col\\\">Nodes</th> <th scope=\\\"col\\\">Master Url</th> </tr> </thead> <tbody> <tr *ngIf=\\\"nodes\\\"> <td>{{nodes.id}} </td> <td>{{nodes.masterUrl}} </td> </tr> </tbody> </table> <h2 style=\\\"font-weight: bold\\\"><span>Nodes</span> {{nodes.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span>Master Url</span></dt> <dd> <span>{{nodes.masterUrl}}</span> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbD9hZDI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhMQUE4TCxVQUFVLGFBQWEsaUJBQWlCLG9GQUFvRixVQUFVLHFJQUFxSSxpQkFBaUIsOElBQThJLDJFQUEyRSxXQUFXLHFDQUFxQyxFQUFFLDJIQUEySCIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2PiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLWJvcmRlcmVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBzY29wZT1cXFwiY29sXFxcIj5Ob2RlczwvdGg+IDx0aCBzY29wZT1cXFwiY29sXFxcIj5NYXN0ZXIgVXJsPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nSWY9XFxcIm5vZGVzXFxcIj4gPHRkPnt7bm9kZXMuaWR9fSA8L3RkPiA8dGQ+e3tub2Rlcy5tYXN0ZXJVcmx9fSA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8aDIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkXFxcIj48c3Bhbj5Ob2Rlczwvc3Bhbj4ge3tub2Rlcy5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3Bhbj5NYXN0ZXIgVXJsPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tub2Rlcy5tYXN0ZXJVcmx9fTwvc3Bhbj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdub2Rlcy8nKyBub2Rlcy5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/nodes/nodes-detail.component.html\n");

/***/ })

})