import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHomeComponent } from './observable-home.component';

describe('ObservableHomeComponent', () => {
  let component: ObservableHomeComponent;
  let fixture: ComponentFixture<ObservableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
