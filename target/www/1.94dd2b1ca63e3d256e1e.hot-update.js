webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/deployment/deployment-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"deployment\\\"> <h2 style=\\\"font-weight: bold\\\"><span>Deployment</span> {{deployment.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span>App Name</span></dt> <dd> <span>{{deployment.appName}}</span> </dd> <dt><span>Container Image</span></dt> <dd> <span>{{deployment.containerImage}}</span> </dd> <dt><span>Number Of Instances</span></dt> <dd> <span>{{deployment.numberOfInstances}}</span> </dd> <dt><span>Description</span></dt> <dd> <span>{{deployment.description}}</span> </dd> <dt><span>Number Of Cores</span></dt> <dd> <span>{{deployment.numberOfCores}}</span> </dd> <dt><span>Memory</span></dt> <dd> <span>{{deployment.memory}}</span> </dd> <dt><span></span></dt> <dd> <span>{{deployment.tenant}}</span> </dd> <dt><span>Stage</span></dt> <dd> <span>{{deployment.stage}}</span> </dd> <dt><span>Secret</span></dt>Tenant <dd> <span>{{deployment.secret}}</span> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'deployment/'+ deployment.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> <div class=\\\"container mt-5\\\"> <table class=\\\"table text-center lightblue\\\"> <jhi-alert-error></jhi-alert-error> <thead class=\\\"thead-light\\\"> <tr> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Deployment</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">App Name</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Container Image</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Number Of Instances</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Description</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Number Of Cores</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Memory</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Tenant</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Stage</th> <th class=\\\"colorblue\\\" scope=\\\"col\\\">Secret</th> </tr> </thead> <tbody> <tr *ngIf=\\\"deployment\\\"> <td>{{deployment.id}}</td> <td>{{deployment.appName}} </td> <td>{{deployment.containerImage}} </td> <td>{{deployment.numberOfInstances}} </td> <td>{{deployment.descriptions}} </td> <td>{{deployment.numberOfCores}}</td> <td>{{deployment.memory}}</td> <td>{{deployment.tenant}}</td> <td>{{deployment.stage}}</td> <td>{{deployment.secret}}</td> </tr> </tbody> </table> <div class=\\\"row mt-3\\\"> <div class=\\\"col-md-1\\\"> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span> Back</span> </button> </div> <div class=\\\"offset-10 col-md-1\\\"> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'repositories/'+ repositories.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span> Edit</span> </button> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlcGxveW1lbnQvZGVwbG95bWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWw/OGU0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3R0FBd0csZUFBZSxtSUFBbUksb0JBQW9CLGlFQUFpRSwyQkFBMkIscUVBQXFFLDhCQUE4Qiw2REFBNkQsd0JBQXdCLGlFQUFpRSwwQkFBMEIsd0RBQXdELG1CQUFtQixrREFBa0QsbUJBQW1CLHVEQUF1RCxrQkFBa0IsOERBQThELG1CQUFtQiw4SUFBOEksMkVBQTJFLFdBQVcsK0NBQStDLEVBQUUsMkhBQTJILDR3QkFBNHdCLGVBQWUsWUFBWSxvQkFBb0IsYUFBYSwyQkFBMkIsYUFBYSw4QkFBOEIsYUFBYSx5QkFBeUIsYUFBYSwwQkFBMEIsWUFBWSxtQkFBbUIsWUFBWSxtQkFBbUIsWUFBWSxrQkFBa0IsWUFBWSxtQkFBbUIsME1BQTBNLHFIQUFxSCxXQUFXLG1EQUFtRCxFQUFFLDJIQUEySCIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGVwbG95bWVudC9kZXBsb3ltZW50LWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiAqbmdJZj1cXFwiZGVwbG95bWVudFxcXCI+IDxoMiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGRcXFwiPjxzcGFuPkRlcGxveW1lbnQ8L3NwYW4+IHt7ZGVwbG95bWVudC5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3Bhbj5BcHAgTmFtZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7ZGVwbG95bWVudC5hcHBOYW1lfX08L3NwYW4+IDwvZGQ+IDxkdD48c3Bhbj5Db250YWluZXIgSW1hZ2U8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e2RlcGxveW1lbnQuY29udGFpbmVySW1hZ2V9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPk51bWJlciBPZiBJbnN0YW5jZXM8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e2RlcGxveW1lbnQubnVtYmVyT2ZJbnN0YW5jZXN9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tkZXBsb3ltZW50LmRlc2NyaXB0aW9ufX08L3NwYW4+IDwvZGQ+IDxkdD48c3Bhbj5OdW1iZXIgT2YgQ29yZXM8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e2RlcGxveW1lbnQubnVtYmVyT2ZDb3Jlc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+TWVtb3J5PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tkZXBsb3ltZW50Lm1lbW9yeX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+PC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tkZXBsb3ltZW50LnRlbmFudH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4+U3RhZ2U8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e2RlcGxveW1lbnQuc3RhZ2V9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuPlNlY3JldDwvc3Bhbj48L2R0PlRlbmFudCA8ZGQ+IDxzcGFuPnt7ZGVwbG95bWVudC5zZWNyZXR9fTwvc3Bhbj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdkZXBsb3ltZW50LycrIGRlcGxveW1lbnQuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG10LTVcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRleHQtY2VudGVyIGxpZ2h0Ymx1ZVxcXCI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDx0aGVhZCBjbGFzcz1cXFwidGhlYWQtbGlnaHRcXFwiPiA8dHI+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIiBzY29wZT1cXFwiY29sXFxcIj5EZXBsb3ltZW50PC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPkFwcCBOYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPkNvbnRhaW5lciBJbWFnZTwvdGg+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIiBzY29wZT1cXFwiY29sXFxcIj5OdW1iZXIgT2YgSW5zdGFuY2VzPC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPkRlc2NyaXB0aW9uPC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPk51bWJlciBPZiBDb3JlczwvdGg+IDx0aCBjbGFzcz1cXFwiY29sb3JibHVlXFxcIiBzY29wZT1cXFwiY29sXFxcIj5NZW1vcnk8L3RoPiA8dGggY2xhc3M9XFxcImNvbG9yYmx1ZVxcXCIgc2NvcGU9XFxcImNvbFxcXCI+VGVuYW50PC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPlN0YWdlPC90aD4gPHRoIGNsYXNzPVxcXCJjb2xvcmJsdWVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiPlNlY3JldDwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0lmPVxcXCJkZXBsb3ltZW50XFxcIj4gPHRkPnt7ZGVwbG95bWVudC5pZH19PC90ZD4gPHRkPnt7ZGVwbG95bWVudC5hcHBOYW1lfX0gPC90ZD4gPHRkPnt7ZGVwbG95bWVudC5jb250YWluZXJJbWFnZX19IDwvdGQ+IDx0ZD57e2RlcGxveW1lbnQubnVtYmVyT2ZJbnN0YW5jZXN9fSA8L3RkPiA8dGQ+e3tkZXBsb3ltZW50LmRlc2NyaXB0aW9uc319IDwvdGQ+IDx0ZD57e2RlcGxveW1lbnQubnVtYmVyT2ZDb3Jlc319PC90ZD4gPHRkPnt7ZGVwbG95bWVudC5tZW1vcnl9fTwvdGQ+IDx0ZD57e2RlcGxveW1lbnQudGVuYW50fX08L3RkPiA8dGQ+e3tkZXBsb3ltZW50LnN0YWdlfX08L3RkPiA8dGQ+e3tkZXBsb3ltZW50LnNlY3JldH19PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPGRpdiBjbGFzcz1cXFwicm93IG10LTNcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMVxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJwcmV2aW91c1N0YXRlKClcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm9cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctbGVmdFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm9mZnNldC0xMCBjb2wtbWQtMVxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3JlcG9zaXRvcmllcy8nKyByZXBvc2l0b3JpZXMuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGVwbG95bWVudC9kZXBsb3ltZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlcGxveW1lbnQvZGVwbG95bWVudC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/deployment/deployment-detail.component.html\n");

/***/ })

})