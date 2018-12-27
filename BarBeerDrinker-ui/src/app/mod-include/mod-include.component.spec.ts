import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModIncludeComponent } from './mod-include.component';

describe('ModIncludeComponent', () => {
  let component: ModIncludeComponent;
  let fixture: ComponentFixture<ModIncludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModIncludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
