import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { api_url } from 'src/app/shared/static/api-urls';
import { ISurveyForm } from 'src/app/shared/models/SurveyForm';
import { IUSerDetails } from 'src/app/shared/models/UserDetails';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISurveyResponse } from 'src/app/shared/models/SurveyResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-give-response',
  templateUrl: './give-response.component.html',
  styleUrls: ['./give-response.component.scss']
})
export class GiveResponseComponent implements OnInit {

  key: string;
  userData: IUSerDetails;
  surveyQuestionnaire: Array<any>;
  formCreationArray: ISurveyForm[];
  userDataReceived: boolean;
  dataPosted: any;
  userFormGroup: FormGroup;

  constructor(private route: ActivatedRoute,
    private navigateRoute: Router,
    private httpMethod: HttpMethodsService) { }

  ngOnInit(): void {
    this.userDataReceived = false;
    this.dataPosted = {
      postRequestSent: false,
      responseFromAPIGot: false
    };
    this.formCreationArray = [];
    this.userFormGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
    this.key = this.route.snapshot.paramMap.get('id')!.toString();
    this.fetchSurveyData(this.key);
  }

  fetchSurveyData(surveykey: string): void {
    this.httpMethod.getData(`${api_url.create_survey}/-${surveykey}.json`).subscribe(res => {
      this.surveyQuestionnaire = res.questionnaires;
      this.manipulateResponseData();
    }, err => {
      console.log(err);
    });
  }

  manipulateResponseData(): void {
    this.formCreationArray = this.surveyQuestionnaire.map((surQues: IQuestionnaire) => {
      return {
        ques: surQues.name,
        responseType: surQues.children[0].children[0].name,
        options: surQues.children[0].children[0].name === 'Input-Box'
          ? ['Input']
          : surQues.children[1].children.map((res: any) => res.name)
      };
    });
  }

  submitFormData(userFormGroupData: any): void {
    if (userFormGroupData.valid) {
      this.userData = userFormGroupData.value;
      this.userDataReceived = true;
    }
    else {
      this.userDataReceived = false;
    }
  }

  responseFormDataOutputHandler(data: ISurveyResponse[]): void {
    this.dataPosted.postRequestSent = true;
    this.httpMethod.postData(`${api_url.post_responses}.json`, {
      ...this.userData,
      response: data,
      key: this.key
    }).subscribe((res) => {
      console.log(res);
      setTimeout(() => {
        this.dataPosted.responseFromAPIGot = true;
      }, 1000);
    });
  }

  redirectToMainPageHandler(): void {
    this.navigateRoute.navigateByUrl(environment.url);
  }

}
