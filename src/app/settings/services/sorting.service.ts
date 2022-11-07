import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  public type: string = 'icome';

  constructor() { }

  setType(type:string){
    this.type = type;
  }
}
