import { Component } from '@angular/core';
import {ICategory} from './interfaces/category.interface';
import {categories} from './mock-db/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    titleApp = 'Angular 8 - Clase 2';
    menuOpts: ICategory[] = categories;
}
