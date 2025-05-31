import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private readonly httpClient = inject(HttpClient);
  private readonly itemsURL: string;

  constructor() {
    this.itemsURL = environment.backendItemsURL;
  }

  // retrieve the pets from the server as an Observable
  getItems(): Observable<any> {
    return this.httpClient.get(this.itemsURL);
  }

  /*
  // add a pet to the server
  addItem(pet: any): Observable<any> {
    return this.httpClient.post(this.itemsURL, item);
  }
  */
}
