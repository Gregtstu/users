import { Pipe, PipeTransform } from '@angular/core';
import {IUsers} from "../interfaces/iusers";

@Pipe({
  name: 'sortingType'
})
export class SortingTypePipe implements PipeTransform {

  transform(users: IUsers[], type:string): IUsers[] {
    return users.filter(item => item.type == type);
  }

}
