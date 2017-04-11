import { NgModule }      from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ContactComponent } from './contact.component';
import { UserService } from './user.service';
import { ContactService } from './contact.service';

import { HighlightDirective} from './highlight.directive';

import { ContactRoutingModule } from './contact-routing-module';

@NgModule({
  imports:[ 
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [ 
    HighlightDirective,
    ContactComponent
   ],
   providers:[ UserService, ContactService ]
})

export class ContactModule { 

}