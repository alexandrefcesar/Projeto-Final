import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cliente } from "./cliente";
@Injectable({
  providedIn: "root"
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  consultarClienteService(cliente: string) {
    return this.http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/" +
        cliente
    );
  }
  removerClienteService(cliente: Cliente) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/remover",
      cliente
    );
  }

  incluirClienteService(cliente: Cliente) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir",
      cliente
    );
  }

  alterarClienteService(cliente: Cliente) {
    return this.http.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/alterarparcial",
      cliente
    );
  }
}
