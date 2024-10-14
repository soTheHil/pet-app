import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../../app.routes';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css'
})
export class PetDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute, private petService: PetService) {}
  
  petId: number = 0;

  pet: Pet = {id: 0, name: '', breed: '', age: '', location: '',
    gender: '', size: '', contact: '', address: '', description: '', image: '' }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.petId = +params['id']
    })
    this.petService.findPet(this.petId).subscribe(
      data => {
        if (data) this.pet = data
      }
    )
  }

  
}
