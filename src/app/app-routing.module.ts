import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { FoglalasComponent } from './foglalas/foglalas.component';

const routes: Routes = [
  {path:'hotel', component:HotelComponent},
  {path:'foglalas', component:FoglalasComponent},
  {path:'', component:HotelComponent},
  {path:'**', component:HotelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
