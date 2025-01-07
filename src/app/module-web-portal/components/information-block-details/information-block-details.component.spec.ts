import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InformationBlockDetailsComponent} from './information-block-details.component';

describe('InformationBlockDetailsComponent', () => {
  let component: InformationBlockDetailsComponent;
  let fixture: ComponentFixture<InformationBlockDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationBlockDetailsComponent]
    });
    fixture = TestBed.createComponent(InformationBlockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
