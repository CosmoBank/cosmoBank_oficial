import { Component, Input } from '@angular/core';
import { ServicoType } from 'src/types/ServicoType';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent {
  public itens: ServicoType[] = [
    { name: 'Carteira Digital Holográfica', img: '../img/carteira.png' },
    { name: 'Caixa Eletrônico Robô', img: '../img/caixa-robo.png' },
    {
      name: 'Financiamento de Lotes Intergaláctico',
      img: '../img/financiamento.png',
    },
    { name: 'Plano de Fidelidade CosmoBank', img: '../img/fidelidade.png' },
  ];
}
