import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinkComponent} from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkComponent]
    });
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
