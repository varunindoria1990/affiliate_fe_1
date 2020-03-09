import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm,  FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor( private editProfileForm: FormBuilder ) { }

  form = this.editProfileForm.group({
    "name": [ "", [
        Validators.required
      ]
    ],
    "phone": [ "", [
        Validators.required
      ]
    ],
    "email": [ "", [
        Validators.required
      ]
    ],
    "current_password": [ "", [
        Validators.required
      ]
    ],
    "new_password": [ "", [
        Validators.required
      ]
    ],
    "confirm_password": [ "", [
        Validators.required
      ]
    ]    
  });

  ngOnInit() {
  }

  editProfile() {
    
  }

}
