import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products: Product[];
  subscription: Subscription;

  constructor( productService: ProductService) {

    this.subscription = productService.getAll()
      .subscribe(products=> { this.products = products.map(
        product => {
          return<Product>{
            title: product.data['title'],
            category: product.data['category'],
            imageUrl: product.data['imageUrl'],
            price: product.data['price'],
            id: product.id
          }  
        }     
      );
    });
  }
}
