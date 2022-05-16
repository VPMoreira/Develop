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
  {id: '9CV269',orc: 845249,entrega: '8 de agosto de 2021',preco: 1283.56,descontos: 58.30,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Separado', value: 60},
]
@Component({
  selector: 'app-rastreio-separado',
  templateUrl: './rastreio-separado.component.html',
  styleUrls: ['./rastreio-separado.component.scss']
})
export class RastreioSeparadoComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor() { }

  ngOnInit() {
  }

}
