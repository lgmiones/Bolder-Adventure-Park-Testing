import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface MegaItem {
  title: string;
  subtitle: string;
  label: string;
}

interface Experience {
  title: string;
  kicker: string;
  copy: string;
  size?: 'large' | 'wide';
}

interface AttractionCard {
  title: string;
  image: string;
  category: 'base' | 'mountain' | 'ropes';
  link: string;
}

interface PassRow {
  feature: string;
  base: boolean;
  summit: boolean;
  extreme: boolean;
}

interface Review {
  name: string;
  source: string;
  quote: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideoRef!: ElementRef<HTMLVideoElement>;

  activePlanTab = 'things';
  isNavOpen = false;
  isSideMenuPlanOpen = false;
  activeReviewIndex = 0;

  /**
   * Show the intro splash only on first visit per browser session.
   * sessionStorage is cleared when the tab is closed, so the animation
   * replays on a fresh tab but NOT on a page refresh.
   */
  showIntro: boolean;

  activeVideoUrl: SafeResourceUrl | null = null;
  videoPage = 0;
  readonly videosPerPage = 5;

  constructor(private sanitizer: DomSanitizer) {
    const KEY = 'bolder_intro_shown';
    this.showIntro = !sessionStorage.getItem(KEY);
    if (this.showIntro) {
      sessionStorage.setItem(KEY, '1');
    }
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
    this.isSideMenuPlanOpen = false;
  }

