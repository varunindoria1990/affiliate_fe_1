import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smalldevice-header',
  templateUrl: './smalldevice-header.component.html',
  styleUrls: ['./smalldevice-header.component.scss']
})
export class SmalldeviceHeaderComponent implements OnInit {

  @Input() categoryList: any;
  isSearchPage: boolean = false;

  constructor( private router: Router ) { 
    router.events.subscribe( (val)=>{
      this.checkSearchPage();
    });
  }

  ngOnInit() {
    
  }

  checkSearchPage(){    
    this.isSearchPage = ( !!window.location.pathname && (window.location.pathname== '/search') )? true: false;
  }

  appSearch(){
    this.router.navigate(['/search']);
  }

  toggleSideOverlayPopup(){    
    if( ( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.contains("d-none") ){
      ( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.remove("d-none");
    } else {
      ( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.add("d-none");
    }    
  }

  openCategoriesContainer(){
    ( document.getElementsByClassName("category-list-smalldevice-container")[0] as HTMLElement ).classList.remove("d-none");
    ( document.getElementById("navigationOverlayPopup") as HTMLElement ).classList.add("d-none");
  }

  closeCategoriesContainer(){
    ( document.getElementsByClassName("category-list-smalldevice-container")[0] as HTMLElement ).classList.add("d-none");
  }

}
