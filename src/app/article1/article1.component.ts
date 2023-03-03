import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article1',
  templateUrl: './article1.component.html',
  styleUrls: ['./article1.component.css']
})
export class Article1Component implements OnInit{
constructor(private router:Router){

}
ngOnInit() {
  
}
volverHome(){
this.router.navigate(['']);
}
}
