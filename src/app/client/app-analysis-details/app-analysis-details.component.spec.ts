import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnalysisDetailsComponent } from './app-analysis-details.component';

describe('AppAnalysisDetailsComponent', () => {
  let component: AppAnalysisDetailsComponent;
  let fixture: ComponentFixture<AppAnalysisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAnalysisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
