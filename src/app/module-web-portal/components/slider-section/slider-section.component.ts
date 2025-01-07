import {AfterViewInit, Component, OnInit, Renderer2,} from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.less'],
})
export class SliderSectionComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const slidesContainer = document.querySelector('.slides-container');

    if (slidesContainer !== null) {

      console.log(slidesContainer);

      const slideWidth = slidesContainer!.querySelector('.slide')!.clientWidth!;
      const prevButton = document.querySelector('.prev')!;
      const nextButton = document.querySelector('.next')!;

      nextButton.addEventListener('click', () => {
        slidesContainer.scrollLeft += slideWidth;
      });

      prevButton.addEventListener('click', () => {
        slidesContainer.scrollLeft -= slideWidth;
      });
    }
  }
}
