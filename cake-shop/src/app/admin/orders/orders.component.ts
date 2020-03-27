import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Array<Order>;
  action: string;
  SelectedOrder:Order;
  constructor(private router: Router,private httpClientService:HttpClientService,private activatedRoute:ActivatedRoute) { }

  
  ngOnInit(): void {

    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getOrders().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action']
        const selectedOrderID = params['id'];
        if(selectedOrderID){
          this.SelectedOrder = this.orders.find(order=>order.id === +selectedOrderID);
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.orders = response;
  }

  updateStatus(id:number) {
    
    this.SelectedOrder = new Order();
    this.router.navigate(['admin', 'orders'], { queryParams: { action: 'update' } });
    
  }
  
}
