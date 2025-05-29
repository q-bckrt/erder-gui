import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ItemsPageComponent } from './features/items/items-page/items-page.component';
import { UsersPageComponent} from './features/users/users-page/users-page.component';
import { BasketPageComponent} from './features/basket/basket-page/basket-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: "items", pathMatch: "full" }, // Redirect to items by default

      { path: 'items', component: ItemsPageComponent },
      { path: 'items/create', component: ItemsPageComponent },
      { path: 'items/:id', component: ItemsPageComponent },
      { path: 'items/:id/update', component: ItemsPageComponent },

      { path: 'users', component: UsersPageComponent },
      { path: 'users/create', component: UsersPageComponent },
      { path: 'users/:id', component: UsersPageComponent },
      { path: 'users/:id/update', component: UsersPageComponent },

      { path: 'basket', component: BasketPageComponent }
    ]
  },

  { path: '**', redirectTo: 'items' } // Redirect to items for any unknown routes
];
