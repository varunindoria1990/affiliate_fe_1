import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatePageComponent } from './affiliate-page.component';

describe('AffiliatePageComponent', () => {
  let component: AffiliatePageComponent;
  let fixture: ComponentFixture<AffiliatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
