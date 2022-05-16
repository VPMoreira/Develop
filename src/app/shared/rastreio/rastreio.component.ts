import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';


StatusBar.setOverlaysWebView({ overlay: true });

const setBackgroundColor = async () => {
  await StatusBar.setBackgroundColor({color: '#006400'});
}
const showStatusBar = async () => {
  await StatusBar.show();
};

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
  {id: '9CV267',orc: 845247,entrega: '6 de agosto de 2021',preco: 1281.56,descontos: 58.20,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Recebido', value: 20},
  
]

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.scss']
})
export class RastreioComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor() { }

  ngOnInit(): void {
    StatusBar.setBackgroundColor({color: '#006400'});
  }

}
