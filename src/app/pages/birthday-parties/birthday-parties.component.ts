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
      priceWeekend: '$349',
      extra: 'Additional guests available for $29.99 per guest (Mon–Fri) and $37.99 (Sat / Sun).'
    },
    {
      name: 'All Access Party',
      tag: 'Everything In The Park',
      color: '#f7b500',
      popular: true,
      image: 'assets/All-Attraction/Ropes-courses.jpg',
      includes: [
        '45 minutes party table reservation',
        '10 party guests (including the birthday child)'
      ],
      access: 'Everything in Base Camp, plus the full park — Mountain Experience, Ropes Course, Archery and Drop Zone. The complete Bolder adventure (height and weight minimums apply on aerial attractions).',
      priceWeekday: '$399',
      priceWeekend: '$449',
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
    { q: 'What ages are the parties best for?', a: 'Our parties work great for kids ages 5+. Activities are designed for a range of abilities, and our staff ensures every child has a safe, exciting experience. Height and weight requirements apply to certain attractions.' },
    { q: 'Can I add more than 10 guests?', a: 'Absolutely. Both packages include 10 guests. Additional guests can be added at a per-person rate. Contact our team for large group pricing.' },
    { q: 'What\'s included in the 45-minute table time?', a: 'Your reserved table time includes hot pizza, unlimited drink refills with two drink choices, and space for cake and presents. Our team serves and cleans up — you just enjoy.' },
    { q: 'What if I need to cancel or reschedule?', a: 'We get it — plans change, especially with kids. Contact our Events Team and we\'ll work with you on rescheduling.' },
    { q: 'Do parents need to supervise during activities?', a: 'Our trained staff monitors all attraction areas. Parent passes are included so you can join in or relax and watch. You\'re officially off-duty — but welcome to play!' },
    { q: 'Are there height or weight requirements?', a: 'Some attractions have height and weight requirements for safety. The Base Camp party activities are accessible to most kids. Summit party attractions (ropes course, zip lines) have specific requirements, which can be found on our <a href="/attractions">attractions page</a>. If you have specific requirements or concerns, please <a href="/contact-us">contact us</a> and our events team will help guide you.' },
    { q: 'How far in advance should I book?', a: 'Weekend slots fill fast — we recommend booking at least 2–3 weeks ahead, or more! Especially for Saturday parties. Weekday slots are more flexible.' }
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
