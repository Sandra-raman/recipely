import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(allRecipes: any[], searchKey: string): any[] {
    if (!allRecipes || !searchKey) {
      return allRecipes;
    }
    return allRecipes.filter((item: any) =>
      item.name.toLowerCase().trim().includes(searchKey.toLowerCase().trim())
    );
  }
}
