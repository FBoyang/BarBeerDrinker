import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersMonthComponent } from './drinkers-month.component';

describe('DrinkersMonthComponent', () => {
  let component: DrinkersMonthComponent;
  let fixture: ComponentFixture<DrinkersMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
