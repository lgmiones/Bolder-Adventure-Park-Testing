import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements AfterViewInit {

  openFaqs = new Set<number>();

  faqGroups = [
    {
      category: 'General',
      faqs: [
        { q: 'Do I have to pay if I\'m not participating?', a: 'A non-participating adult (observer) does not need to purchase a ticket — however, we have limited seating for observers. All children must have a valid ticket to enter the park area.' },
        { q: 'What form of payment do you accept?', a: 'We accept all major credit and debit cards, as well as Apple Pay and Google Pay. Cash is not accepted on site.' },
        { q: 'Is smoking or tobacco allowed in the park?', a: 'Bolder Adventure Park is a completely smoke-free environment. Smoking and tobacco products are not permitted anywhere on the premises.' },
        { q: 'Is outside food or drink allowed?', a: 'Outside food and drinks are not permitted inside the park. We have a café on-site with a variety of food and drinks available for purchase.' }
      ]
    },
    {
      category: 'Tickets & Booking',
      faqs: [
        { q: 'Do I need a parent pass for a birthday party booking?', a: 'Yes, each birthday party package includes 2 complimentary parent passes. Additional adult passes can be purchased at a discounted rate when booking a party.' },
        { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'Yes! The Ropes Course and Mountain Experience (Via Ferrata) require advance reservations to guarantee your time slot. We highly recommend booking online in advance to avoid disappointment.' },
        { q: 'Can I buy tickets at the door?', a: 'Walk-in tickets are available subject to capacity. However, we strongly recommend booking online in advance for the best price and to guarantee entry, especially on weekends.' }
      ]
    },
    {
      category: 'Safety & Restrictions',
      faqs: [
        { q: 'What are the age / height / weight restrictions?', a: 'Most Base Camp activities are suitable for all ages. Aerial and ropes activities require a minimum height of 42"–54" depending on the attraction. Some aerial attractions have maximum weight limits of 88–265 lbs with gear.' },
        { q: 'Do I have to rent shoes?', a: 'Grip socks are required for the Jump Pad and are available for purchase at the park. Regular athletic shoes or sneakers are recommended for all other attractions.' },
        { q: 'Is there a place to store my belongings inside the park?', a: 'Yes! Lockers are available on-site for a small fee. We recommend leaving valuables in a locker while you explore the park.' }
      ]
    }
  ];

  toggleFaq(globalIndex: number): void {
    if (this.openFaqs.has(globalIndex)) {
      this.openFaqs.delete(globalIndex);
    } else {
      this.openFaqs.add(globalIndex);
    }
  }

  getFaqIndex(groupIndex: number, faqIndex: number): number {
    let count = 0;
    for (let i = 0; i < groupIndex; i++) {
      count += this.faqGroups[i].faqs.length;
    }
    return count + faqIndex;
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
