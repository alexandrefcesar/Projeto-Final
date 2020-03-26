import { Injectable } from "@angular/core";
import { Venda } from "./venda";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class VendaService {
  constructor(private http: HttpClient) {}

  consultarVendaService(venda: string) {
    return this.http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/" +
        venda
    );
  }

  removerVendaService(venda: Venda) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover",
      venda
    );
  }

  incluirVendaService(venda: Venda) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir",
      venda
    );
  }

  alterarVendaService(venda: Venda) {
    return this.http.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial",
      venda
    );
  }
}
