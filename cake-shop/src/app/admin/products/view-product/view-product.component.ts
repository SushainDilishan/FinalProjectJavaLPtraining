import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input()
  product :Product;

  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }
  
    ngOnInit() {
    }
  
    deleteProduct() {
      this.httpClientService.deleteProduct(this.product.id).subscribe(
        (product) => {
          this.router.navigate(['admin', 'products']);
        }
      );
    }

}
