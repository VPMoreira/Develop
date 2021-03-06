import { RastreioTransporteComponent } from './shared/rastreio-transporte/rastreio-transporte.component';
import { RastreioSeparadoComponent } from './shared/rastreio-separado/rastreio-separado.component';
import { RastreioEntregueComponent } from './shared/rastreio-entregue/rastreio-entregue.component';
import { RastreioAprovadoComponent } from './shared/rastreio-aprovado/rastreio-aprovado.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './shared/pedidos/pedidos.component';
import { RastreioComponent } from './shared/rastreio/rastreio.component';
import { LoginComponent } from './shared/views/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent, data: { animationState: 'Login' }},
  {path: 'pedidos/9CV267', component: RastreioComponent, data: { animationState: 'Pedido' }},
  {path: 'pedidos/9CV268', component: RastreioAprovadoComponent, data: { animationState: 'Pedido' }},
  {path: 'pedidos/9CV269', component: RastreioSeparadoComponent, data: { animationState: 'Pedido' }},
  {path: 'pedidos/9CV270', component: RastreioTransporteComponent, data: { animationState: 'Pedido' }},
  {path: 'pedidos/9CV271', component: RastreioEntregueComponent, data: { animationState: 'Pedido' }},
  {path: 'pedidos', component: PedidosComponent, children: [
    {path: ':id', component: RastreioEntregueComponent, data: { animationState: 'Pedidos' }}
  ]},
  { path: 'produtos', loadChildren: () => import('./views/produtos/produtos.module').then(m => m.ProdutosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
