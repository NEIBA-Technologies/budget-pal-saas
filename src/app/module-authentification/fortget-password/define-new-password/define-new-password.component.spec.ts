import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineNewPasswordComponent } from './define-new-password.component';

describe('DefineNewPasswordComponent', () => {
  let component: DefineNewPasswordComponent;
  let fixture: ComponentFixture<DefineNewPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefineNewPasswordComponent]
    });
    fixture = TestBed.createComponent(DefineNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
