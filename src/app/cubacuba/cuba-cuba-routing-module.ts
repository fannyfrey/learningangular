import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';

import { CubaCubaComponent }    from './cuba-cuba.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CubaCubaComponent }
  ])], 
  exports: [RouterModule]
})
export class CubaCubaRoutingModule {}

