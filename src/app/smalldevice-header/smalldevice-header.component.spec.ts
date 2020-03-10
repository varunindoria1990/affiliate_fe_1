import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmalldeviceHeaderComponent } from './smalldevice-header.component';

describe('SmalldeviceHeaderComponent', () => {
  let component: SmalldeviceHeaderComponent;
  let fixture: ComponentFixture<SmalldeviceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmalldeviceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmalldeviceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
