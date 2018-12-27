import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersBeersComponent } from './drinkers-beers.component';

describe('DrinkersBeersComponent', () => {
  let component: DrinkersBeersComponent;
  let fixture: ComponentFixture<DrinkersBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
