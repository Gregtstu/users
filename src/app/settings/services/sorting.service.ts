import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  public type: string = 'income';

  constructor() { }

  setType(type:string){
    this.type = type;
  }

  getType(){
    return this.type
  }
}
