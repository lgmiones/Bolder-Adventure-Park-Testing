import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

interface AttractionCard {
  title: string;
  image: string;
  category: 'base' | 'mountain' | 'ropes';
  link: string;
}

interface Review {
  name: string;
  source: string;
  quote: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('passRail') passRailRef!: ElementRef<HTMLDivElement>;
  @ViewChild('celRail') celRailRef!: ElementRef<HTMLDivElement>;

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home';

  /* Parties & Groups — angular collage blocks */
  celebrate = [
    {
      badge: 'Birthdays',
      title: 'Throw An Unforgettable Birthday Party Without Lifting A Finger',
      desc: 'All-inclusive adventure parties starting at less than $33 per child with attractions, pizza, drinks, and clean-up handled so you can actually enjoy the day.',
      color: '#f45113',
      link: '/birthday-parties',
      cta: 'Birthday Parties',
      watermark: 'PARTIES',
      reverse: false,
      chips: ['Pizza & Drinks', 'All Attractions', 'Clean-Up Handled'],
      images: [
        'assets/images/Birthday-parties.jpg',
        'assets/images/Parties1.png',
        'assets/images/Parties2.png',
        'assets/images/Parties3.jpg'
      ]
    },
    {
      badge: 'Groups',
      title: 'Plan A Group Event With A Difference',
      desc: 'Planning a group event? Skip the ordinary. Bolder turns field trips, corporate outings, and celebrations into stories people won\'t stop sharing.',
      color: '#119ee8',
      link: '/group-events',
      cta: 'Group & Corporate Events',
      watermark: 'GROUPS',
      reverse: true,
      chips: ['Field Trips', 'Corporate Outings', 'Team Building'],
      images: [
        'assets/images/Group-events.jpg',
        'assets/images/Groups1.jpg',
        'assets/images/Groups2.jpg',
        'assets/images/Groups3.jpg'
      ]
    }
  ];

  scrollCelebrate(dir: number): void {
    const el = this.celRailRef?.nativeElement;
    if (!el) return;
    const card = el.querySelector('.cel-card') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  /* TICKETS & PASSES pricing carousel - replace "$00.00" with real prices */
  passes = [
    { name: 'Base Camp', level: 'Action on the Ground', color: '#1ba1e2', image: 'assets/Ticketing pic/Photo A1.jpg', priceFrom: 'From', price: '$24.99', features: ['Jump Pad & Adventure Nets', 'Tubing Slides & Playground', 'Blaster Zone & Bumper Cars'], cta: 'Base Camp Details', slug: 'base-camp', link: '' },
    { name: 'All Access', level: 'Everything In The Park', color: '#e6179e', image: 'assets/Ticketing pic/Photo A2.jpg', priceFrom: 'From', price: '$34.99', features: ['Everything in Base Camp', 'Ropes, Zip Lines & Climbing', 'Mountain, Free Fall & $10 Arcade'], cta: 'All Access Details', featured: true, slug: 'extreme-all-access', link: '' },
    { name: 'Birthday Parties', level: 'Celebrate', color: '#e6179e', image: 'assets/Ticketing pic/Photo A3.jpg', priceFrom: '', price: '', features: ['Private party rooms', 'Dedicated party host', 'Food & drink packages'], cta: 'Plan a Party', slug: '', link: '/birthday-parties' },
    { name: 'Groups & Events', level: 'Get Together', color: '#1ba1e2', image: 'assets/Ticketing pic/Photo A4.jpg', priceFrom: '', price: '', features: ['10+ guest discounts', 'Schools, teams & churches', 'Custom group packages'], cta: 'Group Bookings', slug: '', link: '/group-events' },
    { name: 'Live At Bolder', level: 'Live Events', color: '#f7b500', image: 'assets/Ticketing pic/Photo A5.jpg', priceFrom: '', price: '', features: ['Concerts & tribute acts', 'Adult-only nights', 'See the full lineup'], cta: "See What's On", slug: '', link: '/live-events' }
  ];

  scrollPasses(dir: number): void {
    const el = this.passRailRef?.nativeElement;
    if (!el) return;
    const card = el.querySelector('.tk-card') as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  activeReviewIndex = 0;

  constructor(private sanitizer: DomSanitizer, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Bolder Adventure Park',
      description: 'Bolder Adventure Park - 66,000 sq ft indoor adventure park in Grand Prairie, TX. Ropes course, zip lines, climbing, birthday parties & group events.',
      path: '/',
      keywords: 'indoor adventure park, Grand Prairie TX, ropes course, zip lines, rock climbing, birthday parties, family fun'
    });
    this.startCarouselCountdown();
    this.startCarouselAutoPlay();
  }

  activeAttractionTab = 'all';

