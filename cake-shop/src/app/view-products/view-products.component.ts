import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Product } from '../model/Product';
import { HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  
  @Input()
  product :Product;

  @Output()
  productviewEvent = new EventEmitter();

  products:Array<Product>;
  products1:Array<Product>;
  selectedProduct: Product;
  action: string;
  
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username: string;
  term;
  constructor(private httpClientService: HttpClientService,
    private router: Router, private tokenStorageService: TokenStorageService,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
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

  // addProduct() {
  //   this.selectedProduct = new Product();
  //   this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  // }

  // viewProduct(id: number) {
  //   this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'view' } });
  // }

  viewProduct(id:number) {

    this.router.navigate(['makeorder'],{queryParams: { id, action: 'view'} });
    this.productviewEvent.emit();
  }

  // updateProduct(id:number){
  //   this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'edit' } });
  // }
}
