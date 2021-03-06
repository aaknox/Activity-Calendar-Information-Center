import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchscreenComponent } from './touchscreen.component';

describe('TouchscreenComponent', () => {
  let component: TouchscreenComponent;
  let fixture: ComponentFixture<TouchscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
