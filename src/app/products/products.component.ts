import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products: Product[]=[];
  filteredProducts: Product[]=[];
  category: string;

  constructor( 
    route: ActivatedRoute,
    productService: ProductService) {

    productService
      .getAll()
      .switchMap(products=> { this.products = products.map(
        product => {
          return<Product>{
            title: product.data['title'],
            category: product.data['category'],
            imageUrl: product.data['imageUrl'],
            price: product.data['price'],
            id: product.id
        }});
        return route.queryParamMap;
        })
      .subscribe(param => {
        this.category = param.get('category');
      
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category == this.category):
          this.products;
      });
  }
}
