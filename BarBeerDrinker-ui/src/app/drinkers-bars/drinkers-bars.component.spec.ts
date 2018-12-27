import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkersBarsComponent } from './drinkers-bars.component';

describe('DrinkersBarsComponent', () => {
  let component: DrinkersBarsComponent;
  let fixture: ComponentFixture<DrinkersBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkersBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkersBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
