import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-survey-login',
  templateUrl: './survey-login.component.html',
  styleUrls: ['./survey-login.component.scss']
})
export class SurveyLoginComponent implements OnInit {
  surveyLoginForm: FormGroup;

  constructor(private router: Router,
    private shared: SharedService) { }

  ngOnInit(): void {
    this.surveyLoginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'key': new FormControl(null, Validators.required)
    });
  }

  submitLoginData(): void {
    // console.log(this.surveyLoginForm);
    const { email, key } = this.surveyLoginForm.value;
    this.shared.viewSurveyData.next({ email: email.toString(), key: key.toString() });
    this.router.navigate([`/view-survey/${key}`]);
  }

}
