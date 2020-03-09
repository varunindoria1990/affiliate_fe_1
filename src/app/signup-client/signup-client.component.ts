import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.scss']
})
export class SignupClientComponent implements OnInit {  

  signInApiUrl = "/api/auth/signup";
  isErrorOccured: boolean = false;

  constructor( private signUpForm: FormBuilder , private _affiliate_list_api_url: AffiliateService) { }

  form = this.signUpForm.group({
    "name": [ "", [
        Validators.required
      ]
    ],
    "application_name": [ "", [
        Validators.required
      ]
    ],
    "email": [ "", [
        Validators.required,
        Validators.email
      ]
    ],
    "phone": [ "", [
        Validators.required
      ]
    ],
    "application_link": [ "", [
      Validators.required
      ]
    ],
    "app_store": [ "App store", [
      Validators.required
      ]
    ],
    "password": [ "", [
      Validators.required
      ]
    ]
  });

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
    this.isErrorOccured = false;
    this._affiliate_list_api_url.addLoader();
    this.postApp( inputFieldJson );
  }

  postApp( inputFieldJson: any ){
    this._affiliate_list_api_url.callPostApi( this.signInApiUrl, inputFieldJson )
    .subscribe( resp => {
      if( !!resp && !!resp["token"] ){
        localStorage["token"] = resp["token"];
        window.location.href = "/";
        this._affiliate_list_api_url.removeLoader();
      }
    }, error => {
      error = error;
      this.isErrorOccured = true;
      this._affiliate_list_api_url.removeLoader();
    });
  }

  hideErrorMessage(){
    setTimeout( () => {
      this.isErrorOccured = false;
    }, 5000);
  }

}
