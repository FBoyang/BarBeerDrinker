import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsDrinkersComponent } from './bars-drinkers.component';

describe('BarsDrinkersComponent', () => {
  let component: BarsDrinkersComponent;
  let fixture: ComponentFixture<BarsDrinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsDrinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsDrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
