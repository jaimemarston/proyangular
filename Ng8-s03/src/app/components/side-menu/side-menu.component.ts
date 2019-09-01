import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ICategory} from '../../interfaces/category.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input() options: ICategory[];
  // @Input() selected: string;
  // @Output() optionSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /*
  optionClicked(option: string) {
    console.log('Esta opcion a sido clickeada', option);
    this.optionSelected.emit(option);
  }
  */

}
