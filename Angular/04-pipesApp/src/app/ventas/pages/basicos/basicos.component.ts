import { Component } from '@angular/core';
import { partition } from 'rxjs';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = "patricio"

  nombreUpper: string = "PATRICIO"

  nombreTitle: string = "PaTRiCio AlfARo"


  fecha: Date = new Date(); //el día de hoy

}
