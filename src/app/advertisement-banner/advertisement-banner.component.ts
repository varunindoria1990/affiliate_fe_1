import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement-banner',
  templateUrl: './advertisement-banner.component.html',
  styleUrls: ['./advertisement-banner.component.scss']
})
export class AdvertisementBannerComponent implements OnInit {

  bannerList : any = [
    { 
      url: "https://cdn1.workadvantage.in/images/img/image/707608/171ed5e1eb.jpg",
      name: "Diwali Advertisement"
    },
    { 
      url: "https://cdn3.workadvantage.in/images/img/image/709788/62ffa998a2.jpg",
      name: "Facebook"
    },
    { 
      url: "https://cdn0.workadvantage.in/images/img/image/627872/9fa618a6e1.jpg",
      name: "Twitter"
    },
    { 
      url: "https://cdn0.workadvantage.in/images/img/image/654281/1d9b2c4833.jpg",
      name: "Twitter"
    },
    { 
      url: "https://cdn2.workadvantage.in/images/img/image/657118/4587bec678.jpg",
      name: "Twitter"
    },
    { 
      url: "https://cdn2.workadvantage.in/images/img/image/709566/4988308581.jpg",
      name: "Twitter"
    }
    
  ];

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor() { }

  ngOnInit() {
  }

}
