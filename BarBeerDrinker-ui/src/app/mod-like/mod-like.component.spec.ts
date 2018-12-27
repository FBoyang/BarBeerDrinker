import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLikeComponent } from './mod-like.component';

describe('ModLikeComponent', () => {
  let component: ModLikeComponent;
  let fixture: ComponentFixture<ModLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
