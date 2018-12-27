import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersWeekComponent } from './drinkers-week.component';

describe('DrinkersWeekComponent', () => {
  let component: DrinkersWeekComponent;
  let fixture: ComponentFixture<DrinkersWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
