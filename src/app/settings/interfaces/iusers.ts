import {IName} from "./iname";

export interface IUsers {
  id:string;
  amount:string;
  type:string;
  name:IName;
  first:string;
  last:string;
  company:string;
  email:string;
  phone:string;
  address:string;
}
