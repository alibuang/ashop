import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy{
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject();

  constructor( private productService: ProductService) {
    this.subscription =  this.productService.getAll()
      .subscribe(products=> { this.filteredProducts =this.products = products.map(
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
      this.dtTrigger.next();
      });
      
   }

  ngOnInit(): void {
    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 5,
      retrieve: true,
    };
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.dtTrigger.unsubscribe();
  }

}
