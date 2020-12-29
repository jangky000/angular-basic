import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    // TestComponent
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    // TestComponent // -> 다른 모듈이 사용할 수 있는 상태
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
