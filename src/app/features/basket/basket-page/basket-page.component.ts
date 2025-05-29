import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketListComponent} from '../basket-list/basket-list.component';
import { BasketDetailsComponent } from '../basket-details/basket-details.component';

@Component({
  standalone: true,
  selector: 'app-basket-page',
  imports: [
    CommonModule,
    BasketListComponent,
    BasketDetailsComponent
  ],
  templateUrl: './basket-page.component.html',
  styleUrl: './basket-page.component.css'
})

export class BasketPageComponent {

}
