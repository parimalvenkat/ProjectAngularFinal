webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar ng_jhipster_1 = __webpack_require__(\"./node_modules/ng-jhipster/index.js\");\r\nvar profile_service_1 = __webpack_require__(\"./src/main/webapp/app/layouts/profiles/profile.service.ts\");\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar state_storage_service_1 = __webpack_require__(\"./src/main/webapp/app/shared/auth/state-storage.service.ts\");\r\nvar app_constants_1 = __webpack_require__(\"./src/main/webapp/app/app.constants.ts\");\r\nvar NavbarComponent = /** @class */ (function () {\r\n    function NavbarComponent(loginService, principal, loginModalService, profileService, router, eventManager, stateStorageService) {\r\n        this.loginService = loginService;\r\n        this.principal = principal;\r\n        this.loginModalService = loginModalService;\r\n        this.profileService = profileService;\r\n        this.router = router;\r\n        this.eventManager = eventManager;\r\n        this.stateStorageService = stateStorageService;\r\n        this.regist = false;\r\n        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';\r\n        this.isNavbarCollapsed = true;\r\n        this.regist = false;\r\n    }\r\n    NavbarComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.regist = false;\r\n        this.home = true;\r\n        this.isNavbarCollapsed = true;\r\n        this.profileService.getProfileInfo().then(function (profileInfo) {\r\n            _this.inProduction = profileInfo.inProduction;\r\n            _this.swaggerEnabled = profileInfo.swaggerEnabled;\r\n        });\r\n    };\r\n    NavbarComponent.prototype.collapseNavbar = function () {\r\n        this.regist = false;\r\n        this.home = true;\r\n        this.isNavbarCollapsed = true;\r\n    };\r\n    NavbarComponent.prototype.isAuthenticated = function () {\r\n        if (this.router.url === \"/\") {\r\n            this.regist = false;\r\n        }\r\n        return this.principal.isAuthenticated();\r\n    };\r\n    NavbarComponent.prototype.login = function () {\r\n        this.modalRef = this.loginModalService.open();\r\n    };\r\n    NavbarComponent.prototype.logout = function () {\r\n        this.collapseNavbar();\r\n        this.loginService.logout();\r\n        this.router.navigate(['']);\r\n    };\r\n    NavbarComponent.prototype.toggleNavbar = function () {\r\n        this.isNavbarCollapsed = !this.isNavbarCollapsed;\r\n    };\r\n    NavbarComponent.prototype.getImageUrl = function () {\r\n        console.log(this.isAuthenticated());\r\n        console.log(this.principal.getImageUrl());\r\n        return this.isAuthenticated() ? this.principal.getImageUrl() : null;\r\n    };\r\n    NavbarComponent.prototype.toggle = function () {\r\n        this.regist = true;\r\n        this.home = false;\r\n    };\r\n    NavbarComponent.prototype.Tohome = function () {\r\n        this.home = true;\r\n    };\r\n    NavbarComponent.prototype.userlogin = function () {\r\n        var _this = this;\r\n        this.loginService.login({\r\n            username: this.username,\r\n            password: this.password,\r\n            rememberMe: this.rememberMe\r\n        }).then(function () {\r\n            _this.authenticationError = false;\r\n            if (_this.router.url === '/register' || (/^\\/activate\\//.test(_this.router.url)) ||\r\n                (/^\\/reset\\//.test(_this.router.url))) {\r\n                _this.router.navigate(['']);\r\n            }\r\n            _this.eventManager.broadcast({\r\n                name: 'authenticationSuccess',\r\n                content: 'Sending Authentication Success'\r\n            });\r\n            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.\r\n            // // since login is succesful, go to stored previousState and clear previousState\r\n            var redirect = _this.stateStorageService.getUrl();\r\n            if (redirect) {\r\n                _this.stateStorageService.storeUrl(null);\r\n                _this.router.navigate([redirect]);\r\n            }\r\n        }).catch(function () {\r\n            _this.authenticationError = true;\r\n        });\r\n    };\r\n    NavbarComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'jhi-navbar',\r\n            template: __webpack_require__(\"./src/main/webapp/app/layouts/navbar/navbar.component.html\"),\r\n            styles: [\r\n                __webpack_require__(\"./src/main/webapp/app/layouts/navbar/navbar.css\")\r\n            ]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [shared_1.LoginService,\r\n            shared_1.Principal,\r\n            shared_1.LoginModalService,\r\n            profile_service_1.ProfileService,\r\n            router_1.Router,\r\n            ng_jhipster_1.JhiEventManager,\r\n            state_storage_service_1.StateStorageService])\r\n    ], NavbarComponent);\r\n    return NavbarComponent;\r\n}());\r\nexports.NavbarComponent = NavbarComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHM/MDQxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUFrRDtBQUNsRCxvRkFBeUM7QUFFekMsK0VBQThDO0FBRTlDLHlHQUE2RDtBQUM3RCw0RUFBeUU7QUFDekUsZ0hBQThFO0FBRzlFLG9GQUE4QztBQVU5QztJQWdCSSx5QkFDWSxZQUEwQixFQUMxQixTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsY0FBOEIsRUFDOUIsTUFBYyxFQUNkLFlBQTZCLEVBQzdCLG1CQUF3QztRQU54QyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBaUI7UUFDN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVpwRCxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBZ0JuQixJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx1QkFBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUE8sSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxD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QUFpRztZQUNqRyxrRkFBa0Y7WUFDbEYsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDTCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXRIWSxlQUFlO1FBUjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0Qiw2QkFBYSw2REFBeUI7WUFFdEMsU0FBVztnQkFDUCxxRUFBWTthQUNmO1NBQ0osQ0FBQzt5Q0FrQjRCLHFCQUFZO1lBQ2Ysa0JBQVM7WUFDRCwwQkFBaUI7WUFDcEIsZ0NBQWM7WUFDdEIsZUFBTTtZQUNBLDZCQUFlO1lBQ1IsMkNBQW1CO09BdkIzQyxlQUFlLENBdUgzQjtJQUFELHNCQUFDO0NBQUE7QUF2SFksMENBQWUiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tIFwiLi9uYXZiYXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuLi9wcm9maWxlcy9wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpbmNpcGFsLCBMb2dpbk1vZGFsU2VydmljZSwgTG9naW5TZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cblxuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICduYXZiYXIuY3NzJ1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGluUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuICAgIHN3YWdnZXJFbmFibGVkOiBib29sZWFuO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgYXV0aGVudGljYXRpb25FcnJvcjogYm9vbGVhbjtcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHJlbWVtYmVyTWU6IGJvb2xlYW47XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICByZWdpc3Q6IGJvb2xlYW49IGZhbHNlO1xuICAgIGhvbWU6Ym9vbGVhbiA7XG5cblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlcixcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTiA/ICd2JyArIFZFUlNJT04gOiAnJztcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVnaXN0PWZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3Q9ZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhvbWU9dHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS50aGVuKChwcm9maWxlSW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pblByb2R1Y3Rpb24gPSBwcm9maWxlSW5mby5pblByb2R1Y3Rpb247XG4gICAgICAgICAgICB0aGlzLnN3YWdnZXJFbmFibGVkID0gcHJvZmlsZUluZm8uc3dhZ2dlckVuYWJsZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgICAgICB0aGlzLnJlZ2lzdD1mYWxzZTtcbiAgICAgICAgdGhpcy5ob21lPXRydWU7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICBpZih0aGlzLnJvdXRlci51cmwgPT09IFwiL1wiKXtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgIH1cblxuICAgIHRvZ2dsZU5hdmJhcigpIHtcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9ICF0aGlzLmlzTmF2YmFyQ29sbGFwc2VkO1xuICAgIH1cblxuICAgIGdldEltYWdlVXJsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQXV0aGVudGljYXRlZCgpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmluY2lwYWwuZ2V0SW1hZ2VVcmwoKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCgpID8gdGhpcy5wcmluY2lwYWwuZ2V0SW1hZ2VVcmwoKSA6IG51bGw7XG5cbiAgICB9XG5cbiAgICB0b2dnbGUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWdpc3Q9dHJ1ZTtcbiAgICAgICAgdGhpcy5ob21lPSBmYWxzZTtcblxuICAgIH1cbiAgICBUb2hvbWUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ob21lPXRydWU7XG4gICAgfVxuXG51c2VybG9naW4oKVxue1xuICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICByZW1lbWJlck1lOiB0aGlzLnJlbWVtYmVyTWVcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy9yZWdpc3RlcicgfHwgKC9eXFwvYWN0aXZhdGVcXC8vLnRlc3QodGhpcy5yb3V0ZXIudXJsKSkgfHxcbiAgICAgICAgICAgICgvXlxcL3Jlc2V0XFwvLy50ZXN0KHRoaXMucm91dGVyLnVybCkpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmJyb2FkY2FzdCh7XG4gICAgICAgICAgICBuYW1lOiAnYXV0aGVudGljYXRpb25TdWNjZXNzJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZW5kaW5nIEF1dGhlbnRpY2F0aW9uIFN1Y2Nlc3MnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC8vIHByZXZpb3VzU3RhdGUgd2FzIHNldCBpbiB0aGUgYXV0aEV4cGlyZWRJbnRlcmNlcHRvciBiZWZvcmUgYmVpbmcgcmVkaXJlY3RlZCB0byBsb2dpbiBtb2RhbC5cbiAgICAgICAgLy8gLy8gc2luY2UgbG9naW4gaXMgc3VjY2VzZnVsLCBnbyB0byBzdG9yZWQgcHJldmlvdXNTdGF0ZSBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZVxuICAgICAgICBjb25zdCByZWRpcmVjdCA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXRVcmwoKTtcbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2Uuc3RvcmVVcmwobnVsbCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkVycm9yID0gdHJ1ZTtcbiAgICB9KTtcbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.ts\n");

/***/ })

})