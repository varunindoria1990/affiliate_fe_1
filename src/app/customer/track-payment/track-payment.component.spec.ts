import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPaymentComponent } from './track-payment.component';

describe('TrackPaymentComponent', () => {
  let component: TrackPaymentComponent;
  let fixture: ComponentFixture<TrackPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
