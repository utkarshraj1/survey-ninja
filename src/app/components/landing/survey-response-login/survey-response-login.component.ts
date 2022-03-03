import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-survey-response-login',
  templateUrl: './survey-response-login.component.html',
  styleUrls: ['./survey-response-login.component.scss']
})
export class SurveyResponseLoginComponent implements OnInit {

  takeSurveyClicked: boolean;
  createSurveyClicked: boolean;
  key: string;
  email: string;

  constructor(private router: Router, private shared: SharedService) { }

  ngOnInit(): void {
    this.takeSurveyClicked = false;
    this.createSurveyClicked = false;
    this.key = '';
    this.email = '';
  }

  navigateToPage(page: string, key?: string): void {
    switch (page) {
      case 'create':
        this.router.navigate([`/create-survey/${this.email}`]);
        break;
      case 'response':
        this.router.navigate([`/survey/${key}`]);
        break;
    }
  }

}
