import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgaMapComponent } from './lga-map.component';

describe('LgaMapComponent', () => {
  let component: LgaMapComponent;
  let fixture: ComponentFixture<LgaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
