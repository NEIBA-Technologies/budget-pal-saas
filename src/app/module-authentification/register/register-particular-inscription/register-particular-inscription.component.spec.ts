import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParticularInscriptionComponent } from './register-particular-inscription.component';

describe('RegisterParticularInscriptionComponent', () => {
  let component: RegisterParticularInscriptionComponent;
  let fixture: ComponentFixture<RegisterParticularInscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterParticularInscriptionComponent]
    });
    fixture = TestBed.createComponent(RegisterParticularInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
