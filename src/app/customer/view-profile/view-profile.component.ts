import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  constructor() { }

  profileDetails: object = [
    {
      identifier: 'Name',
      value: 'Varun Indoria'
    },
    {
      identifier: 'Phone',
      value: '9958567473'
    },
    {
      identifier: 'Gender',
      value: 'Male'
    },
    {
      identifier: 'Email',
      value: 'varun@gmail.com'
    }
  ];

  ngOnInit() {
  }

}
