import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAppsComponent } from './your-apps.component';

describe('YourAppsComponent', () => {
  let component: YourAppsComponent;
  let fixture: ComponentFixture<YourAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
