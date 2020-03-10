import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apps-list',
  // selector: 'app-apps-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @Input() data: any;
  @Input() title: String;
  
  constructor() { }

  ngOnInit() {
  }

}
