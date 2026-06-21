import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-birthday-parties',
  templateUrl: './birthday-parties.component.html',
  styleUrls: ['./birthday-parties.component.scss']
})
export class BirthdayPartiesComponent implements OnInit, AfterViewInit {

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/birthdayparties/en-us/products?_gl=1*zzh7j7*_gcl_aw*R0NMLjE3ODA5MjQ5MjAuQ2owS0NRancwSm5SQmhESkFSSXNBTG9iblhZaE50VmU4LTRZOTM0UUZqQkVieFZTSm8tbXRHRl9EUG96SDY0S2lySVc5ZWlKRm5BQ2Y1MGFBdDh6RUFMd193Y0I.';
  readonly footnote = '*Plus 10% gratuity & sales tax';

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Birthday Parties',
      description: 'Throw an unforgettable birthday party at Bolder Adventure Park. Choose from Base Camp, Summit Ropes Course, or Summit Mountain Experience party packages in Grand Prairie, TX.',
      path: '/birthday-parties',
      keywords: 'birthday party, kids birthday, adventure party, party packages, Grand Prairie birthday'
    });
  }

  packages = [
    {
      name: 'Base Camp Party',
      tag: 'Best For Younger Kids',
      color: '#1ba1e2',
      image: 'assets/images/Birthday-parties.jpg',
      includes: [
        '45 minutes party table reservation',
        '10 party guests (including the birthday child)'
      ],
      access: 'All Base Camp attractions — including the Jump Pad, adventure nets, exploration play areas, blaster zone, bumper cars and tubing slides.',
      priceWeekday: '$299',
      priceWeekend: '$379',
      extra: 'Additional guests available for $29.99 per guest (Mon–Fri) and $37.99 (Sat / Sun).'
    },
    {
      name: 'Summit Party',
      tag: 'Ultimate Climb',
      color: '#f7b500',
      popular: true,
      image: 'assets/All-Attraction/Ropes-courses.jpg',
      includes: [
        '45 minutes party table reservation',
        '10 party guests (including the birthday child)'
      ],
      access: 'All Base Camp attractions, plus Vertical Climbing Adventures and your choice of one: Ropes Course & Zip Lines (48" min) OR Via Ferrata — the climb across the Bolder Mountains (48" and 88 lbs minimum weight).',
      priceWeekday: '$499',
      priceWeekend: '$549',
      extra: 'Additional guests available for $49.99 per guest (Mon–Fri) and $54.99 (Sat / Sun).'
    }
  ];

  reviews = [
    { name: 'Ally Smith', role: 'Birthday Party Guest', quote: 'So fun! Even great for adults, we came here for a baby party and had a blast!' },
    { name: 'Tiffany Erdynn', role: 'Birthday Party Host', quote: "Came here for a kid's birthday party for about 15 kids. We all had a blast. Kids loved the slides and the shooting game. Will definitely be back." },
    { name: 'Chrismar Cortina', role: 'Birthday Party Host', quote: 'Game here for my son\'s birthday party and the party hosts were amazing. Everyone was outstanding. Everything was so nice. Definitely recommended.' }
  ];

  openFaqs = new Set<number>();

  faqs = [
    { q: 'What ages are the parties best for?', a: 'Birthday parties at Bolder are suitable for ages 4 and up. We recommend the Base Camp package for younger guests (under 7) and Summit or Extreme for older kids.' },
    { q: 'Can I add more than 10 guests?', a: 'Absolutely! The package prices are based on a minimum of 10 guests. Additional guests can be added at a per-person rate. Contact us for group pricing.' },
    { q: "What's included in the 45-minute table reservation?", a: 'Your exclusive party table reservation includes private party space, table decoration setup, and your dedicated party host. You are also welcome to bring a cake and decorations.' },
    { q: 'What if I need to cancel or reschedule?', a: 'We require at least 72 hours\' notice for cancellations or reschedules. Deposits are non-refundable but can be applied to a future booking.' },
    { q: 'Do parents need to supervise during activities?', a: 'Parents are encouraged to participate! Both packages include 2 free parent passes. Younger children (under 7) must be accompanied by an adult on some attractions.' },
    { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–4 weeks in advance, especially for weekend slots which fill up fast. You can book online 24/7.' }
  ];

  toggleFaq(i: number): void {
    if (this.openFaqs.has(i)) {
      this.openFaqs.delete(i);
    } else {
      this.openFaqs.add(i);
    }
  }

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
