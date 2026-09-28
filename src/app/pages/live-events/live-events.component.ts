import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private seo: SeoService) {}

  activeFilter = 'all';
  activeTab = 'all';

  // Carousel state
  carouselIndex = 0;
  countdownDays = 0;
  countdownHours = 0;
  countdownMinutes = 0;
  countdownSeconds = 0;
  private countdownTimer: any;
  private autoPlayTimer: any;

  events = [
    {
      slug: 'mj-dejavu',
      title: 'MJ Dejavu',
      carouselTitle: 'MJ',
      carouselAccent: 'Dejavu',
      date: 'June 20, 2026',
      dateLabel: 'Jun 20',
      time: '7:00 PM – 11:00 PM',
      location: 'Main Stage',
      type: 'concerts',
      ageRestriction: 'All Ages',
      badge: 'Limited Slots',
      badgeClass: 'badge-limited',
      image: 'assets/MJ Dejavu/0 - HERO IMAGE.jpg',
      description: 'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — rated the #1 MJ tribute.',
      targetDate: new Date('2026-06-20T19:00:00'),
      ticketUrl: 'https://ecom.roller.app/bolderadventurepark/liveevents/en-us/home'
    },
    {
      slug: 'adult-night-july-2026',
      title: 'Adult Night July 2026',
      carouselTitle: 'Adult Night',
      carouselAccent: 'July 2026',
      date: 'July 3, 2026',
      dateLabel: 'Jul 3',
      time: '8:00 PM – 12:00 AM',
      location: 'Whole Park',
      type: 'adult-nights',
      ageRestriction: '18+',
      badge: 'Open Registration',
      badgeClass: 'badge-open',
      image: 'assets/images/Groups3.jpg',
      description: 'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome.',
      targetDate: new Date('2026-07-03T20:00:00'),
      ticketUrl: 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home'
    },
    {
      slug: 'adult-night-august-2026',
      title: 'Adult Night August 2026',
      carouselTitle: 'Adult Night',
      carouselAccent: 'August 2026',
      date: 'August 7, 2026',
      dateLabel: 'Aug 7',
      time: '8:00 PM – 12:00 AM',
      location: 'Whole Park',
      type: 'adult-nights',
      ageRestriction: '18+',
      badge: 'Open Registration',
      badgeClass: 'badge-open',
      image: 'assets/images/Reviews-events.jpg',
      description: 'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
      targetDate: new Date('2026-08-07T20:00:00'),
      ticketUrl: 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home'
    }
  ];

  prevSlide(): void {
    this.carouselIndex = (this.carouselIndex - 1 + this.events.length) % this.events.length;
    this.startCountdown();
    this.resetAutoPlay();
  }

  nextSlide(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.events.length;
    this.startCountdown();
    this.resetAutoPlay();
  }

  goToSlide(i: number): void {
    this.carouselIndex = i;
    this.startCountdown();
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayTimer = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.events.length;
      this.startCountdown();
    }, 5000);
  }

  resetAutoPlay(): void {
    if (this.autoPlayTimer) clearInterval(this.autoPlayTimer);
    this.startAutoPlay();
  }

  startCountdown(): void {
    if (this.countdownTimer) clearInterval(this.countdownTimer);
    const update = () => {
      const target = this.events[this.carouselIndex].targetDate.getTime();
      const now = Date.now();
      const diff = Math.max(0, target - now);
      this.countdownDays    = Math.floor(diff / 86400000);
      this.countdownHours   = Math.floor((diff % 86400000) / 3600000);
      this.countdownMinutes = Math.floor((diff % 3600000)  / 60000);
      this.countdownSeconds = Math.floor((diff % 60000)    / 1000);
    };
    update();
    this.countdownTimer = setInterval(update, 1000);
  }

  ngOnInit(): void {
    this.startCountdown();
    this.startAutoPlay();
  }

  challenges = [
    { name: 'Mountain Experience', image: 'assets/All-Attraction/Mountain-experience.jpg' },
    { name: 'Ropes Courses', image: 'assets/All-Attraction/Ropes-courses.jpg' },
    { name: 'Zip Lines', image: 'assets/All-Attraction/Zip-lines.jpg' },
    { name: 'Timber Climb', image: 'assets/All-Attraction/Adventure-nets.jpg' },
    { name: 'Free Fall Drop', image: 'assets/All-Attraction/Free-fall-drop.jpg' }
  ];

  timeline = [
    { date: 'Jun 20', year: '2026', title: 'MJ Dejavu', type: 'Concert', location: 'Main Stage', time: '7:00 PM – 11:00 PM', slug: 'mj-dejavu', category: 'concerts' },
    { date: 'Jul 3', year: '2026', title: 'Adult Night July 2026', type: 'Adult Night', location: 'Whole Park', time: '8:00 PM – 12:00 AM', slug: 'adult-night-july-2026', category: 'adult-nights' },
    { date: 'Aug 7', year: '2026', title: 'Adult Night August 2026', type: 'Adult Night', location: 'Whole Park', time: '8:00 PM – 12:00 AM', slug: 'adult-night-august-2026', category: 'adult-nights' }
  ];

  groupOptions = [
    {
      title: 'School Trips',
      image: 'assets/images/Groups1.jpg',
      desc: 'Give your students an unforgettable adventure day with exclusive group rates and dedicated staff.',
      link: '/group-events/field-trips'
    },
    {
      title: 'Church Groups',
      image: 'assets/images/Groups2.jpg',
      desc: 'Unite your congregation through shared challenges and unforgettable memories at Bolder.',
      link: '/group-events'
    },
    {
      title: 'Sports Teams',
      image: 'assets/images/Groups3.jpg',
      desc: 'Build team chemistry through action, competition, and shared victory. Perfect for pre-season bonding.',
      link: '/group-events'
    }
  ];

  galleryImages = [
    'assets/MJ Dejavu/0 - HERO IMAGE.jpg',
    'assets/MJ Dejavu/Crowds.jpg',
    'assets/MJ Dejavu/Justin as Michael Jackson.jpg',
    'assets/images/Thrills-in-the-air.jpg',
    'assets/MJ Dejavu/Justin.jpg',
    'assets/images/Action-on-the-ground.jpg',
    'assets/MJ Dejavu/Stage pic.jpg',
    'assets/carousel-images/Carousel-1.jpg'
  ];

  filters = [
    { label: 'All Events', value: 'all' },
    { label: 'Adult Nights', value: 'adult-nights' },
    { label: 'Concerts', value: 'concerts' }
  ];

  tabs = [
    { label: 'All', value: 'all' },
    { label: 'Concerts', value: 'concerts' },
    { label: 'Adult Nights', value: 'adult-nights' }
  ];

  get filteredTimeline() {
    if (this.activeTab === 'all') return this.timeline;
    return this.timeline.filter(e => e.category === this.activeTab);
  }

  get filteredEvents() {
    if (this.activeFilter === 'all') return this.events;
    return this.events.filter(e => e.type === this.activeFilter);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    setTimeout(() => this.observeSr(), 50);
  }

  setTab(tab: string): void {
    this.activeTab = tab;
    setTimeout(() => this.observeSr(), 50);
  }

  pad(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }

  private observeSr(): void {
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
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.observeSr(), 50);
  }

  ngOnDestroy(): void {
    clearInterval(this.countdownTimer);
    clearInterval(this.autoPlayTimer);
  }
}
