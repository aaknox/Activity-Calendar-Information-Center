import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCalAppPageComponent } from './activity-cal-app-page.component';

describe('ActivityCalAppPageComponent', () => {
  let component: ActivityCalAppPageComponent;
  let fixture: ComponentFixture<ActivityCalAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityCalAppPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCalAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
