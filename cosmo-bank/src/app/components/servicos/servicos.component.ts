import { Component, Input } from '@angular/core';
import { ServicoType } from 'src/types/ServicoType';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
})
export class ServicosComponent {
  public items: ServicoType[] = [
    { name: 'Carteira Digital Holográfica', img: './assets/img/carteira.png' },
    { name: 'Caixa Eletrônico Robô', img: './assets/img/caixa-robo.png' },
    {
      name: 'Financiamento de Lotes Intergaláctico',
      img: './assets/img/financiamento.png',
    },
    {
      name: 'Plano de Fidelidade CosmoBank',
      img: './assets/img/fidelidade.png',
    },
  ];
}
