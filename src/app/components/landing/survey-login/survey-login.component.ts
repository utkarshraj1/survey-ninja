import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-login',
  templateUrl: './survey-login.component.html',
  styleUrls: ['./survey-login.component.scss']
})
export class SurveyLoginComponent implements OnInit {

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  surveyLoginForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.surveyLoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'key': new FormControl(null, Validators.required)
    });
  }

  submitLoginData(): void {
    console.log(this.surveyLoginForm);
    const { email, key } = this.surveyLoginForm.value;
    this.router.navigate([`/view-survey/${key}`]);
  }

}
