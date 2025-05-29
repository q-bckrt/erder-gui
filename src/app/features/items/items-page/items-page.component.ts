import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemUpdateComponent } from '../item-update/item-update.component';

@Component({
  standalone: true,
  selector: 'app-items-page',
  imports: [
    CommonModule,
    ItemListComponent,
    ItemDetailsComponent,
    ItemCreateComponent,
    ItemUpdateComponent,
  ],
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.css'
})

export class ItemsPageComponent implements OnInit {

  itemId: string | null = null;
  // Flags to determine if the current route is in edit or create mode
  // Based on this, we can show relevant components on the right side.
  isEditMode: boolean = false;
  isCreateMode: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the item ID from the route parameters
    this.route.params.subscribe(params => {
      this.itemId = params['id'] || null;
    })
    // Determine if the current route is in edit or create mode based on the URL
    const url = this.route.snapshot.url.map(segment => segment.path);
    this.isEditMode = url.includes('update');
    this.isCreateMode = url.includes('create');
  }

}
