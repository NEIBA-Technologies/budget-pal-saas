import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpenseReportEditComponent} from './expense-report-edit.component';

describe('ExpenseReportEditComponent', () => {
  let component: ExpenseReportEditComponent;
  let fixture: ComponentFixture<ExpenseReportEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseReportEditComponent]
    });
    fixture = TestBed.createComponent(ExpenseReportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
