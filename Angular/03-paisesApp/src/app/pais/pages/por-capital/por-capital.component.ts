import { Component,  } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/capital.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string = ''
  hayError: boolean=false;
  capitales:Capital[] =[];


  constructor(private CapitalService: PaisService) { }

  buscar(termino:string){
    this.hayError=false
    this.termino=termino;

  this.CapitalService.buscarCapital(termino)

    .subscribe( capitales =>{

      this.capitales=capitales;

      

    }, (err)=>{
      this.hayError=true
      this.capitales=[]
    })
  }
}
