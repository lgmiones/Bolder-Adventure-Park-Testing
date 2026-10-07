import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { FormMailService } from '../../services/form-mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService, private mail: FormMailService) {}

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
  error = false;

  contactInfo = [
    {
      icon: '📍',
      label: 'Address',
      value: '2324 W Warrior Trail, Grand Prairie, TX',
      link: 'https://maps.google.com/?q=2324+W+Warrior+Trail+Grand+Prairie+TX',
      linkText: 'Get Directions',
      internal: false
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '(469) 858-0577',
      link: 'tel:+14698580577',
      linkText: 'Call Us',
      internal: false
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'bolder@bolderpark.com',
      link: 'mailto:bolder@bolderpark.com',
      linkText: 'Send Email',
      internal: false
    },
    {
      icon: '🕐',
      label: 'Hours',
      value: 'Fridays 4 PM – 9 PM · Saturdays 11 AM – 9 PM · Sundays 11 AM – 7 PM',
      link: '/plan-your-visit#hours',
      linkText: 'See Opening Hours',
      internal: true
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
    this.error = false;
    this.mail.send(this.formData, 'Website Contact — ' + (this.formData.subject || 'General Inquiry')).subscribe({
      next: () => {
        this.submitted = true;
        this.submitting = false;
        this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
      },
      error: () => {
        this.submitting = false;
        this.error = true;
      }
    });
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
