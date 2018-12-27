import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlPageComponent } from './sql-page.component';

describe('SqlPageComponent', () => {
  let component: SqlPageComponent;
  let fixture: ComponentFixture<SqlPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
