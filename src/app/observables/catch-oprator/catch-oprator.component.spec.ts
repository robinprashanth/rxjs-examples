import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchOpratorComponent } from './catch-oprator.component';

describe('CatchOpratorComponent', () => {
  let component: CatchOpratorComponent;
  let fixture: ComponentFixture<CatchOpratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchOpratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchOpratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
