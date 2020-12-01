import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeOpratorComponent } from './merge-oprator.component';

describe('MergeOpratorComponent', () => {
  let component: MergeOpratorComponent;
  let fixture: ComponentFixture<MergeOpratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeOpratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
