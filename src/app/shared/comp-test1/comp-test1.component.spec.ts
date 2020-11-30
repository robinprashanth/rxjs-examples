import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTest1Component } from './comp-test1.component';

describe('CompTest1Component', () => {
  let component: CompTest1Component;
  let fixture: ComponentFixture<CompTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
