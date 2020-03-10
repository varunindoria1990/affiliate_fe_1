import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-analysis-details',
  templateUrl: './app-analysis-details.component.html',
  styleUrls: ['./app-analysis-details.component.scss']
})
export class AppAnalysisDetailsComponent implements OnInit {

  constructor() { }  

  reviewsList: any = [
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    },
    {
      name: 'Amit Sharma',
      average_rating: '4.5',
      comment:  'Good App!! Nice experience and user friendly.'
    }
  ];

  downloadDetails: any = {
    number_of_downloads: 45,
    average_rating: '3.4',
    rating_list: [
      { 1: 43 },
      { 2: 45 },
      { 3: 46 },
      { 4: 43 },
      { 5: 43 }
    ]
  };

  barColors: any = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue'
  ]

  barWidth(iterator) {
    let totalRatingCount = 0;
    this.downloadDetails.rating_list.forEach( (element, i) => {
      totalRatingCount += element[i + 1];
    });
    let currentIteratorRating =  this.downloadDetails.rating_list[iterator][iterator + 1];
    const barWidth = (currentIteratorRating/totalRatingCount)*500;
    return barWidth + 'px';
  }

  backgroundColor(iterator) {
    return this.barColors[iterator];
  }

  isFilledStarToBeShown(rating: string, i: number) {
    if( parseInt( rating ) > i ){
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
