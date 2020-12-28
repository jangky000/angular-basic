import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() clickEvent1 = new EventEmitter();

  constructor() { }

  executeBtn(command: string){
    this.clickEvent1.emit(command);
  }

  ngOnInit(): void {
  }

}
