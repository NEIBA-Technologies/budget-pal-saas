import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinkedExpensesOnCreateComponent} from './linked-expenses-on-create.component';

describe('LinkedExpensesOnCreateComponent', () => {
  let component: LinkedExpensesOnCreateComponent;
  let fixture: ComponentFixture<LinkedExpensesOnCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedExpensesOnCreateComponent]
    });
    fixture = TestBed.createComponent(LinkedExpensesOnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
