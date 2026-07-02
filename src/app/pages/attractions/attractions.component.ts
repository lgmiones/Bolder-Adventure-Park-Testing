import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface AttractionCard {
  title: string;
  image: string;
  category: 'base' | 'mountain' | 'ropes';
  desc: string;
}

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Attractions',
      description: 'Explore all attractions at Bolder Adventure Park — ropes course, zip lines, mountain experience, free fall drop, bumper cars, and more in Grand Prairie, TX.',
      path: '/attractions',
      keywords: 'ropes course, zip lines, rock climbing, free fall drop, bumper cars, adventure park attractions'
    });
  }

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home';

  activeTab = 'base';

  tabs = [
    { id: 'base',      label: 'Base Camp' },
    { id: 'allaccess', label: 'All Access' },
    { id: 'all',       label: 'All Attractions' },
  ];

  cards: AttractionCard[] = [
    { title: 'Ropes Course',           image: 'assets/All-Attraction/Ropes-courses.jpg',       category: 'ropes',    desc: '4-level aerial ropes course with zip lines and climbing challenges. Great for all thrill levels.' },
    { title: 'Mountain Experience',    image: 'assets/All-Attraction/Mountain-experience.jpg', category: 'mountain', desc: 'Two mountain trails to explore — featuring the iconic Free Fall Drop at the top.' },
    { title: 'Zip Lines',              image: 'assets/All-Attraction/Zip-lines.jpg',           category: 'ropes',    desc: 'Soar across the park on our epic zip lines. A crowd favorite!' },
    { title: 'Tubing Slides',          image: 'assets/All-Attraction/Tubing-slides.jpg',       category: 'base',     desc: 'Speed down our thrilling tubing slides — Speed Shot or Rolling Hills, your choice.' },
    { title: 'Blaster Zone',           image: 'assets/All-Attraction/Blaster-zone.jpg',        category: 'base',     desc: 'Team-based laser blaster arena. Strategy, speed, and tons of fun.' },
    { title: 'Bumper Cars',            image: 'assets/All-Attraction/Bumper-cars.jpg',         category: 'base',     desc: 'Spin Zone bumper cars for the whole family. Crash, spin, and laugh.' },
    { title: 'Free Fall Drop',         image: 'assets/All-Attraction/Free-fall-drop.jpg',      category: 'mountain', desc: 'The ultimate drop experience. Step off the edge and fall through a trap door or from the top of the arch.' },
    { title: 'Jump Pad',               image: 'assets/All-Attraction/Jump-pads.png',           category: 'base',     desc: 'Bounce and jump on our giant inflatable jump pads. Socks required.' },
    { title: 'Adventure Nets',         image: 'assets/All-Attraction/Adventure-nets.jpg',      category: 'base',     desc: 'Multi-level adventure nets for climbing, crawling, and exploring.' },
    { title: 'Exploration Playground', image: 'assets/All-Attraction/Exploration-play.jpg',    category: 'base',     desc: 'A massive playground for younger adventurers with slides, climbers, and more.' },
  ];

  get filteredCards(): AttractionCard[] {
    if (this.activeTab === 'all') return this.cards;
    // "All Access" = everything Base Camp unlocks PLUS the aerial upgrades
    if (this.activeTab === 'allaccess') {
      return this.cards.filter(c => c.category === 'mountain' || c.category === 'ropes');
    }
    return this.cards.filter(c => c.category === this.activeTab);
  }

  setTab(id: string): void {
    this.activeTab = id;
    setTimeout(() => {
      document.querySelectorAll('.attraction-cards-enhanced .sr:not(.sr-visible)').forEach(el => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transitionDelay = htmlEl.dataset['srDelay'] ?? '0s';
        htmlEl.classList.add('sr-visible');
      });
    }, 50);
  }

  trackBy(_: number, item: AttractionCard): string {
    return this.activeTab + '_' + item.title;
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
