webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/nodes/nodes-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div class=\\\"container\\\"> <table class=\\\"table text-center table-bordered\\\"> <jhi-alert-error></jhi-alert-error> <thead> <tr> <th scope=\\\"col\\\">Nodes</th> <th scope=\\\"col\\\">Master Url</th> </tr> </thead> <tbody> <tr *ngIf=\\\"nodes\\\"> <td>{{nodes.id}} </td> <td>{{nodes.masterUrl}} </td> </tr> <tr> <td><button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button></td> <td> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button></td> </tr> </tbody> </table> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbD9hZDI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtRQUFrUSxVQUFVLGFBQWEsaUJBQWlCLGdKQUFnSixxRkFBcUYsV0FBVyxxQ0FBcUMsRUFBRSwySEFBMkgiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0ZXh0LWNlbnRlciB0YWJsZS1ib3JkZXJlZFxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDx0aGVhZD4gPHRyPiA8dGggc2NvcGU9XFxcImNvbFxcXCI+Tm9kZXM8L3RoPiA8dGggc2NvcGU9XFxcImNvbFxcXCI+TWFzdGVyIFVybDwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0lmPVxcXCJub2Rlc1xcXCI+IDx0ZD57e25vZGVzLmlkfX0gPC90ZD4gPHRkPnt7bm9kZXMubWFzdGVyVXJsfX0gPC90ZD4gPC90cj4gPHRyPiA8dGQ+PGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPjwvdGQ+IDx0ZD4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnbm9kZXMvJysgbm9kZXMuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPjwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/nodes/nodes-detail.component.html\n");

/***/ })

})