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
  {id: '9CV268',orc: 845248,entrega: '7 de agosto de 2021',preco: 1282.56,descontos: 58.25,endereco: 'QUARTO ANEL VIÁRIO, 2165 FORTALEZA/CE',pagamento: 'Boleto - 14 dias',status: 'Pedido Aprovado', value: 40},
]

@Component({
  selector: 'app-rastreio-aprovado',
  templateUrl: './rastreio-aprovado.component.html',
  styleUrls: ['./rastreio-aprovado.component.scss']
})
export class RastreioAprovadoComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns = ['id']

  constructor() { }

  ngOnInit() {
  }

}
