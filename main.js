(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _print_resume_print_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../print-resume/print-resume.component */ "./src/app/print-resume/print-resume.component.ts");
/* harmony import */ var _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../business-card/business-card.component */ "./src/app/business-card/business-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: ':lang', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: ':lang/print-cv', component: _print_resume_print_resume_component__WEBPACK_IMPORTED_MODULE_3__["PrintResumeComponent"]
    },
    {
        path: ':lang/print-card', component: _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_4__["BusinessCardComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body, .modal-title {\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Warning!</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    Please be advised that this website is still under construction and could contain false or incomplete\n    data!\n  </div>\n</ng-template>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, translate) {
        this.modalService = modalService;
        translate.setDefaultLang('universal');
    }
    AppComponent.prototype.openModal = function (template) {
        // this.modalRef = this.modalService.show(template);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.openModal(this.template);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('template'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AppComponent.prototype, "template", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume-header/resume-header.component */ "./src/app/resume/resume-header/resume-header.component.ts");
/* harmony import */ var _resume_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/work-experience/work-experience.component */ "./src/app/resume/work-experience/work-experience.component.ts");
/* harmony import */ var _resume_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/education/education.component */ "./src/app/resume/education/education.component.ts");
/* harmony import */ var _resume_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resume/courses/courses.component */ "./src/app/resume/courses/courses.component.ts");
/* harmony import */ var _resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resume/skills/skills.component */ "./src/app/resume/skills/skills.component.ts");
/* harmony import */ var _resume_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resume/summary/summary.component */ "./src/app/resume/summary/summary.component.ts");
/* harmony import */ var _resume_languages_languages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resume/languages/languages.component */ "./src/app/resume/languages/languages.component.ts");
/* harmony import */ var _resume_interests_interests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resume/interests/interests.component */ "./src/app/resume/interests/interests.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _print_resume_print_resume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./print-resume/print-resume.component */ "./src/app/print-resume/print-resume.component.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./business-card/business-card.component */ "./src/app/business-card/business-card.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _resume_resume_header_resume_header_component__WEBPACK_IMPORTED_MODULE_4__["ResumeHeaderComponent"],
                _resume_work_experience_work_experience_component__WEBPACK_IMPORTED_MODULE_5__["WorkExperienceComponent"],
                _resume_education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"],
                _resume_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__["CoursesComponent"],
                _resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _resume_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"],
                _resume_languages_languages_component__WEBPACK_IMPORTED_MODULE_10__["LanguagesComponent"],
                _resume_interests_interests_component__WEBPACK_IMPORTED_MODULE_11__["InterestsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_12__["ResumeComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["PortfolioComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _print_resume_print_resume_component__WEBPACK_IMPORTED_MODULE_17__["PrintResumeComponent"],
                _business_card_business_card_component__WEBPACK_IMPORTED_MODULE_23__["BusinessCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_22__["QRCodeModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
                    }
                }),
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/business-card/business-card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/business-card/business-card.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  padding-top: 0.25rem;\n}\n\nheader {\n  background: #434E5E;\n  color: whitesmoke;\n  /*border: solid 0.25px #434E5E;*/\n  border: solid 0.25px var(--muted-text-color);\n}\n\nh1, h2 {\n  color: whitesmoke;\n  margin: 0;\n  padding-bottom: 0;\n  padding-top: 1rem;\n}\n\nfigure {\n  margin: 1.2rem;\n  padding: 2px;\n  border: 1px solid darkgrey;\n  /*border-radius: 0.35rem;*/\n}\n\na {\n  color: darkgrey;\n}\n\na:hover {\n  color: white;\n}\n\n.qrcode-container {\n  width: 100%;\n  padding: 0.3rem;\n  background-color: white;\n  /*border-radius: 0.3rem;*/\n}\n\n.social-icon-container {\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 0.125rem;\n\n  font-size: 1rem;\n  background: white;\n  color: var(--primary-text-color);\n  margin-right: 0.25rem;\n}\n\n@media print {\n  .card-back {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: #434E5E;\n  }\n  @page {\n    size: A4 portrait;\n  }\n\n  html, body, header {\n    margin: 0;\n    padding: 0;\n  }\n\n  header {\n    position: absolute;\n    top: 35.58922559%;\n    bottom: 35.58922559%;\n    left: 37.14761905%;\n    right: 37.14761905%;\n  }\n\n  a {\n    color: whitesmoke;\n  }\n\n  h1 {\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n\n  h2 {\n    font-size: 1rem;\n    padding-top: 1.5rem;\n    padding-bottom: 1rem;\n  }\n\n  header {\n    font-size: 0.7rem;\n    padding: 1rem;\n    /*padding-top: 2rem;*/\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/business-card/business-card.component.html":
/*!************************************************************!*\
  !*** ./src/app/business-card/business-card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-back\"></div>\n<header class=\"d-none d-print-block\">\n  <div id=\"name-and-position-container\">\n    <h1 class=\"text-center\">\n      <span>{{'resume.contact.first-name' | translate}}</span><br>\n      <span>{{'resume.contact.last-name' | translate}}</span>\n    </h1>\n    <h2 class=\"text-center\">{{'resume.contact.job-position' | translate}}</h2>\n  </div>\n  <div class=\"text-center\">\n    <figure class=\"d-inline-block rounded\">\n      <div class=\"qrcode-container rounded\">\n        <qrcode allowEmptyString=\"true\" [qrdata]=\"'resume.contact.personal-website' | translate\" [size]=\"70\"\n                [level]=\"'M'\"></qrcode>\n      </div>\n    </figure>\n  </div>\n\n  <div id=\"contact-info\" class=\"clr-pad\">\n    <ul class=\"list-unstyled\">\n      <li>\n        <a href=\"tel:{{'resume.contact.phone' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center clr-pad\">\n                <i class=\"fa fa-phone\" data-fa-transform=\"grow-6\"></i>\n              </span>\n          {{'resume.contact.phone-styled' | translate}}\n        </a>\n      </li>\n      <li>\n        <a href=\"mailto:{{'resume.contact.email' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center clr-pad\">\n                <i class=\"fa fa-envelope\" data-fa-transform=\"grow-3\"></i>\n              </span>\n          {{'resume.contact.email' | translate}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</header>\n<!--<header class=\"row\">fuck you</header>-->\n"

/***/ }),

