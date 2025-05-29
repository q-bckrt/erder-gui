import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent} from '../core/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {

}
