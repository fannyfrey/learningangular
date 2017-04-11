import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

// import { HeroDetailComponent } from './hero/hero-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactModule }    from './contact/contact.module';
import { HeroModule } from './hero/hero.module';
import { CubaCubaModule } from './cubacuba/cuba-cuba.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports:[ 
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ContactModule,
    HeroModule,
    CubaCubaModule,
    DashboardModule,
    SharedModule,
    CoreModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
