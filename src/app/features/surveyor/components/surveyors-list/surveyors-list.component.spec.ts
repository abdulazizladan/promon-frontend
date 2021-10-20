import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyorsListComponent } from './surveyors-list.component';

describe('SurveyorsListComponent', () => {
  let component: SurveyorsListComponent;
  let fixture: ComponentFixture<SurveyorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
