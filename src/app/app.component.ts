import { Component } from '@angular/core';



@Component({
    selector:'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/cubacuba" routerLinkActive="active">Fanny Cuba Cuba</a>
            <a routerLink="/contact" routerLinkActive="active">Contact Form</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['./app.component.css']
})


export class AppComponent {
    title = 'Tour of Heroes';
}
 