webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/nodes/nodes-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div class=\\\"container mt-5\\\"> <table class=\\\"table text-center table-bordered\\\"> <jhi-alert-error></jhi-alert-error> <thead> <tr> <th scope=\\\"col\\\">Nodes</th> <th scope=\\\"col\\\">Master Url</th> </tr> </thead> <tbody> <tr *ngIf=\\\"nodes\\\"> <td>{{nodes.id}} </td> <td>{{nodes.masterUrl}} </td> </tr> </tbody> </table> <div class=\\\"row\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbD9hZDI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVRQUF1USxVQUFVLGFBQWEsaUJBQWlCLDZLQUE2SywyRUFBMkUsV0FBVyxxQ0FBcUMsRUFBRSwySEFBMkgiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRleHQtY2VudGVyIHRhYmxlLWJvcmRlcmVkXFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHRoZWFkPiA8dHI+IDx0aCBzY29wZT1cXFwiY29sXFxcIj5Ob2RlczwvdGg+IDx0aCBzY29wZT1cXFwiY29sXFxcIj5NYXN0ZXIgVXJsPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nSWY9XFxcIm5vZGVzXFxcIj4gPHRkPnt7bm9kZXMuaWR9fSA8L3RkPiA8dGQ+e3tub2Rlcy5tYXN0ZXJVcmx9fSA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ25vZGVzLycrIG5vZGVzLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/nodes/nodes-detail.component.html\n");

/***/ })

})