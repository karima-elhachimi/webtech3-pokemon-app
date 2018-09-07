import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hey {{name}}</h1><br/><app-pokemon></app-pokemon> <p class="tiny">please let me pass... </p>`,
  styles: [ '.tiny { font-size: 8px;}']
})
export class AppComponent  { name = 'You'; }
