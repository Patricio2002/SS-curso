import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre: string = 'Juan'
  genero: string = 'masculino';  
  //i18nSelect
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural

  clientes: string[] = ["María", 'Pedro', 'Juan', 'Carlos', 'Valeria']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  
  cambiarCliente(){
    this.nombre = 'Melissa',
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  persona ={
    nombre: 'Patricio',
    edad: '19',
    direccion: 'CDMX, México'
  }

  //JsonPipe
  heroes =[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3...1000

  valorPromesa = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
      resolve('Tenemos data de Promesa')
    }, 3500)

  })

}
