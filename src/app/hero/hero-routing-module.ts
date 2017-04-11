import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { HeroesComponent }    from './heroes.component';
import { HeroSearchComponent }    from './hero-search.component';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: HeroesComponent },
    { path: 'search', component: HeroSearchComponent }
  ])], 
  exports: [RouterModule]
})
export class HeroRoutingModule {}

