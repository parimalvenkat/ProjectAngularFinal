webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/nodes/nodes-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div class=\\\"container mt-5\\\"> <div class=\\\"offset-2 col-md-10\\\"> <table class=\\\"table text-left lightblue\\\"> <jhi-alert-error></jhi-alert-error> <tr *ngIf=\\\"nodes\\\"> <th class=\\\"colorblue thead-light\\\" scope=\\\"col\\\">Nodes</th> <td>{{nodes.id}} </td> </tr> <tr> <th class=\\\"colorblue thead-light\\\" scope=\\\"col\\\">Master Url</th> <td>{{nodes.masterUrl}} </td> </tr> </table> </div> <div class=\\\"row mt-3\\\"> <div class=\\\"col-md-1\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> </div> <div class=\\\"offset-10 col-md-1\\\"> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'nodes/'+ nodes.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbD9hZDI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZQQUE2UCxVQUFVLDBGQUEwRixpQkFBaUIseU1BQXlNLHFIQUFxSCxXQUFXLHFDQUFxQyxFQUFFLDJIQUEySCIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbm9kZXMvbm9kZXMtZGV0YWlsLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXQtNVxcXCI+IDxkaXYgY2xhc3M9XFxcIm9mZnNldC0yIGNvbC1tZC0xMFxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGV4dC1sZWZ0IGxpZ2h0Ymx1ZVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDx0ciAqbmdJZj1cXFwibm9kZXNcXFwiPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZSB0aGVhZC1saWdodFxcXCIgc2NvcGU9XFxcImNvbFxcXCI+Tm9kZXM8L3RoPiA8dGQ+e3tub2Rlcy5pZH19IDwvdGQ+IDwvdHI+IDx0cj4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWUgdGhlYWQtbGlnaHRcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPk1hc3RlciBVcmw8L3RoPiA8dGQ+e3tub2Rlcy5tYXN0ZXJVcmx9fSA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IG10LTNcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMVxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm9mZnNldC0xMCBjb2wtbWQtMVxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ25vZGVzLycrIG5vZGVzLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBFZGl0PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL25vZGVzL25vZGVzLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/nodes/nodes-detail.component.html\n");

/***/ })

})