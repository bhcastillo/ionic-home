import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(image: string, folder: string): string {
    const path = '../../../assets/images';
    return `${path}/${folder}/${image}.png`;
  }

}
