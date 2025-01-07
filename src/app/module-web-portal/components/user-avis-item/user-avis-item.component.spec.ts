import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAvisItemComponent} from './user-avis-item.component';

describe('UserAvisItemComponent', () => {
  let component: UserAvisItemComponent;
  let fixture: ComponentFixture<UserAvisItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAvisItemComponent]
    });
    fixture = TestBed.createComponent(UserAvisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
