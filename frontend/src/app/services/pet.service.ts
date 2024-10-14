import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAllPets() : Observable<Pet[]> {
    return this.http.get<Array<Pet>>('data/pets.json').pipe(
      map(data => {
        return data
      })
    )
  }

  findPet(id: number): Observable<Pet | undefined>{
    return this.http.get<Pet[]>('data/pets.json').pipe(
      map(data => {
        return data.find(p => p.id === id)
      })
    )
  }
}
