import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersBarsComponent } from './beers-bars.component';

describe('BeersBarsComponent', () => {
  let component: BeersBarsComponent;
  let fixture: ComponentFixture<BeersBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
