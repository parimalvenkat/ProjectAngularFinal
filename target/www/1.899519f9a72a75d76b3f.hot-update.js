webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/tenant-details/tenant-details-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div class=\\\"container mt-5\\\"> <div class=\\\"offset-1 col-md-10\\\"> <table class=\\\"table text-left lightblue\\\"> <jhi-alert-error></jhi-alert-error> <tr *ngIf=\\\"tenantDetails\\\"> <th class=\\\"colorblue light-bg\\\" scope=\\\"col\\\">Tenant ID</th> <td>{{tenantDetails.id}}</td> </tr> <tr> <th class=\\\"colorblue light-bg\\\" scope=\\\"col\\\">Name</th> <td>{{tenantDetails.name}}</td> </tr> <tr> <th class=\\\"colorblue light-bg\\\" scope=\\\"col\\\">Description</th> <td>{{tenantDetails.description}}</td> </tr> <tr> <th class=\\\"colorblue light-bg\\\" scope=\\\"col\\\">Contact Name</th> <td>{{tenantDetails.contactname}}</td> </tr> <tr> <th class=\\\"colorblue light-bg\\\" scope=\\\"col\\\">Conatact email</th> <td>{{tenantDetails.contactemail}} </td> </tr> </table> <div class=\\\"row mt-3\\\"> <div class=\\\"col-md-1\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> </div> <div class=\\\"offset-10 col-md-1\\\"> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'tenant-details/'+ tenantDetails.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> </div> </div>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RlbmFudC1kZXRhaWxzL3RlbmFudC1kZXRhaWxzLWRldGFpbC5jb21wb25lbnQuaHRtbD8xZDY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNRQUFzUSxrQkFBa0IsZ0ZBQWdGLG9CQUFvQix1RkFBdUYsMkJBQTJCLHdGQUF3RiwyQkFBMkIsMEZBQTBGLDRCQUE0QixrTUFBa00scUhBQXFILFdBQVcsc0RBQXNELEVBQUUsMkhBQTJIIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy90ZW5hbnQtZGV0YWlscy90ZW5hbnQtZGV0YWlscy1kZXRhaWwuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBtdC01XFxcIj4gPGRpdiBjbGFzcz1cXFwib2Zmc2V0LTEgY29sLW1kLTEwXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0ZXh0LWxlZnQgbGlnaHRibHVlXFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHRyICpuZ0lmPVxcXCJ0ZW5hbnREZXRhaWxzXFxcIj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWUgbGlnaHQtYmdcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPlRlbmFudCBJRDwvdGg+IDx0ZD57e3RlbmFudERldGFpbHMuaWR9fTwvdGQ+IDwvdHI+IDx0cj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWUgbGlnaHQtYmdcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPk5hbWU8L3RoPiA8dGQ+e3t0ZW5hbnREZXRhaWxzLm5hbWV9fTwvdGQ+IDwvdHI+IDx0cj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWUgbGlnaHQtYmdcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPkRlc2NyaXB0aW9uPC90aD4gPHRkPnt7dGVuYW50RGV0YWlscy5kZXNjcmlwdGlvbn19PC90ZD4gPC90cj4gPHRyPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZSBsaWdodC1iZ1xcXCIgc2NvcGU9XFxcImNvbFxcXCI+Q29udGFjdCBOYW1lPC90aD4gPHRkPnt7dGVuYW50RGV0YWlscy5jb250YWN0bmFtZX19PC90ZD4gPC90cj4gPHRyPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZSBsaWdodC1iZ1xcXCIgc2NvcGU9XFxcImNvbFxcXCI+Q29uYXRhY3QgZW1haWw8L3RoPiA8dGQ+e3t0ZW5hbnREZXRhaWxzLmNvbnRhY3RlbWFpbH19IDwvdGQ+IDwvdHI+IDwvdGFibGU+IDxkaXYgY2xhc3M9XFxcInJvdyBtdC0zXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTFcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3Bhbj4gQmFjazwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJvZmZzZXQtMTAgY29sLW1kLTFcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICd0ZW5hbnQtZGV0YWlscy8nKyB0ZW5hbnREZXRhaWxzLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RlbmFudC1kZXRhaWxzL3RlbmFudC1kZXRhaWxzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RlbmFudC1kZXRhaWxzL3RlbmFudC1kZXRhaWxzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tenant-details/tenant-details-detail.component.html\n");

/***/ })

})