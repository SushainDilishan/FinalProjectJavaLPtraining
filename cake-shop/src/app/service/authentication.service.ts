import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8080/bella/';
const AUTH_API2 = 'http://localhost:8090/order/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
 
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      telephone:user.telephone,
      password: user.password
    }, httpOptions);
  }

  order(product):Observable<any>{
    return this.http.post(AUTH_API2 + 'save',{
      
      customerName:product.customerName,
      productName:product.productName, 
      recieveDate:product.recieveDate
    },httpOptions);
  }

}
