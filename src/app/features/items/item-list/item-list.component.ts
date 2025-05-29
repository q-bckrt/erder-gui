import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent} from '../item-card/item-card.component';

@Component({
  standalone: true,
  selector: 'app-item-list',
  imports: [
    CommonModule,
    ItemCardComponent
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})

export class ItemListComponent {

}
