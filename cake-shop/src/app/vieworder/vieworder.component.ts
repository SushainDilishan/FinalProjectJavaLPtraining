import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';
import { Order } from '../model/Order';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  orders:Array<Order>;
  action:String;
  selectedOrder:Order;

 
  isLoggedIn = false;
  username:String;

  constructor(private httpClientService:HttpClientService,
    private activatedRoute:ActivatedRoute,private tokenStorage:TokenStorageService,private router:Router) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.username = user.username;
    }
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getOrderByname(this.username).subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedOrderID = params['id'];
        if(selectedOrderID){
          this.selectedOrder = this.orders.find(user=>user.id === +selectedOrderID);
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.orders = response;
  
  }

  editOrder(id:number){
    this.router.navigate(['vieworder'], { queryParams: { id, action: 'edit' } });
  }

}
