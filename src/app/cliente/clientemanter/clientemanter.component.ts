import { Component, OnInit } from "@angular/core";
import { Cliente } from "../service/cliente";
import { ActivatedRoute, Router } from "@angular/router";
import { ClienteService } from "../service/cliente.service";

@Component({
  selector: "app-clientemanter",
  templateUrl: "./clientemanter.component.html",
  styleUrls: ["./clientemanter.component.css"]
})
export class ClientemanterComponent implements OnInit {
  nomeDoCliente: string = "";
  operacao: string = "IncluirCliente";
  cliente: Cliente = new Cliente();

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.nomeDoCliente = this.routeActivated.snapshot.params.id;
    if (this.nomeDoCliente != null) {
      this.operacao = "AlterarCliente";
      this.clienteService
        .consultarClienteService(this.nomeDoCliente)
        .subscribe(data => {
          this.cliente = (<Cliente[]>data)[0];
        });
    }
  }

  voltarTela() {
    this.router.navigate(["/cliente"]);
  }
  incluirCliente() {
    this.clienteService.incluirClienteService(this.cliente).subscribe(data => {
      alert(data["mensagem"]);
      this.router.navigate(["/cliente"]);
    });
  }

  alterarCliente() {
    this.clienteService.alterarClienteService(this.cliente).subscribe(data => {
      alert(data["mensagem"]);
      this.router.navigate(["/cliente"]);
    });
  }
}
