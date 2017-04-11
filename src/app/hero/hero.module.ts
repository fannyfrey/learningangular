import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroFormComponent } from './hero-form.component';
import { HeroSearchComponent } from './hero-search.component';

import { SharedModule } from './../shared/shared.module';

import { HeroRoutingModule } from './hero-routing-module';


@NgModule({
  imports:[ 
    FormsModule,
    CommonModule,
    HttpModule,
    HeroRoutingModule,
    SharedModule,
    InMemoryWebApiModule
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
