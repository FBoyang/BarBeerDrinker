import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsBeersComponent } from './bars-beers.component';

describe('BarsBeersComponent', () => {
  let component: BarsBeersComponent;
  let fixture: ComponentFixture<BarsBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
