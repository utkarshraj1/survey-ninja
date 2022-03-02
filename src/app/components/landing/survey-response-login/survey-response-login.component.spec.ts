import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResponseLoginComponent } from './survey-response-login.component';

describe('SurveyResponseLoginComponent', () => {
  let component: SurveyResponseLoginComponent;
  let fixture: ComponentFixture<SurveyResponseLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyResponseLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResponseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
