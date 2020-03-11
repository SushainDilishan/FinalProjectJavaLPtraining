import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );

    
  }

  handleSuccessfulResponse(response) {
    this.products = response;
  }

}
