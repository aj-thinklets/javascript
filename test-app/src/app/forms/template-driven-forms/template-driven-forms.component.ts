import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  sucessMessage: string;
 
  
  constructor(
  ) { }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    if(!customerForm.invalid) {
      console.log('FormValue', customerForm.value);
      console.log('FistName', customerForm.controls['firstName'].value);
     
      this.onClear(customerForm);
      this.sucessMessage = "Form submitted."
    }
  
  }

  onClear(customerForm: NgForm) {
    customerForm.resetForm({
      firstName:"",
      lastName: "",
      age: ""
    });
    this.sucessMessage = "Form cleared."
  }

  onCloseMsg() {
    this.sucessMessage = null;
  }


}
