import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products.interface';
import { products } from 'src/app/mock-db/products';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products : IProduct[] = [];
  constructor(
    private activatedroute: ActivatedRoute

  ) { }

  ngOnInit() {

    // TODO: Escuchar cuando el parametro cambia
    this.activatedroute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        const category = paramMap.get('category') ;
        this.products = this.getProducts(category);
        console.log(paramMap.get('category'));
      },
        );

    // const category = this.activatedroute.snapshot.paramMap.get('category');
    
  }


  getProducts(category: string): IProduct[] {
    const _products = products.find(item => {
      console.log(Object.keys(item));
      const categotySlug = Object.keys(item)[0];
      return categotySlug === category;
    });
    return Object.values(_products)[0] as IProduct[]
  }
}
