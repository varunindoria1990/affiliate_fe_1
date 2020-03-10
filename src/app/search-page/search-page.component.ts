import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor( private _affiliate_list_api_url: AffiliateService ) { }
  appListApiUrl = "/api/getApps";
  queryString: String = "";
  completeAppListData: any;
  title = "Your App List";

  ngOnInit() {
    this._affiliate_list_api_url.searchQuery
    .subscribe( ( data: any ) => {
      this.callAppList( data );
    });
  }
  clearSearchField(){
    ( document.querySelector("#searchFieldsContainer input") as HTMLInputElement ).value = "";
  }
  searchApp(){
    this._affiliate_list_api_url.addLoader();
    this.queryString = ( document.getElementById("search-field") as HTMLInputElement ).value.trim();
    this.callAppList( this.queryString );
  }
  callAppList( queryString ){
    
    var appListApiUrlWithQueryString = ( !!queryString )? (this.appListApiUrl + "?query=" + queryString): (this.appListApiUrl);
    this._affiliate_list_api_url.callGetApi( appListApiUrlWithQueryString )
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
