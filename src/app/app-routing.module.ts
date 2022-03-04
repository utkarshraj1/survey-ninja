import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { GiveResponseComponent } from './components/give-response/give-response.component';
import { LandingComponent } from './components/landing/landing.component';
import { ViewResponsesComponent } from './components/view-responses/view-responses.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'create-survey/:email', component: CreateSurveyComponent },
  { path: 'survey/:id', component: GiveResponseComponent },
  { path: 'view-survey/:email/:id', component: ViewResponsesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
