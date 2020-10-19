import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  userForm: FormGroup;
  sucessMessage: string;
  formInvalidFlag: boolean = false;


  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    })
  }

  //Getter function to access reactive form value
  get firstName(): AbstractControl { return this.userForm.get('firstName'); }
  get lastName(): AbstractControl { return this.userForm.get('lastName'); }
  get street(): AbstractControl { return this.userForm.get('address.street'); }
  get state(): AbstractControl { return this.userForm.get('address.state'); }
  get city(): AbstractControl { return this.userForm.get('address.city'); }
  get zip(): AbstractControl { return this.userForm.get('address.zip'); }


  //Save
  onSave() {
    console.log(this.userForm)
    if (!this.userForm.invalid) {
      console.log('ReactiveForm', this.userForm.value);
      this.onClear();
      this.sucessMessage = "Form submitted."
    }
    else this.formInvalidFlag = true;
  }

  //Save
  onClear() {
   this.userForm.reset();
  }

  onCloseMsg() {
    this.sucessMessage = null;
  }

}
