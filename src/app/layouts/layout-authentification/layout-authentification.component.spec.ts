import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutAuthentificationComponent} from './layout-authentification.component';

describe('LayoutAuthentificationComponent', () => {
  let component: LayoutAuthentificationComponent;
  let fixture: ComponentFixture<LayoutAuthentificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutAuthentificationComponent]
    });
    fixture = TestBed.createComponent(LayoutAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
