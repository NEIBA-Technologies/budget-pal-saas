import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeaturePageComponent } from './detail-feature-page.component';

describe('DetailFeaturePageComponent', () => {
  let component: DetailFeaturePageComponent;
  let fixture: ComponentFixture<DetailFeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFeaturePageComponent]
    });
    fixture = TestBed.createComponent(DetailFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
