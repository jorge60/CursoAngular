
import { Component } from "@angular/core"

@Component({
    selector: 'app-contador',
    template:  `
    <h1>{{titulo}}</h1>

<h2>La Base es <strong> {{base}} </strong></h2>

<button (click)="acumular(base)"> +{{this.base}} </button>

<span>{{numero}}</span>

<button (click)="acumular(-base)"> -{{this.base}} </button>

`
})
    

export class ContadorComponent{
  
    titulo: string = 'Contador';
    numero: number = 220;
    base: number = 5;

    acumular( valor: number){
        this.numero += valor;
  }
}

