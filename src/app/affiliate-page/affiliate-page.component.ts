import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-affiliate-page',
  templateUrl: './affiliate-page.component.html',
  styleUrls: ['./affiliate-page.component.scss']
})
export class AffiliatePageComponent implements OnInit {

  recommendedApps: any = [
    { "id": 1, "name": "whatsApp", "image": "https://ksassets.timeincuk.net/wp/uploads/sites/54/2014/02/whatsapp-logo-2.jpg" },
    { "id": 2, "name": "FaceBook", "image": "https://code.fb.com/wp-content/uploads/2011/05/f.png" },
    { "id": 3, "name": "Instagram", "image": "https://cdn-images-1.medium.com/max/1600/1*V7GYJQ_4lykfDzOf9q17eA.jpeg" },
    { "id": 4, "name": "Twitter", "image": "https://img.etimg.com/thumb/msid-67689988,width-643,imgsize-70881,resizemode-4/twittersized.jpg" },
    { "id": 5, "name": "Gmail", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBmOAsT7vK13zeBNT2psL4eh73IFJWkxvwBYt-4gpkS3f9G2i" },
    { "id": 6, "name": "Google", "image": "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { "id": 7, "name": "Yahoo", "image": "https://elayata.com/wp-content/uploads/2017/10/yahoo-logo-png-transparent-background.png" }
  ];
  newApps: any = [
    { "id": 1, "name": "whatsApp 1", "image": "https://ksassets.timeincuk.net/wp/uploads/sites/54/2014/02/whatsapp-logo-2.jpg" },
    { "id": 2, "name": "FaceBook 2", "image": "https://code.fb.com/wp-content/uploads/2011/05/f.png" },
    { "id": 3, "name": "Instagram 3", "image": "https://cdn-images-1.medium.com/max/1600/1*V7GYJQ_4lykfDzOf9q17eA.jpeg" },
    { "id": 4, "name": "Twitter 4", "image": "https://img.etimg.com/thumb/msid-67689988,width-643,imgsize-70881,resizemode-4/twittersized.jpg" },
    { "id": 5, "name": "Gmail 5", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBmOAsT7vK13zeBNT2psL4eh73IFJWkxvwBYt-4gpkS3f9G2i" },
    { "id": 6, "name": "Google 6", "image": "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { "id": 7, "name": "Yahoo 7", "image": "https://elayata.com/wp-content/uploads/2017/10/yahoo-logo-png-transparent-background.png" }
  ];
  gamesApps: any = [
    { "id": 1, "name": "whatsApp 1", "image": "https://ksassets.timeincuk.net/wp/uploads/sites/54/2014/02/whatsapp-logo-2.jpg" },
    { "id": 2, "name": "FaceBook 2", "image": "https://code.fb.com/wp-content/uploads/2011/05/f.png" },
    { "id": 3, "name": "Instagram 3", "image": "https://cdn-images-1.medium.com/max/1600/1*V7GYJQ_4lykfDzOf9q17eA.jpeg" },
    { "id": 4, "name": "Twitter 4", "image": "https://img.etimg.com/thumb/msid-67689988,width-643,imgsize-70881,resizemode-4/twittersized.jpg" },
    { "id": 5, "name": "Gmail 5", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBmOAsT7vK13zeBNT2psL4eh73IFJWkxvwBYt-4gpkS3f9G2i" },
    { "id": 6, "name": "Google 6", "image": "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
    { "id": 7, "name": "Yahoo 7", "image": "https://elayata.com/wp-content/uploads/2017/10/yahoo-logo-png-transparent-background.png" }
  ];
  effectiveLessConsumingApp: any = [
    { "id": 1, "name": "Modi", "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/PM-Modi-PTI.jpeg?vzcck9y4X1XaTlgXtKNrvTwdFZYU8ygc" },
    { "id": 2, "name": "Sachin Tendulkar", "image": "https://www.filmibeat.com/img/220x100x275/popcorn/profile_photos/sachin-tendulkar-20160824144415-36871.jpg" },
    { "id": 3, "name": "Virat Kohli", "image": "http://cricketforindia.com/PlayerProfiles/images/Virat/virat3.jpg" }
  ];

  sliderArray: any = [
    {
      name: "Recommended Apps",
      data: this.recommendedApps
    },
    {
      name: "New Apps",
      data: this.newApps
    },
    {
      name: "Games",
      data: this.gamesApps
    },
    {
      name: "Effective and less space consuming apps",
      data: this.effectiveLessConsumingApp
    }
  ];

  constructor() { }

  ngOnInit() {

  }

}
