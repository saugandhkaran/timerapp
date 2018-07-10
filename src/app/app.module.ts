import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';

// const appRoutes: Routes = [
//   { path: 'timer', component: TimerComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    HeaderComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
