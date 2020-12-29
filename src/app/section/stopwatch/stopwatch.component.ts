import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present: string = "";

  constructor() { }

  startTime(time:string){
    this.present = time;
  }

  ngOnInit(): void {
  }

}
