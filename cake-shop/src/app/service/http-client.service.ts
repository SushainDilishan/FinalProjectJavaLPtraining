import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/bella/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/bella/add', newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/bella/' + id);
  }

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/products/get');
  }
}
