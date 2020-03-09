import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  subscriptionList: any = [
    { subscription_id: 1, subscription_amount: 334, subscription_date: "23-04-2019", subscription_time: "02:23" },
    { subscription_id: 1, subscription_amount: 334, subscription_date: "23-04-2019", subscription_time: "02:23" },
    { subscription_id: 1, subscription_amount: 334, subscription_date: "23-04-2019", subscription_time: "02:23" },
    { subscription_id: 1, subscription_amount: 334, subscription_date: "23-04-2019", subscription_time: "02:23" }
  ];
  reviewsList: any = [
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" },
    { review_id: 1, review_amount: 23, review_date: "12-03-2019", review_time: "12:33", review_comment: "Nice App!!" }
  ];

  ngOnInit() {
  }

}