  attractionTabs = [
    { id: 'all',      label: 'All Attractions' },
    { id: 'base',     label: 'Base Camp' },
    { id: 'mountain', label: 'Mountain Course' },
    { id: 'ropes',    label: 'Ropes Course' },
  ];

  attractionCards: AttractionCard[] = [
    { title: 'Ropes Course',           image: 'assets/All-Attraction/Ropes-courses.jpg',       category: 'ropes',    link: '/attractions' },
    { title: 'Mountain Experience',    image: 'assets/All-Attraction/Mountain-experience.jpg', category: 'mountain', link: '/attractions' },
    { title: 'Zip Line',               image: 'assets/All-Attraction/Zip-lines.jpg',           category: 'ropes',    link: '/attractions' },
    { title: 'Tubing Slides',          image: 'assets/All-Attraction/Tubing-slides.jpg',       category: 'base',     link: '/attractions' },
    { title: 'Blaster Zone',           image: 'assets/All-Attraction/Blaster-zone.jpg',        category: 'base',     link: '/attractions' },
    { title: 'Bumper Cars',            image: 'assets/All-Attraction/Bumper-cars.jpg',         category: 'base',     link: '/attractions' },
    { title: 'Free Fall Drop',         image: 'assets/All-Attraction/Free-fall-drop.jpg',      category: 'mountain', link: '/attractions' },
    { title: 'Jump Pad',               image: 'assets/All-Attraction/Jump-pads.png',           category: 'base',     link: '/attractions' },
    { title: 'Adventure Nets',         image: 'assets/All-Attraction/Adventure-nets.jpg',      category: 'base',     link: '/attractions' },
    { title: 'Exploration Playground', image: 'assets/All-Attraction/Exploration-play.jpg',    category: 'base',     link: '/attractions' },
  ];

  get filteredAttractions(): AttractionCard[] {
    if (this.activeAttractionTab === 'all') return this.attractionCards;
    return this.attractionCards.filter(c => c.category === this.activeAttractionTab);
  }

  setAttractionTab(id: string): void {
    this.activeAttractionTab = id;
  }

  trackByAttraction(_: number, item: AttractionCard): string {
    return this.activeAttractionTab + '_' + item.title;
  }

  reviews: Review[] = [
    { name: 'Chelsea D.',  source: 'Group Events',       quote: 'This place is amazing, looks crazy big when you get inside.. the slide was great and all the kids had a blast..' },
    { name: 'Whitney C.',  source: 'Mountain Experience', quote: 'This place is AWESOME!!! My Son loved the blaster, trampoline, bumper cars, game videos! Staff is great and friendly!' },
    { name: 'Kenzie B.',   source: 'Via Ferrata',         quote: "Bolder has become one of my daughter's favorite places to hang out. She enjoys the blue pass because it gives her unlimited activities." },
    { name: 'Jasmine R.',  source: 'Birthday Parties',    quote: 'The via ferrata was the highlight of my visit. Challenging, exciting, and safe. The views from above were unforgettable!' }
  ];

  reviewImages = [
    { file: 'Reviews-events.jpg',             tag: 'Events',              color: '#f45113' },
    { file: 'Reviews-mountain-experience.jpg', tag: 'Mountain Experience', color: '#4caf50' },
    { file: 'Reviews-via-ferrata.jpg',         tag: 'Via Ferrata',         color: '#119ee8' },
    { file: 'Reviews-birthday-parties.jpg',    tag: 'Birthday Parties',    color: '#ff8a00' },
  ];

  nextReview(): void { this.activeReviewIndex = (this.activeReviewIndex + 1) % this.reviews.length; }
  prevReview(): void { this.activeReviewIndex = (this.activeReviewIndex - 1 + this.reviews.length) % this.reviews.length; }
  goToReview(index: number): void { this.activeReviewIndex = index; }

  // YouTube Shorts reel
  activeVideoUrl: SafeResourceUrl | null = null;
  videoPage = 0;
  readonly videosPerPage = 5;

  videos = [
    { id: 'h2UZdBha4X8', title: 'Longest Zip Line in the Park' },
    { id: '8A8uiUUt92E', title: 'Day at Bolder Adventure Park!' },
    { id: 'KPIuG6osxGU', title: 'New Attraction: The Bolder Bounce Pad' },
    { id: '4dz7RBSOl2Y', title: 'Parents — Summer Camp Your Kids Will Love' },
    { id: 'dbFyqjz_iPo', title: 'Epic Indoor Mountain Climbing Challenge' },
  ];

  get visibleVideos() {
    const start = this.videoPage * this.videosPerPage;
    return this.videos.slice(start, start + this.videosPerPage);
  }

  get maxVideoPage() {
    return Math.ceil(this.videos.length / this.videosPerPage) - 1;
  }

  prevVideoPage(): void { if (this.videoPage > 0) this.videoPage--; }
  nextVideoPage(): void { if (this.videoPage < this.maxVideoPage) this.videoPage++; }

