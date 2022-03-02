import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-response-login',
  templateUrl: './survey-response-login.component.html',
  styleUrls: ['./survey-response-login.component.scss']
})
export class SurveyResponseLoginComponent implements OnInit {

  takeSurveyClicked: boolean;
  key: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.takeSurveyClicked = false;
    this.key = '';
  }

  navigateToPage(page: string, key?: string): void {
    switch (page) {
      case 'create':
        this.router.navigate(['/create-survey']);
        break;
      case 'response':
        this.router.navigate([`/survey/${key}`]);
        break;
    }
  }

}
