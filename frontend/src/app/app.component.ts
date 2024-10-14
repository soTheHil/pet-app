import { Component } from '@angular/core';
import { PetCardComponent } from './pet/pet-card/pet-card.component';
import { RouterOutlet } from '@angular/router';
import { PetListComponent } from "./pet/pet-list/pet-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PetCardComponent, PetListComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
