import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.scss']
})
export class PageHeroComponent implements AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';
  @Input() tag: string = '';

  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.initScrollObserver();
  }

  initScrollObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = el.dataset['srDelay'] ?? '0s';
            el.classList.add('sr-visible');
            this.observer?.unobserve(el);
          }
        });
      },
      { threshold: 0.13, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.sr').forEach(el => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
