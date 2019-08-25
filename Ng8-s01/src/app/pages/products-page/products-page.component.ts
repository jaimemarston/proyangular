import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {products} from '../../mock-db/products';
import {IProduct} from '../../interfaces/product.interface';
import {ApiProductsService} from '../../services/api-products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  subcription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProduct: ApiProductsService
  ) {}

  ngOnInit() {
    // Capturar una sola ves el parametro
    // const category = this.activatedRoute.snapshot.paramMap.get('category');
    // Escuchar cuando el parametro cambia
    this.subcription = this.activatedRoute.paramMap
      .subscribe(
      (paramMap: ParamMap) => {
        const category = paramMap.get('category');
        this.apiProduct.getProducts(category)
          .subscribe(
            (res) => this.products = res,
            (err) => console.log('Error', err),
            () => console.log('Complete'),
          );
      },
    );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
