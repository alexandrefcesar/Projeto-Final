"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;

var cliente_component_1 = require("./cliente/cliente.component");

var core_1 = require("@angular/core");

var router_1 = require("@angular/router");

var home_component_1 = require("./home/home.component");

var routes = [{
  path: '',
  component: home_component_1.HomeComponent,
  pathMatch: 'full'
}, {
  path: 'cliente',
  component: cliente_component_1.ClienteComponent,
  pathMatch: 'full'
}];

var AppRoutingModule =
/** @class */
function () {
  function AppRoutingModule() {}

  AppRoutingModule = __decorate([core_1.NgModule({
    imports: [router_1.RouterModule.forRoot(routes)],
    exports: [router_1.RouterModule]
  })], AppRoutingModule);
  return AppRoutingModule;
}();

exports.AppRoutingModule = AppRoutingModule;