import { Pipe, PipeTransform,Injectable } from '@angular/core';

@Pipe({
  name: 'emp'
})

@Injectable({
  providedIn : 'root'
})
export class EmpPipe implements PipeTransform {

  transform(value: string,gender : string) {
    if (gender === 'Male') {

      return "Mr " + value;
      
    } else {
      return "Miss " + value;
      
    }
  }

}
