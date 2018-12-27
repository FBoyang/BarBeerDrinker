import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCityComponent } from './mod-city.component';

describe('ModCityComponent', () => {
  let component: ModCityComponent;
  let fixture: ComponentFixture<ModCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
