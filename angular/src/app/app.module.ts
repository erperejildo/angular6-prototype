import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimatorModule } from 'css-animator';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
