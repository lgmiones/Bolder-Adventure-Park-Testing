import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';

@NgModule({
  declarations: [
    PageHeroComponent,
    InfiniteCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    PageHeroComponent,
    InfiniteCarouselComponent
  ]
})
export class SharedModule { }
