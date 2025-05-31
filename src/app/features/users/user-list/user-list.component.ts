import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {UserService} from '../user.service';
import {map, Observable} from 'rxjs';
import {User} from '../../../models/User';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {

  userService: UserService = inject(UserService);
  users$!: Observable<User[]>;

  ngOnInit() {
    this.getUsers();
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Fetched users:', data);
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  getUsers() {
    // Retrieve the users from the server using the userService.
    this.users$ = this.userService.getUsers().pipe(
      map((users: User[]) =>
        users.sort((a: User, b: User) =>
          a.lastName.localeCompare(b.lastName))
      )
    );
  }

}
