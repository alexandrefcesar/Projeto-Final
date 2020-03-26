"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var clientemanter_component_1 = require("./cliente/clientemanter/clientemanter.component");
var cliente_component_1 = require("./cliente/cliente.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var produto_component_1 = require("./produto/produto.component");
var produtomanter_component_1 = require("./produto/produtomanter/produtomanter.component");
var venda_component_1 = require("./venda/venda.component");
var vendamanter_component_1 = require("./venda/vendamanter/vendamanter.component");
var routes = [
    {
        path: "",
        component: home_component_1.HomeComponent,
        pathMatch: "full"
    },
    {
        path: "cliente",
        component: cliente_component_1.ClienteComponent,
        pathMatch: "full"
    },
    {
        path: "cliente/incluir",
        component: clientemanter_component_1.ClientemanterComponent,
        pathMatch: "full"
    },
    {
        path: "cliente/alterar/:id",
        component: clientemanter_component_1.ClientemanterComponent,
        pathMatch: "full"
    },
    {
        path: "produto",
        component: produto_component_1.ProdutoComponent,
        pathMatch: "full"
    },
    {
        path: "produto/incluir",
        component: produtomanter_component_1.ProdutomanterComponent,
        pathMatch: "full"
    },
    {
        path: "produto/alterar/:id",
        component: produtomanter_component_1.ProdutomanterComponent,
        pathMatch: "full"
    },
    {
        path: "venda",
        component: venda_component_1.VendaComponent,
        pathMatch: "full"
    },
    {
        path: "venda/incluir",
        component: vendamanter_component_1.VendamanterComponent,
        pathMatch: "full"
    },
    {
        path: "venda/alterar/:id",
        component: vendamanter_component_1.VendamanterComponent,
        pathMatch: "full"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
