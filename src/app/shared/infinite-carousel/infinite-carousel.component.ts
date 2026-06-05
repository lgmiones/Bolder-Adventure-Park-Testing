import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infinite-carousel',
  templateUrl: './infinite-carousel.component.html',
  styleUrls: ['./infinite-carousel.component.scss']
})
export class InfiniteCarouselComponent {
  @Input() speed: 'slow' | 'normal' | 'fast' = 'normal';

  carouselImages: string[] = [
    'Carousel-1.jpg',
    'Carousel-2.jpg',
    'Carousel-3.jpg',
    'Carousel-4.jpg',
    'Carousel-5.jpg',
    'Carousel-6.jpg',
    'Carousel-7.jpg',
    'Carousel-8.jpg',
    'Carousel-9.jpg',
    'Carousel-10.jpg',
    'Carousel-11.jpg',
    'Carousel-13.jpg',
    'Carousel-30.jpg'
  ];
}
