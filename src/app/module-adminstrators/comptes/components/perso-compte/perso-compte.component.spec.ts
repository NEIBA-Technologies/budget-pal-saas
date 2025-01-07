import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersoCompteComponent} from './perso-compte.component';

describe('PersoCompteComponent', () => {
  let component: PersoCompteComponent;
  let fixture: ComponentFixture<PersoCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersoCompteComponent]
    });
    fixture = TestBed.createComponent(PersoCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
