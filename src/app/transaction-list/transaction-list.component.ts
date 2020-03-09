import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  showTab: boolean = true;
  constructor() { }

  transactionList: any = [
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" },
    { transaction_id: 1, transaction_date: "dd-mm-yyyy", transaction_time: "hh:mm:ss", transaction_amount: 234, transaction_user_name: "Sachin" }
  ];

  selectTab( $event ){
    document.querySelectorAll(".each-tab").forEach( ( eachElement )=>{
      eachElement.classList.remove("selected-tab");
    });
    ( event.target as HTMLElement ).classList.add("selected-tab");
    this.showTab = (this.showTab == true)? false: true;
  }

  ngOnInit() {
  }

}
