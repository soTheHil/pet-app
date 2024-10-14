import { Routes } from '@angular/router';
import { PetListComponent } from './pet/pet-list/pet-list.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';
export const routes: Routes = [
    {path: 'pet-detail/:id', component: PetDetailComponent},
    {path: '', component: PetListComponent},
    {path: '**', component: PetListComponent}
];
