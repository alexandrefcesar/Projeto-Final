"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var cliente_1 = require("./service/cliente");
var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(router, clienteService) {
        this.router = router;
        this.clienteService = clienteService;
        this.cliente = new cliente_1.Cliente();
        this.listaDeCliente = [];
    }
    ClienteComponent.prototype.ngOnInit = function () {
        this.pesquisarCliente();
    };
    ClienteComponent.prototype.pesquisarCliente = function () {
        var _this = this;
        this.clienteService
            .consultarClienteService(this.cliente.nome)
            .subscribe(function (data) {
            _this.listaDeCliente = data;
        });
    };
    ClienteComponent.prototype.incluirCliente = function () {
        this.router.navigate(["/cliente/incluir"]);
    };
    ClienteComponent.prototype.alterarCliente = function () {
        this.router.navigate(["/cliente/alterar/" + this.selecionado.nome]);
    };
    ClienteComponent.prototype.removerCliente = function () {
        this.clienteService
            .removerClienteService(this.selecionado)
            .subscribe(function (data) {
            alert(data["mensagem"]);
        });
    };
    ClienteComponent.prototype.selecionar = function (valor) {
        this.selecionado = valor;
    };
    ClienteComponent = __decorate([
        core_1.Component({
            selector: "app-cliente",
            templateUrl: "./cliente.component.html",
            styleUrls: ["./cliente.component.css"]
        })
    ], ClienteComponent);
    return ClienteComponent;
}());
exports.ClienteComponent = ClienteComponent;
