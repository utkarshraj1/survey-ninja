import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IQuestionnaire } from '../models/Questionnaire';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  questionnaireData = new Subject<IQuestionnaire>();

  constructor() { }
}
