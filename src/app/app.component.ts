import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Cards1Component } from './layout/cards1/cards1.component';
import { Cards2Component } from './layout/cards2/cards2.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { Content1Component } from './layout/content1/content1.component';
import { Content2Component } from './layout/content2/content2.component';
import { Content3Component } from './layout/content3/content3.component';
import { Content4Component } from './layout/content4/content4.component';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatCardModule, Cards1Component, Cards2Component,NavbarComponent,
    Content1Component,Content2Component,
    Content3Component,Content4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejercicio';
}
