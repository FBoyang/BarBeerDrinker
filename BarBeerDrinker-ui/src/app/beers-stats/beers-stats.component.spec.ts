import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersStatsComponent } from './beers-stats.component';

describe('BeersStatsComponent', () => {
  let component: BeersStatsComponent;
  let fixture: ComponentFixture<BeersStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
