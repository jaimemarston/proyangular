import { Component, OnInit } from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';
import {categories} from '../../mock-db/categories';
import {ApiProductsService} from '../../services/api-products.service';

@Component({
  selector: 'app-products-root-page',
  templateUrl: './products-root-page.component.html',
  styleUrls: ['./products-root-page.component.css']
})
export class ProductsRootPageComponent implements OnInit {

  categories: ICategory[] = [];

  constructor(
    private apiProduct: ApiProductsService
  ) { }

  ngOnInit() {
    this.apiProduct.getCategories()
      .subscribe(
        res => { this.categories = res },
        err => { console.error(err) },
        () => { console.log('complete') },
      )
  }

}
