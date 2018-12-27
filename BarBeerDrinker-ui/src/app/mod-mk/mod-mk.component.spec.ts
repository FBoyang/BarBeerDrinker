import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModMkComponent } from './mod-mk.component';

describe('ModMkComponent', () => {
  let component: ModMkComponent;
  let fixture: ComponentFixture<ModMkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModMkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModMkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
