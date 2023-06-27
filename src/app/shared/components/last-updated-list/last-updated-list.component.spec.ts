import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdatedListComponent } from './last-updated-list.component';

describe('LastUpdatedListComponent', () => {
  let component: LastUpdatedListComponent;
  let fixture: ComponentFixture<LastUpdatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastUpdatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastUpdatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
