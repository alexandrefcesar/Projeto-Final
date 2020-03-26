import { Cliente } from "src/app/cliente/service/cliente";
import { VendaProduto } from "./vendaproduto";

export class Venda {
  codigo: string;
  data: Date;
  cliente: Cliente;
  listaVentaItem: VendaProduto[] = [];
}
