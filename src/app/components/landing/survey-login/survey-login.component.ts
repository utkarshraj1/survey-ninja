import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { api_url } from 'src/app/shared/static/api-urls';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-survey-login',
  templateUrl: './survey-login.component.html',
  styleUrls: ['./survey-login.component.scss']
})
export class SurveyLoginComponent implements OnInit {

  surveyLoginForm: FormGroup;
  credentialValidity: any;

  constructor(private router: Router,
    private shared: SharedService,
    private httpMethods: HttpMethodsService) { }

  ngOnInit(): void {
    this.credentialValidity = {
      loginClicked: false,
      emailInValid: false,
      keyInValid: false
    };
    this.surveyLoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'key': new FormControl(null, Validators.required)
    });
  }

  submitLoginData(): void {
    const { email, key } = this.surveyLoginForm.value;
    this.checkCredentialValidity(email, key);
  }

  checkCredentialValidity(email: string, key: string): void {
    this.credentialValidity.loginClicked = true;
    this.httpMethods.getData(`${api_url.create_survey}/-${key}.json`).subscribe((res) => {
      if (res.email === email) {
        this.credentialValidity.emailInValid = false;
        this.router.navigate([`/view-survey/${email}/${key}`]);
      } else {
        this.credentialValidity.emailInValid = true;
      }
    },
      (error) => {
        this.credentialValidity.keyInValid = true;
      });
  }

}