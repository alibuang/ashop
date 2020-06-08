import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product:any={};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productServices: ProductService) {
    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productServices.get(this.id)
      .pipe(take(1))
      .subscribe(p => {
        this.product = p.payload.data();
        console.log(this.product);
      });
   }

   save(product){

    if(this.id) this.productServices.update(this.id, product);
    else this.productServices.create(product);

    this.router.navigate(['/admin/products']);
   }

   delete(){
    if(!confirm('Are you sure you want to delete this product?')) return;
     
    this.productServices.delete(this.id);
    this.router.navigate(['/admin/products']);
   }

  ngOnInit(): void {
  }

}
