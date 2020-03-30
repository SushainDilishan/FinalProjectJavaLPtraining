import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  @Input()
  order:Order;

  @Output()
 OrderEditedEvent = new EventEmitter();

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit(): void {

  }

  saveOrder(){
    this.httpClientService.updateOrder(this.order).subscribe(
      (order) => {
        this.OrderEditedEvent.emit();
        this.router.navigate(['vieworder']);
  });
  }

  deleteOrder() {
    this.httpClientService.deleteOrder(this.order.id).subscribe(
      (order) => {
        this.OrderEditedEvent.emit();
        this.router.navigate(['vieworder']);
      }
    );
    }

}
