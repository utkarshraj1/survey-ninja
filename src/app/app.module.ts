import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { ViewResponsesComponent } from './components/view-responses/view-responses.component';
import { GiveResponseComponent } from './components/give-response/give-response.component';
import { FeedbackComponent } from './shared/components/feedback/feedback.component';
import { ThanksComponent } from './shared/components/thanks/thanks.component';
import { MaterialItemsModule } from './material-ui/material-items.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyLoginComponent } from './components/landing/survey-login/survey-login.component';
import { SurveyResponseLoginComponent } from './components/landing/survey-response-login/survey-response-login.component';
import { QuestionnaireListComponent } from './components/create-survey/questionnaire-list/questionnaire-list.component';
import { CreateQuestionnaireComponent } from './components/create-survey/create-questionnaire/create-questionnaire.component';
import { SurveyFormComponent } from './components/give-response/survey-form/survey-form.component';
import { LoadingPageComponent } from './shared/components/loading-page/loading-page.component';
import { CommonModule } from '@angular/common';
import { NoItemsFoundComponent } from './shared/components/no-items-found/no-items-found.component';
import { DataTableComponent } from './components/view-responses/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CreateSurveyComponent,
    ViewResponsesComponent,
    GiveResponseComponent,
    FeedbackComponent,
    ThanksComponent,
    HeaderComponent,
    SurveyLoginComponent,
    SurveyResponseLoginComponent,
    QuestionnaireListComponent,
    CreateQuestionnaireComponent,
    SurveyFormComponent,
    LoadingPageComponent,
    NoItemsFoundComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
