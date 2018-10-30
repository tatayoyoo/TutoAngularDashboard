import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform
{
  transform(value: string, args?: string[]): any
  {
    return value.replace(/\b\w/g, foo => foo.toUpperCase());
  }

}
