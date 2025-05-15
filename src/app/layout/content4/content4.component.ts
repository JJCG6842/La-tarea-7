import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-content4',
  imports: [MatButtonModule,MatCardModule,MatFormFieldModule,MatSelectModule,MatInputModule,MatRadioModule],
  templateUrl: './content4.component.html',
  styleUrl: './content4.component.scss'
})
export class Content4Component {

}
