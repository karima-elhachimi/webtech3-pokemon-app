import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { PokemonServiceService } from './pokemon-service.service';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AllPokemonComponent } from './all-pokemon/all-pokemon.component';

const appRoutes: Routes = [

  { path: 'all-pokemons', component: AllPokemonComponent },
  { path: '**', component: PokemonComponent }
];
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, PokemonComponent, AllPokemonComponent ],
  providers: [ PokemonServiceService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
