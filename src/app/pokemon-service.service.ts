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


  findPokemons(date: string, date2: string): Pokemon[] {

    let gevondenPokemons: Pokemon[];

    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].owned > date && this.pokemons[i].owned < date2) {
        console.log(5, 'gevonden pokemon: '+ this.pokemons[i]);
        gevondenPokemons.push(this.pokemons[i]);
      }
      else {
        console.log(5, 'geen pokemon gevonden');
      }
    }

    //localStorage.setItem('', JSON.stringify(gevondenPokemons));

    return gevondenPokemons;

  }


}
