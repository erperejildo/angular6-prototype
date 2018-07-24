// More info: https://angular.io/guide/router

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UpgradeBusinessComponent } from '../components/upgrade-business/upgrade-business.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ThoughtsComponent } from '../components/thoughts/thoughts.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'upgrade', component: UpgradeBusinessComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent }
  // { path: 'passing-params/:id', component: test } // if you need to pass params
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// avoid import statement duplication
export const routingComponents = [HomeComponent, UpgradeBusinessComponent, PageNotFoundComponent, ThoughtsComponent];
