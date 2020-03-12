import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @Input()
  product :Product;

  @Output()
  productDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }
  
    ngOnInit() {
    }
  
    deleteProduct() {
      this.httpClientService.deleteProduct(this.product.id).subscribe(
        (product) => {
          this.productDeletedEvent.emit();
          this.router.navigate(['admin', 'products']);
        }
      );
    }

}
