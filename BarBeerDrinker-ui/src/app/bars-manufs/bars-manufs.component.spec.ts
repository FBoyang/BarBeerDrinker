import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsManufsComponent } from './bars-manufs.component';

describe('BarsManufsComponent', () => {
  let component: BarsManufsComponent;
  let fixture: ComponentFixture<BarsManufsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsManufsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsManufsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
