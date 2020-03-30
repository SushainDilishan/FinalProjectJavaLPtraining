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

  products:Array<Product>;
  products1:Array<Product>;
  selectedProduct: Product;
  action: string;
  term;
  

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
    this.products1 = response;

    for (const product of this.products1) {
    
      const product2 = new Product();
      product2.id = product.id;
      product2.productName = product.productName;
      product2.picByte= product.picByte;
      product2.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      product2.price = product.price;
      product2.details = product.details;
      
      this.products.push(product2);
    }
  }

  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  }

  viewProduct(id: number) {
    this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'view' } });
  }

  // updateProduct(id:number){
  //   this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'edit' } });
  // }

}
