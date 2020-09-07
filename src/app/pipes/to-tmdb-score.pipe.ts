import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTmdbScore'
})
export class ToTmdbScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 10;
  }

}
