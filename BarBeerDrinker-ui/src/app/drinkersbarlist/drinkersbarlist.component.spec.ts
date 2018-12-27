import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersbarlistComponent } from './drinkersbarlist.component';

describe('DrinkersbarlistComponent', () => {
  let component: DrinkersbarlistComponent;
  let fixture: ComponentFixture<DrinkersbarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersbarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersbarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
