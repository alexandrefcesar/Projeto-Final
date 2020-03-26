import { Injectable } from "@angular/core";
import { Produto } from "./produto";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  consultarProdutoService(produto: string) {
    return this.http.get(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/" +
        produto
    );
  }
  removerProdutoService(produto: Produto) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover",
      produto
    );
  }

  incluirProdutoService(produto: Produto) {
    return this.http.post(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir",
      produto
    );
  }

  alterarProdutoService(produto: Produto) {
    return this.http.patch(
      "https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial",
      produto
    );
  }
}
