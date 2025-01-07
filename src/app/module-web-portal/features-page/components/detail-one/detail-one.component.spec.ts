import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOneComponent } from './detail-one.component';

describe('DetailOneComponent', () => {
  let component: DetailOneComponent;
  let fixture: ComponentFixture<DetailOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailOneComponent]
    });
    fixture = TestBed.createComponent(DetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
