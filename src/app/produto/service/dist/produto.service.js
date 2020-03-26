"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
    }
    ProdutoService.prototype.consultarProdutoService = function (produto) {
        return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/" +
            produto);
    };
    ProdutoService.prototype.removerProdutoService = function (produto) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover", produto);
    };
    ProdutoService.prototype.incluirProdutoService = function (produto) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir", produto);
    };
    ProdutoService.prototype.alterarProdutoService = function (produto) {
        return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial", produto);
    };
    ProdutoService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ProdutoService);
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
