import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {

  @Input() data :any;

  constructor() { }

  ngOnInit() {
  }

}