/***/ "./src/app/business-card/business-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/business-card/business-card.component.ts ***!
  \**********************************************************/
/*! exports provided: BusinessCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCardComponent", function() { return BusinessCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _print_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../print.service */ "./src/app/print.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BusinessCardComponent = /** @class */ (function () {
    function BusinessCardComponent(printService, route) {
        this.printService = printService;
        this.route = route;
    }
    BusinessCardComponent.prototype.ngOnInit = function () {
        this.printService.printAfterImagesLoaded("business card", this.route.snapshot.params['lang']);
    };
    BusinessCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'business-card',
            template: __webpack_require__(/*! ./business-card.component.html */ "./src/app/business-card/business-card.component.html"),
            styles: [__webpack_require__(/*! ./business-card.component.css */ "./src/app/business-card/business-card.component.css")]
        }),
        __metadata("design:paramtypes", [_print_service__WEBPACK_IMPORTED_MODULE_1__["PrintService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BusinessCardComponent);
    return BusinessCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".print-button-container {\n  max-width: 10cm;\n  margin: 1rem;\n}\n\n.btn-print {\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n}\n\n.alternative{\n  line-height: 300%;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<div class=\"page center-block\">\n  <resume></resume>\n</div>\n<div class=\"mx-auto text-center print-button-container\">\n  <input type=\"button\" class=\"btn btn-secondary btn-block btn-print\" value=\"{{'resume.download.btn-print' | translate}}\"\n         routerLink=\"./print-cv\"\n         tooltip=\"{{'resume.download.btn-print-tooltip' | translate}}\"/>\n  <!--<div class=\"alternative\">{{'resume.download.alternative' | translate}}</div>-->\n  <!--<input type=\"button\" class=\"btn btn-secondary btn-block btn-print\"-->\n         <!--value=\"{{'resume.download.btn-download' | translate}}\"-->\n         <!--(click)=\"downloadPdf()\"-->\n         <!--tooltip=\"{{'resume.download.btn-download-tooltip' | translate}}\"/>-->\n</div>\n<portfolio></portfolio>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, modalService, route, translate, title, platformLocation) {
        this.router = router;
        this.modalService = modalService;
        this.route = route;
        this.translate = translate;
        this.title = title;
        this.platformLocation = platformLocation;
        this.lang = this.route.snapshot.params['lang'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Resume.io');
        if (Object(util__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(this.lang) || (this.lang != 'pl' && this.lang != 'en')) {
            this.setDefaultBrowserLanguage();
        }
        else {
            console.log('Lang set to: ' + this.lang);
            this.translate.use(this.lang);
        }
    };
    HomeComponent.prototype.setDefaultBrowserLanguage = function () {
        if (this.translate.getBrowserLang() == 'pl') {
            this.lang = 'pl';
        }
        else {
            this.lang = 'en';
        }
        console.log('Lang set to: ' + this.lang);
        this.translate.use(this.lang);
        this.router.navigate(['', this.lang]);
    };
    HomeComponent.prototype.downloadPdf = function () {
        window.location.href = '/resume-io/assets/pdf/CV Marczynski Krzysztof - Java Developer - ' + this.route.snapshot.params['lang'].toUpperCase() + '.pdf';
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PlatformLocation"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark fixed-top bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n            aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n            (click)=\"toggleCollapsed()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"\n         [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">\n            {{'default-texts.resume' | translate}}\n            <span class=\"sr-only\">(current)</span><!--TODO change for scrollspy!!!!!-->\n          </a>\n        </li>\n        <li class=\"nav-item d-none\">\n          <a class=\"nav-link\" href=\"\">{{'default-texts.portfolio' | translate}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <span class=\"nav-link\" type=\"text/vcard\" (click)=\"vcard.generateVCard()\">\n            {{'navbar.vcard' | translate}}\n          </span>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{'resume.contact.github' | translate}}\" target=\"_blank\">\n            {{'default-texts.github' | translate}}\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"{{'resume.contact.linkedin' | translate}}\" target=\"_blank\">\n            {{'default-texts.linkedin' | translate}}\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <!--<input type=\"button\" class=\"btn btn-secondary\" value=\"\">-->\n          <a class=\"btn btn-secondary text-uppercase font-weight-bold text-white\" (click)=\"changeLanguage()\">\n            {{lang}} <span class=\"flag-icon\"></span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _vcard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vcard.service */ "./src/app/vcard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route, router, translate, vcard) {
        this.router = router;
        this.translate = translate;
        this.vcard = vcard;
        this.collapsed = true;
        this.lang = route.snapshot.params['lang'];
    }
    NavbarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.setOtherLang();
    };
    NavbarComponent.prototype.setOtherLang = function () {
        if (this.lang === 'rs') {
            this.lang = 'en';
            jquery__WEBPACK_IMPORTED_MODULE_2__('.flag-icon').removeClass('flag-icon-rs').addClass('flag-icon-gb');
        }
        else {
            this.lang = 'rs';
            jquery__WEBPACK_IMPORTED_MODULE_2__('.flag-icon').removeClass('flag-icon-gb').addClass('flag-icon-rs');
        }
    };
    NavbarComponent.prototype.changeLanguage = function () {
        this.translate.use(this.lang);
        this.router.navigate(['', this.translate.currentLang]);
        this.setOtherLang();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _vcard_service__WEBPACK_IMPORTED_MODULE_4__["VcardService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page\">\n  <h3>{{'portfolio.headline' | translate}}</h3>\n  <div *ngFor=\"let project of 'portfolio.projects' | translate \">\n    <h4 class=\"clr-pad\">{{project.title}} </h4>\n    <span> {{project.description}}</span>\n    <!--<p>{{project.description}}</p>-->\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\" *ngFor=\"let tech of project.stack\">\n          <span class=\"badge badge-pill\">\n            {{tech}}\n          </span>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/print-resume/print-resume.component.css":
/*!*********************************************************!*\
  !*** ./src/app/print-resume/print-resume.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  padding: 1rem;\n  margin: 0 3rem;\n  line-height: 125%;\n}\n"

/***/ }),

/***/ "./src/app/print-resume/print-resume.component.html":
/*!**********************************************************!*\
  !*** ./src/app/print-resume/print-resume.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-none d-print-block\">\n  <resume></resume>\n  <footer class=\"footer text-center small d-none d-print-block\">\n    <div *ngFor=\"let disclaimer of 'resume.disclaimer' | translate\">\n      <em>{{disclaimer}}</em>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/print-resume/print-resume.component.ts":
/*!********************************************************!*\
  !*** ./src/app/print-resume/print-resume.component.ts ***!
  \********************************************************/
/*! exports provided: PrintResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintResumeComponent", function() { return PrintResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print.service */ "./src/app/print.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrintResumeComponent = /** @class */ (function () {
    function PrintResumeComponent(router, route, translate, printService) {
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.printService = printService;
    }
    PrintResumeComponent.prototype.ngOnInit = function () {
        this.printDiv();
    };
    PrintResumeComponent.prototype.printDiv = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#name-and-position-container').removeClass('col-sm-7').addClass('col-5');
        jquery__WEBPACK_IMPORTED_MODULE_1__('#contact-info').removeClass('col-sm-5').addClass('col-4');
        for (var i = 1; i <= 12; ++i) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.col-sm-' + i).removeClass('col-sm-' + i).addClass('col-' + i);
            jquery__WEBPACK_IMPORTED_MODULE_1__('.col-md-' + i).removeClass('col-md-' + i).addClass('col-' + i);
        }
        this.printService.printAfterImagesLoaded(this.preparePrintTitle(), this.route.snapshot.params['lang']);
    };
    PrintResumeComponent.prototype.preparePrintTitle = function () {
        return this.translate.instant('default-texts.resume-short') + ' '
            + this.translate.instant('resume.contact.last-name-latinized') + ' '
            + this.translate.instant('resume.contact.first-name') + ' - '
            + this.translate.instant('resume.contact.job-position') + ' - '
            + String(this.translate.currentLang).toUpperCase();
    };
    PrintResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-resume',
            template: __webpack_require__(/*! ./print-resume.component.html */ "./src/app/print-resume/print-resume.component.html"),
            styles: [__webpack_require__(/*! ./print-resume.component.css */ "./src/app/print-resume/print-resume.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _print_service__WEBPACK_IMPORTED_MODULE_4__["PrintService"]])
    ], PrintResumeComponent);
    return PrintResumeComponent;
}());



