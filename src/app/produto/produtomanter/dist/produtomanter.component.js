"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var produto_1 = require("../service/produto");
var ProdutomanterComponent = /** @class */ (function () {
    function ProdutomanterComponent(routeActivated, produtoService, router) {
        this.routeActivated = routeActivated;
        this.produtoService = produtoService;
        this.router = router;
        this.nomeDoProduto = "";
        this.produto = new produto_1.Produto();
        this.operacao = "IncluirProduto";
    }
    ProdutomanterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nomeDoProduto = this.routeActivated.snapshot.params.id;
        if (this.nomeDoProduto != null) {
            this.operacao = "Alterar Produto";
            this.produtoService
                .consultarProdutoService(this.nomeDoProduto)
                .subscribe(function (data) {
                _this.produto = data[0];
            });
        }
    };
    ProdutomanterComponent.prototype.incluirProduto = function () {
        var _this = this;
        this.produtoService
            .incluirProdutoService(this.produto)
            .subscribe(function (retorno) {
            alert(retorno["mensagem"]);
            _this.voltarTela();
        });
    };
    ProdutomanterComponent.prototype.voltarTela = function () {
        this.router.navigate(["/produto"]);
    };
    ProdutomanterComponent.prototype.alterarProduto = function () {
        var _this = this;
        this.produtoService.alterarProdutoService(this.produto).subscribe(function (data) {
            alert(data["mensagem"]);
            _this.router.navigate(["/produto"]);
        });
    };
    ProdutomanterComponent = __decorate([
        core_1.Component({
            selector: "app-produtomanter",
            templateUrl: "./produtomanter.component.html",
            styleUrls: ["./produtomanter.component.css"]
        })
    ], ProdutomanterComponent);
    return ProdutomanterComponent;
}());
exports.ProdutomanterComponent = ProdutomanterComponent;
