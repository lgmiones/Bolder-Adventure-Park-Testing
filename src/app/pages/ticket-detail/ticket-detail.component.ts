import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeoService } from '../../services/seo.service';

interface Inclusion {
  title: string;
  desc: string;
}

interface TicketDetail {
  slug: string;
  name: string;
  level: string;
  color: string;
  price: string;
  heroImage: string;
  intro: string[];
  inclusions: Inclusion[];
  height: string;
  weight: string;
  gallery: string[];
  nextSlug: string;
  nextName: string;
}

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home';
  ticket!: TicketDetail;
  private sub?: Subscription;

  private data: Record<string, TicketDetail> = {
    'base-camp': {
      slug: 'base-camp',
      name: 'Base Camp',
      level: 'Action on the Ground',
      color: '#1ba1e2',
      price: 'From $24.99 + tax',
      heroImage: 'assets/Base-Camp/DSC04232.jpg',
      intro: [
        'Base Camp is where every Bolder adventure begins. It is the perfect starting point for first-timers, families and younger adventurers — all the fun stays firmly on the ground, with no height or aerial gear required.',
        'From bouncing on the Jump Pad to racing down the Tubing Slides and battling it out in the Blaster Zone, there is more than enough here to fill a whole day of play.'
      ],
      inclusions: [
        { title: 'Jump Pad', desc: 'Bounce and launch on the giant inflatable jump pad. Socks required.' },
        { title: 'Adventure Nets', desc: 'Multi-level climbing nets to crawl, climb and explore.' },
        { title: 'Exploration Playground', desc: 'A huge soft-play playground built for younger adventurers.' },
        { title: 'Tubing Slides', desc: 'Speed Shot and Rolling Hills — pick your ride down.' },
        { title: 'Blaster Zone', desc: 'Team-based laser blaster arena. Strategy, speed and chaos.' },
        { title: 'Spin Zone Bumper Cars', desc: 'Crash, spin and laugh with the whole family.' }
      ],
      height: 'Minimum height 42&Prime;',
      weight: 'No weight limit',
      gallery: [
        'assets/Base-Camp/Attractions - Adventure Nets 2.JPG',
        'assets/Base-Camp/DSC02258.jpg',
        'assets/Base-Camp/DSC02560.jpg',
        'assets/Base-Camp/DSC04501.jpg',
        'assets/Base-Camp/DSC07160.jpg',
        'assets/Base-Camp/DSC07707.jpg',
        'assets/Base-Camp/DSC09047.jpg',
        'assets/Base-Camp/DSC09952.jpg'
      ],
      nextSlug: 'extreme-all-access',
      nextName: 'All Access'
    },
    'extreme-all-access': {
      slug: 'extreme-all-access',
      name: 'All Access',
      level: 'Everything In The Park',
      color: '#e6179e',
      price: 'From $34.99 + tax',
      heroImage: 'assets/Extreme All Access/Free Fall-05931.jpg',
      intro: [
        'The full Bolder experience, unlocked. All Access gives you every ground and aerial attraction in the park — plus the things nobody else gets to touch.',
        'Take on Climbing Adventures, the four-trail ropes course and zip lines, scale the Mountain Experience indoor via ferrata, step off the edge on the Free Fall drops, and test your aim at Archery. This is the ultimate day at Bolder.'
      ],
      inclusions: [
        { title: 'Everything in Base Camp', desc: 'All six ground-level attractions are included.' },
        { title: 'Climbing Adventures', desc: '16 climbing elements and 8 rock routes up to 45 feet tall.' },
        { title: 'Ropes Course & Zip Lines', desc: 'Four progressive trails up to 48 feet, with a zip line at the end of each.' },
        { title: 'Mountain Experience (Indoor Via Ferrata)', desc: 'Two trails across four hand-carved rock structures to the summit.' },
        { title: 'Free Fall', desc: 'Trap doors at 35 feet and the Epic Arch jump at 55 feet.' },
        { title: 'Archery', desc: 'Four lanes with real recurve bows and digital scoring.' }
      ],
      height: 'Min height 42&Prime; | 48&Prime; | 54&Prime;',
      weight: 'Max weight 88&ndash;265 lbs (w/ gear)',
      gallery: [
        'assets/Extreme All Access/Attractions - Arcade 1.jpg',
        'assets/Extreme All Access/DSC00033.jpg',
        'assets/Extreme All Access/DSC00164.jpg',
        'assets/Extreme All Access/DSC00194.jpg',
        'assets/Extreme All Access/DSC02994.jpg',
        'assets/Extreme All Access/DSC04617.jpg',
        'assets/Extreme All Access/DSC08185.jpg',
        'assets/Extreme All Access/DSC09861.jpg',
        'assets/Extreme All Access/EPIC-BOLDER-91.jpg'
      ],
      nextSlug: 'base-camp',
      nextName: 'Base Camp'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      const found = this.data[slug];
      if (!found) {
        this.router.navigate(['/tickets-passes']);
        return;
      }
      this.ticket = found;
      this.seo.update({
        title: `${found.name} Ticket`,
        description: `${found.name} at Bolder Adventure Park — ${found.level}. ${found.price}. See everything included and book online for the best price.`,
        path: `/tickets-passes/${found.slug}`,
        keywords: `Bolder ${found.name} ticket, ${found.level}, adventure park pass`
      });
      window.scrollTo({ top: 0, behavior: 'auto' });
      setTimeout(() => this.initReveal(), 60);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.initReveal(), 60);
  }

  private initReveal(): void {
    if (!('IntersectionObserver' in window)) return;
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
