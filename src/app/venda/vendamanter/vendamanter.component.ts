import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Venda } from "../service/venda";
import { VendaService } from "../service/venda.service";
import { VendaProduto } from "../service/vendaproduto";
import { Cliente } from "src/app/cliente/service/cliente";
import { ProdutoService } from "src/app/produto/service/produto.service";
import { Produto } from "src/app/produto/service/produto";
import { ClienteService } from "src/app/cliente/service/cliente.service";

@Component({
  selector: "app-vendamanter",
  templateUrl: "./vendamanter.component.html",
  styleUrls: ["./vendamanter.component.css"]
})
export class VendamanterComponent implements OnInit {
  operacao: string = "Incluir";

  venda: Venda = new Venda();

  vendaProduto: VendaProduto = new VendaProduto();

  listaDeProdutos: Produto[] = [];
  listaDeClientes: Cliente[] = [];
  constructor(
    private router: Router,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.consultarClienteService("").subscribe(data => {
      this.listaDeClientes = <Cliente[]>data;
    });

    this.produtoService.consultarProdutoService("").subscribe(data => {
      this.listaDeProdutos = <Produto[]>data;
    });
  }
  voltarTela() {
    this.router.navigate(["/venda"]);
  }

  incluirVenda() {
    this.vendaService.incluirVendaService(this.venda).subscribe(data => {
      alert(data["mensagem"]);
      this.router.navigate(["/venda"]);
    });
  }

  adicionarProduto() {
    this.venda.listaVentaItem.push(this.vendaProduto);
    this.vendaProduto = new VendaProduto();
  }

  removerVenda(vendaProduto) {
    this.venda.listaVentaItem = this.venda.listaVentaItem.filter(
      obj => obj !== vendaProduto
    );
  }
}
