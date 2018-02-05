import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bibleFilter'
})
export class BibleFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    var answer: any[] = [];

    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter(values => {
      for (let i in values) {
        if (values[i]["name"]) {
          answer.push(values[i]["name"].toString().toLowerCase());
        }
      }
      console.log("ANSWER: " + answer);
      console.log(answer.includes(searchText));
      return answer.includes(searchText);
    });
  }

}
