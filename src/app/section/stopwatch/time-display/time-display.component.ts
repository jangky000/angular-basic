import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnChanges {

  @Input() inputData : string='';

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval:any;

  constructor() {
    console.log('inputData', this.inputData)
    // setInterval(()=>{

    //   this.test++;

    // }, 1000)
  }

  timeStart(){
    this.timeInterval = setInterval(()=>{

      this.ms++;

    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval);
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    for(let propName in changes){
      if(propName === 'inputData'){
        switch(changes[propName].currentValue){
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
          default:
            break;
        }

      }
    }
  }

  // ngOnInit(): void {
  // }

}
