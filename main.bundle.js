webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12 text-center\">\n      <h1>{{title}}</h1>\n    </div>\n  </div>\n  <div class=\"row d-flex justify-content-center align-items-center\">\n    <div class=\"col-xs-8 col-md-4 col-lg-4\">\n      <p>\n        <select [(ngModel)]=\"fromCode\" (change)=\"getFXRate()\" [compareWith]=\"compareFn\">\n          <option [ngValue]=\"selected\" disabled >From Country</option>\n          <option *ngFor=\"let from of countries\" [ngValue]=\"from.currencies[0].code == null ? from.currencies[1] : from.currencies[0]\">{{from.name}}</option>\n        </select>\n      </p>\n      <div class=\"form-input\">\n        <label>Send</label>\n        <div class=\"input-group\">\n            <input type=\"number\" [(ngModel)] = \"send\" (keyup)=\"convertCurrency(1)\" placeholder=\"Amount\" class=\"form-control\">\n            <div class=\"input-group-append\">\n                <div class=\"d-inline-flex p-2\">{{ fromCode.symbol ? fromCode.symbol : fromCode.code }}</div>\n            </div>\n        </div>\n      </div>\n      </div>\n      <div class=\"col-lg-2 col-md-2 text-center img-control\">\n        <span><img src=\"../assets/images/twoWayArrow.png\" alt=\"Two Way Arrow\"/></span>\n      </div>\n    <div class=\"col-xs-8 col-md-4 col-lg-4\">\n      <p>\n        <select [(ngModel)]=\"toCode\" (change)=\"getFXRate()\" [compareWith]=\"compareFn\">\n          <option [ngValue]=\"selected\" disabled >To Country</option>\n          <option *ngFor=\"let to of countries\" [ngValue]=\"to.currencies[0].code == null ? to.currencies[1] : to.currencies[0]\">{{to.name}}</option>\n        </select>\n      </p>\n      <div class=\"form-input\">\n        <label>Receive</label>\n        <div class=\"input-group\">\n            <input type=\"number\"[(ngModel)] = \"receive\" (keyup)=\"convertCurrency(2)\" placeholder=\"Amount\" class=\"form-control\">\n            <div class=\"input-group-append\">\n                <div class=\"d-inline-flex p-2\">{{ toCode.symbol ? toCode.symbol : toCode.code }}</div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-lg-12 col-md-12 d-inline-flex justify-content-center p-2\" *ngIf=\"rate\">\n        <span class=\"alert alert-dark\" role=\"alert\">\n            The FX Rate of 1 {{fromCode.code}} = {{rate | number : '1.2-4'}} {{toCode.code}}, 1 {{toCode.code}} = {{1/rate | number : '1.2-4'}} {{fromCode.code}}\n        </span>\n    </div>\n    <div class=\"col-sm-12 col-lg-12 col-md-12 d-inline-flex justify-content-center p-2\" *ngIf=\"fxError\">\n        <span class=\"alert alert-danger\" role=\"alert\">\n          FXRate not available. Please select a different country.\n        </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_dataService) {
        this._dataService = _dataService;
        this.title = "FX Calculator";
        this.fromCode = {
            code: "",
            symbol: ""
        };
        this.toCode = {
            code: "",
            symbol: ""
        };
        this.selected = {
            code: "",
            symbol: ""
        };
        this.fxError = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    //Call a service method to invoke API call to get the Countries List
    AppComponent.prototype.getCountries = function () {
        var _this = this;
        this._dataService.getCountries().subscribe(function (data) { _this.countries = data; }, function (err) { return console.error(err); }, function () { return console.log('Done loading countries'); });
    };
    //Call a service method to invoke API call to get the FXRates
    AppComponent.prototype.getFXRate = function () {
        var _this = this;
        if (this.fromCode && this.fromCode.code != "" && this.fromCode.code != null && this.toCode && this.toCode.code != "" && this.toCode.code != null) {
            this._dataService.getFXRates(this.fromCode.code, this.toCode.code).subscribe(function (data) {
                _this.fxRate = data;
                if (_this.fxRate.result == 'error') {
                    _this.fxError = true;
                }
                else {
                    _this.fxError = false;
                }
                _this.rate = _this.fxRate.rate;
                console.log(data);
            }, function (err) { return console.error(err); }, function () {
                _this.convertCurrency(3);
            });
        }
    };
    //Operator: 1 to convert send amount, 2 to convert receive amount & 3 for OnFXRate Change
    AppComponent.prototype.convertCurrency = function (operator) {
        //Check if the send, receive and fxRate are number
        if (this.rate && !isNaN(this.rate) && this.rate != null) {
            if (operator === 1 && this.send != null && !isNaN(this.send)) {
                this.receive = this.send * this.rate;
            }
            else if (operator === 2 && this.receive != null && !isNaN(this.receive)) {
                this.send = this.receive / this.rate;
            }
            else if (operator === 3) {
                if (this.send != null && !isNaN(this.send)) {
                    this.receive = this.send * this.rate;
                }
                else if (this.receive != null && !isNaN(this.receive)) {
                    this.send = this.receive / this.rate;
                }
            }
        }
    };
    //Method to compare Option values in Select
    AppComponent.prototype.compareFn = function (a, b) {
        return a && b && a.code === b.code;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].countryAPI;
var FXRATES_API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].currencyAPI;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    //API Call to get list of Countries
    DataService.prototype.getCountries = function () {
        return this.http.get(API_URL);
    };
    //API Call to get the FXRate
    DataService.prototype.getFXRates = function (from, to) {
        return this.http.get(FXRATES_API_URL + "/" + from + "/" + to);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    countryAPI: 'https://restcountries.eu/rest/v2/all?fields=name;currencies',
    currencyAPI: 'https://v3.exchangerate-api.com/pair/61e57eba8437f0db8fa02b1c',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map