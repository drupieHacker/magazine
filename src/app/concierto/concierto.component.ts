import { Component,OnInit } from '@angular/core';
import {Concierto} from '../concierto';

@Component({
  selector: 'app-concierto',
  templateUrl: './concierto.component.html',
  styleUrls: ['./concierto.component.css']
})
export class ConciertoComponent implements OnInit {
  concierto: Concierto = {
    id: 1,
    name: 'Conoce lugares interesantes en la CDMX',
    fecha: '27 de Febrero del 2023',
    text:'En la Ciudad De México hay miles de lugares interesantes que podemos visitar, puede ser en compañia, donde podemos disfrutar de comida, paisajes, exposiciones, talleres al aire libre, desfiles entre muchas otras actividades.'
  };
constructor(){

}
ngOnInit(){

}
}