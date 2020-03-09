import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewAppComponent } from './post-new-app.component';

describe('PostNewAppComponent', () => {
  let component: PostNewAppComponent;
  let fixture: ComponentFixture<PostNewAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostNewAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
