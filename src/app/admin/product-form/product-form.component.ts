import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(categoryService: CategoryService, private productServices: ProductService) {
    this.categories$ = categoryService.getCategories();
   }

   save(product){
     console.log(product);
     this.productServices.create(product);
   }

  ngOnInit(): void {
  }

}
