import {Component} from '@angular/core';
import  { Product, ProductService }  from '../../services/product-service';
import CarouselComponent from './../../components/carousel/carousel.component';
import ProductItemComponent from './../../components/product-item/product-item.component';
import {FormControl} from '@angular/forms';
import {FilterPipe} from './../../pipes/filter-pipe';
import 'rxjs/add/operator/debounceTime';

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

