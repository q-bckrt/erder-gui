import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-item-details',
    imports: [
        CommonModule,
        RouterLink
    ],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})

export class ItemDetailsComponent {

}
