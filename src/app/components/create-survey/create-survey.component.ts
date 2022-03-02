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
