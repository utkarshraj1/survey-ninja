import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-create-questionnaire',
  templateUrl: './create-questionnaire.component.html',
  styleUrls: ['./create-questionnaire.component.scss']
})
export class CreateQuestionnaireComponent implements OnInit {

  responseTypes: Array<string> = ['Radio', 'Select', 'Input-Box'];
  responseTypeSelected: string;
  questionData: string;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  responsesData: any[] = [];

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
  }

  saveQuestionnaire(): void {
    const childrenData = this.responseTypeSelected === 'Input-Box' ? [{
      name: 'Response Type',
      children: [{ name: this.responseTypeSelected }]
    }] : [{
      name: 'Response Type',
      children: [{ name: this.responseTypeSelected }]
    }, {
      name: 'Response Options',
      children: this.responsesData.map(res => {
        return {
          name: res
        };
      })
    }];

    const dataObj: IQuestionnaire = {
      name: this.questionData,
      children: childrenData
    }
    console.log(dataObj);
    // this.questionnaireSavedData.emit(dataObj);
    this.shared.questionnaireData.next(dataObj);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.responsesData.push(value);
    }
    event.chipInput!.clear();
  }

  remove(response: any): void {
    const index = this.responsesData.indexOf(response);
    if (index >= 0) {
      this.responsesData.splice(index, 1);
    }
  }

}
