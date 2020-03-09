import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-review-upload-app',
  templateUrl: './get-review-upload-app.component.html',
  styleUrls: ['./get-review-upload-app.component.scss']
})
export class GetReviewUploadAppComponent implements OnInit {
  @Input() appsToBeReview;
  constructor() { }

  ngOnInit() {
  }

}
