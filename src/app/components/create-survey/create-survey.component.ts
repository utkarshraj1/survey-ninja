import { Component, OnInit } from '@angular/core';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  // questionnaires: Array<IQuestionnaire> = [
  //   {
  //     name: 'Are you a tower?',
  //     children: [{
  //       name: 'Response Type',
  //       children: [{ name: 'Radio' }]
  //     }, {
  //       name: 'Response Options',
  //       children: [{ name: 'Coz "Eiffel" for you.' }, { name: 'Coz you are tall.' }, { name: 'Coz you are on call all the time.' }]
  //     }]
  //   },
  //   {
  //     name: 'I am having sleepless nights, why is that?',
  //     children: [{
  //       name: 'Response Options',
  //       children: [{ name: 'Radio' }]
  //     }, {
  //       name: 'Responses',
  //       children: [{ name: 'Coz you are sick.' }, { name: 'Coz you are in love.' }, { name: 'Coz you are dumb.' }]
  //     }]
  //   }
  // ];
  questionnaires: Array<IQuestionnaire> = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openQuestionnaireDialog(): void {
    const dialogBox = this.dialog.open(CreateQuestionnaireComponent);
    dialogBox.afterClosed().subscribe(res => {
      console.log('Dialog Box Closed!');
    });
  }

}
