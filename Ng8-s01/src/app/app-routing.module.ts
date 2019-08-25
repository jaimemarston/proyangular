import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductDetailPageComponent} from './pages/product-detail-page/product-detail-page.component';

const routes: Routes = [
  {
    path: 'products/:category',
    component: ProductsPageComponent
  },
  {
    path: 'product-detail/:product',
    component: ProductDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
