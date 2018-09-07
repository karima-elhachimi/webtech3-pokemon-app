import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  date1: Date;
  date2: Date;
  foundPokemon: Pokemon[];
  found: boolean = false;

  constructor( private pokemonService: PokemonServiceService) { }

  ngOnInit() {

  }

  findPokemon() {
    this.date1 = new Date(this.date1);
    this.date2 = new Date(this.date2);

    console.log(5, 'dates: ' + this.date1 );

    this.foundPokemon = this.pokemonService.findPokemons(this.date1, this.date2);
    if (this.foundPokemon.length > 0) {
      this.found = true;
    }

  }

}
