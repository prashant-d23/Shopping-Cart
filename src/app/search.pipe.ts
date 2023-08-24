import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchTerm:string):any[] {
    if(!searchTerm){
      return value;
    }
    searchTerm = searchTerm.toLowerCase();
    return value.filter((item:any) =>item.title.toLowerCase().includes(searchTerm));
  }

}
