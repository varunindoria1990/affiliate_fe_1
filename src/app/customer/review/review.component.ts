import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  questionList: any = [
    {
      text: 'question',
      options: [
        'question1',
        'question2',
        'question3'
      ]
    },
    {
      text: 'question',
      options: [
        'question1',
        'question2',
        'question3'
      ]
    },
    {
      text: 'question',
      options: [
        'question1',
        'question2',
        'question3'
      ]
    }
  ];

  ratingList = [
    { ratingValue: 1, class: 'fa fa-star-o star cursor-pointer' },
    { ratingValue: 2, class: 'fa fa-star-o star cursor-pointer' },
    { ratingValue: 3, class: 'fa fa-star-o star cursor-pointer' },
    { ratingValue: 4, class: 'fa fa-star-o star cursor-pointer' },
    { ratingValue: 5, class: 'fa fa-star-o star cursor-pointer' }
  ];

  ngOnInit() {
  }

  ratingClick( ratingValue: number ) {
    let iterator: number;
    const numberOfRating: number = this.ratingList.length;
    for( iterator = 0; iterator < numberOfRating; iterator++ ){
      if( iterator < ratingValue ){
        this.ratingList[iterator].class = this.ratingList[iterator].class.replace('fa-star-o', 'fa-star');
      } else {
        this.ratingList[iterator].class = 'fa fa-star-o star cursor-pointer';
      }
    }
  }

}
