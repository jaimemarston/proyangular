import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // @Input() title = 'Content'; // solamente si no le pasamos la variable

  constructor() { }

  ngOnInit() {
  }

}
