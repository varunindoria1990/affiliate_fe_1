import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder } from '@angular/forms';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(private _affiliate_list_api_url: AffiliateService) { }

  // Base_Url = "http://localhost:5000";
  signInApiUrl = "/api/auth/signup";

  ngOnInit() {
  }

  submitSignUp(){
    var iterator,
        numberOfInputFields,
        inputFieldJson,
        key,
        value,
        inputFieldJson;

        inputFieldJson = {}

    numberOfInputFields = document.querySelectorAll("#signUpAppInnerContainer .inputField").length;
    for( iterator = 0; iterator < numberOfInputFields; iterator++ ){
      if( !!document.querySelectorAll("#signUpAppInnerContainer .inputField")[iterator] ){
        key = document.querySelectorAll("#signUpAppInnerContainer .inputField")[iterator]["name"];
        value = document.querySelectorAll("#signUpAppInnerContainer .inputField")[iterator]["value"];

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
