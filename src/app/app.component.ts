import { Component, ViewEncapsulation } from '@angular/core';
import { Product, ProductService} from './services/product-service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent  {

  products: Array<Product> = [];

  constructor (private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
