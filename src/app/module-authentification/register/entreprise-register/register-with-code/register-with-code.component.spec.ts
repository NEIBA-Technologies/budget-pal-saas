import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithCodeComponent } from './register-with-code.component';

describe('RegisterWithCodeComponent', () => {
  let component: RegisterWithCodeComponent;
  let fixture: ComponentFixture<RegisterWithCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterWithCodeComponent]
    });
    fixture = TestBed.createComponent(RegisterWithCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
