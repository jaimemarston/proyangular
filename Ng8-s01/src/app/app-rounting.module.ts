import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductsDetailPageComponent } from './pages/products-detail-page/products-detail-page.component';

const routes: Routes = [
{
    path: 'products/:category',
    component: ProductsPageComponent
},
{

    path: 'products-detail',
    component: ProductsDetailPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
