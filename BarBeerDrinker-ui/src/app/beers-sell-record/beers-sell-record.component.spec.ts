import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersSellRecordComponent } from './beers-sell-record.component';

describe('BeersSellRecordComponent', () => {
  let component: BeersSellRecordComponent;
  let fixture: ComponentFixture<BeersSellRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersSellRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersSellRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
