import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExpenseReportCreateComponent} from './expense-report-create.component';

describe('ExpenseReportCreateComponent', () => {
  let component: ExpenseReportCreateComponent;
  let fixture: ComponentFixture<ExpenseReportCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseReportCreateComponent]
    });
    fixture = TestBed.createComponent(ExpenseReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
