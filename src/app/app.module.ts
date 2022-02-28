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
import { MaterialItemsModule } from './material-items.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CreateSurveyComponent,
    ViewResponsesComponent,
    GiveResponseComponent,
    FeedbackComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
