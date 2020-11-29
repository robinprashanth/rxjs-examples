import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapOperatorComponent } from './tap-operator.component';

describe('TapOperatorComponent', () => {
  let component: TapOperatorComponent;
  let fixture: ComponentFixture<TapOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
