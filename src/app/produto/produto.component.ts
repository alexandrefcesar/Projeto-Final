import { Component, OnInit } from "@angular/core";
import { Produto } from "./service/produto";
import { ProdutoService } from "./service/produto.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  selecionado: Produto;

  listaDeProdutos: Produto[] = [];
  constructor(private router: Router, private produtoServico: ProdutoService) {}

  ngOnInit(): void {
    this.pesquisarProduto();
  }

  pesquisarProduto() {
    this.produtoServico
      .consultarProdutoService(this.produto.nome)
      .subscribe((retorno: Produto[]) => {
        this.listaDeProdutos = retorno;
      });
  }

  incluirProduto() {
    this.router.navigate(["/produto/incluir"]);
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

  removerProduto() {
    this.produtoServico
      .removerProdutoService(this.selecionado)
      .subscribe(data => {
        alert(data["mensagem"]);
      });
  }

  alterarProduto() {
    this.router.navigate(["/produto/alterar/" + this.selecionado.nome]);
  }
}
