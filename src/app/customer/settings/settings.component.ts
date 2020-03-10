import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  settingsList: object = [
    { 
      name: 'Profile setting',
      link: '/customer/view_profile'
    },
    { 
      name: 'Track Payment',
      link: '/customer/track_payments'
    },
    { 
      name: 'Avail Subscription',
      link: '/customer/view_profile'
    },
    // { 
    //   name: 'Notification Setting',
    //   link: '/customer/view_profile'
    // },
    { 
      name: 'Invite Friends',
      link: '/customer/view_profile'
    },
    { 
      name: 'Help and Support',
      link: '/customer/view_profile'
    }
  ];

  ngOnInit() {
  }

}
