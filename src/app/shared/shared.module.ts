import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { HighlightDirective} from './highlight.directive';




@NgModule({
  imports:[ 
    CommonModule,
    FormsModule
  ],
  declarations: [ 
    HighlightDirective
  ],
  exports:[
    HighlightDirective, FormsModule, CommonModule
  ]
})

export class SharedModule { 

}