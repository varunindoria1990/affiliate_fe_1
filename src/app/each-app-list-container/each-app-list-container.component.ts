import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-app-list-container',
  templateUrl: './each-app-list-container.component.html',
  styleUrls: ['./each-app-list-container.component.scss']
})
export class EachAppListContainerComponent implements OnInit {
  
  @Input() appsToBeReview;

  constructor() { }

  ngOnInit() {
  }

}
