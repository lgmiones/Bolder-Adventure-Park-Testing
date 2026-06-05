import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-corporate-events',
  templateUrl: './corporate-events.component.html',
  styleUrls: ['./corporate-events.component.scss']
})
export class CorporateEventsComponent implements AfterViewInit {

  photos = [
    { src: 'assets/images/Groups1.jpg', alt: 'Corporate team on ropes course' },
    { src: 'assets/carousel-images/Carousel-9.jpg', alt: 'Team building adventure' },
    { src: 'assets/images/Groups3.jpg', alt: 'Group via ferrata experience' }
  ];

  features = [
    { icon: '🧗', title: 'Team Building', desc: 'Challenge your team with real adventure — ropes, climbing, and heights that push comfort zones and build genuine trust.' },
    { icon: '🎯', title: 'Private Bookings', desc: 'Exclusive use of selected areas available for groups of 20+. Your event, your way, with dedicated staff.' },
    { icon: '🍕', title: 'Catering Options', desc: 'Custom food and beverage packages to keep your group fueled. From pizza spreads to full catered setups.' },
    { icon: '📸', title: 'Memorable Moments', desc: 'Dramatic backdrops, aerial ropes, and mountain-style via ferrata that make for unforgettable group photos.' },
    { icon: '🛡️', title: 'Safety First', desc: 'All activities are fully supervised by certified instructors. Safety briefings included for every group.' },
    { icon: '📋', title: 'Event Coordination', desc: 'Our events team handles the planning so you don\'t have to. Just show up and enjoy the adventure.' }
  ];

  reviews = [
    { name: 'Sarah M.', role: 'Company Event Host', quote: 'Bolder Adventure Park was the perfect venue for our company outing. The activities kept everyone engaged, and the staff made planning effortless. Our team is already asking when we can come back!' },
    { name: 'Daniel K.', role: 'Corporate Event Guest', quote: 'The via ferrata was the highlight of my visit. Challenging, exciting, and safe thanks to the excellent guidance from the instructors. The views from above were unforgettable!' },
    { name: 'Marcus T.', role: 'HR Manager', quote: 'We\'ve done traditional team-building before but nothing compared to this. People who barely spoke to each other were cheering each other on by the end of the ropes course.' }
  ];

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    guests: '',
    date: '',
    message: ''
  };

  submitted = false;
  submitting = false;

  submitForm(): void {
    if (this.submitting) return;
    this.submitting = true;
    setTimeout(() => {
      this.submitted = true;
      this.submitting = false;
      this.formData = { firstName: '', lastName: '', email: '', phone: '', company: '', eventType: '', guests: '', date: '', message: '' };
    }, 1200);
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