  openVideo(id: string): void {
    this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
    );
  }

  closeVideo(): void { this.activeVideoUrl = null; }

  shareVideo(id: string, event: MouseEvent): void {
    event.stopPropagation();
    const url = `https://www.youtube.com/shorts/${id}`;
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
    }
  }

  ngAfterViewInit(): void {
    const vid = this.heroVideoRef?.nativeElement;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
    setTimeout(() => this.animateCounters(), 60);
  }

  /* Count-up stat numbers when they scroll into view */
  private animateCounters(): void {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.sh-num'));
    if (!els.length || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          this.runCount(e.target as HTMLElement);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.45 });
    els.forEach(el => obs.observe(el));
  }

  private runCount(el: HTMLElement): void {
    const target = parseFloat(el.dataset['count'] || '0');
    const suffix = el.dataset['suffix'] || '';
    const comma = el.dataset['format'] === 'comma';
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = (comma ? val.toLocaleString() : String(val)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Events Carousel
  carouselIndex = 0;
  carouselCountdownDays = 0;
  carouselCountdownHours = 0;
  carouselCountdownMinutes = 0;
  carouselCountdownSeconds = 0;
  private carouselCountdownTimer: any;
  private carouselAutoPlayTimer: any;

  carouselEvents = [
    {
      slug: 'mj-dejavu',
      carouselTitle: 'MJ', carouselAccent: 'Dejavu',
      date: 'June 20, 2026', location: 'Main Stage', ageRestriction: 'All Ages',
      image: 'assets/MJ Dejavu/0 - HERO IMAGE.jpg',
      description: 'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas - rated the #1 MJ tribute.',
      targetDate: new Date('2026-06-20T19:00:00')
    },
    {
      slug: 'adult-night-july-2026',
      carouselTitle: 'Adult Night', carouselAccent: 'July 2026',
      date: 'July 3, 2026', location: 'Whole Park', ageRestriction: '18+',
      image: 'assets/images/Groups3.jpg',
      description: 'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids lines - just you, your crew, and the whole dome.',
      targetDate: new Date('2026-07-03T20:00:00')
    },
    {
      slug: 'adult-night-august-2026',
      carouselTitle: 'Adult Night', carouselAccent: 'August 2026',
      date: 'August 7, 2026', location: 'Whole Park', ageRestriction: '18+',
      image: 'assets/images/Thrills-in-the-air.jpg',
      description: 'First-Friday takeover, round two. Climb, zip, and race the slides - adults only. Every attraction open, music up, kids lines gone.',
      targetDate: new Date('2026-08-07T20:00:00')
    }
  ];

  padNum(n: number): string { return n < 10 ? '0' + n : '' + n; }

  prevCarousel(): void {
    this.carouselIndex = (this.carouselIndex - 1 + this.carouselEvents.length) % this.carouselEvents.length;
    this.startCarouselCountdown(); this.resetCarouselAutoPlay();
  }
  nextCarousel(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselEvents.length;
    this.startCarouselCountdown(); this.resetCarouselAutoPlay();
  }
  goToCarousel(i: number): void {
    this.carouselIndex = i;
    this.startCarouselCountdown(); this.resetCarouselAutoPlay();
  }

  startCarouselAutoPlay(): void {
    this.carouselAutoPlayTimer = setInterval(() => {
      this.carouselIndex = (this.carouselIndex + 1) % this.carouselEvents.length;
      this.startCarouselCountdown();
    }, 5000);
  }
  resetCarouselAutoPlay(): void {
    if (this.carouselAutoPlayTimer) clearInterval(this.carouselAutoPlayTimer);
    this.startCarouselAutoPlay();
  }

  startCarouselCountdown(): void {
    if (this.carouselCountdownTimer) clearInterval(this.carouselCountdownTimer);
    const update = () => {
      const diff = this.carouselEvents[this.carouselIndex].targetDate.getTime() - Date.now();
      if (diff <= 0) { this.carouselCountdownDays = this.carouselCountdownHours = this.carouselCountdownMinutes = this.carouselCountdownSeconds = 0; return; }
      this.carouselCountdownDays    = Math.floor(diff / 86400000);
      this.carouselCountdownHours   = Math.floor((diff % 86400000) / 3600000);
      this.carouselCountdownMinutes = Math.floor((diff % 3600000) / 60000);
      this.carouselCountdownSeconds = Math.floor((diff % 60000) / 1000);
    };
    update();
    this.carouselCountdownTimer = setInterval(update, 1000);
  }

  ngOnDestroy(): void {
    if (this.carouselCountdownTimer) clearInterval(this.carouselCountdownTimer);
    if (this.carouselAutoPlayTimer) clearInterval(this.carouselAutoPlayTimer);
  }
}
