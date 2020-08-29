import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1Component } from './dashboard1.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Dashboard1Component', () => {
  let component: Dashboard1Component;
  let fixture: ComponentFixture<Dashboard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard1Component ]
      ,schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
