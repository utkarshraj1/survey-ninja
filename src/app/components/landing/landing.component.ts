import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  firstTime: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.firstTime = true;
    // this.firstTime = false;
  }

  changeCardHandler(action: string): void {
    switch (action) {
      case 'surveyCreated':
        this.firstTime = false;
        break;
      case 'createSurvey':
        this.firstTime = true;
        break;
    }
  }
}
