import { Component } from '@angular/core';
import { ProductService } from '../product.service';
<<<<<<< HEAD
=======
import { CategoryService } from '../category.service';
>>>>>>> 6d1fec629b5ade8b81bb25b05b25b07c1515d010
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
<<<<<<< HEAD
=======
  categories$;
>>>>>>> 6d1fec629b5ade8b81bb25b05b25b07c1515d010
  category: string;

  constructor( 
    route: ActivatedRoute,
<<<<<<< HEAD
    productService: ProductService) {
=======
    productService: ProductService, 
    categoryService: CategoryService) {
>>>>>>> 6d1fec629b5ade8b81bb25b05b25b07c1515d010

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
<<<<<<< HEAD
=======
      
    this.categories$ = categoryService.getAll();
>>>>>>> 6d1fec629b5ade8b81bb25b05b25b07c1515d010
  }
}
