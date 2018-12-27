import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLocComponent } from './mod-loc.component';

describe('ModLocComponent', () => {
  let component: ModLocComponent;
  let fixture: ComponentFixture<ModLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
