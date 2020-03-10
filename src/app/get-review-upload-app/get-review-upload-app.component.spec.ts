import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReviewUploadAppComponent } from './get-review-upload-app.component';

describe('GetReviewUploadAppComponent', () => {
  let component: GetReviewUploadAppComponent;
  let fixture: ComponentFixture<GetReviewUploadAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetReviewUploadAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReviewUploadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
