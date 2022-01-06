import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  //Temporal
  nombreApellidoPatern: string= '([a-zA-Z]+) ([a-zA-Z])';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group ({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPatern) ]  ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern) ]  ]

  })



  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
    })

  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
  } 

  submitForms(){

    this.miFormulario.markAllAsTouched();

  }

}
