import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVariablesComponent } from './all-variables.component';

describe('AllVariablesComponent', () => {
  let component: AllVariablesComponent;
  let fixture: ComponentFixture<AllVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
