import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Cards1Component } from './cards1/cards1.component';
import { Cards2Component } from './cards2/cards2.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatCardModule, Cards1Component, Cards2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejercicio';
}
