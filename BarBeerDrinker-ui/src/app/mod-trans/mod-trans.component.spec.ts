import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTransComponent } from './mod-trans.component';

describe('ModTransComponent', () => {
  let component: ModTransComponent;
  let fixture: ComponentFixture<ModTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
