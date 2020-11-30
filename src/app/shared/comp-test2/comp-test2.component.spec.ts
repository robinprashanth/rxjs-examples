import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTest2Component } from './comp-test2.component';

describe('CompTest2Component', () => {
  let component: CompTest2Component;
  let fixture: ComponentFixture<CompTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
