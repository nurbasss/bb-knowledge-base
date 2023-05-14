import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVersionsComponent } from './post-versions.component';

describe('PostVersionsComponent', () => {
  let component: PostVersionsComponent;
  let fixture: ComponentFixture<PostVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostVersionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
