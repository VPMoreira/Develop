import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/shared/services/produtos.service';

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



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos!: any 

  constructor(private productService: ProdutosService ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(response => {
      this.produtos = response
      console.log(this.produtos)
    })
  }

}
