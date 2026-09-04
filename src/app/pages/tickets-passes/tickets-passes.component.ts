import { Component, AfterViewInit, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
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

interface IncludedAttraction {
  title: string;
  image: string;
  level: string;
  accent: string;
  specs: string[];
  experience: string;
}

@Component({
  selector: 'app-tickets-passes',
  templateUrl: './tickets-passes.component.html',
  styleUrls: ['./tickets-passes.component.scss']
})
export class TicketsPassesComponent implements OnInit, AfterViewInit, OnDestroy {

  readonly bookUrl = 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?utm_source=bolder-ab-test&utm_medium=website&utm_campaign=bolder-ab-test';
  @ViewChild('attModal') attModalRef?: ElementRef<HTMLElement>;

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
      price: 'From $24.99 + tax',
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
      image: 'assets/All-Attraction/Zip-lines.jpg',
      price: 'From $34.99 + tax',
      slug: 'extreme-all-access',
      blurb: 'The full park. Every ground and aerial attraction — Climbing Adventures, the ropes course and zip lines, the Mountain Experience indoor via ferrata, Free Fall drops and Archery.',
      features: [
        'Everything in Base Camp',
        'Climbing Adventures',
        'Ropes Course & Zip Lines',
        'Mountain Experience (Indoor Via Ferrata)',
        'Free Fall',
        'Archery'
      ],
      note: 'Min height 42&Prime; | 48&Prime; | 54&Prime;. Max weight 88–265 lbs (w/ gear).',
      popular: true
    }
  ];

  /* ── Inclusion guide — faithful to the official chart ── */
  matrixRows: MatrixRow[] = [
    { label: 'Exploration Playground',      base: true,  extreme: true },
    { label: 'Adventure Nets',              base: true,  extreme: true },
    { label: 'Jump Pad',                    sub: '(Socks Additional)', base: true,  extreme: true },
    { label: 'Spin Zone Bumper Cars',       base: true,  extreme: true },
    { label: 'Tubing Slides',               sub: '(Speed & Rolling Hills)', base: true,  extreme: true },
    { label: 'Blaster Zone',                base: true,  extreme: true },
    { label: 'Climbing Adventures',         sub: '(8 Rock Routes)',    base: false, extreme: true },
    { label: 'Ropes Course & Zip Lines',    sub: '(4 Trails)',         base: false, extreme: true },
    { label: 'Mountain Experience',         sub: '(Indoor Via Ferrata)', base: false, extreme: true },
    { label: 'Free Fall',                   sub: '(Trap Door & Arch)', base: false, extreme: true },
    { label: 'Archery',                     base: false, extreme: true }
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

/* SECTION D — "What's Included", grouped by package (from Attractions Guide) */
  includedBaseCamp: IncludedAttraction[] = [
    { title: "Tubing Slides", image: "assets/All-Attraction/Tubing-slides.jpg", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["200 feet long, 4 stories tall", "Two slide options: Speed (straight) and Rolling Hills", "Real snow tubes on a synthetic dry surface", "Minimum height: 42\""], experience: "Strap into a real snow tube and hold on tight \u2014 Bolder's Tubing Slides send you flying down 200 feet of pure adrenaline across four stories of drop. Choose the Speed slide for a straight shot of fast-lane thrills, or take on the Rolling Hills version for a wild ride you won't see coming. Either way, you'll be racing back to the top before you even reach the bottom." },
    { title: "Blaster Zone", image: "assets/All-Attraction/Blaster-zone.jpg", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["Team vs. team battle in a themed abandoned mountain town", "Two teams: The Prospectors vs. The Dynomites", "Custom Bazooka Ball launchers \u2014 shoot soft rock-shaped balls", "Score by hitting battlefield targets or opponents' vests"], experience: "Welcome to the Blaster Zone \u2014 an abandoned mountain town where two rival teams go to war. Load up your Bazooka Ball launcher, pick your side \u2014 the Prospectors or the Dynomites \u2014 and battle across the river for battlefield glory. It's part strategy, part chaos, and 100% the most fun you'll have with a launcher the whole family can play." },
    { title: "Spin Zone Bumper Cars", image: "assets/All-Attraction/Bumper-cars.jpg", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["Fully enclosed bumper car arena", "Special \"spin zone\" triggers send cars into a wild spin", "Minimum height: 42\" to ride independently", "Toddler seat available for riders under 42\" (with adult)"], experience: "Spin Zone takes classic bumper cars to a whole new level \u2014 hit the right spot and your car goes into a wild, uncontrollable spin that'll have everyone laughing. Whether you're a fearless driver hunting for collisions or a little one riding shotgun, the arena delivers non-stop chaos and smiles for the whole family." },
    { title: "Jump Pad", image: "assets/All-Attraction/Jump-pads.png", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["1,500 sq ft of inflatable jump surface (30 ft x 50 ft)", "Giant flat inflatable tubes and pillows", "Open to all ages \u2014 the whole family can jump together", "Safety socks required"], experience: "The Jump Pad is 1,500 square feet of bouncy, inflatable fun that the whole family can enjoy together \u2014 no age limits, just pure jumping joy. Land on giant inflatable pillows, find your bounce, and let loose on one of the biggest jump surfaces in the park." },
    { title: "Adventure Nets", image: "assets/All-Attraction/Adventure-nets.jpg", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["7 interconnected treehouses spanning the park", "Fully enclosed net bridges, tunnels, and ladders", "Large ball pit and 2 slides", "Highest treehouse: 40 feet \u2014 panoramic park views"], experience: "Adventure Nets is the ultimate sky-high roaming experience \u2014 seven treehouses connected by a web of tunnels, bridges, and ladders that dare you to find your way through. Crawl, climb, and scramble your way up to 40 feet in the air for a bird's-eye view of the entire park before diving into the massive ball pit below." },
    { title: "Exploration Playground", image: "assets/All-Attraction/Exploration-play.jpg", level: "Base Camp \u00b7 Level 01", accent: "#1ba1e2", specs: ["3-story indoor play structure", "Multiple slides and play areas on every level", "Dedicated Toddler Zone for children under 42\"", "Best suited for ages 10 and under", "Height limit: 60\""], experience: "Three stories of pure kid paradise, the Exploration Playground is where little adventurers run, climb, slide, and explore to their heart's content. With multiple slides, play zones across every level, and a dedicated Toddler Zone for the youngest explorers, there's the perfect challenge waiting for every age. Parents, grab a seat \u2014 they won't want to leave." }
  ];

  includedAllAccess: IncludedAttraction[] = [
    { title: "Climbing Adventures", image: "assets/All-Attraction/Climbing-adventures.jpg", level: "All Access \u00b7 Level 02", accent: "#e6179e", specs: ["16 unique climbing elements throughout the park", "8 realistic rock climbing routes up to 45 feet tall", "Bag jump, cargo monkey bridges, cube climbs, race walls & more", "Minimum height: 42\" | Maximum weight: 265 lbs"], experience: "With 16 unique climbing adventures ranging from realistic 45-foot rock faces to bag jumps, race walls, and cargo monkey bridges, Climbing Adventures has a challenge for every skill level and personality. Pick your climb, trust the gear, and find out what you're made of." },
    { title: "Ropes Course & Zip Lines", image: "assets/All-Attraction/Zip-lines.jpg", level: "All Access \u00b7 Level 02", accent: "#e6179e", specs: ["4 progressive trails: Bobcat | Wolf | Grizzly | Eagle", "Highest point: 48 feet \u00b7 Longest zip line: 100 feet", "Zip lines at the end of every trail", "Click-It continuous lifeline \u2014 always securely clipped in", "Min height: 42\" with companion, 48\" solo, 54\" (Grizzly/Eagle)", "Maximum weight: 265 lbs (with gear)"], experience: "Four trails. Four levels. One incredible view from 48 feet in the air. Bolder's Ropes Course takes you from first-time adventurer on the Bobcat trail all the way to the breathtaking Eagle \u2014 the highest and most challenging route in the park \u2014 with a zip line reward waiting at the end of every trail." },
    { title: "Mountain Experience", image: "assets/All-Attraction/Mountain-experience.jpg", level: "All Access \u00b7 Level 02", accent: "#e6179e", specs: ["One of the only indoor via ferrata experiences in the world", "2 custom trails: Beginner and Advanced", "Traverses 4 hand-carved concrete rock structures", "Inspired by real courses: California, Canada, Swiss Alps", "Continuous lifeline throughout", "Minimum height: 48\" | Weight: 88\u2013264 lbs (with gear)"], experience: "The Mountain Experience brings one of the world's most epic outdoor adventures \u2014 the via ferrata \u2014 indoors, and does it better than almost anywhere else on the planet. Traverse ridge lines, crawl through caves, cross bridges, and scale ladders across four stunning hand-carved rock structures inspired by legendary courses from the Swiss Alps to the California coast. Summit all four peaks and take in views of the entire park from the top." },
    { title: "Free Fall", image: "assets/All-Attraction/Free-fall-drop.jpg", level: "All Access \u00b7 Level 02", accent: "#e6179e", specs: ["Trap Doors \u2014 step onto a platform at 35 feet and drop", "Arch Jump \u2014 leap from the top of Epic Arch at 55 feet", "True free fall before belaying safely to the ground", "The most extreme attraction in the park", "Minimum height: 48\" | Weight: 88\u2013265 lbs (with gear)"], experience: "This is it \u2014 the moment that separates the bold from the bolder. Step onto a trap door at 35 feet and feel it disappear beneath you, or climb to the top of Bolder's iconic Epic Arch and leap into 55 feet of pure free fall before the belay brings you safely back to earth. Free Fall is the ultimate test of courage at Bolder \u2014 once you've done it, you'll wear it like a badge of honor." },
    { title: "Archery", image: "assets/All-Attraction/Archery.jpg", level: "All Access \u00b7 Level 02", accent: "#e6179e", specs: ["4 dedicated archery lanes, up to 4 players per lane", "Real recurve bows and arrows", "Digital scoring with multiple game modes", "Modes: traditional targets, tic-tac-toe, connect 4 & more"], experience: "Bolder's Archery range brings the ancient sport into the modern era with four fully equipped lanes, real recurve bows, and a digital scoring system that turns every session into a competition. Whether you're lining up a perfect bullseye in traditional target mode or outsmarting your opponent in a game of archery tic-tac-toe, there's a format for every skill level and every crowd." }
  ];

  activeAttraction: IncludedAttraction | null = null;
  openAttraction(a: IncludedAttraction): void {
    this.activeAttraction = a;
    document.body.style.overflow = 'hidden';
  }
  closeAttraction(): void {
    this.activeAttraction = null;
    document.body.style.overflow = '';
  }
  @HostListener('document:keydown.escape')
  onEscClose(): void { if (this.activeAttraction) this.closeAttraction(); }

  ngAfterViewInit(): void {
    // Lift the attraction modal to the app root so it overlays the navbar
    const modalEl = this.attModalRef?.nativeElement;
    const siteEl = document.querySelector('.site');
    if (modalEl && siteEl) { siteEl.appendChild(modalEl); }
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
  ngOnDestroy(): void {
    this.attModalRef?.nativeElement?.remove();
  }
}