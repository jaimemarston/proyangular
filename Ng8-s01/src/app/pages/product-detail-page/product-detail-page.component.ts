import { Component, OnInit } from '@angular/core';
import {ApiProductsService} from '../../services/api-products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  product;

  constructor(
    private apiProduct: ApiProductsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const product = this.activatedRoute.snapshot.paramMap.get('product');
    this.apiProduct.getProductDetail(product)
      .subscribe(res => this.product = res);
  }

}
