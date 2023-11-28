import { Component, Input } from '@angular/core';
import { ServicoType } from 'src/types/ServicoType';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item!: ServicoType;
}
