import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../../services/seo.service';

export interface EventPackage {
  name: string;
  price: number;
  originalValue?: number;
  label?: string;
  featured?: boolean;
  includes: string[];
  ticketUrl: string;
}

export interface EventData {
  slug: string;
  title: string;
  titleAccent?: string;
  date: string;
  day: string;
  time: string;
  location: string;
  ageRestriction: string;
  status: string;
  statusClass: string;
  statusLabel: string;
  heroImage: string;
  experienceTitle: string;
  experienceBody: string[];
  experienceImages: string[];
  type: 'concert' | 'adult-night';
  targetDate: Date;
  packages?: EventPackage[];
  addOns?: { name: string; price: number }[];
  highlights?: string[];
  galleryImages?: string[];
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  event: EventData | null = null;

  countdownDays = 0;
  countdownHours = 0;
  countdownMinutes = 0;
  countdownSeconds = 0;
  private countdownTimer: any;

  private allEvents: EventData[] = [
    {
      slug: 'mj-dejavu',
      title: 'MJ Dejavu',
      date: 'June 20, 2026',
      day: 'Sat',
      time: '7:00 PM – 11:00 PM',
      location: 'Main Stage',
      ageRestriction: 'All Ages',
      status: 'limited',
      statusClass: 'status-limited',
      statusLabel: 'Limited Slots',
      heroImage: 'assets/MJ Dejavu/0 - HERO IMAGE.jpg',
      type: 'concert',
      targetDate: new Date('2026-06-20T19:00:00'),
      experienceTitle: 'The Experience',
      experienceBody: [
        'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — voted the #1 MJ tribute. Join us at Bolder Adventure Park for a night of incredible music, and enjoy the park before the event starts.',
        'Limited tickets available — book now and don\'t miss the thrilling tribute event.'
      ],
      experienceImages: [
        'assets/MJ Dejavu/Justin as Michael Jackson.jpg',
        'assets/MJ Dejavu/Justin.jpg'
      ],
      packages: [
        {
          name: 'Show Only',
          price: 39,
          includes: [
            'MJ Dejavu Headliner Ticket',
            'DJ After Hours - All-Beets Tribute',
            'General Admission Seating Area'
          ],
          ticketUrl: 'https://ecom.roller.app/bolderadventurepark/liveevents/en-us/product/1978850?_gl=1*17mdhfw*_gcl_aw*R0NMLjE3ODA5MjQ5MjAuQ2owS0NRancwSm5SQmhESkFSSXNBTG9iblhZaE50VmU4LTRZOTM0UUZqQkVieFZTSm8tbXRHRl9EUG96SDY0S2lySVc5ZWlKRm5BQ2Y1MGFBdDh6RUFMd193Y0I.*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODE0MDA4MjUkbzgwJGcxJHQxNzgxNDAxMzM3JGo0NCRsMCRoMA..*_fplc*RVRscXhFeUpreEZpeElaSiUyQlFVWVFuS2hla2xqSmNoM0FqRkZGalFyempXYTFtNDRueHpRVTBBbkp3OGZ3OUJjeGIlMkY3WHBienh1eEt5TzE3eXhtcFRNUmh5clUwSUVZaGhyZlltJTJGaVV6M2RzcmtBZlBYMGtvejFPckJyTUZRJTNEJTNE&date=2026-06-20'
        },
        {
          name: 'Thriller Package',
          price: 69,
          originalValue: 345,
          featured: true,
          label: 'Best Value',
          includes: [
            'MJ Dejavu Headliner Ticket',
            'DJ After Hours - All-Beets Tribute',
            'General Admission Seating Area',
            'Full Day Entrance Pass',
            '2-Hour Unlimited Arcade Card',
            'Free Second Pass to Bolder Again'
          ],
          ticketUrl: 'https://ecom.roller.app/bolderadventurepark/liveevents/en-us/product/1978871?_gl=1*11jcctg*_gcl_aw*R0NMLjE3ODA5MjQ5MjAuQ2owS0NRancwSm5SQmhESkFSSXNBTG9iblhZaE50VmU4LTRZOTM0UUZqQkVieFZTSm8tbXRHRl9EUG96SDY0S2lySVc5ZWlKRm5BQ2Y1MGFBdDh6RUFMd193Y0I.*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODE0MDA4MjUkbzgwJGcxJHQxNzgxNDAxMzM3JGo0NCRsMCRoMA..*_fplc*RVRscXhFeUpreEZpeElaSiUyQlFVWVFuS2hla2xqSmNoM0FqRkZGalFyempXYTFtNDRueHpRVTBBbkp3OGZ3OUJjeGIlMkY3WHBienh1eEt5TzE3eXhtcFRNUmh5clUwSUVZaGhyZlltJTJGaVV6M2RzcmtBZlBYMGtvejFPckJyTUZRJTNEJTNE'
        },
        {
          name: 'VIP Mezzanine Club',
          price: 149,
          originalValue: 495,
          includes: [
            'MJ Dejavu Headliner Ticket',
            'DJ After Hours - All-Beets Tribute',
            'General Admission Seating Area',
            'Full Day Entrance Pass',
            '2-Hour Unlimited Arcade Card',
            'Free Second Pass to Bolder Again',
            'MJ-Themed Catering - Appetizers & Dinner',
            'VIP Seat & Table Service during Concert',
            'VIP Dance Zone Upgrade',
            'Photo with MJ after the Concert'
          ],
          ticketUrl: 'https://ecom.roller.app/bolderadventurepark/liveevents/en-us/product/1978906?_gl=1*11jcctg*_gcl_aw*R0NMLjE3ODA5MjQ5MjAuQ2owS0NRancwSm5SQmhESkFSSXNBTG9iblhZaE50VmU4LTRZOTM0UUZqQkVieFZTSm8tbXRHRl9EUG96SDY0S2lySVc5ZWlKRm5BQ2Y1MGFBdDh6RUFMd193Y0I.*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODE0MDA4MjUkbzgwJGcxJHQxNzgxNDAxMzM3JGo0NCRsMCRoMA..*_fplc*RVRscXhFeUpreEZpeElaSiUyQlFVWVFuS2hla2xqSmNoM0FqRkZGalFyempXYTFtNDRueHpRVTBBbkp3OGZ3OUJjeGIlMkY3WHBienh1eEt5TzE3eXhtcFRNUmh5clUwSUVZaGhyZlltJTJGaVV6M2RzcmtBZlBYMGtvejFPckJyTUZRJTNEJTNE&date=2026-06-20'
        }
      ],
      addOns: [
        { name: 'MJ Dance Zone (first 8 ft around the stage)', price: 68 },
        { name: 'Admission Pass (Bolder Base Camp)', price: 39 },
        { name: 'Arcade Credits ($25 Arcade Card)', price: 25 }
      ],
      galleryImages: [
        'assets/MJ Dejavu/0 - HERO IMAGE.jpg',
        'assets/MJ Dejavu/Crowds.jpg',
        'assets/MJ Dejavu/Justin as Michael Jackson.jpg',
        'assets/MJ Dejavu/Justin.jpg',
        'assets/MJ Dejavu/Stage pic.jpg'
      ]
    },
    {
      slug: 'adult-night-july-2026',
      title: 'Adult Night',
      titleAccent: 'July 2026',
      date: 'July 3, 2026',
      day: 'Fri',
      time: '8:00 PM – 12:00 AM',
      location: 'Whole Park',
      ageRestriction: '18+',
      status: 'open',
      statusClass: 'status-open',
      statusLabel: 'Open Registration',
      heroImage: 'assets/images/Groups1.jpg',
      type: 'adult-night',
      targetDate: new Date('2026-07-03T20:00:00'),
      experienceTitle: 'The Experience',
      experienceBody: [
        'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome to yourselves.',
        'First Friday of the month. Book your tickets in advance to avoid disappointment and guarantee the best price.'
      ],
      experienceImages: [
        'assets/images/Action-on-the-ground.jpg',
        'assets/images/Groups2.jpg'
      ],
      highlights: [
        '18+ only · open until 10 PM',
        'All 10 attractions open',
        'Music & DJ sets all night',
        'No kids\' queues',
        'Full park access included',
        'Free parking'
      ]
    },
    {
      slug: 'adult-night-august-2026',
      title: 'Adult Night',
      titleAccent: 'August 2026',
      date: 'August 7, 2026',
      day: 'Fri',
      time: '8:00 PM – 12:00 AM',
      location: 'Whole Park',
      ageRestriction: '18+',
      status: 'open',
      statusClass: 'status-open',
      statusLabel: 'Open Registration',
      heroImage: 'assets/images/Reviews-events.jpg',
      type: 'adult-night',
      targetDate: new Date('2026-08-07T20:00:00'),
      experienceTitle: 'The Experience',
      experienceBody: [
        'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
        'Book your tickets in advance to avoid disappointment and guarantee the best price.'
      ],
      experienceImages: [
        'assets/images/Thrills-in-the-air.jpg',
        'assets/images/Action-on-the-ground.jpg'
      ],
      highlights: [
        '18+ only · open until 10 PM',
        'All 10 attractions open',
        'Music & DJ sets all night',
        'No kids\' queues',
        'Full park access included',
        'Free parking'
      ]
    }
  ];

  pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }

  get allFeatures(): string[] {
    if (!this.event?.packages?.length) { return []; }
    const last = this.event.packages[this.event.packages.length - 1];
    return last.includes;
  }

  packageHasFeature(pkg: EventPackage, feature: string): boolean {
    return pkg.includes.includes(feature);
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.event = this.allEvents.find(e => e.slug === slug) ?? null;
    if (this.event) {
      const titleFull = this.event.title + (this.event.titleAccent ? ' ' + this.event.titleAccent : '');
      this.seo.update({
        title: titleFull + ' — Live Events',
        description: this.event.experienceBody[0],
        path: '/live-events/' + this.event.slug
      });
      this.startCountdown();
    }
  }

  startCountdown(): void {
    if (!this.event) { return; }
    const target = this.event.targetDate;
    const update = () => {
      const diff = target.getTime() - new Date().getTime();
      if (diff <= 0) {
        this.countdownDays = 0;
        this.countdownHours = 0;
        this.countdownMinutes = 0;
        this.countdownSeconds = 0;
        return;
      }
      this.countdownDays    = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.countdownHours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdownMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.countdownSeconds = Math.floor((diff % (1000 * 60)) / 1000);
    };
    update();
    this.countdownTimer = setInterval(update, 1000);
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
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
    }, 50);
  }

  ngOnDestroy(): void {
    if (this.countdownTimer) { clearInterval(this.countdownTimer); }
  }
}
