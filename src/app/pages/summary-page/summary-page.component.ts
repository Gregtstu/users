import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../settings/services/api.service";
import {IUsers} from "../../settings/interfaces/iusers";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  public flagContainer:boolean = false;
  public users:IUsers[] = [];

  constructor(private apiServ:ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.apiServ.getAllUsers()
      .subscribe({
        next:(res) => {
          this.users = res;
        },
        error: (err) => {
          alert("Список пуст!");
    }
      })
  }



}
