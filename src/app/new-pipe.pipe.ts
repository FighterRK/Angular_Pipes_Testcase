import { Pipe, PipeTransform,Injectable } from '@angular/core';

@Pipe({
  name: 'newPipe'
})
@Injectable({
  providedIn : 'root'
})

export class NewPipePipe implements PipeTransform {

  transform(value: any) {

   

    return  value + ' Hello All';
  }

}
