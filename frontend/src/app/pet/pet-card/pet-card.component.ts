import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pet } from '../../model/pet';

@Component({
  selector: 'pet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css'
})
export class PetCardComponent {
   @Input() pet: Pet = {id: 0, name: '', breed: '', age: '', location: '',
     gender: '', size: '', contact: '', address: '', description: '', image: '' };
}
