import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  Leia = {name: 'Leia', isJedi: false}
  Han = {name: 'Han', isJedi: false}
}
