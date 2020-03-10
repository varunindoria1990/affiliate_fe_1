import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private elementRef: ElementRef, private router: Router, private _affiliate_details_api_url: AffiliateService ) { }

  ngOnInit() {
    this.checkLoggedLoggedState();

    (document.querySelector('body') as HTMLElement)
                                 .addEventListener('click', this.bodyClick.bind(this));

  }
  
  categoryList: any = [
    {
      "key": [ "Daydream", "Art & Design", "Auto & Vehicles", "Beauty", "Book & Reference", "Business", "Comics", "Communication", "Dating", "Education", "Entertainment", "Events", "Finance", "Food & Drink", "Health & Fitness" ]
    },
    {
      "key": [ "Games", "Action", "Adventure", "Arcade", "Board", "Card", "Casino", "Casual", "Educational", "Music", "Puzzle", "Racing", "Role Playing", "Simulation", "Sports" ]
    },
    {
      "key": [ "Family", "Age 5 & Under", "Ages 6-8", "Ages 9 & Up", "Action & Adventure", "Brain Games", "Creativity", "Education", "Music & Video", "Pretend Play" ]
    }
  ];

  checkLoggedLoggedState(){
    if( !!localStorage["token"] ){
      // document.querySelector(".logged-out-state").classList.add("d-none");
      // document.querySelector(".logged-in-state").classList.remove("d-none");

      document.querySelectorAll(".logged-out-state").forEach( function( eachElement ){
        eachElement.classList.add("d-none");
      });
      document.querySelectorAll(".logged-in-state").forEach( function( eachElement ){
        eachElement.classList.remove("d-none");
      });

    } else {
      // document.querySelector(".logged-out-state").classList.remove("d-none");
      // document.querySelector(".logged-in-state").classList.add("d-none");

      document.querySelectorAll(".logged-out-state").forEach( function( eachElement ){
        eachElement.classList.remove("d-none");
      });
      document.querySelectorAll(".logged-in-state").forEach( function( eachElement ){
        eachElement.classList.add("d-none");
      });

    }
  }

  signOutUser(){
    if( !!localStorage["token"] ){
      delete localStorage["token"];
      window.location.href = "/";
    }
  }

  

  

  

  // (document: any).addEventListener( "click", ( event ) =>{
    
  // });

  ngAfterViewInit() {
    
  }

  submitAppSearch(){
    if( !!document.getElementById("search-field") && !!( document.getElementById("search-field") as HTMLInputElement ).value.trim() ){
      this.appSearch();
    }
  }

  appSearch(){
    var searchText;
    this.router.navigate(['/search']);
    searchText = (document.getElementById("search-field") as HTMLInputElement ).value;
    this._affiliate_details_api_url.callSearchApiFromSearchComponent( searchText );
  }

  bodyClick( event ){
    if( !document.querySelector( ".popupContainer" ).contains( event.target ) && !( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.contains("d-none") && ( event.target.compareDocumentPosition( document.querySelector("#sidebarButton") ) !== 0 ) ){
      ( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.add("d-none");
    }
  }

}
