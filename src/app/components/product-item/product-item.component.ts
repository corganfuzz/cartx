import {Component, Input} from '@angular/core';
// import StarsComponent from '../../components/stars/stars.component';
import {Product} from '../../services/product-service';

@Component ({
  selector: 'auction-product-item',
  templateUrl: 'app/components/product-item/product-item.component.html',
  styleUrls: ['app/components/product-item/product-item.component.css']
})

export default class ProductItemComponent {
  @Input() product: Product;
}
