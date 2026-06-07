import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-birthday-parties',
  templateUrl: './birthday-parties.component.html',
  styleUrls: ['./birthday-parties.component.scss']
})
export class BirthdayPartiesComponent implements AfterViewInit {

  packages = [
    {
      name: 'Base Camp Birthday Party',
      tag: 'Great for All Ages',
      price: '$25.50*',
      priceSuffix: '/guest',
      priceNote: '*Min. 10 guests',
      color: '#119ee8',
      includes: [
        'Celebrate your special day with us',
        'All Base Camp ground-level attractions',
        '2 parent passes included',
        'Pizza meal for all guests',
        'Unlimited drinks',
        'Bring your own cake option'
      ]
    },
    {
      name: 'Summit Ropes Course Birthday Party',
      tag: 'Most Popular',
      price: '$55.00*',
      priceSuffix: '/guest',
      priceNote: '*Min. 10 guests',
      color: '#f45113',
      popular: true,
      includes: [
        'All Base Camp ground-level attractions',
        'Vertical climbing walls access',
        'Ropes course included',
        '2 parent passes included',
        'Pizza meal for all guests',
        'Unlimited drinks'
      ]
    },
    {
      name: 'Summit Mountain Experience Birthday Party',
      tag: 'Ultimate Experience',
      price: '$55.00*',
      priceSuffix: '/guest',
      priceNote: '*Min. 10 guests',
      color: '#8f34cd',
      includes: [
        'All Base Camp ground-level attractions',
        'Vertical climbing walls access',
        'Mountain Experience activities',
        '2 parent passes included',
        'Pizza meal for all guests',
        'Unlimited drinks'
      ]
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
