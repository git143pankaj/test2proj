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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");



class AppComponent {
    constructor() {
        this.title = 'intvproject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainComponent_div_95_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_95_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Name should be 4 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_95_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | Name pattern not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_95_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_95_small_2_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_div_95_small_3_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.username.errors.pattern);
} }
function MainComponent_div_98_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MobileNumber is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_98_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Write Proper Mobile Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_98_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_98_small_2_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mobileNumber.errors.pattern);
} }
function MainComponent_div_101_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_101_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Write Proper Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_101_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_div_101_small_2_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.errors.email);
} }
function MainComponent_option_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cname_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cname_r15);
} }
function MainComponent_div_107_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cityname is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_107_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.cityname.errors.required);
} }
function MainComponent_option_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mylang_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mylang_r17);
} }
function MainComponent_div_113_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Language files not blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_113_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.language.errors.required);
} }
function MainComponent_div_117_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Text field should not blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_div_117_small_1_Template, 2, 0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.bodytext.errors.required);
} }
class MainComponent {
    constructor(fb) {
        this.fb = fb;
        this.cityName = [
            'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai',
            'Kolkata', 'Pune', 'Jaipur', 'Kanpur', 'Nagpur', 'Lucknow', 'Visakhapatnam', 'Thane'
        ];
        this.languageChange = [
            'English', 'Hindi', 'Odia', 'Kanada', 'Tamil', 'Telgu',
            'Bengali', 'Malayalam', 'Keral'
        ];
        this.formdisplay = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            cityname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            bodytext: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
        });
    }
    ngOnInit() {
    }
    get username() {
        return this.formdisplay.get('username');
    }
    get email() {
        return this.formdisplay.get('email');
    }
    get mobileNumber() {
        return this.formdisplay.get('mobileNumber');
    }
    get cityname() {
        return this.formdisplay.get('cityname');
    }
    get language() {
        return this.formdisplay.get('language');
    }
    get bodytext() {
        return this.formdisplay.get('bodytext');
    }
    onSubmit() {
        console.log(this.formdisplay.value);
        alert("To get the result to see the console");
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 167, vars: 10, consts: [[1, "topheader"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "home-banner"], ["id", "demo", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#demo", "data-slide-to", "0", 1, "active"], ["data-target", "#demo", "data-slide-to", "1"], ["data-target", "#demo", "data-slide-to", "2"], ["id", "carouselExampleSlidesOnly", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/images/banimg1.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["href", "#demo", "data-slide", "prev", 1, "carousel-control-prev"], [1, "carousel-control-prev-icon"], ["href", "#demo", "data-slide", "next", 1, "carousel-control-next"], [1, "carousel-control-next-icon"], [1, "clearfix"], [1, "container-fluid"], [1, "main-body"], [1, "row"], [1, "col-md-8", "col-sm-6", "col-xs-12", "nopad"], [1, "col-md-7", "col-sm-12", "col-xs-12", "nopad"], [1, "panBox-left"], [1, "col-md-5", "col-sm-12", "col-xs-12", "nopad"], [1, "panBox-mid"], [1, "pan-cont"], [1, "col-md-6", "col-sm-6", "col-xs-12", "nopad"], [1, "imgsect", "bdr-rt", "bdr-bt"], ["src", "assets/images/pdimg1.png"], [1, "imgsect", "bdr-bt", "bdr-btm"], ["src", "assets/images/pdimg4.png"], [1, "imgsect", "bdr-rt", "bdr-btm"], ["src", "assets/images/pdimg3.png"], [1, "imgsect"], ["src", "assets/images/pdimg2.png"], [1, "col-md-4", "col-sm-6", "col-xs-12"], [1, "panBox-right"], [1, "form-display"], [1, "txtColor"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "username", "required", "", "placeholder", "Name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "mobileNumber", "required", "", "placeholder", "Mobile Number", 1, "form-control"], ["type", "text", "formControlName", "email", "required", "", "placeholder", "Email ID", 1, "form-control"], ["formControlName", "cityname", 1, "form-control"], [4, "ngFor", "ngForOf"], ["formControlName", "language", 1, "form-control"], ["formControlName", "bodytext", "id", "body", "type", "text", "placeholder", "Your Text", 1, "form-control"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "smalltxt"], ["type", "submit", 1, "btn", "btn-primary", "btncostom", 3, "disabled"], [1, "ftrtwo"], [1, "col-md-8", "col-sm-8", "col-12"], [1, "lefiside"], ["href", "#"], [1, "col-md-4", "col-sm-4", "col-12", "nopad"], [1, "rihtside"], [1, "col-f"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "col-t"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], [1, "col-y"], ["aria-hidden", "true", 1, "fa", "fa-youtube-play"], [1, "col-l"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], [1, "col-p"], ["aria-hidden", "true", 1, "fa", "fa-pinterest-p"], [1, "text-danger"], [4, "ngIf"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "YOUR LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " The paint for healthy homes. Do you think sanitizing your hands is enough to stay safe? Think again. It is time you sanitized your home with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Berger Silk Breathe Easy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " A luxury premium emulsion, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Berger Silk Breathe Easy paint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "kills 99% of bacteria and reduces pollution. It has been formulated with 100% acrylic emulsions and vibrant pigments. Keeping in mind the health of your family members, Berger Silk Breathe Easy has low Volatile Organic Compounds and Formaldehyde reduction abilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Berger Silk Breathe Easy has been tested and certified for being an environment-friendly paint. Boost the health of your family members while they are indoors with Ghar ka Sanitizer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Why choose Beger Silk Breathe Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Anti Polution & Anti Bacterial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Environment Friendly & Low VOC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Kills 99% Bacteria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Approved by Indian Medical Association");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Know more about the safest paint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Looking to paint your walls with a safe premium paint? Get in touch to know more about Ghar ka Sanitizer- Berger Silk Breathe Easy. Fill the form below");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_92_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, MainComponent_div_95_Template, 4, 3, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, MainComponent_div_98_Template, 3, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, MainComponent_div_101_Template, 3, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Your Citymane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, MainComponent_option_106_Template, 2, 1, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, MainComponent_div_107_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Language Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, MainComponent_option_112_Template, 2, 1, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MainComponent_div_113_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "textarea", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, MainComponent_div_117_Template, 2, 1, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "I agree to the terms and conditions and also authorize Berger Paints India to contact me overriding my registry on NDN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Diclaration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "(c)2020 Berger Paints India Limited - All Rights Reserved | Website by HGS Interactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Contact us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "li", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formdisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.invalid && (ctx.username.dirty || ctx.username.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileNumber.invalid && (ctx.email.dirty || ctx.mobileNumber.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityname.invalid && (ctx.cityname.dirty || ctx.cityname.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languageChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.language.invalid && (ctx.language.dirty || ctx.language.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bodytext.invalid && (ctx.bodytext.dirty || ctx.bodytext.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formdisplay.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".topheader[_ngcontent-%COMP%] { width: 100%; padding: 0; background: #f00;}\r\n\r\n.body-contain[_ngcontent-%COMP%] { width: 100%; background: #d5f9ff; padding: 30px 0;}\r\n\r\n.bdtext[_ngcontent-%COMP%] { width: 100%;}\r\n\r\n.img-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 15px; text-align: center;}\r\n\r\n.img-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style: none; float: left; padding: 15px 0; \r\n    text-align: center; height: 143px; width: 143px;}\r\n\r\n.img-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { width:100%; margin: 0 auto; border-bottom: 1px solid #728588; float: left; margin: 0; }\r\n\r\n.img-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {border-right: 1px solid #728588;}\r\n\r\n.img-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {border-right:none;}\r\n\r\n.img-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:last-child{border-bottom: none;}\r\n\r\n.img-box[_ngcontent-%COMP%] {text-align: center; float: left;}\r\n\r\n.img-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 13px; line-height: 16px;}\r\n\r\n.form-display[_ngcontent-%COMP%]{ width: 80%; padding: 15px 20px; border-radius: 10px; bottom: 0;\r\nbox-shadow: 0px -7px 27px -12px rgba(0,0,0,0.54);\r\n    background: #fff; position:absolute; z-index: 10;}\r\n\r\n.form-display[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    border-radius: 50px; height: 40px;\r\n}\r\n\r\n.txtColor[_ngcontent-%COMP%] {color: blue;}\r\n\r\n.smalltxt[_ngcontent-%COMP%] {font-size:13px;}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    \r\n    padding: 3px 10px;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    margin-bottom: 0;\r\n  \r\n}\r\n\r\n.btncostom[_ngcontent-%COMP%]{ border-radius: 50px; margin: 10px auto; display: table; margin-bottom: 5px;;}\r\n\r\n.form-display[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] { padding: 4px 30px;}\r\n\r\n.form-display[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 12px;}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.ftrtwo[_ngcontent-%COMP%] { width: 100%; background: #333; padding: 10px 5px; overflow: hidden; }\r\n\r\n.lefiside[_ngcontent-%COMP%], .rihtside[_ngcontent-%COMP%] { width: 100%; position: relative; }\r\n\r\n.lefiside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style: none; float: left; padding: 5px 0; text-align: center; font-size: 12px; color: #8e8e8e;}\r\n\r\n.lefiside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { text-decoration: none; font-size: 12px; border-right: 1px solid #8e8e8e; color: #8e8e8e; padding: 0 10px; text-align: center; }\r\n\r\n.lefiside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{padding-left: 10px;}\r\n\r\n.lefiside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #fff; }\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {list-style: none; float: left; padding: 5px 0; text-align: center; font-size: 12px; color: #8e8e8e;}\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { text-decoration: none; color: #fff; padding: 10px 9px;\r\n    text-align: center;\r\n    line-height: 23px;\r\n}\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { float: right; margin-right: 20px; }\r\n\r\n.lefiside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] { margin: 0; }\r\n\r\n.rihtside[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 15px; }\r\n\r\n.rihtside[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {font-size:13px; float: left; padding:5px 10px 0 0; color: #fff;}\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { border-radius: 20px; height: 30px; width: 30px; margin: 0 3px; }\r\n\r\n.col-f[_ngcontent-%COMP%] {background: #426ab4;}\r\n\r\n.col-t[_ngcontent-%COMP%] {background: #00c6ff;}\r\n\r\n.col-y[_ngcontent-%COMP%] {background: #eb2200;}\r\n\r\n.col-l[_ngcontent-%COMP%] {background: #008cc9;}\r\n\r\n.col-p[_ngcontent-%COMP%] {background: #ff260c;}\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover { background: #ccc;}\r\n\r\n.rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{ color: #000; }\r\n\r\n.colred[_ngcontent-%COMP%] {background: red; height: 450px; width:100%;}\r\n\r\n.colgreen[_ngcontent-%COMP%] {background: green; height: 450px; width:100%;}\r\n\r\n.colblue[_ngcontent-%COMP%] {background: blue; height: 450px; width:100%;}\r\n\r\n.main-body[_ngcontent-%COMP%]{\r\n    width: 100%; background: #d5f9ff;  padding: 20px; height: auto; float: left; \r\n   }\r\n\r\n.panBox-left[_ngcontent-%COMP%]{ width: 100%; height: auto; padding: 20px 30px; position: relative;}\r\n\r\n.panBox-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 14px;}\r\n\r\n.panBox-mid[_ngcontent-%COMP%] { width: 100%; height: auto; padding: 20px; text-align: center; }\r\n\r\n.panBox-mid[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] { font-size: 15px; font-weight: 600; text-align: center; padding-bottom: 10px; }\r\n\r\n.panBox-right[_ngcontent-%COMP%] { width: 100%; height: auto; padding: 10px 20px;}\r\n\r\n.pan-cont[_ngcontent-%COMP%] { padding: 0 30px; }\r\n\r\n.imgsect[_ngcontent-%COMP%] { height: 130px; width: 100%; text-align: center; padding: 10px 0; }\r\n\r\n.imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] { font-size: 13px; text-align: center; padding: 5px 15px;}\r\n\r\n.bdr-rt[_ngcontent-%COMP%] { border-right: 1px solid #666;}\r\n\r\n.bdr-bt[_ngcontent-%COMP%] { border-bottom: 1px solid #666; }\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (min-width: 1200px){\r\n    .pan-cont[_ngcontent-%COMP%] {padding: 0 10px;}\r\n   .imgsect[_ngcontent-%COMP%] {height: 140px; width: 100%; text-align: center;  padding: 10px 0; }\r\n   .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n   .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {padding: 5px 8px;}\r\n     \r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 1200px){\r\n    .pan-cont[_ngcontent-%COMP%] {padding: 0 10px;}\r\n   .imgsect[_ngcontent-%COMP%] {height: 140px; width: 100%; text-align: center;  padding: 10px 0; }\r\n   .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n   .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {padding: 5px 8px;}\r\n  \r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 1024px){\r\n    .pan-cont[_ngcontent-%COMP%] {padding: 0 10px;}\r\n   .imgsect[_ngcontent-%COMP%] {height: 140px; width: 100%; text-align: center;  padding: 10px 0; }\r\n   .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n   .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {padding: 5px 8px;}\r\n  \r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 992px){\r\n    \r\n    .pan-cont[_ngcontent-%COMP%] {padding: 0 10px;}\r\n   .imgsect[_ngcontent-%COMP%] {height: 140px; width: 100%; text-align: center;  padding: 10px 0; }\r\n   .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n   .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {padding: 5px 8px;}\r\n  \r\n      \r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n       .pan-cont[_ngcontent-%COMP%] {padding: 0 50px;}\r\n      .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 12px; text-align: center; padding: 5px 2px;}\r\n      .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n      .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 12px; text-align: center; padding: 5px 2px;}\r\n      .panBox-right[_ngcontent-%COMP%]{padding: 10px 5px; }\r\n      .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; bottom: 0; }\r\n      .panBox-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 13px;}\r\n      .panBox-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {font-size: 13px;}\r\n      .imgsect[_ngcontent-%COMP%]{height: 134px; width: 100%; text-align: center; padding: 3px 0; }\r\n      .main-body[_ngcontent-%COMP%] {padding-bottom: 0;}\r\n      .panBox-mid[_ngcontent-%COMP%]{ padding:10px 20px;}\r\n      .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; }\r\n     \r\n      }\r\n\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n      .formpan[_ngcontent-%COMP%] {width: 100%; margin: 0 auto;}\r\n      .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 12px; text-align: center; padding: 5px 2px;}\r\n      .panBox-right[_ngcontent-%COMP%]{padding: 10px 5px; }\r\n      .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; bottom: 0; }\r\n      .panBox-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {font-size: 13px;}\r\n      .panBox-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {font-size: 13px;}\r\n      .imgsect[_ngcontent-%COMP%]{height: 134px; width: 100%; text-align: center; padding: 3px 0; }\r\n      .main-body[_ngcontent-%COMP%] {padding-bottom: 0;}\r\n      .panBox-mid[_ngcontent-%COMP%]{ padding:10px 20px;}\r\n      .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; }\r\n      \r\n      }\r\n\r\n\r\n\r\n@media screen and (max-width: 480px) {\r\n       .bdr-rt[_ngcontent-%COMP%] { border-right: 1px solid transparent; }\r\n       .bdr-btm[_ngcontent-%COMP%] { border-bottom: 1px solid #333;}\r\n       .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; }\r\n       .panBox-right[_ngcontent-%COMP%]{padding: 10px 5px; }\r\n       .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 14px; text-align: center; padding: 5px 2px;}\r\n       .rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {float: none; margin: 0 auto; display: table;}\r\n       .pan-cont[_ngcontent-%COMP%] {padding: 0 70px;}\r\n  \r\n      }\r\n\r\n\r\n\r\n@media only screen and (max-width : 320px) {\r\n      .bdr-rt[_ngcontent-%COMP%] { border-right: 1px solid transparent; }\r\n      .bdr-btm[_ngcontent-%COMP%] { border-bottom: 1px solid #999;}\r\n      .form-display[_ngcontent-%COMP%] {  width: 100%;  float: none; position: relative; }\r\n      .panBox-right[_ngcontent-%COMP%]{padding: 10px 5px; }\r\n      .imgsect[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {font-size: 14px; text-align: center; padding: 5px 2px;}\r\n      .rihtside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {float: none; margin: 0 auto; display: table;}\r\n       \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixDQUFDOztBQUV2RCxnQkFBZ0IsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsQ0FBQzs7QUFDbEUsVUFBVSxXQUFXLENBQUM7O0FBQ3RCLGFBQWEsZUFBZSxFQUFFLGtCQUFrQixDQUFDOztBQUNqRCxhQUFhLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxlQUFlO0lBQ3ZELGtCQUFrQixFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7O0FBQ3BELGNBQWMsVUFBVSxFQUFFLGNBQWMsRUFBRSxnQ0FBZ0MsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFOztBQUNwRyxhQUFhLCtCQUErQixDQUFDOztBQUM3Qyx3QkFBd0IsaUJBQWlCLENBQUM7O0FBQzFDLHVCQUF1QixtQkFBbUIsQ0FBQzs7QUFDM0MsVUFBVSxrQkFBa0IsRUFBRSxXQUFXLENBQUM7O0FBQzFDLGVBQWUsZUFBZSxFQUFFLGlCQUFpQixDQUFDOztBQUNsRCxlQUFlLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxTQUFTO0FBRzdFLGdEQUFnRDtJQUM1QyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLENBQUM7O0FBQ3JEO0lBQ0ksbUJBQW1CLEVBQUUsWUFBWTtBQUNyQzs7QUFDQSxXQUFXLFdBQVcsQ0FBQzs7QUFDdkIsV0FBVyxjQUFjLENBQUM7O0FBQzFCO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCOztBQUNBLFlBQVksbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFOztBQUN4RixxQkFBcUIsaUJBQWlCLENBQUM7O0FBQ3ZDLGlCQUFpQixlQUFlLENBQUM7O0FBRWpDO0lBQ0ksa0JB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QUF1QixlQUFlLENBQUM7TUFDdkMsU0FBUyxhQUFhLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtNQUN6RSxZQUFZLGlCQUFpQixDQUFDO01BQzlCLGFBQWEsaUJBQWlCLENBQUM7TUFDL0IsaUJBQWlCLFdBQVcsR0FBRyxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7O01BRWhFOztBQUdKLG9CQUFvQjs7QUFDbEI7T0FDRyxVQUFVLG1DQUFtQyxFQUFFO09BQy9DLFdBQVcsNkJBQTZCLENBQUM7T0FDekMsaUJBQWlCLFdBQVcsR0FBRyxXQUFXLEVBQUUsa0JBQWtCLEVBQUU7T0FDaEUsY0FBYyxpQkFBaUIsRUFBRTtPQUNqQyxhQUFhLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztPQUNuRSxjQUFjLFdBQVcsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO09BQzFELFdBQVcsZUFBZSxDQUFDOztNQUU1Qjs7QUFHSixnQkFBZ0I7O0FBQ2hCO01BQ0ksVUFBVSxtQ0FBbUMsRUFBRTtNQUMvQyxXQUFXLDZCQUE2QixDQUFDO01BQ3pDLGlCQUFpQixXQUFXLEdBQUcsV0FBVyxFQUFFLGtCQUFrQixFQUFFO01BQ2hFLGNBQWMsaUJBQWlCLEVBQUU7TUFDakMsYUFBYSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUM7TUFDbkUsY0FBYyxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQzs7RUFFOUQiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BoZWFkZXIgeyB3aWR0aDogMTAwJTsgcGFkZGluZzogMDsgYmFja2dyb3VuZDogI2YwMDt9XHJcblxyXG4uYm9keS1jb250YWluIHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICNkNWY5ZmY7IHBhZGRpbmc6IDMwcHggMDt9XHJcbi5iZHRleHQgeyB3aWR0aDogMTAwJTt9XHJcbi5pbWctYm94IGg2IHtmb250LXNpemU6IDE1cHg7IHRleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5pbWctYm94IGxpIHtsaXN0LXN0eWxlOiBub25lOyBmbG9hdDogbGVmdDsgcGFkZGluZzogMTVweCAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgaGVpZ2h0OiAxNDNweDsgd2lkdGg6IDE0M3B4O31cclxuLmltZy1ib3ggdWwgeyB3aWR0aDoxMDAlOyBtYXJnaW46IDAgYXV0bzsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Mjg1ODg7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDA7IH1cclxuLmltZy1ib3ggbGkge2JvcmRlci1yaWdodDogMXB4IHNvbGlkICM3Mjg1ODg7fVxyXG4uaW1nLWJveCBsaTpsYXN0LWNoaWxkIHtib3JkZXItcmlnaHQ6bm9uZTt9XHJcbi5pbWctYm94IHVsOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbTogbm9uZTt9XHJcbi5pbWctYm94IHt0ZXh0LWFsaWduOiBjZW50ZXI7IGZsb2F0OiBsZWZ0O31cclxuLmltZy1ib3ggbGkgcCB7Zm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMTZweDt9XHJcbi5mb3JtLWRpc3BsYXl7IHdpZHRoOiA4MCU7IHBhZGRpbmc6IDE1cHggMjBweDsgYm9yZGVyLXJhZGl1czogMTBweDsgYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTdweCAyN3B4IC0xMnB4IHJnYmEoMCwwLDAsMC41NCk7XHJcbi1tb3otYm94LXNoYWRvdzogMHB4IC03cHggMjdweCAtMTJweCByZ2JhKDAsMCwwLDAuNTQpO1xyXG5ib3gtc2hhZG93OiAwcHggLTdweCAyN3B4IC0xMnB4IHJnYmEoMCwwLDAsMC41NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmOyBwb3NpdGlvbjphYnNvbHV0ZTsgei1pbmRleDogMTA7fVxyXG4uZm9ybS1kaXNwbGF5IC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDsgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi50eHRDb2xvciB7Y29sb3I6IGJsdWU7fVxyXG4uc21hbGx0eHQge2ZvbnQtc2l6ZToxM3B4O31cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAzMHB4OyAqL1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIFxyXG59XHJcbi5idG5jb3N0b217IGJvcmRlci1yYWRpdXM6IDUwcHg7IG1hcmdpbjogMTBweCBhdXRvOyBkaXNwbGF5OiB0YWJsZTsgbWFyZ2luLWJvdHRvbTogNXB4Ozt9XHJcbi5mb3JtLWRpc3BsYXkgLmJ0biB7IHBhZGRpbmc6IDRweCAzMHB4O31cclxuLmZvcm0tZGlzcGxheSBwIHtmb250LXNpemU6IDEycHg7fVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZnRydHdvIHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICMzMzM7IHBhZGRpbmc6IDEwcHggNXB4OyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcbi5sZWZpc2lkZSwgLnJpaHRzaWRlIHsgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4ubGVmaXNpZGUgdWwgbGkge2xpc3Qtc3R5bGU6IG5vbmU7IGZsb2F0OiBsZWZ0OyBwYWRkaW5nOiA1cHggMDsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjOGU4ZThlO31cclxuLmxlZmlzaWRlIHVsIGxpIGEgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc2l6ZTogMTJweDsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzhlOGU4ZTsgY29sb3I6ICM4ZThlOGU7IHBhZGRpbmc6IDAgMTBweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XHJcbi5sZWZpc2lkZSB1bCBsaTpsYXN0LWNoaWxke3BhZGRpbmctbGVmdDogMTBweDt9XHJcbi5sZWZpc2lkZSB1bCBsaSBhOmhvdmVyIHsgY29sb3I6ICNmZmY7IH1cclxuLnJpaHRzaWRlIHVsIGxpIHtsaXN0LXN0eWxlOiBub25lOyBmbG9hdDogbGVmdDsgcGFkZGluZzogNXB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzhlOGU4ZTt9XHJcbi5yaWh0c2lkZSB1bCBsaSBhIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogI2ZmZjsgcGFkZGluZzogMTBweCA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxufVxyXG4ucmlodHNpZGUgdWwgeyBmbG9hdDogcmlnaHQ7IG1hcmdpbi1yaWdodDogMjBweDsgfVxyXG4ubGVmaXNpZGUgdWwgeyBtYXJnaW46IDA7IH1cclxuLnJpaHRzaWRlIGkgeyBmb250LXNpemU6IDE1cHg7IH1cclxuLnJpaHRzaWRlIHNwYW4ge2ZvbnQtc2l6ZToxM3B4OyBmbG9hdDogbGVmdDsgcGFkZGluZzo1cHggMTBweCAwIDA7IGNvbG9yOiAjZmZmO31cclxuLnJpaHRzaWRlIHVsIGxpIHsgYm9yZGVyLXJhZGl1czogMjBweDsgaGVpZ2h0OiAzMHB4OyB3aWR0aDogMzBweDsgbWFyZ2luOiAwIDNweDsgfVxyXG5cclxuLmNvbC1mIHtiYWNrZ3JvdW5kOiAjNDI2YWI0O31cclxuLmNvbC10IHtiYWNrZ3JvdW5kOiAjMDBjNmZmO31cclxuLmNvbC15IHtiYWNrZ3JvdW5kOiAjZWIyMjAwO31cclxuLmNvbC1sIHtiYWNrZ3JvdW5kOiAjMDA4Y2M5O31cclxuLmNvbC1wIHtiYWNrZ3JvdW5kOiAjZmYyNjBjO31cclxuXHJcbi5yaWh0c2lkZSB1bCBsaTpob3ZlciB7IGJhY2tncm91bmQ6ICNjY2M7fVxyXG4ucmlodHNpZGUgdWwgbGk6aG92ZXIgYXsgY29sb3I6ICMwMDA7IH1cclxuXHJcbi5jb2xyZWQge2JhY2tncm91bmQ6IHJlZDsgaGVpZ2h0OiA0NTBweDsgd2lkdGg6MTAwJTt9XHJcbi5jb2xncmVlbiB7YmFja2dyb3VuZDogZ3JlZW47IGhlaWdodDogNDUwcHg7IHdpZHRoOjEwMCU7fVxyXG4uY29sYmx1ZSB7YmFja2dyb3VuZDogYmx1ZTsgaGVpZ2h0OiA0NTBweDsgd2lkdGg6MTAwJTt9XHJcblxyXG5cclxuXHJcbi5tYWluLWJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogI2Q1ZjlmZjsgIHBhZGRpbmc6IDIwcHg7IGhlaWdodDogYXV0bzsgZmxvYXQ6IGxlZnQ7IFxyXG4gICB9XHJcbiAgIC5wYW5Cb3gtbGVmdHsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgcGFkZGluZzogMjBweCAzMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gICAucGFuQm94LWxlZnQgcCB7Zm9udC1zaXplOiAxNHB4O31cclxuICAgLnBhbkJveC1taWQgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvOyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgLnBhbkJveC1taWQgaDUgeyBmb250LXNpemU6IDE1cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cclxuICAgLnBhbkJveC1yaWdodCB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IHBhZGRpbmc6IDEwcHggMjBweDt9XHJcbiAgIC5wYW4tY29udCB7IHBhZGRpbmc6IDAgMzBweDsgfVxyXG4gICAuaW1nc2VjdCB7IGhlaWdodDogMTMwcHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDEwcHggMDsgfVxyXG4gICAuaW1nc2VjdCBoNiB7IGZvbnQtc2l6ZTogMTNweDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA1cHggMTVweDt9XHJcbiAgIC5iZHItcnQgeyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O31cclxuICAgLmJkci1idCB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2OyB9XHJcbiAgIC8qIC5mb3JtcGFuIHsgd2lkdGg6IDgwJTsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogMjBweDsgaGVpZ2h0OiA0ODBweDsgbWFyZ2luOiAwIGF1dG87IH0gKi9cclxuICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogMTIwMSB0byBhYm92ZSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgLnBhbi1jb250IHtwYWRkaW5nOiAwIDEwcHg7fVxyXG4gICAuaW1nc2VjdCB7aGVpZ2h0OiAxNDBweDsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgIHBhZGRpbmc6IDEwcHggMDsgfVxyXG4gICAuZm9ybXBhbiB7d2lkdGg6IDEwMCU7IG1hcmdpbjogMCBhdXRvO31cclxuICAgLmltZ3NlY3QgaDYge3BhZGRpbmc6IDVweCA4cHg7fVxyXG4gICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAvKiAxMDI1IHRvIDEyMDA7ICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgIC5wYW4tY29udCB7cGFkZGluZzogMCAxMHB4O31cclxuICAgLmltZ3NlY3Qge2hlaWdodDogMTQwcHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICBwYWRkaW5nOiAxMHB4IDA7IH1cclxuICAgLmZvcm1wYW4ge3dpZHRoOiAxMDAlOyBtYXJnaW46IDAgYXV0bzt9XHJcbiAgIC5pbWdzZWN0IGg2IHtwYWRkaW5nOiA1cHggOHB4O31cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLyogOTkzIHRvIDEwMjQ7ICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC5wYW4tY29udCB7cGFkZGluZzogMCAxMHB4O31cclxuICAgLmltZ3NlY3Qge2hlaWdodDogMTQwcHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICBwYWRkaW5nOiAxMHB4IDA7IH1cclxuICAgLmZvcm1wYW4ge3dpZHRoOiAxMDAlOyBtYXJnaW46IDAgYXV0bzt9XHJcbiAgIC5pbWdzZWN0IGg2IHtwYWRkaW5nOiA1cHggOHB4O31cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogNzY4IHRvIDk5MjsgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICBcclxuICAgIC5wYW4tY29udCB7cGFkZGluZzogMCAxMHB4O31cclxuICAgLmltZ3NlY3Qge2hlaWdodDogMTQwcHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7ICBwYWRkaW5nOiAxMHB4IDA7IH1cclxuICAgLmZvcm1wYW4ge3dpZHRoOiAxMDAlOyBtYXJnaW46IDAgYXV0bzt9XHJcbiAgIC5pbWdzZWN0IGg2IHtwYWRkaW5nOiA1cHggOHB4O31cclxuICBcclxuICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIDYwMXB4IHRvIDc2ODsgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgLnBhbi1jb250IHtwYWRkaW5nOiAwIDUwcHg7fVxyXG4gICAgICAuaW1nc2VjdCBoNiB7Zm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDVweCAycHg7fVxyXG4gICAgICAuZm9ybXBhbiB7d2lkdGg6IDEwMCU7IG1hcmdpbjogMCBhdXRvO31cclxuICAgICAgLmltZ3NlY3QgaDYge2ZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA1cHggMnB4O31cclxuICAgICAgLnBhbkJveC1yaWdodHtwYWRkaW5nOiAxMHB4IDVweDsgfVxyXG4gICAgICAuZm9ybS1kaXNwbGF5IHsgIHdpZHRoOiAxMDAlOyAgZmxvYXQ6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYm90dG9tOiAwOyB9XHJcbiAgICAgIC5wYW5Cb3gtbGVmdCBwIHtmb250LXNpemU6IDEzcHg7fVxyXG4gICAgICAucGFuQm94LWxlZnQgcCBzdHJvbmcge2ZvbnQtc2l6ZTogMTNweDt9XHJcbiAgICAgIC5pbWdzZWN0e2hlaWdodDogMTM0cHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDNweCAwOyB9XHJcbiAgICAgIC5tYWluLWJvZHkge3BhZGRpbmctYm90dG9tOiAwO31cclxuICAgICAgLnBhbkJveC1taWR7IHBhZGRpbmc6MTBweCAyMHB4O31cclxuICAgICAgLmZvcm0tZGlzcGxheSB7ICB3aWR0aDogMTAwJTsgIGZsb2F0OiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIDQ4MXB4IHRvIDYwMDsgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAuZm9ybXBhbiB7d2lkdGg6IDEwMCU7IG1hcmdpbjogMCBhdXRvO31cclxuICAgICAgLmltZ3NlY3QgaDYge2ZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiA1cHggMnB4O31cclxuICAgICAgLnBhbkJveC1yaWdodHtwYWRkaW5nOiAxMHB4IDVweDsgfVxyXG4gICAgICAuZm9ybS1kaXNwbGF5IHsgIHdpZHRoOiAxMDAlOyAgZmxvYXQ6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYm90dG9tOiAwOyB9XHJcbiAgICAgIC5wYW5Cb3gtbGVmdCBwIHtmb250LXNpemU6IDEzcHg7fVxyXG4gICAgICAucGFuQm94LWxlZnQgcCBzdHJvbmcge2ZvbnQtc2l6ZTogMTNweDt9XHJcbiAgICAgIC5pbWdzZWN0e2hlaWdodDogMTM0cHg7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDNweCAwOyB9XHJcbiAgICAgIC5tYWluLWJvZHkge3BhZGRpbmctYm90dG9tOiAwO31cclxuICAgICAgLnBhbkJveC1taWR7IHBhZGRpbmc6MTBweCAyMHB4O31cclxuICAgICAgLmZvcm0tZGlzcGxheSB7ICB3aWR0aDogMTAwJTsgIGZsb2F0OiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAvKiAzMjFweCB0byA0ODBweDsgKi9cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAuYmRyLXJ0IHsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7IH1cclxuICAgICAgIC5iZHItYnRtIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7fVxyXG4gICAgICAgLmZvcm0tZGlzcGxheSB7ICB3aWR0aDogMTAwJTsgIGZsb2F0OiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cclxuICAgICAgIC5wYW5Cb3gtcmlnaHR7cGFkZGluZzogMTBweCA1cHg7IH1cclxuICAgICAgIC5pbWdzZWN0IGg2IHtmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNXB4IDJweDt9XHJcbiAgICAgICAucmlodHNpZGUgdWwge2Zsb2F0OiBub25lOyBtYXJnaW46IDAgYXV0bzsgZGlzcGxheTogdGFibGU7fVxyXG4gICAgICAgLnBhbi1jb250IHtwYWRkaW5nOiAwIDcwcHg7fVxyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIFxyXG4gIC8qIDBweCB0byAzMjA7ICovXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMzIwcHgpIHtcclxuICAgICAgLmJkci1ydCB7IGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XHJcbiAgICAgIC5iZHItYnRtIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7fVxyXG4gICAgICAuZm9ybS1kaXNwbGF5IHsgIHdpZHRoOiAxMDAlOyAgZmxvYXQ6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gICAgICAucGFuQm94LXJpZ2h0e3BhZGRpbmc6IDEwcHggNXB4OyB9XHJcbiAgICAgIC5pbWdzZWN0IGg2IHtmb250LXNpemU6IDE0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogNXB4IDJweDt9XHJcbiAgICAgIC5yaWh0c2lkZSB1bCB7ZmxvYXQ6IG5vbmU7IG1hcmdpbjogMCBhdXRvOyBkaXNwbGF5OiB0YWJsZTt9XHJcbiAgICAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular2020\intvproject -complete-final\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map