  toggleSideMenuPlan(): void {
    this.isSideMenuPlanOpen = !this.isSideMenuPlanOpen;
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

  activities = [
    'Ropes Courses & Zip Lines',
    'Climbing Adventure',
    'Jump Pad',
    'Tubing Slides',
    'Via Ferrata',
    'Exploration Play Area',
    'Adventure Nets',
    'Spin Zone Bumper Cars',
    'Blaster Arena',
    'Free Fall Experience',
    'Arcade',
    'Mining',
    'Archery'
  ];

  events: MegaItem[] = [
    { title: 'Group Events', subtitle: 'Turn a normal outing into a shared adventure.', label: 'Groups' },
    { title: 'Birthdays', subtitle: 'Make it easy for parents to book now.', label: 'Parties' },
    { title: 'Corporate', subtitle: 'Team-building that feels fun, not forced.', label: 'Teams' },
    { title: 'Event FAQ', subtitle: 'Answer common objections before they call.', label: 'Help' }
  ];

  experiences: Experience[] = [
    {
      title: 'Thrills in the Air',
      kicker: 'High-energy hook',
      copy: 'Ropes, zip lines, and climbing experiences create the “I need to try that” moment.',
      size: 'large'
    },
    {
      title: 'Action on the Ground',
      kicker: 'All comfort levels',
      copy: 'Bumper cars, arcade, play areas, and group activities keep everyone included.'
    },
    {
      title: 'Extreme All Access',
      kicker: 'Best upsell',
      copy: 'Show one clear premium path for guests who want the complete experience.',
      size: 'wide'
    }
  ];

  activeAttractionTab = 'all';

  attractionTabs = [
    { id: 'all',      label: 'All Attractions' },
    { id: 'base',     label: 'Base Camp' },
    { id: 'mountain', label: 'Mountain Course' },
    { id: 'ropes',    label: 'Ropes Course' },
  ];

  attractionCards: AttractionCard[] = [
    { title: 'Ropes Course',              image: 'assets/All-Attraction/Ropes-courses.jpg',       category: 'ropes',    link: 'https://newvues.sg-host.com/attractions/ropes-course/' },
    { title: 'Mountain Experience',       image: 'assets/All-Attraction/Mountain-experience.jpg', category: 'mountain', link: 'https://newvues.sg-host.com/attractions/mountain-experience/' },
    { title: 'Zip Line',                  image: 'assets/All-Attraction/Zip-lines.jpg',           category: 'ropes',    link: 'https://newvues.sg-host.com/attractions/zip-line/' },
    { title: 'Tubing Slides',             image: 'assets/All-Attraction/Tubing-slides.jpg',       category: 'base',     link: 'https://newvues.sg-host.com/attractions/tubing-slides/' },
    { title: 'Blaster Zone',              image: 'assets/All-Attraction/Blaster-zone.jpg',        category: 'base',     link: 'https://newvues.sg-host.com/attractions/blaster-zone/' },
    { title: 'Bumper Cars',               image: 'assets/All-Attraction/Bumper-cars.jpg',         category: 'base',     link: 'https://newvues.sg-host.com/attractions/bumper-cars/' },
    { title: 'Free Fall Drop',            image: 'assets/All-Attraction/Free-fall-drop.jpg',      category: 'mountain', link: 'https://newvues.sg-host.com/attractions/free-fall-drop/' },
    { title: 'Jump Pad',                  image: 'assets/All-Attraction/Jump-pads.png',           category: 'base',     link: 'https://newvues.sg-host.com/attractions/jump-pad/' },
    { title: 'Adventure Nets',            image: 'assets/All-Attraction/Adventure-nets.jpg',      category: 'base',     link: 'https://newvues.sg-host.com/attractions/adventure-nets/' },
    { title: 'Exploration Playground',    image: 'assets/All-Attraction/Exploration-play.jpg',    category: 'base',     link: 'https://newvues.sg-host.com/attractions/exploration-playground/' },
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

  passes = [
    {
      name: 'Base Camp',
      price: 'From $24.99',
      copy: 'Best for a quick visit, younger guests, or families starting with the basics.',
      cta: 'Choose Base Camp',
      features: ['Exploration play', 'Adventure nets', 'Arcade add-ons']
    },
    {
      name: 'Summit',
      price: 'From $39.99',
      copy: 'The recommended middle option with strong value and easier decision-making.',
      cta: 'Choose Summit',
      popular: true,
      features: ['Ropes course', 'Climbing adventure', 'Tubing slides']
    },
    {
      name: 'Extreme',
      price: 'From $54.99',
      copy: 'The premium pass for guests who want the full adventure experience.',
      cta: 'Choose Extreme',
      features: ['Zip line experiences', 'Via Ferrata', 'All major attractions']
    }
  ];

  comparison: PassRow[] = [
    { feature: 'Exploration Play Area', base: true, summit: true, extreme: true },
    { feature: 'Adventure Nets', base: true, summit: true, extreme: true },
    { feature: 'Ropes Course', base: false, summit: true, extreme: true },
    { feature: 'Climbing Adventure', base: false, summit: true, extreme: true },
    { feature: 'Tubing Slides', base: false, summit: true, extreme: true },
    { feature: 'Spin Zone Bumper Cars', base: false, summit: true, extreme: true },
    { feature: 'Via Ferrata', base: false, summit: false, extreme: true },
    { feature: 'Zip Line Experience', base: false, summit: false, extreme: true }
  ];

  reviews: Review[] = [
    {
      name: 'Chelsea D.',
      source: 'Group Events',
      quote: 'This place is amazing, looks crazy big when you get inside.. the slide was great and all the kids had a blast..'
    },
    {
      name: 'Whitney C.',
      source: 'Mountain Experience',
      quote: 'This place is AWESOME!!! My Son loved the blaster, trampoline, bumper cars, game videos! Staff is great and friendly! I greatly recommend this place!'
    },
    {
      name: 'Kenzie B.',
      source: 'Via Ferrata',
      quote: 'Bolder has become one of my daughter’s favorite places to hang out with her friends. She enjoys the blue pass because it gives her opportunities to enjoy her favorite activities.'
    },
    {
      name: 'Jasmine R.',
      source: 'Birthday Parties',
      quote: 'The via ferrata was the highlight of my visit. Challenging, exciting, and safe thanks to the excellent guidance from the instructors. The views from above were unforgettable!'
    }
  ];

    reviewImages = [
    { file: 'Reviews-events.jpg',             tag: 'Events',              color: '#f45113' },
    { file: 'Reviews-mountain-experience.jpg', tag: 'Mountain Experience', color: '#4caf50' },
    { file: 'Reviews-via-ferrata.jpg',         tag: 'Via Ferrata',         color: '#119ee8' },
    { file: 'Reviews-birthday-parties.jpg',    tag: 'Birthday Parties',    color: '#ff8a00' },
  ];

    carouselImages = [
      'Carousel-1.jpg',
      'Carousel-2.jpg',
      'Carousel-3.jpg',
      'Carousel-4.jpg',
      'Carousel-5.jpg',
      'Carousel-10.jpg',
      'Carousel-30.jpg',
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

  prevVideoPage(): void {
    if (this.videoPage > 0) this.videoPage--;
  }

  nextVideoPage(): void {
    if (this.videoPage < this.maxVideoPage) this.videoPage++;
  }

  openVideo(id: string): void {
    this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
    );
  }

  closeVideo(): void {
    this.activeVideoUrl = null;
  }

  shareVideo(id: string, event: MouseEvent): void {
    event.stopPropagation();
    const url = `https://www.youtube.com/shorts/${id}`;
    if (navigator.share) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
    }
  }

  setPlanTab(id: string): void {
    this.activePlanTab = id;
  }

  nextReview(): void {
    this.activeReviewIndex = (this.activeReviewIndex + 1) % this.reviews.length;
  }

  prevReview(): void {
    this.activeReviewIndex = (this.activeReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }

  goToReview(index: number): void {
    this.activeReviewIndex = index;
  }

  ngAfterViewInit(): void {
    const vid = this.heroVideoRef.nativeElement;
    vid.muted = true;
    vid.play().catch(() => {});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = el.dataset['srDelay'] ?? '0s';
            el.classList.add('sr-visible');
            observer.unobserve(el); // fire once — avoids layout churn on scroll-up
          }
        });
      },
      { threshold: 0.13, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.sr').forEach(el => observer.observe(el));

  }
}
