import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorSummaryComponent } from './contractor-summary.component';

describe('ContractorSummaryComponent', () => {
  let component: ContractorSummaryComponent;
  let fixture: ComponentFixture<ContractorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
