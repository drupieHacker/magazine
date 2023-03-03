import { Component,OnInit } from '@angular/core';
import {Article1} from '../news';
import {Article2} from '../news';
import {Article3} from '../news';
import {Article4} from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
 article1:Article1={
    name:'UN NARCISO PARA TI…',
    date:'Por: Carmelina Rodríguez Butrón.',
    text:'¡Y no, no me refiero a las flores, sino a aquellos con trastorno de personalidad!'
  }
  article2:Article2={
    name:'Las redes sociales,el alimento de un narcisista.',
    date:'Por Carolina García Pérez ',
    text:'Las redes sociales constituyen una parte importante de su existencia.'
  }
  article3:Article3={
    name:'¿Qué es la computación?',
    date:'20 De Enero Del 2023',
    text:'Las ciencias de la computación o ciencias de la informática son las ciencias formales que abarcan las bases teóricas de la información y la computación, así como su aplicación en los sistemas informáticos.​​​'
  }
  article4:Article4={
    name:'¿Qué es la robotica?',
    date:'17 De Enero Del 2023',
    text:'La robótica es un componente de la inteligencia artificial, y como ciencia, es la que estudia el diseño y construcción de máquinas capaces de desempeñar las tareas del ser humano mediante procesos mecanizados y programados'
  }


  constructor(){


}
ngOnInit() {
  
}
}
