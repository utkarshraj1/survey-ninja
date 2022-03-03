import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISurveyForm } from 'src/app/shared/models/SurveyForm';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  @Input() formControlDataArray: ISurveyForm[];

  formData: FormGroup;
  formQues: string[];

  constructor() { }

  ngOnInit(): void {
    // this.formData = new FormGroup({

    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.formQues = this.formControlDataArray.map(formCon => formCon.ques);
  }

}
