import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  public flagContainer:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
