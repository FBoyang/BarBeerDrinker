import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersTransComponent } from './drinkers-trans.component';

describe('DrinkersTransComponent', () => {
  let component: DrinkersTransComponent;
  let fixture: ComponentFixture<DrinkersTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
