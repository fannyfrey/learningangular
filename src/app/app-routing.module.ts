import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
// import { HeroesComponent }      from './hero/heroes.component';
// import { CubaCubaComponent}     from './cubacuba/cuba-cuba.component';
// import { ContactComponent }     from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent },
  // { path: 'cubacuba',   component: CubaCubaComponent },
  // { path: 'contact',    component: ContactComponent },
  { path: 'heroes',    loadChildren: 'app/hero/hero.module#HeroModule' },
  { path: 'cubacuba',  loadChildren: 'app/cubacuba/cuba-cuba.module#CubaCubaModule' },
  { path: 'contact',   loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

 