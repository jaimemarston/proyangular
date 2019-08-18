import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  @Input () options:string [];
  @Output() optionSelected = new EventEmitter();
  @Input () selected:string ;

  constructor() { }

  ngOnInit() {
  }
  optionClicked(option: string){
    console.log('Option Clikeada: ',option)
    this.optionSelected.emit(option);
  }

}
