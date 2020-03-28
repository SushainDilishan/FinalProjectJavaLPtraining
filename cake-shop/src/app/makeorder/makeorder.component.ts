import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Order } from '../model/Order';
import { Product } from '../model/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { TokenStorageService } from '../service/token-storage.service';
import { User } from '../model/User';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: ['./makeorder.component.css']
})
export class MakeorderComponent implements OnInit {

  
  order:Order;

  @Input()
  product :Product;

  product1:Product;

  user:User;
  
  id:number;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username: String[]= [];

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  // errorMessage = '';
  constructor(private router: Router
    ,private httpClientService: HttpClientService,private route: ActivatedRoute,private tokenStorage:TokenStorageService,private authService:AuthenticationService) {
     // this.order.customerName = tokenstorage.getUser();
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
       
    });
     

}

  ngOnInit(): void {

    
    
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.username = this.tokenStorage.getUser().username;
      this.form.customerName = this.tokenStorage.getUser().username;
      

    }
    this.refreshData();
    
    }
 
  refreshData() {

    this.httpClientService.findById(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    
 
  }

  onSubmit() {
    this.authService.order(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );}

  handleSuccessfulResponse(response) {
       this.product1 = response;
       this.form.productName = this.product1.productName;
    // this.product1.productName = this.order.productName;
    // this.order.productName = response;
    // const product2 = new Product();
    // product2.productName = this.product1.productName;
}

}
