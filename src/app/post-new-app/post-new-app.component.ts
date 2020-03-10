import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AffiliateService } from '../affiliate.service';

@Component({
  selector: 'app-post-new-app',
  templateUrl: './post-new-app.component.html',
  styleUrls: ['./post-new-app.component.scss']
})
export class PostNewAppComponent implements OnInit {

  appListApiUrl = "/api/postApp";

  constructor( private postAppForm: FormBuilder, private _affiliate_list_api_url: AffiliateService ) { } 

  form = this.postAppForm.group({
    "name": [ "", [
        Validators.required
      ]
    ],
    "android_url": [ "", [
        Validators.required
      ]
    ],
    "ios_url": [ "", [
        Validators.required
      ]
    ],
    "version": [ "", [
        Validators.required
      ]
    ],
    "app_logo": [ "", [
        Validators.required
      ]
    ],
    "owner": [ "", [
        Validators.required
      ]
    ],
    "phone": [ "", [
        Validators.required
      ]
    ],
    "company_address": [ "", [
        Validators.required
      ]
    ],
    "target_age": [ "", [
        Validators.required
      ]
    ],
    "target_user": [ "", [
        Validators.required
      ]
    ]
  });

  ngOnInit() {
  }

  appRegistration(  ){
    var iterator,
        inputFieldJson,
        key,
        value,
        numberOfInputFields;

    numberOfInputFields = document.querySelectorAll("#postAppInnerContainer .inputField").length;
    inputFieldJson = {};

    for( iterator = 0; iterator < numberOfInputFields; iterator++ ){
      key = document.querySelectorAll("#postAppInnerContainer .inputField")[iterator]["name"];
      value = document.querySelectorAll("#postAppInnerContainer .inputField")[iterator]["value"];
      if( !( !!key && !!value ) ){
        return;
      }
      if( !!key && !!value ){
        inputFieldJson[ key ] = value;
      }
    }
    this._affiliate_list_api_url.addLoader();
    this.postApp( inputFieldJson );
  }

  postApp( inputFieldJson: any ){
    this._affiliate_list_api_url.callPostApi( this.appListApiUrl, inputFieldJson )
    .subscribe( resp => {
      if( !!resp ){
        this._affiliate_list_api_url.removeLoader();
        console.log( resp );
        window.location.href = "/apps";
      }
    }, error => {
      this._affiliate_list_api_url.removeLoader();
      error = error;
    });
  }

}
