import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Memberships & Passes',
      description: 'Get unlimited access to Bolder Adventure Park with our membership passes. Monthly and annual options available for individuals and families in Grand Prairie, TX.',
      path: '/memberships',
      keywords: 'adventure park membership, unlimited pass, annual pass, Grand Prairie membership'
    });
  }

  passes = [
    {
      name: 'Annual Blue Pass',
      tagline: 'Unlimited Ground Level',
      badge: 'Ground Level',
      price: 'Only $89.99',
      color: '#1ba1e2',
      image: 'assets/images/Blue-pass.jpg',
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
      tagline: 'Unlimited All Access',
      badge: 'All Attractions',
      price: 'Only $199.99',
      color: '#e6179e',
      popular: true,
      image: 'assets/images/Black-pass.png',
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

  benefits = [
    { icon: '💰', title: 'Save Money',       desc: 'One annual pass pays for itself after just 2–3 visits.' },
    { icon: '⚡', title: 'Skip The Line',     desc: 'Annual pass holders get priority access at peak times.' },
    { icon: '🎯', title: 'Unlimited Visits',  desc: 'Come back as many times as you like, all year long.' },
    { icon: '🎁', title: 'Member Perks',      desc: 'Exclusive discounts on food, merchandise, and events.' }
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
