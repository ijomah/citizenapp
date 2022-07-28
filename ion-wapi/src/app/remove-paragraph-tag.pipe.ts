import { Pipe, PipeTransform } from '@angular/core';
import { HomePage } from './home/home.page';

@Pipe({
  name: 'removeParagraphTag'
})
export class RemoveParagraphTagPipe implements PipeTransform {

  transform(value: string, character: string): string {
    console.log(value);
    return value.replace('>', ' ');
  }

}
