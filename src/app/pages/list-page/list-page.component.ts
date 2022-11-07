import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../settings/services/api.service";
import {IUsers} from "../../settings/interfaces/iusers";
import { Router} from "@angular/router";
import {SortingService} from "../../settings/services/sorting.service";



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public users: IUsers[] = [];
  public type: string = '';

  constructor(
    private apiServ: ApiService,
    private router: Router,
    private sortingServ:SortingService,
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.type = this.sortingServ.getType();
  }

  getAllUsers(): void {
    this.apiServ.getAllUsers()
      .subscribe({
        next: (res) => {
          this.users = res;
          console.log(this.users)
        },
        error: (err) => {
          alert("Список пуст!");
        }
      })
  }

  setType(str: string) {
    this.type = str;
  }
}
