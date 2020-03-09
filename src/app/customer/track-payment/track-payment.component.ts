import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-payment',
  templateUrl: './track-payment.component.html',
  styleUrls: ['./track-payment.component.scss']
})
export class TrackPaymentComponent implements OnInit {

  constructor() { }

  trackPayment: object = [
    {
      app_name: "WhatsApp",
      amount: "12",
      date_of_transaction: "23/04/2018",
      payment_status: "Paid"
    },
    {
      app_name: "Twitter",
      amount: "32",
      date_of_transaction: "22/04/2018",
      payment_status: "Unpaid"
    },
    {
      app_name: "Jugnoo",
      amount: "11",
      date_of_transaction: "26/04/2018",
      payment_status: "Paid"
    },
    {
      app_name: "Uber",
      amount: "16",
      date_of_transaction: "12/04/2018",
      payment_status: "Paid"
    },
    {
      app_name: "Ola",
      amount: "1",
      date_of_transaction: "10/04/2018",
      payment_status: "Unpaid"
    }
  ];

  ngOnInit() {
  }

}
