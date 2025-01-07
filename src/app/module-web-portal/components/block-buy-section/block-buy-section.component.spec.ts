import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlockBuySectionComponent} from './block-buy-section.component';

describe('BlockBuySectionComponent', () => {
  let component: BlockBuySectionComponent;
  let fixture: ComponentFixture<BlockBuySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockBuySectionComponent]
    });
    fixture = TestBed.createComponent(BlockBuySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
