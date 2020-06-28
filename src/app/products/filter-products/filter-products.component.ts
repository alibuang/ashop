import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) { 

    this.categories$ = categoryService.getAll();
  }

  ngOnInit(): void {
  }

}
