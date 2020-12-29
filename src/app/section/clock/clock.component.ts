import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString: string = '';

  constructor(private router: Router) {
    // 1초마다 매핑 함수를 실행
    // 구독 모델을 subscrbe하고 있다가 변화가 발생하면 timeString 값을 변화시킴
    interval(1000)
      .pipe(map(()=>{
        return moment().format('YYY-MM-DD HH:mm:ss')
    }))
    .subscribe(data=>{
      this.timeString = data;
    })
  }

  // 메소드를 직접 템플릿에 직접 사용하는 것(바인딩하는 것)은 권장하지 않음
  // 컴포넌트 내에서 변화가 일어날 때마다 바인딩된 함수들이 계속 불려짐
  // ex) constructor에 setInterval을 걸어주는 경우 -> getCurrentTime()이 불려져서 시간이 변화함
  // 예측이 불가능하다.
  getCurrentTime() {
    let result = moment().format('YYY-MM-DD HH:mm:ss')
    return result;
  }

  goStopwatch(){
    this.router.navigateByUrl('/stopwatch');
  }

  ngOnInit(): void {
  }

}
