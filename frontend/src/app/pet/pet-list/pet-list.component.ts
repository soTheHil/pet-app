import { Component, OnInit, HostBinding } from '@angular/core';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'pet-list',
  standalone: true,
  imports: [PetCardComponent],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent implements OnInit{
  constructor(private petService: PetService) {}

  @HostBinding('class') cl : string = 'row';

  ngOnInit(): void {
    this.petService.getAllPets().subscribe(
      data => {
        this.pets = data
        console.log(data)
      }
    )
  }

  pets: Pet[] = []

  
}
