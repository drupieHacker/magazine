import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciertoComponent } from './concierto/concierto.component';
const routes: Routes = [
  {
    path:'conciertos',
    component:ConciertoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
