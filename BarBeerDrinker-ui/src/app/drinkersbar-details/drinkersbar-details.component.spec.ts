import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersbarDetailsComponent } from './drinkersbar-details.component';

describe('DrinkersbarDetailsComponent', () => {
  let component: DrinkersbarDetailsComponent;
  let fixture: ComponentFixture<DrinkersbarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersbarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
