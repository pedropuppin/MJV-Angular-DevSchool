import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Array<Product> = [
    {
      id: 1,
      description: 'IPhone 11',
      price: 3500
    },
    {
      id: 1,
      description: 'IPhone 12',
      price: 4000
    },
    {
      id: 1,
      description: 'IPhone 13',
      price: 4500
    }
  ]
}


// compnent do products-list gerado com "ng g c features/home/components/products-list"
