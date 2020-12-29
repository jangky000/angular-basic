import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';



@NgModule({
  declarations: [
    SectionComponent,
    // TimeDisplayComponent,
    // ButtonsComponent
  ],

  exports:[
    SectionComponent
  ],

  imports: [
    CommonModule,
    StopwatchModule
  ]
})
export class SectionModule { }
