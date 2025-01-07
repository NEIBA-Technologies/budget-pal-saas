import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PortalHeaderComponent} from './portal-header.component';

describe('PortalHeaderComponent', () => {
  let component: PortalHeaderComponent;
  let fixture: ComponentFixture<PortalHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalHeaderComponent]
    });
    fixture = TestBed.createComponent(PortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
