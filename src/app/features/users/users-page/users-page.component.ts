import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent} from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserUpdateComponent } from '../user-update/user-update.component';
import {UserDefaultViewComponent} from '../user-default-view/user-default-view.component';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-users-page',
  imports: [
    CommonModule,
    UserListComponent,
    UserDetailsComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDefaultViewComponent,
    RouterLink
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})

export class UsersPageComponent {

  userId: string | null = null;
  // Flags to determine if the current route is in edit or create mode
  // Based on this, we can show relevant components on the right side.
  isEditMode: boolean = false;
  isCreateMode: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the user ID from the route parameters
    this.route.params.subscribe(params => {
      this.userId = params['id'] || null;
    })
    // Determine if the current route is in edit or create mode based on the URL
    const url = this.route.snapshot.url.map(segment => segment.path);
    this.isEditMode = url.includes('update');
    this.isCreateMode = url.includes('create');
  }

}
