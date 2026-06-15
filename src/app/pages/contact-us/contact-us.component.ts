import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact Us',
      description: 'Get in touch with Bolder Adventure Park in Grand Prairie, TX. Ask about bookings, group events, birthday parties, or general inquiries.',
      path: '/contact-us',
      keywords: 'contact Bolder Adventure Park, Grand Prairie park contact, booking inquiry'
    });
  }

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  submitting = false;

  contactInfo = [
    {
      icon: '📍',
      label: 'Address',
      value: '2324 W Warrior Trail, Grand Prairie, TX',
      link: 'https://maps.google.com/?q=2324+W+Warrior+Trail+Grand+Prairie+TX',
      linkText: 'Get Directions'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '(469) 858-0577',
      link: 'tel:+14698580577',
      linkText: 'Call Us'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'bolder@bolderpark.com',
      link: 'mailto:bolder@bolderpark.com',
      linkText: 'Send Email'
    },
    {
      icon: '🕐',
      label: 'Hours',
      value: 'Mondays – Thursdays 11 AM – 9 PM · Fridays - Sundays 11 AM – 9 PM ',
      link: null,
      linkText: null
    }
  ];

  subjects = [
    'General Inquiry',
    'Birthday Party Booking',
    'Group Events',
    'Memberships & Passes',
    'Tickets & Reservations',
    'Safety & Restrictions',
    'Feedback / Complaint',
    'Other'
  ];

  submitForm(): void {
    if (this.submitting) return;
    this.submitting = true;
    setTimeout(() => {
      this.submitted = true;
      this.submitting = false;
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
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
