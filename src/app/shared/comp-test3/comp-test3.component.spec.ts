import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTest3Component } from './comp-test3.component';

describe('CompTest3Component', () => {
  let component: CompTest3Component;
  let fixture: ComponentFixture<CompTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
