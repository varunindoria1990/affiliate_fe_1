import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachAppListContainerComponent } from './each-app-list-container.component';

describe('EachAppListContainerComponent', () => {
  let component: EachAppListContainerComponent;
  let fixture: ComponentFixture<EachAppListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachAppListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachAppListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
