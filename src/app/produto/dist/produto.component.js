"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var produto_1 = require("./service/produto");
var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent(router, produtoServico) {
        this.router = router;
        this.produtoServico = produtoServico;
        this.produto = new produto_1.Produto();
        this.listaDeProdutos = [];
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        this.pesquisarProduto();
    };
    ProdutoComponent.prototype.pesquisarProduto = function () {
        var _this = this;
        this.produtoServico
            .consultarProdutoService(this.produto.nome)
            .subscribe(function (retorno) {
            _this.listaDeProdutos = retorno;
        });
    };
    ProdutoComponent.prototype.incluirProduto = function () {
        this.router.navigate(["/produto/incluir"]);
    };
    ProdutoComponent.prototype.selecionar = function (valor) {
        this.selecionado = valor;
    };
    ProdutoComponent.prototype.removerProduto = function () {
        this.produtoServico
            .removerProdutoService(this.selecionado)
            .subscribe(function (data) {
            alert(data["mensagem"]);
        });
    };
    ProdutoComponent.prototype.alterarProduto = function () {
        this.router.navigate(["/produto/alterar/" + this.selecionado.nome]);
    };
    ProdutoComponent = __decorate([
        core_1.Component({
            selector: "app-produto",
            templateUrl: "./produto.component.html",
            styleUrls: ["./produto.component.css"]
        })
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
