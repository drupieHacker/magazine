import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConciertosComponent } from './conciertos/conciertos.component';
import { DeportesComponent } from './deportes/deportes.component';
import { RecorridosComponent } from './recorridos/recorridos.component';
import { Article1Component } from './article1/article1.component';
import { Article2Component } from './article2/article2.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'conciertos',
    component:ConciertosComponent
  },{
    path:'deportes',
    component:DeportesComponent
  },{
    path:'recorridos',
    component:RecorridosComponent
  },{
    path:'article1',
    component:Article1Component
  },{
    path:'article2',
    component:Article2Component
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
