import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-analysis',
  templateUrl: './app-analysis.component.html',
  styleUrls: ['./app-analysis.component.scss']
})
export class AppAnalysisComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  appList: any = [
    { app_id: 1, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 2, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 3, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 4, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 5, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 6, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 7, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" },
    { app_id: 8, app_version: "3.3.4", app_release_date: "23-04-2019", app_name: "Whatsapp" }
  ];

  goToRating( appId: number ) {
    this.router.navigate(['client/app_analysis_details', appId]);
  }

}
