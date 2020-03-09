import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-earn-money',
  templateUrl: './review-earn-money.component.html',
  styleUrls: ['./review-earn-money.component.scss']
})
export class ReviewEarnMoneyComponent implements OnInit {

  @Input() appsToBeReview;
  
  constructor() { }

  ngOnInit() {
  }

}
