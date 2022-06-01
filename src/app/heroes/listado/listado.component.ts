import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string [] = ['A','B','C','D']; 
  heroeBorrado:string ='';

  borrarHeroe(){
    // this.heroes.shift();

    this.heroeBorrado = this.heroes.shift() || ''; 
     

    
  }

}
