import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>('http://localhost:8080/bella/get',{headers});
    
  }

  addUser(newUser: User) {
    
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<User>('http://localhost:8080/bella/add',newUser,{headers});   
  }

  deleteUser(id) {
    
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<User>('http://localhost:8080/bella/' + id,{headers});  
  } 

  getProducts() {

    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Product[]>('http://localhost:8081/products/get',{headers}); 
    
  }

  addProduct(newProduct: Product) {
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Product>('http://localhost:8081/products/save',newProduct,{headers}); 
    // return this.httpClient.post<Product>('http://localhost:8081/products/save', newProduct);
  }

  deleteProduct(id) {
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<Product>('http://localhost:8081/products/' + id,{headers}); 
    
    // return this.httpClient.delete<Product>('http://localhost:8081/products/' + id);
  }
  addUploadData(selectedFile) {
    
    let username='sushi'
    let password='password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Product>('http://localhost:8081/products/upload', selectedFile,{headers}); 
    // return this.httpClient.post('http://localhost:8081/products/upload', selectedFile);
  }
}
