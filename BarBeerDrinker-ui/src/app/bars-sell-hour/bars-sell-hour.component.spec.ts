import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsSellHourComponent } from './bars-sell-hour.component';

describe('BarsSellHourComponent', () => {
  let component: BarsSellHourComponent;
  let fixture: ComponentFixture<BarsSellHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsSellHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsSellHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
