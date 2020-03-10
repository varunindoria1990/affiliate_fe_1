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
  completeAppListData: any;
  title = "Your App List";

  ngOnInit() {
    this._affiliate_list_api_url.addLoader();
    this.callAppList();
  }
  callAppList(){
    this._affiliate_list_api_url.callGetApi( this.appListApiUrl )
    .subscribe( resp => {
      this._affiliate_list_api_url.removeLoader();
      if( !!resp && !!resp["body"] ){
        this.completeAppListData = resp["body"];
      }
    }, error => {
      this._affiliate_list_api_url.removeLoader();
      error = error;
    });
  }
}
