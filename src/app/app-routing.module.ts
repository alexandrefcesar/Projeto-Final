import { ClientemanterComponent } from "./cliente/clientemanter/clientemanter.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "cliente",
    component: ClienteComponent,
    pathMatch: "full"
  },
  {
    path: "cliente/incluir",
    component: ClientemanterComponent,
    pathMatch: "full"
  },
  {
    path: "cliente/alterar/:id",
    component: ClientemanterComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
