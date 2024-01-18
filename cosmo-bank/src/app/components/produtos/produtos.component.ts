import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  listaProdutos: any = [
    { 
      nome: "Robô assistente",
      urlProduto: "../assets/produto1.png"
    },
    {
      nome: "Plano de Aposentadoria",
      urlProduto: "../assets/produto2.png"
    },
    {
      nome: "Parcelamento intergalático",
      urlProduto: "../assets/produto3.png"
    }
  ]

}
