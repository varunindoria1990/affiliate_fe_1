import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-your-apps',
  templateUrl: './your-apps.component.html',
  styleUrls: ['./your-apps.component.scss']
})
export class YourAppsComponent implements OnInit {

  constructor( private _affiliate_list_api_url: AffiliateService ) { }
  appListApiUrl = "/api/getApps";
  completeAppListData: any = [];
  title = "Your App List";
  appStatusMessage = "";

  ngOnInit() {
    this._affiliate_list_api_url.addLoader();
    this.callAppList();
  }
  callAppList(){
    this._affiliate_list_api_url.callGetApi( this.appListApiUrl )
    .subscribe( resp => {
      this._affiliate_list_api_url.removeLoader();
      if( !!resp && !!resp["body"] && resp["body"] && resp["body"].length ){
        this.completeAppListData = resp["body"];
      } else {
        this.completeAppListData = [];
        this.appStatusMessage = "Please upload your app!!";
      }
    }, error => {
      this._affiliate_list_api_url.removeLoader();
      this.completeAppListData = [];
      this.appStatusMessage = "Something went wrong!!";
    });
  }
}
