import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEarnMoneyComponent } from './review-earn-money.component';

describe('ReviewEarnMoneyComponent', () => {
  let component: ReviewEarnMoneyComponent;
  let fixture: ComponentFixture<ReviewEarnMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEarnMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEarnMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
