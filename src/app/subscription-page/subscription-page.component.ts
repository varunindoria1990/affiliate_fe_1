import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss']
})
export class SubscriptionPageComponent implements OnInit {

  constructor() { }
  userAccountDetails: any = {
    "walletIcon": "https://camo.githubusercontent.com/a763e5349ff7697d8daf49d02b4372a17e15b45b/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f353833313034342f313435333633382f65363536343661322d343266382d313165332d386162652d3533616631303234666261342e706e67",
    amount: 20
  };
  

  ngOnInit() {
  }

}
