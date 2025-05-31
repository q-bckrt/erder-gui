import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly httpClient = inject(HttpClient);
  private readonly usersURL: string;

  constructor() {
    this.usersURL = environment.backendUsersURL;
  }

  // retrieve the pets from the server as an Observable
  getUsers(): Observable<any> {
    return this.httpClient.get(this.usersURL);
  }
}
