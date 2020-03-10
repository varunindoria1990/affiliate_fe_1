import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.component.html',
  styleUrls: ['./help-and-support.component.scss']
})
export class HelpAndSupportComponent implements OnInit {

  constructor( private signUpForm: FormBuilder ) { }

  form = this.signUpForm.group({
    "subject": [ "", [
        Validators.required
      ]
    ],
    "question": [ "", [
        Validators.required
      ]
    ]
  });

  ngOnInit() {
  }

  submitHelpAndSupport() {
    
  }

}
