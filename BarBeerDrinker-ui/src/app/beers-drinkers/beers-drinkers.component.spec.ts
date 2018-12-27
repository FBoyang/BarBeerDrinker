import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersDrinkersComponent } from './beers-drinkers.component';

describe('BeersDrinkersComponent', () => {
  let component: BeersDrinkersComponent;
  let fixture: ComponentFixture<BeersDrinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersDrinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersDrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
