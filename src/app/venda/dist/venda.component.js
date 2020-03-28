"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var vendaproduto_1 = require("./service/vendaproduto");
var core_1 = require("@angular/core");
var venda_1 = require("./service/venda");
var VendaComponent = /** @class */ (function () {
    function VendaComponent(router, vendaService, clienteService) {
        this.router = router;
        this.vendaService = vendaService;
        this.clienteService = clienteService;
        this.venda = new venda_1.Venda();
        this.vendaProduto = new vendaproduto_1.VendaProduto();
        this.listaDeVendas = [];
        this.listaDeClientes = [];
    }
    VendaComponent.prototype.ngOnInit = function () {
        this.pesquisarVenda();
        this.pesquisarCliente();
    };
    VendaComponent.prototype.pesquisarVenda = function () {
        var _this = this;
        var codigoDoCliente = "";
        if (this.venda.cliente != null) {
            codigoDoCliente = this.venda.cliente.codigo;
        }
        this.vendaService.consultarVendaService(codigoDoCliente).subscribe(function (data) {
            _this.listaDeVendas = data;
        }, function (error) {
            _this.erro = error;
        });
    };
    VendaComponent.prototype.pesquisarCliente = function () {
        var _this = this;
        this.clienteService.consultarClienteService("").subscribe(function (data) {
            _this.listaDeClientes = data;
        });
    };
    VendaComponent.prototype.incluirVenda = function () {
        this.router.navigate(["/venda/incluir"]);
    };
    VendaComponent.prototype.alterarVenda = function () {
        this.router.navigate(["/venda/alterar/" + this.selecionado.cliente.codigo]);
    };
    VendaComponent.prototype.removerVenda = function () {
        this.vendaService.removerVendaService(this.selecionado).subscribe(function (data) {
            alert(data["mensagem"]);
        });
    };
    VendaComponent.prototype.selecionar = function (valor) {
        this.selecionado = valor;
    };
    VendaComponent = __decorate([
        core_1.Component({
            selector: "app-venda",
            templateUrl: "./venda.component.html",
            styleUrls: ["./venda.component.css"]
        })
    ], VendaComponent);
    return VendaComponent;
}());
exports.VendaComponent = VendaComponent;
