import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.css']
})
export class AllPokemonComponent implements OnInit {

  pokemons: Pokemon[] ;
  constructor(private pokemonServ: PokemonServiceService) { }

  ngOnInit() {

    this.pokemonServ.loadPokemonFromJson().subscribe(res =>{
      this.pokemons = res;
    });

  }

}
