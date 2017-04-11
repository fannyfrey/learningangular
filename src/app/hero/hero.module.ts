import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroSearchComponent } from './../hero/hero-search.component';



import { HeroRoutingModule } from './hero-routing-module';


@NgModule({
  imports:[ 
    FormsModule,
    CommonModule,
    HttpModule,
    HeroRoutingModule
  ],
  declarations: [ 
    HeroesComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  exports:[
    HeroDetailComponent,
    HeroSearchComponent
  ]
})
export class HeroModule { 

}
