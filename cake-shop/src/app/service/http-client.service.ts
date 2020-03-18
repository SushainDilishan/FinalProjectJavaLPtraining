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
   
    return this.httpClient.get<User[]>('http://localhost:8080/bella/get');
    
  }

  // addUser(newUser: User) {
    
    
  //   return this.httpClient.post<User>('http://localhost:8080/bella/add',newUser);   
  // }

  deleteUser(id) {
    
    
    return this.httpClient.delete<User>('http://localhost:8080/bella/' + id,);  
  } 

  getProducts() {

    
    return this.httpClient.get<Product[]>('http://localhost:8081/products/get'); 
    
  }

  addProduct(newProduct: Product) {
  
    return this.httpClient.post<Product>('http://localhost:8081/products/save',newProduct); 
    // return this.httpClient.post<Product>('http://localhost:8081/products/save', newProduct);
  }

  deleteProduct(id) {
    
    return this.httpClient.delete<Product>('http://localhost:8081/products/' + id,); 
    
    // return this.httpClient.delete<Product>('http://localhost:8081/products/' + id);
  }
  addUploadData(selectedFile) {
    
   
    return this.httpClient.post<Product>('http://localhost:8081/products/upload', selectedFile); 
    // return this.httpClient.post('http://localhost:8081/products/upload', selectedFile);
  }

  updateProduct(updatedProduct: Product) {
    return this.httpClient.put<Product>('http://localhost:8081/products/update', updatedProduct);
  }
}
