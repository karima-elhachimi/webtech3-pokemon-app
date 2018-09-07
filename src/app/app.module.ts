import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PokemonServiceService } from './pokemon-service.service';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, PokemonComponent ],
  providers: [ PokemonServiceService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
