import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'FAQs',
      description: 'Frequently asked questions about Bolder Adventure Park — tickets, age requirements, safety, group bookings, and more.',
      path: '/faqs',
      keywords: 'adventure park FAQ, age requirements, safety, tickets, Grand Prairie park questions'
    });
  }

  openFaqs = new Set<number>();

  faqGroups = [
    {
      category: 'General',
      faqs: [
        { q: 'Do I have to pay if I\'m not participating?', a: 'For the safety of all guests, a ticket and waiver are required to entry, but we do offer a Green Parent Pass for those that do not want to participate at a discounted rate to enter the park. Passes for all levels are available for those that would like to participate.' },
        { q: 'What form of payment do you accept?', a: 'The Ropes Course and Via Ferrata are run on an appointment basis.\n\nAppointments are allocated at the park on a first come/first serve basis. For groups of ten or more, we highly recommend that you book a group event through our Sales Department to ensure you will receive an appointment time that best aligns with your event. Click <a href="/group-events">here</a> for more info on <a href="/group-events">Group Events</a>.' },
        { q: 'Is smoking or tobacco allowed in the park?', a: 'Bolder Adventure Park is a tobacco free facility. Prohibited items include, but are not limited to, cigarettes, e-cigarettes, vaping, pipes, cigars, chewing tobacco, snuff, or any other form of tobacco. If guests want to leave the adventure park to smoke, they will be re-admitted into the adventure park if they are wearing a wristband purchased that day.' },
        { q: 'Is outside food or drink allowed at Bolder Adventure Park?', a: 'Bolder Adventure Park does not allow outside food, drinks or coolers into the park, this includes cakes unless approved and contracted with the event. Dietary restrictions, food allergies and baby formula are exceptions to this rule but must be identified and labeled with the date of entry once a guest arrives by an employee at our admissions desk. No glass of any kind is permitted in the park which includes baby formula and baby food.\n\nBirthday package guests are allowed to bring cupcakes or a cake to their party to celebrate their special day.' }
      ]
    },
    {
      category: 'Tickets & Booking',
      faqs: [
        { q: 'Do I need a parent pass for a birthday party booking?', a: 'Birthday parties include 2 parent passes for the birthday child, and one parent pass per paid birthday guest.' },
        { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'We are a cashless park, but we do have cash to card ATMs available.\n\nWe accept all forms of credit / debit cards. We have a "cash to card" ATM machine available for guests who need to put cash on to a debit card. There is no service fee for the card and the debit card can be used anywhere.' }
      ]
    },
    {
      category: 'Safety & Restrictions',
      faqs: [
        { q: 'What are the age / height / weight restrictions?', a: 'Participants need to be a minimum height of 42″ for all Base Camp ground level attractions. Participants need to be a minimum height of 48″ for the mountain and ropes courses, or 42″ when accompanied by an adult.\n\nA maximum weight restriction of 265lbs (including the harness) applies to the ropes course and mountain course. A minimum weight of 88lbs (including the harness) applies for the mountain course.\n\nGuests on the aerial courses must be able to properly fit into the harness.\n\nThe full safety requirements for each attraction are listed on our Attractions Pages.' },
        { q: 'Do I have to rent shoes?', a: 'You are only required to rent shoes if you do not have a closed heel / toe shoe, and you are participating in the Black and Double Black attractions packages. Closed heel / toe shoes are required for your safety on these attractions. If you have your own closed heel / toe shoes, then you will not be required to rent shoes.' },
        { q: 'Is there a place to store my belongings inside Bolder Adventure Park?', a: 'Various sized and priced electronic lockers are available. Guests not using lockers are advised that Bolder Adventure Park is not responsible for lost or stolen items. This includes items left in or around attraction areas.' }
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
