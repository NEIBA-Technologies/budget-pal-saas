import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSimpleComponent } from './button-simple.component';

describe('ButtonSimpleComponent', () => {
  let component: ButtonSimpleComponent;
  let fixture: ComponentFixture<ButtonSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSimpleComponent]
    });
    fixture = TestBed.createComponent(ButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
