import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeBusinessComponent } from '../components/upgrade-business/upgrade-business.component';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UpgradeBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