/***/ }),

/***/ "./src/app/print.service.ts":
/*!**********************************!*\
  !*** ./src/app/print.service.ts ***!
  \**********************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintService = /** @class */ (function () {
    function PrintService(router, titleService) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.onafterprint = function () {
            _this.router.navigate(['', _this.lang]);
        };
    }
    PrintService.prototype.printAfterImagesLoaded = function (title, lang) {
        var _this = this;
        setTimeout(function () {
            var elems = document.getElementsByTagName('img');
            var proceed = true;
            for (var elemsKey = 0; elemsKey < elems.length; elemsKey++) {
                if (!elems[elemsKey].complete) {
                    proceed = false;
                    _this.printAfterImagesLoaded(title, lang);
                }
                if (proceed && elems[elemsKey].naturalWidth === 0) {
                    proceed = false;
                    return _this.printAfterImagesLoaded(title, lang);
                }
            }
            if (proceed) {
                _this.lang = lang;
                _this.titleService.setTitle(title);
                window.addEventListener('afterprint', _this.onafterprint, true);
                window.print();
                setTimeout(function () { return _this.router.navigate(['', _this.lang]); }, 2000);
            }
        }, 1000);
    };
    PrintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "./src/app/resume/courses/courses.component.css":
/*!******************************************************!*\
  !*** ./src/app/resume/courses/courses.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li::first-letter {\n  text-transform: uppercase;\n}\n\n@media (min-width: 576px) {\n  .col-sm-11 {\n    padding-left: 3rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/resume/courses/courses.component.html":
/*!*******************************************************!*\
  !*** ./src/app/resume/courses/courses.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"visibility.hasItems('resume.education.courses' | translate)\">\n  <h5 class=\"section-headline\">{{'resume.education.courses-headline' | translate}}</h5>\n  <div>\n    <div class=\"paragraph\">\n      <div class=\"row\" *ngFor=\"let courseGroup of 'resume.education.courses' | translate\">\n        <h6 class=\"col-sm-1 font-weight-bold clr-pad\">{{courseGroup.year}}</h6>\n        <ul class=\"col-sm-11\">\n          <li *ngFor=\"let course of courseGroup.content\">\n            {{course}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/courses/courses.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/resume/courses/courses.component.ts ***!
  \*****************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(visibility) {
        this.visibility = visibility;
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/resume/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/resume/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/resume/education/education.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resume/education/education.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".separator {\n  display: none;\n}\n\n.thesis {\n  font-size: 0.9em;\n  display: flex;\n}\n\n@media (min-width: 576px) {\n  .separator {\n    display: inline;\n  }\n}\n"

/***/ }),

