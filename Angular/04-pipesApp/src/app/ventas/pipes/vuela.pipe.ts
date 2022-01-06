import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})

export class vuelaPipe implements PipeTransform{
    transform(vuela: boolean):string{
      return  (vuela)? 'vuela' : 'no vuela'; 
    }
}