import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],

  exports:[
    SectionComponent,
    RouterModule // export 시키지 않으면 라우터 모듈이 설정 값을 알 수 없기 때문에
  ],

  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes) // forRoot 대신 root가 아니기 때문에 child 사용
  ]
})
export class SectionModule { }
