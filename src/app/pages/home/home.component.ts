import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

interface MegaItem {
  title: string;
  subtitle: string;
  label: string;
}

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

  activePlanTab = 'things';
  activeReviewIndex = 0;
  activeVideoUrl: SafeResourceUrl | null = null;
  videoPage = 0;
  readonly videosPerPage = 5;

  constructor(private sanitizer: DomSanitizer, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Bolder Adventure Park',
      description: 'Bolder Adventure Park — 66,000 sq ft indoor adventure park in Grand Prairie, TX. Ropes course, zip lines, climbing, birthday parties & group events.',
      path: '/',
      keywords: 'indoor adventure park, Grand Prairie TX, ropes course, zip lines, rock climbing, birthday parties, family fun'
    });
    this.startCarouselCountdown();
    this.startCarouselAutoPlay();
  }

  tickets: MegaItem[] = [
    { title: 'Daily Tickets', subtitle: 'Fast checkout for today, this weekend, or a planned family day.', label: 'Most direct' },
    { title: 'Current Deals', subtitle: 'Use this for your giveaway, discount, or seasonal campaign.', label: 'Limited time' },
    { title: 'Annual Pass', subtitle: 'Upsell guests from one visit to repeat revenue.', label: 'Best value' },
    { title: 'Birthday Parties', subtitle: 'Simple packages for parents who want less planning stress.', label: 'High converting' },
    { title: 'Group Events', subtitle: 'Schools, camps, churches, teams, and corporate outings.', label: 'Request info' }
  ];

  planTabs = [
    { id: 'things', title: 'Things To Do' },
    { id: 'map', title: 'Park Map' },
    { id: 'tour', title: 'Virtual Tour' },
    { id: 'location', title: 'Location' },
    { id: 'hours', title: 'Hours' },
    { id: 'faq', title: 'FAQ' },
    { id: 'waiver', title: 'Waiver' }
  ];

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

  comparison = [
    { feature: 'Exploration Play Area',     base: true,  summit: true,  extreme: true },
    { feature: 'Adventure Nets',            base: true,  summit: true,  extreme: true },
    { feature: 'Ropes Course',              base: false, summit: true,  extreme: true },
    { feature: 'Climbing Adventure',        base: false, summit: true,  extreme: true },
    { feature: 'Tubing Slides',             base: false, summit: true,  extreme: true },
    { feature: 'Spin Zone Bumper Cars',     base: false, summit: true,  extreme: true },
    { feature: 'Via Ferrata',               base: false, summit: false, extreme: true },
    { feature: 'Zip Line Experience',       base: false, summit: false, extreme: true }
  ];

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

  carouselImages = [
    'Carousel-1.jpg','Carousel-2.jpg','Carousel-3.jpg','Carousel-4.jpg',
    'Carousel-5.jpg','Carousel-10.jpg','Carousel-30.jpg',
  ];

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

  setPlanTab(id: string): void { this.activePlanTab = id; }

  nextReview(): void { this.activeReviewIndex = (this.activeReviewIndex + 1) % this.reviews.length; }
  prevReview(): void { this.activeReviewIndex = (this.activeReviewIndex - 1 + this.reviews.length) % this.reviews.length; }
  goToReview(index: number): void { this.activeReviewIndex = index; }

  ngAfterViewInit(): void {
    const vid = this.heroVideoRef?.nativeElement;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }

  // ── Events Carousel ──────────────────────────────
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
      image: 'assets/MJ Dejavu/0 - HERO IMAGE.png',
      description: 'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — rated the #1 MJ tribute.',
      targetDate: new Date('2026-06-20T19:00:00')
    },
    {
      slug: 'adult-night-july-2026',
      carouselTitle: 'Adult Night', carouselAccent: 'July 2026',
      date: 'July 3, 2026', location: 'Whole Park', ageRestriction: '18+',
      image: 'assets/images/Groups3.jpg',
      description: 'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome.',
      targetDate: new Date('2026-07-03T20:00:00')
    },
    {
      slug: 'adult-night-august-2026',
      carouselTitle: 'Adult Night', carouselAccent: 'August 2026',
      date: 'August 7, 2026', location: 'Whole Park', ageRestriction: '18+',
      image: 'assets/images/Thrills-in-the-air.jpg',
      description: 'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
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
