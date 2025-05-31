import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent} from '../item-card/item-card.component';
import {ItemService} from '../../../services/item.service';
import {map, Observable} from 'rxjs';
import {Item} from '../../../models/Item';

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

export class ItemListComponent implements OnInit {
  // The itemService is injected to retrieve the items from the server.
  itemService: ItemService = inject(ItemService);
  // This will contain the retrieved items as an Observable,
  // which will be subscribed to by the async pipe in the template.
  items$!: Observable<Item[]>;

  // This method will be automatically called when the component is initialized.
  // So when the component is loaded, it will call the getPets() method.
  ngOnInit() {
    this.getItems()
    this.itemService.getItems().subscribe({
      next: (data) => {
        console.log('Fetched items:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  // This method retrieves the items from the server using the itemService.
  getItems() {

    // On the observer, we use a map() that will apply a function to it.
    // It's an array, so we can apply the sort function to it
    // The sort itself takes a comparator function (localeCompare on name)
    this.items$ = this.itemService.getItems().pipe(
      map((items: Item[]) =>
        items.sort((a: Item, b: Item) =>
          a.name.localeCompare(b.name))
      )
    );
  }
}
