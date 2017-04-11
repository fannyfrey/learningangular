import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';



import { DashboardComponent } from './dashboard.component';
// import { HeroSearchComponent } from './../hero/hero-search.component';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { HeroModule } from './../hero/hero.module';

@NgModule({
  imports:[ 
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    HeroModule
  ],
  declarations: [
    DashboardComponent,
    // HeroSearchComponent
   ],
})
export class DashboardModule { 
  
}
