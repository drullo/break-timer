import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(num: number): string {
    return num.toString().length === 1 ?
      '0' + num.toString() :
      num.toString();
  }

}
