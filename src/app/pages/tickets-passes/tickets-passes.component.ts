import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface TicketTier {
  name: string;
  level: string;
  color: string;
  image: string;
  price: string;
  slug: string;
  blurb: string;
  features: string[];
  note?: string;
  popular?: boolean;
}

interface PassCard {
  name: string;
  price?: string;
  tagline: string;
  badge: string;
  color: string;
  image: string;
  desc: string;
  features: string[];
  note?: string;
  cta: string;
  link: string;
  popular?: boolean;
}

interface MatrixRow {
  label: string;
  sub?: string;
  base: boolean;
  extreme: boolean;
  special?: string;
}

@Component({
  selector: 'app-tickets-passes',
  templateUrl: './tickets-passes.component.html',
  styleUrls: ['./tickets-passes.component.scss']
})
export class TicketsPassesComponent implements OnInit, AfterViewInit {

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home';

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Tickets & Passes',
      description: 'Every ticket and pass at Bolder Adventure Park — Base Camp, Summit and Extreme All Access day tickets, annual passes, summer passes and parent passes. See exactly what each level includes and book online for the best price in Grand Prairie, TX.',
      path: '/tickets-passes',
      keywords: 'Bolder Adventure Park tickets, base camp, summit, extreme all access, day passes, annual pass, summer pass, ticket guide, Grand Prairie tickets'
    });
  }

  /* ── Day ticket tiers (official 3-tier structure) ── */
  dayTickets: TicketTier[] = [
    {
      name: 'Base Camp',
      level: 'Action on the Ground',
      color: '#1ba1e2',
      image: 'assets/All-Attraction/Adventure-nets.jpg',
      price: 'From $24.99',
      slug: 'base-camp',
      blurb: 'All the action on the ground. The perfect starting point for first-timers and younger adventurers.',
      features: [
        'Jump Pad',
        'Adventure Nets',
        'Exploration Playground',
        'Tubing Slides — Speed Shot & Rolling Hills',
        'Blaster Zone',
        'Bumper Cars'
      ],
      note: 'Minimum height 42&Prime;.'
    },
    {
      name: 'All Access',
      level: 'Everything In The Park',
      color: '#e6179e',
      image: 'assets/images/extreme-all-access-pass.jpg',
      price: 'From $34.99',
      slug: 'extreme-all-access',
      blurb: 'The full park. Every ground and aerial attraction — ropes, zip lines, rock climbing, the Mountain Experience, Free Fall drops, Archery, Darts and a $10 Arcade Card.',
      features: [
        'Everything in Base Camp',
        'Ropes Course, Zip Lines & Rock Climbing',
        'Mountain Experience (2 Trails)',
        'Free Fall — Trap Door & Top of the Arch',
        'Archery & Darts',
        '$10 Arcade Card included'
      ],
      note: 'Min height 42&Prime; | 48&Prime; | 54&Prime;. Max weight 88–265 lbs (w/ gear).',
      popular: true
    }
  ];

  /* ── Inclusion guide — faithful to the official chart ── */
  matrixRows: MatrixRow[] = [
    { label: 'Jump Pad',                    sub: '(Socks Additional)', base: true,  extreme: true },
    { label: 'Adventure Nets',              base: true,  extreme: true },
    { label: 'Exploration Play',            sub: '(Playground)',       base: true,  extreme: true },
    { label: 'Tubing Slides',               sub: '(Speed Shot)',       base: true,  extreme: true },
    { label: 'Tubing Slides',               sub: '(Rolling Hills)',    base: true,  extreme: true },
    { label: 'Blaster Zone',                base: true,  extreme: true },
    { label: 'Bumper Cars',                 base: true,  extreme: true },
    { label: 'Ropes Course',                sub: '(4 Levels)',         base: false, extreme: true },
    { label: 'Rock Climbing',               base: false, extreme: true },
    { label: 'Mountain Experience',         sub: '(2 Trails)',         base: false, extreme: true },
    { label: 'Free Fall',                   sub: '(Trap Door)',        base: false, extreme: true },
    { label: 'Free Fall',                   sub: '(Top of the Arch)',  base: false, extreme: true },
    { label: 'Archery',                     base: false, extreme: true },
    { label: 'Darts',                       base: false, extreme: true },
    { label: 'Arcade',                      base: false, extreme: false, special: '$10 Arcade Card' }
  ];

  /* footer restriction bars for the chart */
  restrictions = {
    base:    { height: '42&Prime;',                       weight: '' },
    extreme: { height: '42&Prime; | 48&Prime; | 54&Prime;', weight: '88–265 lbs (w/ gear)' }
  };

  /* ── Annual passes ── */
  annualPasses: PassCard[] = [
    {
      name: 'Annual Blue Pass',
      price: 'Only $89.99',
      tagline: 'Unlimited Ground Level',
      badge: 'Ground Level',
      color: '#1ba1e2',
      image: 'assets/images/Blue-pass.jpg',
      desc: 'Unlimited access to every ground-level attraction, all year round. Pays for itself in just 2–3 visits.',
      features: [
        'Jump Pad & Adventure Nets',
        'Exploration Play Area',
        'Tubing Slides',
        'Blaster Zone',
        'Bumper Cars'
      ],
      cta: 'Get Blue Pass',
      link: '/memberships'
    },
    {
      name: 'Annual Black Diamond Pass',
      price: 'Only $199.99',
      tagline: 'Unlimited All Access',
      badge: 'All Attractions',
      color: '#e6179e',
      popular: true,
      image: 'assets/images/Black-pass.png',
      desc: 'Unlimited access to every ground and aerial attraction in the park, every single day of the year.',
      features: [
        'Everything in the Blue Pass',
        'Ropes Course & Zip Lines*',
        'Mountain Experience & Free Fall',
        'Rock Climbing, Archery & Darts',
        'Exclusive member perks'
      ],
      note: '* Height and weight restrictions apply.',
      cta: 'Get Black Diamond',
      link: '/memberships'
    }
  ];

  /* ── Seasonal & special passes ── */
  specialPasses: PassCard[] = [
    {
      name: 'Summer Pass',
      tagline: 'Unlimited All Summer',
      badge: 'Seasonal',
      color: '#f7b500',
      image: 'assets/carousel-images/Carousel-3.jpg',
      desc: 'Come back as many times as you like throughout the summer season for one great-value price.',
      features: [
        'Unlimited summer visits',
        'Great value for school holidays',
        'Skip the single-ticket queue'
      ],
      cta: 'Get Summer Pass',
      link: '/memberships'
    },
    {
      name: 'Green Parent Pass',
      tagline: 'For Spectators',
      badge: 'Parent / Guardian',
      color: '#16a34a',
      image: 'assets/images/Action-on-the-ground.jpg',
      desc: 'Not jumping in? The discounted Green Parent Pass lets parents and guardians enter the park to watch and cheer on their adventurers.',
      features: [
        'Discounted park entry',
        'Stay close to your group',
        'Waiver still required for entry'
      ],
      note: 'Birthday parties include parent passes — see Birthday Parties for details.',
      cta: 'Book Parent Pass',
      link: '/birthday-parties'
    }
  ];

  goodToKnow = [
    { icon: '📏', title: 'Height & Weight', desc: 'Base Camp from 42&Prime;. All Access aerial attractions use 42&Prime; / 48&Prime; / 54&Prime; minimums, with a max weight of 88–265 lbs (with gear).' },
    { icon: '📝', title: 'Waiver Required', desc: 'Every guest needs a signed waiver to enter. Sign online ahead of time to breeze through check-in.' },
    { icon: '💸', title: 'Best Price Online', desc: 'Booking in advance on our website always gets you the best price — guaranteed. Capacity is limited.' },
    { icon: '🔒', title: 'Lockers On-Site', desc: 'Various sized electronic lockers are available to keep your belongings safe while you play.' }
  ];

  /** Ski-style difficulty diamonds: 1 for the first tier, up to 3 */
  diff(i: number): string {
    return '◆'.repeat(Math.min(i + 1, 3));
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
