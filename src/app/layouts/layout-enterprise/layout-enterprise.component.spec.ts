import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutEnterpriseComponent} from './layout-enterprise.component';

describe('LayoutEnterpriseComponent', () => {
  let component: LayoutEnterpriseComponent;
  let fixture: ComponentFixture<LayoutEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutEnterpriseComponent]
    });
    fixture = TestBed.createComponent(LayoutEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
