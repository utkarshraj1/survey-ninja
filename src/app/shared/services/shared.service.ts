import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IQuestionnaire } from '../models/Questionnaire';
import { IViewSurvey } from '../models/ViewSurvey';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  questionnaireData = new Subject<IQuestionnaire>();
  createSurveyEmail = new Subject<string>();
  viewSurveyData = new Subject<IViewSurvey>();

  constructor() { }
}
