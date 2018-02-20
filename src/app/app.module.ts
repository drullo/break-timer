import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './timer/timer.component';
import { TwoDigitsPipe } from './two-digits.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TwoDigitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
