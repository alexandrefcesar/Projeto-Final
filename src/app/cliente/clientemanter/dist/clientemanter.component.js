"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var cliente_1 = require("../service/cliente");
var ClientemanterComponent = /** @class */ (function () {
    function ClientemanterComponent(routeActivated, router, clienteService) {
        this.routeActivated = routeActivated;
        this.router = router;
        this.clienteService = clienteService;
        this.nomeDoCliente = "";
        this.operacao = "IncluirCliente";
        this.cliente = new cliente_1.Cliente();
    }
    ClientemanterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nomeDoCliente = this.routeActivated.snapshot.params.id;
        if (this.nomeDoCliente != null) {
            this.operacao = "AlterarCliente";
            this.clienteService
                .consultarClienteService(this.nomeDoCliente)
                .subscribe(function (data) {
                _this.cliente = data[0];
            });
        }
    };
    ClientemanterComponent.prototype.voltarTela = function () {
        this.router.navigate(["/cliente"]);
    };
    ClientemanterComponent.prototype.incluirCliente = function () {
        var _this = this;
        this.clienteService.incluirClienteService(this.cliente).subscribe(function (data) {
            alert(data["mensagem"]);
            _this.router.navigate(["/cliente"]);
        });
    };
    ClientemanterComponent.prototype.alterarCliente = function () {
        var _this = this;
        this.clienteService.alterarClienteService(this.cliente).subscribe(function (data) {
            alert(data["mensagem"]);
            _this.router.navigate(["/cliente"]);
        });
    };
    ClientemanterComponent = __decorate([
        core_1.Component({
            selector: "app-clientemanter",
            templateUrl: "./clientemanter.component.html",
            styleUrls: ["./clientemanter.component.css"]
        })
    ], ClientemanterComponent);
    return ClientemanterComponent;
}());
exports.ClientemanterComponent = ClientemanterComponent;
