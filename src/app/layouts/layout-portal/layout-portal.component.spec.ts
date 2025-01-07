import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutPortalComponent} from './layout-portal.component';

describe('LayoutPortalComponent', () => {
  let component: LayoutPortalComponent;
  let fixture: ComponentFixture<LayoutPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutPortalComponent]
    });
    fixture = TestBed.createComponent(LayoutPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
