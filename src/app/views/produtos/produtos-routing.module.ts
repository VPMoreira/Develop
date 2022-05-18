import { PedidosComponent } from './../../shared/pedidos/pedidos.component';
import { RastreioComponent } from './../../shared/rastreio/rastreio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [{ path: '', component: ProdutosComponent, children: [
  { path: ':id', component: PedidosComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
