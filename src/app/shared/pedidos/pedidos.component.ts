import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { Router } from '@angular/router';

export interface IProdutos {
  id: string
  orc: number
  entrega: string
  preco: number
  descontos: number
  endereco: string
  pagamento: string
  status: string
}

const ELEMENT_DATA: IProdutos[] = [
  {id: '9CV267',orc: 845247,entrega: '6 de agosto de 2021',preco: 1280.56,descontos: 58.15,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Recebido'},
  {id: '9CV268',orc: 845248,entrega: '7 de agosto de 2021',preco: 1282.56,descontos: 58.25,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Aprovado'},
  {id: '9CV269',orc: 845249,entrega: '8 de agosto de 2021',preco: 1283.56,descontos: 58.30,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Separado'},
  {id: '9CV270',orc: 845250,entrega: '9 de agosto de 2021',preco: 1284.56,descontos: 58.35,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido em Transporte'},
  {id: '9CV271',orc: 845251,entrega: '10 de agosto de 2021',preco: 1285.56,descontos: 58.40,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Entregue'},
]


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})


export class PedidosComponent implements OnInit {


  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor(private productService: ProdutosService) { }

  ngOnInit(): void {
    
  }

}