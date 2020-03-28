"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var venda_1 = require("../service/venda");
var vendaproduto_1 = require("../service/vendaproduto");
var produto_1 = require("../../produto/service/produto");
var VendamanterComponent = /** @class */ (function () {
    function VendamanterComponent(router, vendaService, produtoService, clienteService) {
        this.router = router;
        this.vendaService = vendaService;
        this.produtoService = produtoService;
        this.clienteService = clienteService;
        this.operacao = "Incluir";
        this.nomeProduto = "";
        this.nomeVenda = "";
        this.venda = new venda_1.Venda();
        this.produto = new produto_1.Produto();
        this.vendaProduto = new vendaproduto_1.VendaProduto();
        this.listaDeProdutos = [];
        this.listaDeClientes = [];
    }
    VendamanterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // consultas
        this.clienteService.consultarClienteService("").subscribe(function (data) {
            _this.listaDeClientes = data;
        });
        this.produtoService.consultarProdutoService("").subscribe(function (data) {
            _this.listaDeProdutos = data;
        });
    };
    VendamanterComponent.prototype.voltarTela = function () {
        this.router.navigate(["/venda"]);
    };
    VendamanterComponent.prototype.incluirVenda = function () {
        var _this = this;
        this.vendaService.incluirVendaService(this.venda).subscribe(function (data) {
            //console.log(JSON.stringify(this.venda));
            alert(data["mensagem"]);
            _this.router.navigate(["/venda"]);
        });
    };
    VendamanterComponent.prototype.adicionarProduto = function () {
        this.venda.listaVentaItem.push(this.vendaProduto);
        this.vendaProduto = new vendaproduto_1.VendaProduto();
    };
    VendamanterComponent.prototype.removerVenda = function (vendaProduto) {
        this.venda.listaVentaItem = this.venda.listaVentaItem.filter(function (obj) { return obj !== vendaProduto; });
    };
    VendamanterComponent = __decorate([
        core_1.Component({
            selector: "app-vendamanter",
            templateUrl: "./vendamanter.component.html",
            styleUrls: ["./vendamanter.component.css"]
        })
    ], VendamanterComponent);
    return VendamanterComponent;
}());
exports.VendamanterComponent = VendamanterComponent;
