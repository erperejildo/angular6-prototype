// More info: https://angular.io/guide/router

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeBusinessComponent } from '../components/upgrade-business/upgrade-business.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'upgrade', component: UpgradeBusinessComponent },
  // {
  //   path: '', redirectTo: '/upgrade',
  //   pathMatch: 'full'
  // }, // root page
  //   // { path: 'passing-params/:id', component: test }
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// avoid import statement duplication
export const routingComponents = [UpgradeBusinessComponent, PageNotFoundComponent];
