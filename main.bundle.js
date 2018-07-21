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

module.exports = "<app-fx-calc></app-fx-calc>"

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fx_calc_fx_calc_component__ = __webpack_require__("./src/app/fx-calc/fx-calc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("./src/app/data.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__fx_calc_fx_calc_component__["a" /* FxCalcComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
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
    DataService.prototype.getCountries = function () {
        return this.http.get(API_URL);
    };
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

/***/ "./src/app/fx-calc/fx-calc.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>{{title}}</h1>\n</header>\n<section class=\"container\">\n<div class=\"flex-element\">\n    <p>\n        <select [(ngModel)]=\"fromCode\" (change)=\"getFXRate()\">\n          <option value=\"\" disabled selected>From Country</option>\n          <option *ngFor=\"let from of countries\" [value]=\"from.currencies[0].code == null ? from.currencies[1].code : from.currencies[0].code\">{{from.name}}</option>\n        </select>\n    </p>\n    <div class=\"form-input\">\n        <label>Send</label>\n      <input type=\"number\" [(ngModel)] = \"send\" (keyup)=\"convertCurrency(1)\" placeholder=\"Amount\"/> <span>{{fromCode}}</span>\n    </div>\n</div>\n<div class=\"flex-element img-control\">\n    <p><img src=\"assets/images/twoWayArrow.png\" alt=\"Two Way Arrow\"/></p>\n</div>\n<div class=\"flex-element\">\n    <p>\n        <select [(ngModel)]=\"toCode\" (change)=\"getFXRate()\">\n          <option value=\"\" disabled selected>To Country</option>\n          <option *ngFor=\"let to of countries\" [value]=\"to.currencies[0].code == null ? to.currencies[1].code : to.currencies[0].code\">{{to.name}}</option>\n        </select>\n    </p>\n    <div class=\"form-input\">\n      <label>Receive</label>\n      <input type=\"number\" [(ngModel)] = \"receive\" (keyup)=\"convertCurrency(2)\" placeholder=\"Amount\"/> <span>{{toCode}}</span>\n    </div>\n</div>\n</section>\n<footer>\n<div class=\"info\" *ngIf=\"rate\">\n    <span>The FX Rate of 1 {{fromCode}} = {{rate | number : '1.2-4'}} {{toCode}}, 1 {{toCode}} = {{1/rate | number : '1.2-4'}} {{fromCode}}</span>\n</div>\n</footer>"

/***/ }),

/***/ "./src/app/fx-calc/fx-calc.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fx-calc/fx-calc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FxCalcComponent; });
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


var FxCalcComponent = /** @class */ (function () {
    function FxCalcComponent(_dataService) {
        this._dataService = _dataService;
        this.title = "FX Calculator";
        this.fromCode = "";
        this.toCode = "";
    }
    FxCalcComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    FxCalcComponent.prototype.getCountries = function () {
        var _this = this;
        this._dataService.getCountries().subscribe(function (data) { _this.countries = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading countries'); });
    };
    FxCalcComponent.prototype.getFXRate = function () {
        var _this = this;
        if (this.fromCode != "" && this.fromCode != null && this.toCode != "" && this.toCode != null) {
            this._dataService.getFXRates(this.fromCode, this.toCode).subscribe(function (data) {
                _this.fxRate = data;
                _this.rate = _this.fxRate.rate;
                console.log(data);
            }, function (err) { return console.error(err); }, function () {
                _this.convertCurrency(3);
            });
        }
    };
    //Operator: 1 to convert send amount & 2 to convert receive amount
    FxCalcComponent.prototype.convertCurrency = function (operator) {
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
    FxCalcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fx-calc',
            template: __webpack_require__("./src/app/fx-calc/fx-calc.component.html"),
            styles: [__webpack_require__("./src/app/fx-calc/fx-calc.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], FxCalcComponent);
    return FxCalcComponent;
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
    countryAPI: 'https://restcountries.eu/rest/v2/all',
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