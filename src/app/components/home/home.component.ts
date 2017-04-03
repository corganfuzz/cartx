import {Component} from '@angular/core';
import  { Product, ProductService }  from '../../services/product-service';

@Component({
  selector: 'auction-auction-page',
  templateUrl: 'app/components/home/home.component.html',
  styleUrls: ['app/components/home/home.component.css']

})

export default class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}

