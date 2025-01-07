import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomePageHeroSectionComponent} from './home-page-hero-section.component';

describe('HomePageHeroSectionComponent', () => {
  let component: HomePageHeroSectionComponent;
  let fixture: ComponentFixture<HomePageHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageHeroSectionComponent]
    });
    fixture = TestBed.createComponent(HomePageHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
