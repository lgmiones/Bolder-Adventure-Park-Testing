import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-group-events',
  templateUrl: './group-events.component.html',
  styleUrls: ['./group-events.component.scss']
})
export class GroupEventsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Group Events',
      description: 'Book group events at Bolder Adventure Park — corporate team building, school field trips, and birthday parties in Grand Prairie, TX.',
      path: '/group-events',
      keywords: 'group events, corporate events, field trips, team building, Grand Prairie group booking'
    });
  }

  eventTypes = [
    {
      title: 'Corporate Events',
      icon: '🏢',
      desc: 'Host a corporate event with a difference. Our unique venue is perfect for a corporate event to remember. Team-building that feels fun, not forced.',
      image: 'assets/images/Groups1.jpg',
      linkText: 'Corporate Events Info',
      routerLink: '/group-events/corporate-events'
    },
    {
      title: 'Field Trips',
      icon: '🎒',
      desc: 'A field trip to Bolder is a class favorite! Give your class the chance to learn action-adventure skills, while testing their bravery and having a huge amount of fun.',
      image: 'assets/images/Groups2.jpg',
      linkText: 'Field Trips Info',
      routerLink: '/group-events/field-trips'
    },
    {
      title: 'Birthday Parties',
      icon: '🎂',
      desc: 'If you are looking for a one-of-a-kind birthday experience for your big day, Bolder Adventure Park is your destination!',
      image: 'assets/images/Parties3.jpg',
      linkText: 'Birthday Parties',
      routerLink: '/birthday-parties'
    }
  ];

  reviews = [
    { name: 'Ally Smith', role: 'Birthday Party Guest', quote: 'So fun! Even great for adults, we came here for a baby party and had a blast!' },
    { name: 'Tiffany Erdynn', role: 'Birthday Party Host', quote: "Came here for a kid's birthday party for about 15 kids. We all had a blast. Kids loved the slides and the shooting game. Will definitely be back." },
    { name: 'Sarah M.', role: 'Company Event Host', quote: 'Bolder Adventure Park was the perfect venue for our company outing. The activities kept everyone engaged, and the staff made planning effortless. Our team is already asking when we can come back!' }
  ];

  formData = { name: '', email: '', phone: '', eventType: '', guests: '', message: '', date: '' };

  submitForm(): void {
    alert('Thank you! We will be in touch shortly.');
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
