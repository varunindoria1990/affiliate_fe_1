import { Component, OnInit } from '@angular/core';
import { AffiliateService } from '../affiliate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.scss']
})
export class AppDetailsComponent implements OnInit {

  appId = window.location.pathname.split("app_details/")[1];
  completeAppDetails: any = {};
  numberOfOptions: any = [];

  appDetailsApiUrl = "/api/getApps/" + this.appId;
  postQuestionApiUrl = "/api/postQuestions";

  constructor( private _affiliate_details_api_url: AffiliateService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe( params => {
      this.appId = params.id;
    });
  } 

  ngOnInit() {
    this._affiliate_details_api_url.addLoader();
    this.callApiAppDetails();
  }

  callApiAppDetails(){
    this._affiliate_details_api_url.callGetApi( this.appDetailsApiUrl ).
    subscribe( resp =>{
      this._affiliate_details_api_url.removeLoader();
      this.completeAppDetails = resp["body"];
    }, error => {
      this._affiliate_details_api_url.removeLoader();
      
    });
  }

  addQuestion(){
    document.getElementById("question-to-be-added").classList.remove("d-none");
  }

  addOption( event ){
    this.numberOfOptions.push( 1 );
  }

  removeOption( event ){
    this.numberOfOptions.pop();
  }

  postQuestion(){

    var iterator,
        inputFieldJson,
        optionArray,
        key,
        value,
        questionField,
        descriptionField,
        sendDataWithFormatting,
        numberOfOptionsField;

    numberOfOptionsField = document.querySelectorAll("#option-list .option-field").length;
    inputFieldJson = {};
    optionArray = [];

    questionField = document.getElementById("question-field")["value"];
    descriptionField = document.getElementById("description-field")["value"]

    for( iterator = 0; iterator < numberOfOptionsField; iterator++ ){
      optionArray.push( document.querySelectorAll("#option-list .option-field")[iterator]["value"] );
    }

    inputFieldJson["questions"] = [
      {
        "question": questionField,
        "description": descriptionField,
        "option": optionArray
      }
    ];
    inputFieldJson["appId"] = this.appId;

    sendDataWithFormatting = false;

    this._affiliate_details_api_url.callPostApi( this.postQuestionApiUrl, inputFieldJson, sendDataWithFormatting ).
    subscribe( resp =>{
      // this.completeAppDetails = resp["body"];
      console.log( resp );
      window.location.reload();

    }, error => {
      console.log( error );
    });
  }

}
