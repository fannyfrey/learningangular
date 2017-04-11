import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1>{{title}}</h1>`
})

export class TitleComponent {
  title = 'Tour of Heroes';
}


