webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/deployment/deployment.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Deployment = /** @class */ (function () {\r\n    function Deployment(id, descriptions, pods, applications, tenant, stage, deploymentToApplications, \r\n        //yet to create in DB and bean ... local variables copied from older project\r\n        appName, containerImage, numberOfInstances, numberOfCores, memory, secret, inboundOutbound) {\r\n        this.id = id;\r\n        this.descriptions = descriptions;\r\n        this.pods = pods;\r\n        this.applications = applications;\r\n        this.tenant = tenant;\r\n        this.stage = stage;\r\n        this.deploymentToApplications = deploymentToApplications;\r\n        this.appName = appName;\r\n        this.containerImage = containerImage;\r\n        this.numberOfInstances = numberOfInstances;\r\n        this.numberOfCores = numberOfCores;\r\n        this.memory = memory;\r\n        this.secret = secret;\r\n        this.inboundOutbound = inboundOutbound;\r\n    }\r\n    return Deployment;\r\n}());\r\nexports.Deployment = Deployment;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2RlcGxveW1lbnQvZGVwbG95bWVudC5tb2RlbC50cz9hNDI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDSSxvQkFDVyxFQUFXLEVBQ1gsWUFBcUIsRUFDckIsSUFBYSxFQUNiLFlBQXFCLEVBQ3JCLE1BQWUsRUFDZixLQUFjLEVBQ2Qsd0JBQXFDO1FBS3BELDRFQUE0RTtRQUM3RCxPQUFnQixFQUNoQixjQUF1QixFQUN2QixpQkFBMEIsRUFDMUIsYUFBc0IsRUFDdEIsTUFBZSxFQUNmLE1BQWUsRUFDZixlQUFtQztRQWxCbkMsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUNYLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBYTtRQU1yQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFTO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBUztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtJQUU5QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDO0FBdkJZLGdDQUFVIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9kZXBsb3ltZW50L2RlcGxveW1lbnQubW9kZWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHtJbmJvdW5kT3V0Ym91bmR9IGZyb20gXCIuLi9pbmJvdW5kLW91dGJvdW5kXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBsb3ltZW50IGltcGxlbWVudHMgQmFzZUVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBpZD86IG51bWJlcixcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9ucz86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHBvZHM/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBhcHBsaWNhdGlvbnM/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0ZW5hbnQ/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBzdGFnZT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGRlcGxveW1lbnRUb0FwcGxpY2F0aW9ucz86IEJhc2VFbnRpdHksXG5cblxuXG5cbi8veWV0IHRvIGNyZWF0ZSBpbiBEQiBhbmQgYmVhbiAuLi4gbG9jYWwgdmFyaWFibGVzIGNvcGllZCBmcm9tIG9sZGVyIHByb2plY3RcbiAgICAgICAgcHVibGljIGFwcE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb250YWluZXJJbWFnZT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIG51bWJlck9mSW5zdGFuY2VzPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbnVtYmVyT2ZDb3Jlcz86IG51bWJlcixcbiAgICAgICAgcHVibGljIG1lbW9yeT86IG51bWJlcixcbiAgICAgICAgcHVibGljIHNlY3JldD86IHN0cmluZyxcbiAgICAgICAgcHVibGljIGluYm91bmRPdXRib3VuZD86IEluYm91bmRPdXRib3VuZFtdLFxuICAgICkge1xuICAgIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZGVwbG95bWVudC9kZXBsb3ltZW50Lm1vZGVsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/deployment/deployment.model.ts\n");

/***/ })

})