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
  {path: '', component: LoginComponent},
  {path: 'pedidos/9CV267', component: RastreioComponent},
  {path: 'pedidos/9CV268', component: RastreioAprovadoComponent},
  {path: 'pedidos/9CV269', component: RastreioSeparadoComponent},
  {path: 'pedidos/9CV270', component: RastreioTransporteComponent},
  {path: 'pedidos/9CV271', component: RastreioEntregueComponent},
  {path: 'pedidos', component: PedidosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
