import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveResponseComponent } from './give-response.component';

describe('GiveResponseComponent', () => {
  let component: GiveResponseComponent;
  let fixture: ComponentFixture<GiveResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
