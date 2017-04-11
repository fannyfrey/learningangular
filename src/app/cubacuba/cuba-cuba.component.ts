import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero/hero';
import { HeroService } from './../hero/hero.service';
import { Heroine } from './../heroine';


@Component({
    selector:'cuba-cuba',
    templateUrl:'./cuba-cuba.component.html',
    styles:[`
        .herolist{
            list-style-position: outside;
        }

        .first{
           background-color:yellow;
        }
    `]
})


export class CubaCubaComponent {
    hero: Hero = {
        id: 1,
        name: 'Cuba Hero'
    };

    heroine: Heroine = {
        id:1,
        name: 'Aelin',
        power:'Magic'
    };

    HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice'},
    { id: 12, name: 'Narco'},
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas'},
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan'},
    { id: 17, name: 'Dynama'},
    { id: 18, name: 'Dr IQ'},
    { id: 19, name: 'Magma'},
    { id: 20, name: 'Tornado'},
    { id: 21, name: 'Shadow' }
    ];

    HEROESFROMSERVICE: Hero[] = [];
    numberofHeroes = this.HEROES.length;
    simpleButtonMessage;
    simpleButtonWording = "Show Something";
    keyUpTrickValue = '';
    tes: number;
    flag: string[] = [];

    constructor(private heroService: HeroService){};

    simpleButton(){
        if(this.simpleButtonMessage){    
            this.simpleButtonMessage = '';
            this.simpleButtonWording = "Show Something";
            return;
        }
        this.simpleButtonMessage = "Hello this is my simple button";
        this.simpleButtonWording = "Hide";
    }

    keyUpTrick(event: KeyboardEvent){
        this.keyUpTrickValue = (<HTMLInputElement>event.target).value;
    }

    removeContent(){
        this.keyUpTrickValue = '';
    }

    getHeroesFromService(): void{
        this.heroService.getHeroes()
            .then(heroes => this.HEROESFROMSERVICE = heroes);
    }

     getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.HEROESFROMSERVICE = heroes);
     }

     checkAllHeroes():void{
        this.tes = 0;
        this.heroService.getHeroes()
        .then(heroes => this.HEROESFROMSERVICE = heroes)
        .then( () => {
            for (let hero of this.HEROES){
                for (let herofromservice of this.HEROESFROMSERVICE){
                    if(hero.name === herofromservice.name){
                        this.flag[this.tes] = "Yes";
                        break;
                    }else{
                        this.flag[this.tes] = "No";
                    }
                }
                this.tes += 1;
            }   
        })
     }
}




