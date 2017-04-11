import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CubaCubaComponent} from './cuba-cuba.component';

import { CubaCubaRoutingModule} from './cuba-cuba-routing-module';


@NgModule({
  imports:[ 
    FormsModule,
    CommonModule,
    CubaCubaRoutingModule
  ],
  declarations: [ 
    CubaCubaComponent,
   ]
})

export class CubaCubaModule { 

}
