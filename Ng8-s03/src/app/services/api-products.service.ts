import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';
import {products} from '../mock-db/products';
import {productDetails} from '../mock-db/product-details';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ICategory} from '../interfaces/category.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  domain = 'https://galaxy-training.firebaseio.com';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.domain+'/categories.json')
  }

  getProducts(category: string): Observable<{ products: IProduct[] }> {
    return this.http.get<{ products: IProduct[] }>(`${this.domain}/category/${category}.json`)
    /*
    const _products = products.find((item) => {
      const categorySlug = Object.keys(item)[0];
      return categorySlug === category;
    });
    const result = Object.values(_products)[0] as IProduct[];
    return of(result);
    */
  }

  getProductDetail(product: string): Observable<any> {
    return this.http.get(`${this.domain}/product/${product}.json`)
    /*
    const _productDetails = productDetails.find((item) => {
      const productSlug = Object.keys(item)[0];
      return productSlug === product;
    });
    const result = Object.values(_productDetails)[0] as IProduct;
    return of(result);
    */
  }

  saveUser(userInfo: object): Observable<string> {
    return this.http.post<{name}>(`${this.domain}/users.json`, userInfo)
      .pipe(map((res) => res.name))
  }

  updateUser(id:string, userInfo: object): Observable<any> {
    return this.http.put<any>(`${this.domain}/users/${id}.json`, userInfo)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.domain}/users/${id}.json`)
  }
}



