import { VendaProduto } from "./service/vendaproduto";
import { Component, OnInit } from "@angular/core";
import { Venda } from "./service/venda";
import { Router } from "@angular/router";
import { VendaService } from "./service/venda.service";
import { ClienteService } from "../cliente/service/cliente.service";
import { Cliente } from "../cliente/service/cliente";
import { Produto } from "../produto/service/produto";

@Component({
  selector: "app-venda",
  templateUrl: "./venda.component.html",
  styleUrls: ["./venda.component.css"]
})
export class VendaComponent implements OnInit {
  venda: Venda = new Venda();
  selecionado: Venda;
  vendaProduto = new VendaProduto();
  listaDeVendas: Venda[] = [];
  listaDeClientes: Cliente[] = [];
  erro: any;
  constructor(
    private router: Router,
    private vendaService: VendaService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.pesquisarVenda();
    this.pesquisarCliente();
  }

  pesquisarVenda() {
    let codigoDoCliente = "";
    if (this.venda.cliente != null) {
      codigoDoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultarVendaService(codigoDoCliente).subscribe(
      data => {
        this.listaDeVendas = <Venda[]>data;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  pesquisarCliente() {
    this.clienteService.consultarClienteService("").subscribe(data => {
      this.listaDeClientes = <Cliente[]>data;
    });
  }

  incluirVenda() {
    this.router.navigate(["/venda/incluir"]);
  }

  alterarVenda() {
    this.router.navigate(["/venda/alterar/" + this.selecionado.cliente.codigo]);
  }

  removerVenda() {
    this.vendaService.removerVendaService(this.selecionado).subscribe(data => {
      alert(data["mensagem"]);
    });
  }

  selecionar(valor) {
    this.selecionado = valor;
  }
}
