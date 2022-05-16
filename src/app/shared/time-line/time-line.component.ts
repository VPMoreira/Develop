import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

export interface IProdutos {
  id: string
  orc: number
  entrega: string
  preço: number
  descontos: number
  endereço: string
  pagamento: string
  status: string
  value: number
}

const ELEMENT_DATA: IProdutos[] = [
  {id: '9CV267',orc: 845247,entrega: '6 de agosto de 2021',preço: 1280.56,descontos: 58.15,endereço: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Recebido',value: 20},
]

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  events!: any[];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      { status: 'PEDIDO RECEBIDO', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0'},
      { status: 'PEDIDO APROVADO', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
      { status: 'PEDIDO SEPARADO', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800' },
      { status: 'PEDIDO EM TRANSPORTE', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' },
      { status: 'PEDIDO ENTREGUE', date: '16/10/2020 12:00', icon: PrimeIcons.CHECK, color: '#607D8B' }
    ]
  }

}
