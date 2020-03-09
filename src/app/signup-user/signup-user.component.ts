import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss']
})
export class SignupUserComponent implements OnInit {

  constructor(private _affiliate_list_api_url: AffiliateService, private signupForm: FormBuilder) { }

  form = this.signupForm.group({
    "name": [ "", [
        Validators.required
      ]
    ],
    "email": [ "", [
        Validators.required,
        Validators.email
      ]
    ],
    "profession": [ "Developer", [
        Validators.required
      ]
    ],
    "age": [ "", [
        Validators.required
      ]
    ],
    "password": [ "", [
        Validators.required
      ]
    ]

  });

  signInApiUrl = "/api/auth/signup";
  isErrorOccured: boolean = false;

  ngOnInit() {
    
  }

  submitSignUpUser(){
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
    this.postApp( inputFieldJson );
    this._affiliate_list_api_url.addLoader();
  }

  postApp( inputFieldJson: any ){
    this._affiliate_list_api_url.callPostApi( this.signInApiUrl, inputFieldJson )
    .subscribe( resp => {
      if( !!resp && !!resp["token"] ){
        localStorage["token"] = resp["token"];
        window.location.href = "/user_home";
        this._affiliate_list_api_url.removeLoader();
      }
    }, error => {
      error = error;
      this._affiliate_list_api_url.removeLoader();
      this.isErrorOccured = true;
      this.hideErrorMessage();
    });
  }

  hideErrorMessage(){
    setTimeout( () => {
      this.isErrorOccured = false;
    }, 5000);
  }

}
