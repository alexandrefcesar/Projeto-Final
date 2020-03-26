import { Component, OnInit } from "@angular/core";
import { Produto } from "../service/produto";
import { ProdutoService } from "../service/produto.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-produtomanter",
  templateUrl: "./produtomanter.component.html",
  styleUrls: ["./produtomanter.component.css"]
})
export class ProdutomanterComponent implements OnInit {
  nomeDoProduto: string = "";
  produto: Produto = new Produto();
  operacao: string = "IncluirProduto";

  constructor(
    private routeActivated: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nomeDoProduto = this.routeActivated.snapshot.params.id;
    if (this.nomeDoProduto != null) {
      this.operacao = "Alterar Produto";
      this.produtoService
        .consultarProdutoService(this.nomeDoProduto)
        .subscribe(data => {
          this.produto = (<Produto[]>data)[0];
        });
    }
  }

  incluirProduto() {
    this.produtoService
      .incluirProdutoService(this.produto)
      .subscribe(retorno => {
        alert(retorno["mensagem"]);
        this.voltarTela();
      });
  }
  voltarTela() {
    this.router.navigate(["/produto"]);
  }

  alterarProduto() {
    this.produtoService.alterarProdutoService(this.produto).subscribe(data => {
      alert(data["mensagem"]);
      this.router.navigate(["/produto"]);
    });
  }
}
