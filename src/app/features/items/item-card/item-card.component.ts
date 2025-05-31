import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {Item} from '../../../models/Item';

@Component({
  selector: 'app-item-card',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})

export class ItemCardComponent {
  @Input() item!: Item;
}
