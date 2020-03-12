import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>
  selectedProduct: Product;
  action: string;

  constructor(private httpClientService: HttpClientService,private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
     this.refreshData();
    
  }
  
  refreshData() {

    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    
    this.activedRoute.queryParams.subscribe(
      (params) => {
        const id = params['id'];
        this.action = params['action'];
        if (id) {
          this.selectedProduct = this.products.find(product => {
            return product.id === +id;
          });
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    this.products = response;
    for (const product of this.products) {
    
      const product1 = new Product();
      product1.id = product.id;
      product1.productName = product.productName;
      product1.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      
      product1.price = product.price;
      product1.picByte=product.picByte;
      this.products.push(product1);
    }
  }

  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  }

  viewProduct(id: number) {
    this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'view' } });
  }

}
