import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonServiceService {

  pokemons: Pokemon[] = [];

  constructor(private http: Http) {
    this.loadPokemonFromJson()
      .subscribe();
  }

  loadPokemonFromJson(): Observable<any> {

    console.log(1, 'load from json is called');
    console.log(2, 'response: ' +  this.http.get('pokemon.json') );
    return this.http.get('../../pokemon.json')
      .map(( res: any) => {
      console.log(3, res.json().docs);
      this.pokemons = res.json().docs;

      });

  }


  findPokemons(date: Date, date2: Date): Pokemon[] {

    let gevondenPokemons: Pokemon[] = [];

    for (let i = 0; i < this.pokemons.length; i++) {
      console.log(6, 'pokemon owned: ' + new Date(this.pokemons[i].owned));
      if (new Date(this.pokemons[i].owned).getTime() <= date.getTime() && new Date(this.pokemons[i].owned).getTime() < date2.getTime()) {

        console.log(5, 'gevonden pokemon: '+ this.pokemons[i]);
        gevondenPokemons.push(this.pokemons[i]);
      } else {
        console.log(5, 'geen pokemon gevonden');
      }
    }

    localStorage.setItem('', JSON.stringify(gevondenPokemons));

    return gevondenPokemons;

  }


}
