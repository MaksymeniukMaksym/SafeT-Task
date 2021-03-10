(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-infrastructure-infrastructure-module"],{

/***/ "XFHF":
/*!*****************************************************************!*\
  !*** ./src/app/modules/infrastructure/infrastructure.module.ts ***!
  \*****************************************************************/
/*! exports provided: InfrastructureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureModule", function() { return InfrastructureModule; });
/* harmony import */ var _infrastructure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infrastructure-routing.module */ "j4Lg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _infrastructure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infrastructure.component */ "xCXJ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class InfrastructureModule {
}
InfrastructureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InfrastructureModule });
InfrastructureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function InfrastructureModule_Factory(t) { return new (t || InfrastructureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _infrastructure_routing_module__WEBPACK_IMPORTED_MODULE_0__["InfrastructureRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InfrastructureModule, { declarations: [_infrastructure_component__WEBPACK_IMPORTED_MODULE_2__["InfrastructureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _infrastructure_routing_module__WEBPACK_IMPORTED_MODULE_0__["InfrastructureRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "j4Lg":
/*!*************************************************************************!*\
  !*** ./src/app/modules/infrastructure/infrastructure-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InfrastructureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureRoutingModule", function() { return InfrastructureRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infrastructure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infrastructure.component */ "xCXJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _infrastructure_component__WEBPACK_IMPORTED_MODULE_1__["InfrastructureComponent"],
        children: [
            {
                path: 'services',
                loadChildren: () => __webpack_require__.e(/*! import() | services-services-module */ "services-services-module").then(__webpack_require__.bind(null, /*! ./services/services.module */ "i4kl")).then((m) => m.ServicesModule),
            },
        ],
    },
];
class InfrastructureRoutingModule {
}
InfrastructureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InfrastructureRoutingModule });
InfrastructureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function InfrastructureRoutingModule_Factory(t) { return new (t || InfrastructureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InfrastructureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xCXJ":
/*!********************************************************************!*\
  !*** ./src/app/modules/infrastructure/infrastructure.component.ts ***!
  \********************************************************************/
/*! exports provided: InfrastructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureComponent", function() { return InfrastructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class InfrastructureComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfrastructureComponent.ɵfac = function InfrastructureComponent_Factory(t) { return new (t || InfrastructureComponent)(); };
InfrastructureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfrastructureComponent, selectors: [["app-infrastructure"]], decls: 1, vars: 0, template: function InfrastructureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZyYXN0cnVjdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=modules-infrastructure-infrastructure-module.js.map