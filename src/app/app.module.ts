import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnimatorModule } from 'css-animator';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from '../routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimatorModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
