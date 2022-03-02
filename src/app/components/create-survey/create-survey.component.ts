import { Component, OnInit } from '@angular/core';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {
  questionnaires: Array<IQuestionnaire> = [];

  constructor(private dialog: MatDialog,
    private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.questionnaireData.subscribe(ques => {
      this.questionnaires.push(ques);
    })
  }

  openQuestionnaireDialog(): void {
    const dialogBox = this.dialog.open(CreateQuestionnaireComponent);
    dialogBox.afterClosed().subscribe(res => {
      console.log('Dialog Box Closed!');
    });
  }

}
