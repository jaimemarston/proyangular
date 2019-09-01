import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductDetailPageComponent} from './pages/product-detail-page/product-detail-page.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ProductsRootPageComponent} from './pages/products-root-page/products-root-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsRootPageComponent,
    children: [
      {
        path: ':category',
        component: ProductsPageComponent,
      },
      {
        path: 'detail/:product',
        component: ProductDetailPageComponent
      },
    ]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
