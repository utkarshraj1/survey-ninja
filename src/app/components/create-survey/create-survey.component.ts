import { Component, OnInit } from '@angular/core';
import { IQuestionnaire } from 'src/app/shared/models/Questionnaire';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { api_url } from 'src/app/shared/static/api-urls';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  questionnaires: Array<IQuestionnaire>;
  email: string;
  createSurveyClicked: boolean;
  statusOk: boolean;
  key: string;

  constructor(private dialog: MatDialog,
    private route: ActivatedRoute,
    private httpService: HttpMethodsService,
    private snackBar: MatSnackBar,
    private shared: SharedService) { }

  ngOnInit(): void {
    this.questionnaires = [];
    this.createSurveyClicked = false;
    // this.route.params.subscribe(res => this.email = res['email'].toString());
    this.email = this.route.snapshot.paramMap.get('email')!.toString();
    // console.log(this.email);
    this.statusOk = false;
  }

  openQuestionnaireDialog(): void {
    const dialogBox = this.dialog.open(CreateQuestionnaireComponent);
    dialogBox.afterClosed().subscribe(res => {
      // console.log('Dialog Box Closed!');
    });
  }

  quesDataFiller(event: any): void {
    this.questionnaires = [...event];
  }

  saveQuestionnaire(): void {
    this.createSurveyClicked = true;
    // console.log(this.email);
    const data = {
      email: this.email,
      questionnaires: this.questionnaires
    };
    this.httpService.postData(`${api_url.create_survey}.json`, data).subscribe(res => {
      this.key = res.name.slice(1);
      this.statusOk = true;
    },
      err => console.error(err)
    );
  }

  copiedSuccessfully(): void {
    this.snackBar.open('Key copied successfully!', 'Close', {
      duration: 2000
    });
  }

}
