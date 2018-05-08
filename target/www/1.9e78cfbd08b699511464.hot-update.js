webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/application/application.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar http_1 = __webpack_require__(\"./node_modules/@angular/http/esm5/http.js\");\r\nvar app_constants_1 = __webpack_require__(\"./src/main/webapp/app/app.constants.ts\");\r\nvar ng_jhipster_1 = __webpack_require__(\"./node_modules/ng-jhipster/index.js\");\r\nvar application_model_1 = __webpack_require__(\"./src/main/webapp/app/entities/application/application.model.ts\");\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar ApplicationService = /** @class */ (function () {\r\n    function ApplicationService(http, dateUtils) {\r\n        this.http = http;\r\n        this.dateUtils = dateUtils;\r\n        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/applications';\r\n    }\r\n    ApplicationService.prototype.create = function (application) {\r\n        var _this = this;\r\n        var copy = this.convert(application);\r\n        return this.http.post(this.resourceUrl, copy).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    ApplicationService.prototype.update = function (application) {\r\n        var _this = this;\r\n        var copy = this.convert(application);\r\n        return this.http.put(this.resourceUrl, copy).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    ApplicationService.prototype.find = function (id) {\r\n        var _this = this;\r\n        return this.http.get(this.resourceUrl + \"/\" + id).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    ApplicationService.prototype.query = function (req) {\r\n        var _this = this;\r\n        var options = shared_1.createRequestOption(req);\r\n        return this.http.get(this.resourceUrl, options)\r\n            .map(function (res) { return _this.convertResponse(res); });\r\n    };\r\n    ApplicationService.prototype.delete = function (id) {\r\n        return this.http.delete(this.resourceUrl + \"/\" + id);\r\n    };\r\n    ApplicationService.prototype.convertResponse = function (res) {\r\n        var jsonResponse = res.json();\r\n        var result = [];\r\n        for (var i = 0; i < jsonResponse.length; i++) {\r\n            result.push(this.convertItemFromServer(jsonResponse[i]));\r\n        }\r\n        return new shared_1.ResponseWrapper(res.headers, result, res.status);\r\n    };\r\n    /**\r\n     * Convert a returned JSON object to Application.\r\n     */\r\n    ApplicationService.prototype.convertItemFromServer = function (json) {\r\n        var entity = Object.assign(new application_model_1.Application(), json);\r\n        entity.created = this.dateUtils\r\n            .convertDateTimeFromServer(json.created);\r\n        entity.updated = this.dateUtils\r\n            .convertDateTimeFromServer(json.updated);\r\n        entity.deployed = json.deployed;\r\n        return entity;\r\n    };\r\n    /**\r\n     * Convert a Application to a JSON which can be sent to the server.\r\n     */\r\n    ApplicationService.prototype.convert = function (application) {\r\n        var copy = Object.assign({}, application);\r\n        copy.created = this.dateUtils.toDate(application.created);\r\n        copy.updated = this.dateUtils.toDate(application.updated);\r\n        return copy;\r\n    };\r\n    ApplicationService = __decorate([\r\n        core_1.Injectable(),\r\n        __metadata(\"design:paramtypes\", [http_1.Http, ng_jhipster_1.JhiDateUtils])\r\n    ], ApplicationService);\r\n    return ApplicationService;\r\n}());\r\nexports.ApplicationService = ApplicationService;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLnNlcnZpY2UudHM/MWY1OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLDhFQUEyQztBQUMzQyw4RUFBK0M7QUFFL0Msb0ZBQXFEO0FBRXJELCtFQUEyQztBQUUzQyxpSEFBa0Q7QUFDbEQsNEVBQW9FO0FBR3BFO0lBSUksNEJBQW9CLElBQVUsRUFBVSxTQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUZ2RCxnQkFBVyxHQUFHLDhCQUFjLEdBQUcsa0JBQWtCLENBQUM7SUFFUyxDQUFDO0lBRXBFLG1DQUFNLEdBQU4sVUFBTyxXQUF3QjtRQUEvQixpQkFNQztRQUxHLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBYTtZQUM1RCxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sV0FBd0I7UUFBL0IsaUJBTUM7UUFMRyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDM0QsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLEVBQVU7UUFBZixpQkFLQztRQUpHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDaEUsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEdBQVM7UUFBZixpQkFJQztRQUhHLElBQU0sT0FBTyxHQUFHLDRCQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQzthQUMxQyxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssWUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEVBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyw0Q0FBZSxHQUF2QixVQUF3QixHQUFhO1FBQ2pDLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksd0JBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ssa0RBQXFCLEdBQTdCLFVBQThCLElBQVM7UUFDbkMsSUFBTSxNQUFNLEdBQWdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSwrQkFBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUzthQUMxQix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUzthQUMxQix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0NBQU8sR0FBZixVQUFnQixXQUF3QjtRQUNwQyxJQUFNLElBQUksR0FBZ0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBdkVRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQUtpQixXQUFJLEVBQXFCLDBCQUFZO09BSnRELGtCQUFrQixDQXdFOUI7SUFBRCx5QkFBQztDQUFBO0FBeEVZLGdEQUFrQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uc2VydmljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBTRVJWRVJfQVBJX1VSTCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBKaGlEYXRlVXRpbHMgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBSZXNwb25zZVdyYXBwZXIsIGNyZWF0ZVJlcXVlc3RPcHRpb24gfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSBTRVJWRVJfQVBJX1VSTCArICdhcGkvYXBwbGljYXRpb25zJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBkYXRlVXRpbHM6IEpoaURhdGVVdGlscykgeyB9XG5cbiAgICBjcmVhdGUoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbj4ge1xuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb252ZXJ0KGFwcGxpY2F0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucmVzb3VyY2VVcmwsIGNvcHkpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihqc29uUmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoYXBwbGljYXRpb246IEFwcGxpY2F0aW9uKTogT2JzZXJ2YWJsZTxBcHBsaWNhdGlvbj4ge1xuICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb252ZXJ0KGFwcGxpY2F0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5yZXNvdXJjZVVybCwgY29weSkubWFwKChyZXM6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbmQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8QXBwbGljYXRpb24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0SXRlbUZyb21TZXJ2ZXIoanNvblJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZVdyYXBwZXI+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24ocmVxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5yZXNvdXJjZVVybCwgb3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xuICAgIH1cblxuICAgIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udmVydFJlc3BvbnNlKHJlczogUmVzcG9uc2UpOiBSZXNwb25zZVdyYXBwZXIge1xuICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSByZXMuanNvbigpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uUmVzcG9uc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2VXcmFwcGVyKHJlcy5oZWFkZXJzLCByZXN1bHQsIHJlcy5zdGF0dXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSByZXR1cm5lZCBKU09OIG9iamVjdCB0byBBcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnZlcnRJdGVtRnJvbVNlcnZlcihqc29uOiBhbnkpOiBBcHBsaWNhdGlvbiB7XG4gICAgICAgIGNvbnN0IGVudGl0eTogQXBwbGljYXRpb24gPSBPYmplY3QuYXNzaWduKG5ldyBBcHBsaWNhdGlvbigpLCBqc29uKTtcbiAgICAgICAgZW50aXR5LmNyZWF0ZWQgPSB0aGlzLmRhdGVVdGlsc1xuICAgICAgICAgICAgLmNvbnZlcnREYXRlVGltZUZyb21TZXJ2ZXIoanNvbi5jcmVhdGVkKTtcbiAgICAgICAgZW50aXR5LnVwZGF0ZWQgPSB0aGlzLmRhdGVVdGlsc1xuICAgICAgICAgICAgLmNvbnZlcnREYXRlVGltZUZyb21TZXJ2ZXIoanNvbi51cGRhdGVkKTtcbiAgICAgICAgZW50aXR5LmRlcGxveWVkPWpzb24uZGVwbG95ZWQ7XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIEFwcGxpY2F0aW9uIHRvIGEgSlNPTiB3aGljaCBjYW4gYmUgc2VudCB0byB0aGUgc2VydmVyLlxuICAgICAqL1xuICAgIHByaXZhdGUgY29udmVydChhcHBsaWNhdGlvbjogQXBwbGljYXRpb24pOiBBcHBsaWNhdGlvbiB7XG4gICAgICAgIGNvbnN0IGNvcHk6IEFwcGxpY2F0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgYXBwbGljYXRpb24pO1xuXG4gICAgICAgIGNvcHkuY3JlYXRlZCA9IHRoaXMuZGF0ZVV0aWxzLnRvRGF0ZShhcHBsaWNhdGlvbi5jcmVhdGVkKTtcblxuICAgICAgICBjb3B5LnVwZGF0ZWQgPSB0aGlzLmRhdGVVdGlscy50b0RhdGUoYXBwbGljYXRpb24udXBkYXRlZCk7XG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5zZXJ2aWNlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/application/application.service.ts\n");

/***/ })

})