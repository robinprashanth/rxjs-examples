import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatOpratorComponent } from './concat-oprator.component';

describe('ConcatOpratorComponent', () => {
  let component: ConcatOpratorComponent;
  let fixture: ComponentFixture<ConcatOpratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcatOpratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
