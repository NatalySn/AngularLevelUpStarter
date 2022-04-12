import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyNum'
})
export class CurrencyNumPipe implements PipeTransform {

  transform(value: number, lacale:string):string {
    return value.toLocaleString(lacale);
  }

}
