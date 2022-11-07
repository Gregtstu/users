import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import {HttpClientModule} from "@angular/common/http";
import { SortingTypePipe } from './settings/pipes/sorting-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    SummaryPageComponent,
    SortingTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
