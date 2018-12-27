import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersTimeComponent } from './drinkers-time.component';

describe('DrinkersTimeComponent', () => {
  let component: DrinkersTimeComponent;
  let fixture: ComponentFixture<DrinkersTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
