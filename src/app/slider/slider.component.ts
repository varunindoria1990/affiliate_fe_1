import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() containerName: string;

  @Input() componentIterator: string;

  constructor() { }

  ngOnInit() {
  }

}
