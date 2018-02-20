import { TimerComponent } from './timer/timer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TimerComponent },
  { path: ':minutes', component: TimerComponent },
  { path: ':minutes/:logo?', component: TimerComponent },
  { path: ':minutes/:logo?/:audio?', component: TimerComponent },
  { path: '**', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
