import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ContentComponent } from './components/content/content.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import {NgPipesModule} from 'ngx-pipes';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductRootPageComponent } from './pages/product-root-page/product-root-page.component';
import { ProductsRootPageComponent } from './pages/products-root-page/products-root-page.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ContentComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    SearchBarComponent,
    SignUpComponent,
    ProductRootPageComponent,
    ProductsRootPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPipesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
