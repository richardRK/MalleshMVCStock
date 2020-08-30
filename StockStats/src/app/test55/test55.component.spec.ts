import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test55Component } from './test55.component';

describe('Test55Component', () => {
  let component: Test55Component;
  let fixture: ComponentFixture<Test55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