/***/ "./src/app/resume/education/education.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resume/education/education.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"visibility.hasItems('resume.education.formal' | translate)\">\n  <h3 class=\"section-headline\">{{'resume.education.headline' | translate}}</h3>\n  <div>\n    <ul class=\"list-unstyled paragraph\">\n      <li class=\"row\" *ngFor=\"let edu of 'resume.education.formal' | translate\">\n        <div class=\"col-sm-2 clr-pad\">{{edu.start}} - {{edu.end}}</div>\n        <div class=\"col-sm-10 clr-pad\">\n          <div class=\"d-sm-inline-block \">{{edu.university}}</div>\n          <span class=\"separator\">,&nbsp;</span>\n          <div class=\"d-sm-inline-block  font-weight-bold\">{{edu.faculty}}</div>\n          <span class=\"separator\">,&nbsp;</span>\n          <div class=\"d-sm-inline-block\">{{edu.title}}</div>\n          <div class=\"thesis\">\n            <div>{{'resume.education.thesis-headline' | translate}}:&nbsp;</div>\n            <div><em>{{edu.thesis}}</em></div>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <courses></courses>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/education/education.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/education/education.component.ts ***!
  \*********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationComponent = /** @class */ (function () {
    function EducationComponent(visibility) {
        this.visibility = visibility;
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/resume/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/resume/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/resume/interests/interests.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resume/interests/interests.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/interests/interests.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resume/interests/interests.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"visiblity.hasItems('resume.interests.content' | translate) \">\n  <h3 class=\"section-headline\">{{'resume.interests.headline' | translate}}</h3>\n  <div class=\"paragraph\">\n    <ul class=\"list-inline\">\n      <li class=\"list-inline-item\" *ngFor=\"let item of 'resume.interests.content' | translate\">\n        <span class=\"badge badge-pill\">\n          {{item}}\n        </span>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/interests/interests.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/interests/interests.component.ts ***!
  \*********************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterestsComponent = /** @class */ (function () {
    function InterestsComponent(translate, ngZone, visiblity) {
        this.translate = translate;
        this.ngZone = ngZone;
        this.visiblity = visiblity;
    }
    InterestsComponent.prototype.ngOnInit = function () {
    };
    InterestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interests',
            template: __webpack_require__(/*! ./interests.component.html */ "./src/app/resume/interests/interests.component.html"),
            styles: [__webpack_require__(/*! ./interests.component.css */ "./src/app/resume/interests/interests.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _visibility_service__WEBPACK_IMPORTED_MODULE_2__["VisibilityService"]])
    ], InterestsComponent);
    return InterestsComponent;
}());



/***/ }),

/***/ "./src/app/resume/languages/languages.component.css":
/*!**********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  margin-bottom: 0.5rem;\n}\n"

/***/ }),

