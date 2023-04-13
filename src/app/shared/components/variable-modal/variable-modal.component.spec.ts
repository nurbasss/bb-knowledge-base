import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableModalComponent } from './variable-modal.component';

describe('VariableModalComponent', () => {
  let component: VariableModalComponent;
  let fixture: ComponentFixture<VariableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
