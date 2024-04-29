import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RuletaComponent } from './ruleta/ruleta.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RuletaComponent],
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  city = 'Valencia';
}
