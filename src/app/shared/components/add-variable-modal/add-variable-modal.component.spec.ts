import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariableModalComponent } from './add-variable-modal.component';

describe('AddVariableModalComponent', () => {
  let component: AddVariableModalComponent;
  let fixture: ComponentFixture<AddVariableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVariableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVariableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
