"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
    }
    ClienteService.prototype.consultarClienteService = function (cliente) {
        return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/" +
            cliente);
    };
    ClienteService.prototype.removerClienteService = function (cliente) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover", cliente);
    };
    ClienteService.prototype.incluirClienteService = function (cliente) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir", cliente);
    };
    ClienteService.prototype.alterarClienteService = function (cliente) {
        return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial", cliente);
    };
    ClienteService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