/***/ "./src/app/resume/languages/languages.component.html":
/*!***********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"visibility.hasItems('resume.languages.content' | translate)\">\n  <h3 class=\"section-headline\">{{'resume.languages.headline' | translate}}</h3>\n  <div>\n    <ul class=\"paragraph list-unstyled\">\n      <li *ngFor=\"let lang of 'resume.languages.content' | translate\">\n        <span class=\"resume-lang-name font-weight-bold \">{{lang.name}}</span>\n        <small class=\"text-muted font-weight-normal\"> ({{lang.lvl}})</small>\n      </li>\n    </ul>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/languages/languages.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/resume/languages/languages.component.ts ***!
  \*********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent(visibility) {
        this.visibility = visibility;
    }
    LanguagesComponent.prototype.ngOnInit = function () {
    };
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/resume/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.css */ "./src/app/resume/languages/languages.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume-header/resume-header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/resume/resume-header/resume-header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  padding-top: 1rem;\n}\n\nheader {\n  color: whitesmoke;\n  border: solid 0.25px #343a40;\n}\n\nh1, h2 {\n  color: whitesmoke;\n  margin: 0;\n  padding-bottom: 0;\n  padding-top: 1rem;\n}\n\nfigure {\n  margin: 0 1rem;\n  padding: 2px;\n  border: 1px solid darkgrey;\n  /*border-radius: 0.35rem;*/\n}\n\na {\n  color: darkgrey;\n}\n\na:hover {\n  color: white;\n}\n\n.qrcode-container {\n  width: 100%;\n  padding: 0.5rem;\n  background-color: white;\n  /*border-radius: 0.3rem;*/\n}\n\n.social-icon-container {\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 0.125rem;\n\n  font-size: 1rem;\n  background: white;\n  color: var(--primary-text-color);\n}\n\n.profile-picture-container {\n  width: 50%;\n  padding: 0;\n  margin: auto;\n}\n\n.profile-picture {\n  margin-top: 1rem;\n  border-radius: 10%;\n}\n\n@media (min-width: 576px) {\n  .profile-picture-container {\n    width: 100%;\n  }\n\n  .profile-picture {\n    margin: 0;\n    border-radius: 0;\n  }\n}\n\n@media print {\n  small, a {\n    color: whitesmoke;\n  }\n  .profile-picture-container {\n    width: 100%;\n  }\n\n  .profile-picture {\n    margin: 0;\n    border-radius: 0;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/resume/resume-header/resume-header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/resume/resume-header/resume-header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row bg-main\">\n  <div class=\"col-sm-3 profile-picture-container\">\n    <img src={{profilePicturePath}} class=\"img-fluid profile-picture\" alt=\"Profile Picture\" id=\"picure\">\n  </div>\n  <div class=\"col-sm-9 flex my-auto\">\n    <div class=\"row\">\n      <div id=\"name-and-position-container\" class=\"col-sm-7 clr-pad\">\n        <h1>\n          <span>{{'resume.contact.first-name' | translate}}</span><br>\n          <span>{{'resume.contact.last-name' | translate}}</span>\n        </h1>\n        <h2>{{'resume.contact.job-position' | translate}}</h2>\n      </div>\n      <div id=\"contact-info\" class=\"col-sm-5 clr-pad\">\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"tel:{{'resume.contact.phone' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center\">\n                <i class=\"fa fa-phone\" data-fa-transform=\"grow-6\"></i>\n              </span>\n              {{'resume.contact.phone-styled' | translate}}\n            </a>\n          </li>\n          <li>\n            <a href=\"mailto:{{'resume.contact.email' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center\">\n                <i class=\"fa fa-envelope\" data-fa-transform=\"grow-3\"></i>\n              </span>\n              {{'resume.contact.email' | translate}}\n            </a>\n          </li>\n          <li>\n            <a href=\"{{'resume.contact.github' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center\">\n                <i class=\"fa fa-github-alt\"></i>\n              </span>\n              {{'resume.contact.github-simple' | translate}}\n            </a>\n          </li>\n          <li>\n            <a href=\"{{'resume.contact.linkedin' | translate}}\" target=\"_blank\">\n              <span class=\"social-icon-container text-center\">\n                <i class=\"fa fa-linkedin\"></i>\n              </span>\n              {{'resume.contact.linkedin-simple' | translate}}\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-3 clr-pad d-none d-print-inline-block\">\n        <a href=\"{{'resume.contact.personal-website' | translate}}\">\n          <figure class=\"d-none d-print-inline-block rounded\">\n            <div class=\"qrcode-container rounded\">\n              <qrcode allowEmptyString=\"true\" [qrdata]=\"'resume.contact.personal-website' | translate\" [size]=\"126\"\n                      [level]=\"'M'\"></qrcode>\n            </div>\n            <figcaption class=\"text-center\">\n              <small>{{'resume.contact.qrcode-description' | translate}}<br>{{'resume.contact.personal-website-simple' |\n                translate}}\n              </small>\n            </figcaption>\n          </figure>\n        </a>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/resume/resume-header/resume-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/resume/resume-header/resume-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResumeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeHeaderComponent", function() { return ResumeHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeHeaderComponent = /** @class */ (function () {
    function ResumeHeaderComponent() {
        this.profilePicturePath = 'assets/images/VS.jpg';
    }
    ResumeHeaderComponent.prototype.ngOnInit = function () {
    };
    ResumeHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resume-header',
            template: __webpack_require__(/*! ./resume-header.component.html */ "./src/app/resume/resume-header/resume-header.component.html"),
            styles: [__webpack_require__(/*! ./resume-header.component.css */ "./src/app/resume/resume-header/resume-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeHeaderComponent);
    return ResumeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  padding: 1rem;\n}\n\n.left-content, .right-content {\n  padding: 0;\n}\n\n@media (min-width: 576px) {\n  section {\n    padding: 1.5rem 3rem 3rem;\n  }\n\n  .left-content {\n    padding: 0 2rem 0 0;\n  }\n\n  .right-content {\n    padding: 0 0 0 2rem;\n  }\n}\n\n@media print {\n  section {\n    padding: 1.5rem 3rem 3rem;\n  }\n\n  .left-content {\n    padding: 0 2rem 0 0;\n  }\n\n  .right-content {\n    padding: 0 0 0 2rem;\n  }\n}\n"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<resume-header></resume-header>\n<section>\n  <summary-section></summary-section>\n  <div [ngSwitch]=\"visibility.isSmall()\">\n    <div *ngSwitchCase=\"true\">\n      <skills></skills>\n      <work-experience></work-experience>\n      <education></education>\n      <languages></languages>\n      <interests></interests>\n    </div>\n    <div *ngSwitchCase=\"false\" class=\"row\">\n      <aside class=\"col-sm-3 clr-pad\">\n        <skills></skills>\n        <languages></languages>\n        <interests></interests>\n      </aside>\n      <div class=\"col-sm-9 right-content\">\n        <work-experience></work-experience>\n        <education></education>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(visibility) {
        this.visibility = visibility;
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/resume/skills/skills.component.css":
/*!****************************************************!*\
  !*** ./src/app/resume/skills/skills.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.col-1 {*/\n/*padding-left: 0.75rem;*/\n/*}*/\nh3 {\n  margin-bottom: 0;\n}\n.skill-row {\n  margin-bottom: 0.5rem;\n  margin-left: 0.5rem;\n}\nh4 {\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/resume/skills/skills.component.html":
/*!*****************************************************!*\
  !*** ./src/app/resume/skills/skills.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section\n  *ngIf=\"visibility.hasItems('resume.skills.main' | translate) && visibility.hasItems('resume.skills.others.content' | translate)\">\n  <h3 class=\"section-headline\">{{'resume.skills.headline' | translate}}</h3>\n  <div>\n    <div>\n      <div class=\"paragraph\" *ngFor=\"let skillGroup of 'resume.skills.main' | translate\">\n        <h4>{{skillGroup.headline}}</h4>\n        <div class=\"row skill-row\" *ngFor=\"let skill of skillGroup.content\">\n          <div class=\"col-4 clr-pad\">\n            {{skill.name}}\n          </div>\n          <!--<div class=\"row col-8\">-->\n            <!--<div class=\"col-2 clr-pad\"></div>-->\n            <!--<div class=\"col-2 clr-pad text-right\" *ngFor=\"let i of [1,2,3,4,5]\">-->\n              <!--<i [ngClass]=\"skill.lvl>=i?'fa fa-circle':'fa fa-circle-o'\"></i>-->\n            <!--</div>-->\n          <!--</div>-->\n          <div class=\"col-8\">\n            <div class=\"progress\">\n              <div class=\"progress-bar bg-secondary\" role=\"progressbar\" [style.width]=\"skill.lvl*20+'%'\"\n                   aria-valuenow=\"20\" aria-valuemin=\"0\"\n                   aria-valuemax=\"100\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"paragraph\">\n      <h4 class=\"font-weight-bold\">\n        {{'resume.skills.others.headline' | translate}}\n      </h4>\n      <ul class=\"list-inline paragraph\">\n        <li class=\"list-inline-item\" *ngFor=\"let skill of 'resume.skills.others.content' | translate\">\n          <span class=\"badge badge-pill\">\n            {{skill}}\n          </span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/skills/skills.component.ts":
/*!***************************************************!*\
  !*** ./src/app/resume/skills/skills.component.ts ***!
  \***************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(visibility) {
        this.visibility = visibility;
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/resume/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/resume/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/resume/summary/summary.component.css":
/*!******************************************************!*\
  !*** ./src/app/resume/summary/summary.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding-top: 0;\n}\n"

/***/ }),

/***/ "./src/app/resume/summary/summary.component.html":
/*!*******************************************************!*\
  !*** ./src/app/resume/summary/summary.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <h3 class=\"section-headline\">{{'resume.summary.headline' | translate}}</h3>\n  <div>\n    <p> {{\"resume.summary.content\"| translate}}\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/summary/summary.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/resume/summary/summary.component.ts ***!
  \*****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'summary-section',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/resume/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/resume/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/resume/work-experience/work-experience.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/resume/work-experience/work-experience.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position {\n  padding-left: 0;\n}\n\nh6 {\n  padding-top: 0.55rem;\n}\n\np {\n  padding-left: 0;\n}\n\nh4 {\n  padding-top: 0.5rem;\n}\n\n.paragraph, p {\n  margin-top: 0;\n  padding-top: 0;\n  padding-bottom: 1rem;\n}\n\n.job-headline{\n  padding-left: 6px;\n}\n\n.list-inline{\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/resume/work-experience/work-experience.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/resume/work-experience/work-experience.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"visibility.hasItems('resume.work-experience.content' | translate)\">\n  <h3 class=\"section-headline\">{{'resume.work-experience.headline' | translate}}</h3>\n  <div>\n    <article class=\"paragraph\" *ngFor=\"let item of 'resume.work-experience.content' | translate\">\n      <div class=\"row\">\n        <!--<div class=\"col-sm-8 position\">-->\n        <h6 class=\"col-sm-3 clr-pad\">{{item.start}} - {{item.end}} </h6>\n        <h4 class=\"col-sm-5 clr-pad\">{{item.position}}</h4>\n        <!--</div>-->\n        <p class=\"col-sm-4 text-right font-weight-bold\">{{item.company}}</p>\n      </div>\n      <div class=\"paragraph clr-pad\">\n        <p>{{item.description}}</p>\n        <!--<h5>{{'resume.work-experience.technologies-headline' | translate}}</h5>-->\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\" *ngFor=\"let tech of item.technologies\"><span\n            class=\"badge badge-pill\">{{tech}}</span></li>\n        </ul>\n      </div>\n    </article>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/resume/work-experience/work-experience.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/resume/work-experience/work-experience.component.ts ***!
  \*********************************************************************/
/*! exports provided: WorkExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExperienceComponent", function() { return WorkExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visibility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../visibility.service */ "./src/app/visibility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkExperienceComponent = /** @class */ (function () {
    function WorkExperienceComponent(visibility) {
        this.visibility = visibility;
    }
    WorkExperienceComponent.prototype.ngOnInit = function () {
    };
    WorkExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'work-experience',
            template: __webpack_require__(/*! ./work-experience.component.html */ "./src/app/resume/work-experience/work-experience.component.html"),
            styles: [__webpack_require__(/*! ./work-experience.component.css */ "./src/app/resume/work-experience/work-experience.component.css")]
        }),
        __metadata("design:paramtypes", [_visibility_service__WEBPACK_IMPORTED_MODULE_1__["VisibilityService"]])
    ], WorkExperienceComponent);
    return WorkExperienceComponent;
}());



