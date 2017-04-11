import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

// import { HeroDetailComponent } from './hero/hero-detail.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { HighlightDirective } from './highlight.directive';

import { AppRoutingModule } from './app-routing.module';
import { ContactModule }    from './contact/contact.module';
import { CubaCubaModule } from './cubacuba/cuba-cuba.module';
import { DashboardModule } from './dashboard/dashboard.module';


import { HeroModule } from './hero/hero.module';
import { HeroService } from './hero/hero.service';

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroModule,
    AppRoutingModule,
    HttpModule,
    ContactModule,
    CubaCubaModule,
    DashboardModule
  ],
  declarations: [ 
    AppComponent,
    HighlightDirective
  ],
   providers:[ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
