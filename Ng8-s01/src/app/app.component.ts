import { Component, MissingTranslationStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleapp = 'Angular 8  - Clase 1';
  titlecontent = 'Seleccione una Opcion';
  menuOpts = [
    'Inicio',
    'Misio',
    'Vision',
    'Contactanos'
  ];
  
  optionSelected(option:string){
    console.log("AppComponent",option);
    this.titlecontent = option;
  }
}
