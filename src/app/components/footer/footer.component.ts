import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isOpen: boolean = false;
  itemsFooter = [
    {
      title: 'Produtos',
      list: [
        'Neuropass',
        'CosmoInvest',
        'Moeda Digital',
        'GalaxyCraft Finance',
        'Infinite Futures Plan',
      ],
    },
    {
      title: 'Serviços',
      list: [
        'HoloSphere',
        'Robô Cash Express',
        'Cosmoland Ventures',
        'Interstellar StarPoints',
      ],
    },
    {
      title: 'Sobre o banco',
      list: ['Sobre Nós', 'Privacidade', 'Mapa do Site'],
    },
    {
      title: 'Fale conosco',
      list: ['Central de Atendimento', 'SAC', 'Ouvidoria'],
    },
  ];
}
