import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginFormValidation } from './custom.validation';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})

export class LoginPopupComponent implements OnInit {
  
  signInEndPointUrl = "/api/auth/signin";
  isErrorOccured: boolean = false;
 
  constructor( private loginForm: FormBuilder, private _affiliate_list_api_url: AffiliateService ) {}

  form = this.loginForm.group({
    "email": [ "", [
        Validators.required,
        Validators.email 
      ]
    ],
    "password": [ "", [
        Validators.required,
        Validators.minLength(8),
      ]
    ]
  });

  ngOnInit(){}

  // get email() {
  //   return this.form.get('email');
  // }

  // get password() {
  //   return this.form.get('password');
  // }

  submitLoginForm(){

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
    this._affiliate_list_api_url.addLoader();
    this.isErrorOccured = false;
    this.postApp( inputFieldJson );

  }

  postApp( inputFieldJson: any ){
    this._affiliate_list_api_url.callPostApi( this.signInEndPointUrl, inputFieldJson )
    .subscribe( resp => {
      this._affiliate_list_api_url.removeLoader();
      if( !!resp && !!resp["token"] ){
        localStorage["token"] = resp["token"];
        window.location.href = "/";
      }
    }, error => {
      this._affiliate_list_api_url.removeLoader();
      this.isErrorOccured = true;
      this.hideErrorMessage();
      error = error;
    });
  }

  hideErrorMessage(){
    setTimeout( () => {
      this.isErrorOccured = false;
    }, 5000);
  }

}
