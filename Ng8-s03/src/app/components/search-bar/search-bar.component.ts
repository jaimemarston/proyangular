import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter(); // Evento

  constructor() { }

  ngOnInit() {
  }

}