/***/ }),

/***/ "./src/app/vcard.service.ts":
/*!**********************************!*\
  !*** ./src/app/vcard.service.ts ***!
  \**********************************/
/*! exports provided: VcardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VcardService", function() { return VcardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VcardService = /** @class */ (function () {
    function VcardService(translate) {
        this.translate = translate;
    }
    VcardService.prototype.generateVCard = function () {
        var filename = 'Veljko Siracki vcard.vcf';
        this.download(filename, this.prepareVCard(), 'text/vcard');
    };
    VcardService.prototype.download = function (filename, text, mimeType) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    VcardService.prototype.createVCardstring = function (firstName, lastName, title, email, phone, website) {
        var vcard = 'BEGIN:VCARD\nVERSION:2.1\n';
        vcard += 'N:' + lastName + ';' + firstName + '\n';
        vcard += 'FN:' + firstName + '' + lastName + '\n';
        vcard += 'TITLE:' + title + '\n';
        vcard += 'TEL:' + phone + '\n';
        vcard += 'EMAIL:' + email + '\n';
        vcard += 'URL:' + website + '\n';
        vcard += 'END:VCARD';
        return vcard;
    };
    VcardService.prototype.prepareVCard = function () {
        return this.createVCardstring(this.translate.instant('resume.contact.first-name'), this.translate.instant('resume.contact.last-name-latinized'), this.translate.instant('resume.contact.job-position'), this.translate.instant('resume.contact.email'), this.translate.instant('resume.contact.phone'), this.translate.instant('resume.contact.personal-website'));
    };
    VcardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], VcardService);
    return VcardService;
}());



/***/ }),

/***/ "./src/app/visibility.service.ts":
/*!***************************************!*\
  !*** ./src/app/visibility.service.ts ***!
  \***************************************/
/*! exports provided: VisibilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityService", function() { return VisibilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisibilityService = /** @class */ (function () {
    function VisibilityService(router) {
        this.router = router;
    }
    VisibilityService.prototype.hasItems = function (ufo) {
        return (typeof ufo) === 'object';
    };
    VisibilityService.prototype.isSmall = function () {
        return (window.innerWidth < 576 || window.innerHeight < 576) && this.router.url.indexOf('print-cv') === -1;
    };
    VisibilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VisibilityService);
    return VisibilityService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Veljko\Desktop\Github\VeljkoSiracki.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map