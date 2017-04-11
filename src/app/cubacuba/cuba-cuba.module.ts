import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from './../shared/shared.module';

import { CubaCubaComponent} from './cuba-cuba.component';

import { CubaCubaRoutingModule} from './cuba-cuba-routing-module';


@NgModule({
  imports:[ 
    SharedModule,
    CommonModule,
    CubaCubaRoutingModule
  ],
  declarations: [ 
    CubaCubaComponent,
   ]
})

export class CubaCubaModule { 

}
