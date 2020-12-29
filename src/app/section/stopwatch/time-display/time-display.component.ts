import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  providers:[
    // PageToggleService
  ]
})
export class TimeDisplayComponent implements OnChanges {

  @Input() inputData : string='';

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval:any;

  constructor(
    public pageToggleService: PageToggleService
  ) {}

  timeStart(){
    this.pageToggleService.plusCount();
    clearInterval(this.timeInterval);
    this.timeInterval = setInterval(()=>{
      if(this.ms >= 100){
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >= 60){
        this.sec = 0;
        this.min++;
      }

      this.ms++;

    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval);
  }

  timeReset(){
    clearInterval(this.timeInterval);
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
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
