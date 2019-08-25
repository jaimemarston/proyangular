import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';
import {products} from '../mock-db/products';
import {productDetails} from '../mock-db/product-details';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor() { }

  getProducts(category: string): Observable<IProduct[]> {
    const _products = products.find((item) => {
      const categorySlug = Object.keys(item)[0];
      return categorySlug === category;
    });
    const result = Object.values(_products)[0] as IProduct[];
    return of(result);
  }

  getProductDetail(product: string): Observable<IProduct> {
    const _productDetails = productDetails.find((item) => {
      const productSlug = Object.keys(item)[0];
      return productSlug === product;
    });
    const result = Object.values(_productDetails)[0] as IProduct;
    return of(result);
  }
}
