(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./bundle/browser/bs4-breakpoint.component.js":
/*!****************************************************!*\
  !*** ./bundle/browser/bs4-breakpoint.component.js ***!
  \****************************************************/
/*! exports provided: Bs4BreakpointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bs4BreakpointsComponent", function() { return Bs4BreakpointsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs4-breakpoint.enum */ "./bundle/browser/bs4-breakpoint.enum.js");



let Bs4BreakpointsComponent = class Bs4BreakpointsComponent {
    constructor(e) {
        this.e = e;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onWindowResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.check()) {
            this.changed.emit(this.current);
        }
        this.resize.emit({ width: this.width, height: this.height });
    }
    isVisible(obj) {
        let style = window.getComputedStyle(obj, undefined);
        return style.display === 'block';
    }
    check() {
        let t;
        if (this.isVisible(this.e.nativeElement.children[0])) {
            t = _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"].xs;
        }
        if (this.isVisible(this.e.nativeElement.children[1])) {
            t = _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"].sm;
        }
        if (this.isVisible(this.e.nativeElement.children[2])) {
            t = _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"].md;
        }
        if (this.isVisible(this.e.nativeElement.children[3])) {
            t = _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"].lg;
        }
        if (this.isVisible(this.e.nativeElement.children[4])) {
            t = _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"].xl;
        }
        if (t !== this.current) {
            this.current = t;
            return true;
        }
        return false;
    }
    ngOnInit() {
        if (this.check()) {
            this.changed.emit(this.current);
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.onWindowResize();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Bs4BreakpointsComponent.prototype, "changed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], Bs4BreakpointsComponent.prototype, "resize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], Bs4BreakpointsComponent.prototype, "onWindowResize", null);
Bs4BreakpointsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bs4-breakpoint',
        template: `
          <span class='xs d-block d-sm-inline'></span>
          <span class='sm d-sm-block d-md-inline'> </span>
          <span class='md d-md-block d-lg-inline'></span>
          <span class='lg d-lg-block d-xl-inline'></span>
          <span class='xl d-xl-block'></span>
    `, styles: [':host { display:none; } ']
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], Bs4BreakpointsComponent);

//# sourceMappingURL=bs4-breakpoint.component.js.map

/***/ }),

/***/ "./bundle/browser/bs4-breakpoint.enum.js":
/*!***********************************************!*\
  !*** ./bundle/browser/bs4-breakpoint.enum.js ***!
  \***********************************************/
/*! exports provided: BreakPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPoint", function() { return BreakPoint; });
var BreakPoint;
(function (BreakPoint) {
    BreakPoint[BreakPoint["xs"] = 0] = "xs";
    BreakPoint[BreakPoint["sm"] = 1] = "sm";
    BreakPoint[BreakPoint["md"] = 2] = "md";
    BreakPoint[BreakPoint["lg"] = 3] = "lg";
    BreakPoint[BreakPoint["xl"] = 4] = "xl";
})(BreakPoint || (BreakPoint = {}));
//# sourceMappingURL=bs4-breakpoint.enum.js.map

/***/ }),

/***/ "./bundle/browser/bs4-breakpoint.module.js":
/*!*************************************************!*\
  !*** ./bundle/browser/bs4-breakpoint.module.js ***!
  \*************************************************/
/*! exports provided: Bs4BreakpointModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bs4BreakpointModule", function() { return Bs4BreakpointModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bs4_breakpoint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bs4-breakpoint.component */ "./bundle/browser/bs4-breakpoint.component.js");



let Bs4BreakpointModule = class Bs4BreakpointModule {
};
Bs4BreakpointModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [_bs4_breakpoint_component__WEBPACK_IMPORTED_MODULE_2__["Bs4BreakpointsComponent"]],
        declarations: [_bs4_breakpoint_component__WEBPACK_IMPORTED_MODULE_2__["Bs4BreakpointsComponent"]],
        providers: [],
    })
], Bs4BreakpointModule);

//# sourceMappingURL=bs4-breakpoint.module.js.map

/***/ }),

/***/ "./bundle/browser/index.js":
/*!*********************************!*\
  !*** ./bundle/browser/index.js ***!
  \*********************************/
/*! exports provided: Bs4BreakpointModule, BreakPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./bundle/browser/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bs4BreakpointModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Bs4BreakpointModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPoint", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BreakPoint"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./bundle/browser/public_api.js":
/*!**************************************!*\
  !*** ./bundle/browser/public_api.js ***!
  \**************************************/
/*! exports provided: Bs4BreakpointModule, BreakPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bs4_breakpoint_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bs4-breakpoint.module */ "./bundle/browser/bs4-breakpoint.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bs4BreakpointModule", function() { return _bs4_breakpoint_module__WEBPACK_IMPORTED_MODULE_0__["Bs4BreakpointModule"]; });

/* harmony import */ var _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bs4-breakpoint.enum */ "./bundle/browser/bs4-breakpoint.enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPoint", function() { return _bs4_breakpoint_enum__WEBPACK_IMPORTED_MODULE_1__["BreakPoint"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./tmp-src/app/app.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./tmp-src/app/app.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"card\"\n       style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">current breakpoint: <h1>{{breakpointString}} - value: {{breakpoint}} </h1>\n      </h5>\n      <p class=\"card-text\"> Have a good day ! <br><br>\n        <a href=\"https://github.com/darekf77/bs4-breakpoint\">https://github.com/darekf77/bs4-breakpoint</a>\n      </p>\n      <a href=\"https://www.paypal.me/dariuszfilipiak\"\n         class=\"btn btn-primary\">buy hot coffee for darekf77 ?</a>\n    </div>\n  </div>\n\n  <bs4-breakpoint (changed)=\"resize($event)\"></bs4-breakpoint>\n\n</div>\n");

/***/ }),

/***/ "./tmp-src/app/app.component.css":
/*!***************************************!*\
  !*** ./tmp-src/app/app.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bXAtc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./tmp-src/app/app.component.ts":
/*!**************************************!*\
  !*** ./tmp-src/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./bundle/browser/index.js");
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! enum-values */ "./node_modules/enum-values/index.js");
/* harmony import */ var enum_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(enum_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");





let AppComponent = class AppComponent {
    constructor(swUpdate) {
        this.swUpdate = swUpdate;
    }
    ngOnInit() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm("New version available. Load New Version?")) {
                    window.location.reload();
                }
            });
        }
    }
    resize(breakpoint) {
        this.breakpoint = breakpoint;
        const b = enum_values__WEBPACK_IMPORTED_MODULE_3__["EnumValues"].getNameFromValue(components__WEBPACK_IMPORTED_MODULE_2__["BreakPoint"], breakpoint);
        this.breakpointString = b;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./tmp-src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./tmp-src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./tmp-src/app/app.module.ts":
/*!***********************************!*\
  !*** ./tmp-src/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./tmp-src/app/app.component.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./bundle/browser/index.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");







const workrPath = `ngsw-worker.js`;
console.log(`Worker path: ${workrPath}`);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            components__WEBPACK_IMPORTED_MODULE_5__["Bs4BreakpointModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register(workrPath, {
                enabled: true,
                registrationStrategy: 'registerImmediately'
            }),
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./tmp-src/main.ts":
/*!*************************!*\
  !*** ./tmp-src/main.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./tmp-src/app/app.module.ts");




console.log(ENV);
if (!ENV.build.options.isWatchBuild) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./tmp-src/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/darek/projects/npm/bs4-breakpoint/tmp-src/main.ts */"./tmp-src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map