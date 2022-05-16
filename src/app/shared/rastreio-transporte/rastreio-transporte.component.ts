import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';


StatusBar.setOverlaysWebView({ overlay: true });

const setBackgroundColor = async () => {
  await StatusBar.setBackgroundColor({color: '#006400'});
}

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
  {id: '9CV270',orc: 845249,entrega: '8 de agosto de 2021',preco: 1283.56,descontos: 58.30,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido em Transporte',value: 80},
]
@Component({
  selector: 'app-rastreio-transporte',
  templateUrl: './rastreio-transporte.component.html',
  styleUrls: ['./rastreio-transporte.component.scss']
})
export class RastreioTransporteComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor() { }

  ngOnInit() {
  }

}
