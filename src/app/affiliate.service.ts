import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams }  from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService {

  serviceUrl: any;

  constructor( private http: HttpClient ) { }

  // @Output() searchApi = new EventEmitter<String>();
  @Output() searchQuery = new EventEmitter();

  callGetApi( endPoint: string ) {

    var authToken;
    var httpOptions;
    if( !!localStorage["token"] ){
      authToken = localStorage["token"];
      httpOptions = {
       headers: new HttpHeaders({
         'authorization': authToken,
         'Content-Type': 'application/json'
       }),
       observe: 'response' as 'body'
     };

     this.serviceUrl = environment.base_url + endPoint;
     return this.http.get( this.serviceUrl, httpOptions );

   } else {

     this.serviceUrl = environment.base_url + endPoint;
     return this.http.get( this.serviceUrl );

   }



  }

  callPostApi( endPoint: string, inputFieldJson: any, isFormattingRequired? : boolean ) {

    var authToken;
    var httpOptions;
    if( !!localStorage["token"] ){

      authToken = localStorage["token"];

      httpOptions = {
         headers: new HttpHeaders({
           'authorization': authToken,
           'Content-Type': 'application/json'
         }),
         observe: 'response' as 'body'
      };

      let body = new HttpParams();

      if( !isFormattingRequired ){
        body = inputFieldJson;// body.set( eachInputElement, inputFieldJson[ eachInputElement ] );
      } else {
        for( var eachInputElement in inputFieldJson ){
          body = body.set( eachInputElement, inputFieldJson[ eachInputElement ] );
        }
      }
      var stringBody = JSON.stringify( body );

      this.serviceUrl = environment.base_url + endPoint;      
      return this.http.post( this.serviceUrl, stringBody , httpOptions );

    } else {

      // httpOptions = {
      //    headers: new HttpHeaders({
      //      'Content-Type': 'application/json'
      //    }),
      //    observe: 'response' as 'body'
      // };

      // let body = new HttpParams();

      // for( var eachInputElement in inputFieldJson ){
      //   body = body.set( eachInputElement, inputFieldJson[ eachInputElement ] );
      // }
      // var stringBody = JSON.stringify( body );

      stringBody = inputFieldJson;

      this.serviceUrl = environment.base_url + endPoint;
      return this.http.post( this.serviceUrl, stringBody );

    }

  }

  addLoader(){
    document.getElementById("loader").classList.remove("d-none");
  }

  removeLoader(){
    document.getElementById("loader").classList.add("d-none");
  }

  callSearchApiFromSearchComponent( searchText ){
    this.searchQuery.emit( searchText );
  }

}
