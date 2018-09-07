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
    let dateString1: string = this.date1.getFullYear() + '/' + (this.date1.getMonth() + 1) + '/' + this.date1.getDate();
    let dateString2: string = this.date2.getFullYear() + '/' + (this.date2.getMonth() + 1) + '/' + this.date2.getDate();
    console.log(5, 'dates: ' + dateString1 );

    this.pokemonService.findPokemons(dateString1, dateString2);

  }

}
