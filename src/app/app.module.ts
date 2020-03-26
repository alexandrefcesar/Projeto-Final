import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ClientemanterComponent } from "./cliente/clientemanter/clientemanter.component";
import { ProdutoComponent } from './produto/produto.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    HomeComponent,
    LayoutComponent,
    ClientemanterComponent,
    ProdutoComponent,
    ProdutomanterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
