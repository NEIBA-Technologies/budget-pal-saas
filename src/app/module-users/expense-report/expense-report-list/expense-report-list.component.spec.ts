import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpenseReportListComponent} from './expense-report-list.component';

describe('ExpenseReportListComponent', () => {
  let component: ExpenseReportListComponent;
  let fixture: ComponentFixture<ExpenseReportListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseReportListComponent]
    });
    fixture = TestBed.createComponent(ExpenseReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
