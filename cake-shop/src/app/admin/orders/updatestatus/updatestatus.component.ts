import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {

  @Input()
  order : Order;

  @Output()
  productUpdatedEvent = new EventEmitter();

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit(): void {
  }
  
  update(){
      this.httpClientService.updateOrder(this.order).subscribe(
      (order) => {
        this.productUpdatedEvent.emit();
        this.router.navigate(['admin', 'orders']);
  });
    
  }

  



}
