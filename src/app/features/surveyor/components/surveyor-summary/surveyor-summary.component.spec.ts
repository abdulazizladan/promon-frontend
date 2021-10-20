import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyorSummaryComponent } from './surveyor-summary.component';

describe('SurveyorSummaryComponent', () => {
  let component: SurveyorSummaryComponent;
  let fixture: ComponentFixture<SurveyorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyorSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
