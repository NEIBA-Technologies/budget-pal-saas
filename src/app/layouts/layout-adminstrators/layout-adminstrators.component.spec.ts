import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutAdminstratorsComponent} from './layout-adminstrators.component';

describe('LayoutAdminstratorsComponent', () => {
  let component: LayoutAdminstratorsComponent;
  let fixture: ComponentFixture<LayoutAdminstratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutAdminstratorsComponent]
    });
    fixture = TestBed.createComponent(LayoutAdminstratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
