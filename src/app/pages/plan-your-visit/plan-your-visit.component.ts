import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plan-your-visit',
  templateUrl: './plan-your-visit.component.html',
  styleUrls: ['./plan-your-visit.component.scss']
})
export class PlanYourVisitComponent implements AfterViewInit {

  ticketOptions = [
    {
      id: 'base',
      name: 'Base Camp',
      tag: 'Ground Level',
      desc: 'Action is on the ground — Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars. Perfect for every age.',
      price: 'From $27.99',
      color: '#119ee8'
    },
    {
      id: 'summit',
      name: 'Summit',
      tag: 'Popular Choice',
      desc: 'All Base Camp activities plus your choice of a Ropes Course or a Mountain Experience session. The adventure levels up.',
      price: 'From $47.99',
      color: '#f45113'
    },
    {
      id: 'extreme',
      name: 'Extreme All Access',
      tag: 'Ultimate Experience',
      desc: 'Unlimited access to the entire venue — every Rope, every Mountain course, every ground activity. This is the complete Bolder experience.',
      price: 'From $69.99',
      color: '#8f34cd'
    }
  ];

  openFaqs = new Set<number>();

  faqs = [
    { q: 'Do I have to pay if I\'m not participating?', a: 'A non-participating adult (observer) does not need to purchase a ticket — however, we do have limited seating for observers. All children must have a valid ticket to enter the park area.' },
    { q: 'What are the age / height / weight restrictions?', a: 'Most Base Camp activities are suitable for all ages. Aerial and ropes activities require a minimum height of 42"–54" depending on the attraction. Maximum weight limits apply to some aerial attractions (up to 265 lbs with gear).' },
    { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'Yes, the Ropes Course and Via Ferrata (Mountain Experience) require advance reservations to guarantee your time slot. We highly recommend booking online in advance.' },
    { q: 'Is there a place to store my belongings?', a: 'Yes! Lockers are available on-site for a small fee to keep your personal belongings safe while you explore the park.' }
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
