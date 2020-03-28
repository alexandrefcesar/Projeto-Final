import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Venda } from "../service/venda";
import { VendaService } from "../service/venda.service";
import { VendaProduto } from "../service/vendaproduto";
import { Cliente } from "src/app/cliente/service/cliente";
import { ProdutoService } from "src/app/produto/service/produto.service";
import { ClienteService } from "src/app/cliente/service/cliente.service";
import { Produto } from "../../produto/service/produto";
@Component({
  selector: "app-vendamanter",
  templateUrl: "./vendamanter.component.html",
  styleUrls: ["./vendamanter.component.css"]
})
export class VendamanterComponent implements OnInit {
  operacao: string = "Incluir";
  nomeProduto: string = "";
  nomeVenda: string = "";
  venda: Venda = new Venda();
  produto: Produto = new Produto();
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
    // consultas
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
      //console.log(JSON.stringify(this.venda));
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
