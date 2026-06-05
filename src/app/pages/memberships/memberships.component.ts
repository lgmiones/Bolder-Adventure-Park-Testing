import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent implements AfterViewInit {

  passes = [
    {
      name: 'Annual Blue Pass',
      tagline: 'ONLY $89.99',
      badge: 'Ground Level',
      color: '#119ee8',
      image: 'assets/images/extreme-all-access-pass.jpg',
      desc: 'The Blue Annual Pass gives you unlimited access to all of the ground-level attractions.',
      features: [
        'Tree House',
        'Adventure Nets',
        'Exploration Play Area',
        'Jump Pad',
        'Blaster Zone',
        'Spin Zone Bumper Cars',
        'Tubing Slides'
      ],
      cta: 'Get Blue Pass'
    },
    {
      name: 'Annual Black Diamond Pass',
      tagline: 'ALL ATTRACTIONS',
      badge: 'All Attractions',
      color: '#f45113',
      popular: true,
      image: 'assets/carousel-images/Carousel-8.jpg',
      desc: 'The Black Diamond Annual Pass gives you unlimited access to all ground and aerial attractions.',
      features: [
        'Everything in Blue Pass',
        'Climbing Adventures*',
        'Ropes Course &amp; Zip Lines',
        'Mountain Experience via Ferrata',
        'Free Fall Drop'
      ],
      note: '* Height and weight restrictions apply',
      cta: 'Get Black Diamond'
    }
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.style.transitionDelay = el.dataset['srDelay'] ?? '0s';
              el.classList.add('sr-visible');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.13, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
    }, 50);
  }
}
