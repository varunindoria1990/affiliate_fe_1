import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder } from '@angular/forms';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor(private _affiliate_list_api_url: AffiliateService) { }

  // Base_Url = "http://localhost:5000";
  signInApiUrl = "/api/auth/signin";

  ngOnInit() {
  }

  submitSignIn(){
    var iterator,
        numberOfInputFields,
        inputFieldJson,
        key,
        value,
        inputFieldJson;

        inputFieldJson = {}

    numberOfInputFields = document.querySelectorAll("#signInAppInnerContainer .inputField").length;
    for( iterator = 0; iterator < numberOfInputFields; iterator++ ){
      if( !!document.querySelectorAll("#signInAppInnerContainer .inputField")[iterator] ){
        key = document.querySelectorAll("#signInAppInnerContainer .inputField")[iterator]["name"];
        value = document.querySelectorAll("#signInAppInnerContainer .inputField")[iterator]["value"];

        if( !( !!key && !!value ) ){
          return;
        }

        if( !!key && !!value ){
          inputFieldJson[ key ] = value;
        }

      }
    }

    this.postApp( inputFieldJson );

  }

  postApp( inputFieldJson: any ){
    this._affiliate_list_api_url.callPostApi( this.signInApiUrl, inputFieldJson )
    .subscribe( resp => {
      if( !!resp && !!resp["token"] ){
        localStorage["token"] = resp["token"];
        window.location.href = "/";
      }
    }, error => {
      error = error;
    });
  }

}
