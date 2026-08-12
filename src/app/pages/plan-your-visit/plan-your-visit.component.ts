import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-plan-your-visit',
  templateUrl: './plan-your-visit.component.html',
  styleUrls: ['./plan-your-visit.component.scss']
})
export class PlanYourVisitComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Plan Your Visit',
      description: 'Everything you need to know before visiting Bolder Adventure Park in Grand Prairie, TX. Hours, tickets, park map, and FAQs.',
      path: '/plan-your-visit',
      keywords: 'plan visit, hours, tickets, park map, Grand Prairie adventure park'
    });
  }

  ticketOptions = [
    {
      id: 'base',
      name: 'Base Camp',
      tag: 'Ground Level',
      desc: 'Action is on the ground — Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars. Perfect for every age.',
      price: 'From $24.99 + tax',
      color: '#1ba1e2'
    },
    {
      id: 'extreme',
      name: 'All Access',
      tag: 'Everything In The Park',
      desc: 'Unlimited access to the entire venue — every rope, zip line and climbing wall, every Mountain course, the Free Fall drops, Archery and Darts. The complete Bolder experience.',
      price: 'From $34.99 + tax',
      color: '#e6179e'
    }
  ];

  openFaqs = new Set<number>();

  faqs = [
    { q: 'Do I have to pay if I\'m not participating?', a: 'For the safety of all guests, a ticket and waiver are required to entry, but we do offer a Green Parent Pass for those that do not want to participate at a discounted rate to enter the park. Passes for all levels are available for those that would like to participate.' },
    { q: 'What are the age / height / weight restrictions?', a: 'Participants need to be a minimum height of 42″ for all Base Camp ground level attractions. Participants need to be a minimum height of 48″ for the mountain and ropes courses, or 42″ when accompanied by an adult.\n\nA maximum weight restriction of 265lbs (including the harness) applies to the ropes course and mountain course. A minimum weight of 88lbs (including the harness) applies for the mountain course.\n\nGuests on the aerial courses must be able to properly fit into the harness.\n\nThe full safety requirements for each attraction are listed on our Attractions Pages.' },
    { q: 'Do I need a parent pass for a birthday party booking?', a: 'Birthday parties include 2 parent passes for the birthday child, and one parent pass per paid birthday guest.' },
    { q: 'Is there a place to store my belongings inside Bolder Adventure Park?', a: 'Various sized and priced electronic lockers are available. Guests not using lockers are advised that Bolder Adventure Park is not responsible for lost or stolen items. This includes items left in or around attraction areas.' },
    { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'We are a cashless park, but we do have cash to card ATMs available.\n\nWe accept all forms of credit / debit cards. We have a "cash to card" ATM machine available for guests who need to put cash on to a debit card. There is no service fee for the card and the debit card can be used anywhere.' }
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
