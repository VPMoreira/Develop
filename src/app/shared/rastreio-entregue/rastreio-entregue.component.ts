import { Component, OnInit } from '@angular/core';

export interface IProdutos {
  id: string
  orc: number
  entrega: string
  preco: number
  descontos: number
  endereco: string
  pagamento: string
  status: string
  value: number
}

const ELEMENT_DATA: IProdutos[] = [
  {id: '9CV271',orc: 845249,entrega: '8 de agosto de 2021',preco: 1283.56,descontos: 58.30,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Entregue', value: 100},
]
@Component({
  selector: 'app-rastreio-entregue',
  templateUrl: './rastreio-entregue.component.html',
  styleUrls: ['./rastreio-entregue.component.scss']
})
export class RastreioEntregueComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor() { }

  ngOnInit() {
  }

}
