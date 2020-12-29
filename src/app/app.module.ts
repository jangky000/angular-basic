import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [
    AppComponent,
    // HelloComponent,
    // HeaderComponent,
    // FooterComponent,
    // SectionComponent,
    // TimeDisplayComponent,
    // ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule, // -> 모듈을 가져온 상태 // import * as LayoutModule from "./layout/layout.module"
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
