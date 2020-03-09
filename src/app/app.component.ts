import { Component, OnInit } from '@angular/core';
import { AffiliateService } from './affiliate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // title = 'varunProject';
  zone_list: [] = [];
  serviceUrl = 'https://secure.workadvantage.in/api/v1/zones';

  constructor(
    private _affiliate: AffiliateService
  ) { }

  ngAfterViewInit(){
  }

}
