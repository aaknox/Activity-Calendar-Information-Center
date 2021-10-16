import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanAppPageComponent } from './meal-plan-app-page.component';

describe('MealPlanAppPageComponent', () => {
  let component: MealPlanAppPageComponent;
  let fixture: ComponentFixture<MealPlanAppPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanAppPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanAppPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
