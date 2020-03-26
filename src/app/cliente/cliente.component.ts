import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "./service/cliente";
import { ClienteService } from "./service/cliente.service";
@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"]
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  selecionado: Cliente;
  listaDeCliente: Cliente[] = [];

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.pesquisarCliente();
  }
  pesquisarCliente() {
    this.clienteService
      .consultarClienteService(this.cliente.nome)
      .subscribe(data => {
        this.listaDeCliente = <Cliente[]>data;
        console.log(this.listaDeCliente);
      });
  }

  incluirCliente() {
    this.router.navigate(["/cliente/incluir"]);
  }

  alterarCliente() {
    this.router.navigate(["/cliente/alterar/" + this.selecionado.nome]);
  }

  removerCliente() {
    this.clienteService
      .removerClienteService(this.selecionado)
      .subscribe(data => {
        alert(data["mensagem"]);
      });
  }

  selecionar(valor) {
    this.selecionado = valor;
  }
}
