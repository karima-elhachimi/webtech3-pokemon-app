import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/all-pokemons">See all pokemon</a>
    <a routerLink="/">main page</a>
    <h1>Hey {{name}}</h1><br/><router-outlet></router-outlet>
  `,
  styles: [ '']
})
export class AppComponent  { name = 'You'; }
