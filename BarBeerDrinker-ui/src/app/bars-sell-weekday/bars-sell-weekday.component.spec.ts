import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsSellWeekdayComponent } from './bars-sell-weekday.component';

describe('BarsSellWeekdayComponent', () => {
  let component: BarsSellWeekdayComponent;
  let fixture: ComponentFixture<BarsSellWeekdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsSellWeekdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsSellWeekdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
