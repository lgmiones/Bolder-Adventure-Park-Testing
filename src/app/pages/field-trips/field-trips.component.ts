import { Component, AfterViewInit, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { FormMailService } from '../../services/form-mail.service';

@Component({
  selector: 'app-field-trips',
  templateUrl: './field-trips.component.html',
  styleUrls: ['./field-trips.component.scss']
})
export class FieldTripsComponent implements OnInit, AfterViewInit {

  constructor(private seo: SeoService, private mail: FormMailService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Field Trips',
      description: 'Book a school field trip at Bolder Adventure Park in Grand Prairie, TX. Curriculum-aligned programs, certified guides, and group pricing for all grade levels.',
      path: '/group-events/field-trips',
      keywords: 'school field trip, educational trip, kids adventure, group pricing, Grand Prairie field trip'
    });
  }

  photos = [
    { src: 'assets/images/Groups2.jpg', alt: 'Kids on field trip adventure' },
    { src: 'assets/carousel-images/Carousel-4.jpg', alt: 'Students climbing activity' },
    { src: 'assets/images/Action-on-the-ground.jpg', alt: 'Field trip group activity' }
  ];

  features = [
    { icon: '🧒', title: 'All Ages Welcome', desc: 'Activities scaled for every age group — from elementary school adventurers to high school thrill-seekers.' },
    { icon: '📚', title: 'Curriculum Aligned', desc: 'Our programs can align with physical education, teamwork, and leadership development goals.' },
    { icon: '👨‍🏫', title: 'Dedicated Guides', desc: 'Certified instructors lead every group through the activities with safety briefings and encouragement.' },
    { icon: '🎟️', title: 'Group Pricing', desc: 'Field-trip rates from $15–18 per student, and $19–29 per person for groups of 15 or more. Contact us for a custom quote.' },
    { icon: '🛡️', title: 'Safe & Supervised', desc: 'Every activity is designed with student safety in mind. Gear, training, and supervision included.' },
    { icon: '🏆', title: 'Unforgettable Experience', desc: 'Students will be talking about this trip for years. Real adventure that builds confidence and teamwork.' }
  ];

  gradeGroups = [
    { grades: 'Grades K–3', label: 'Little Explorers', desc: 'Jump Pad, Adventure Nets, Blaster Zone, Spin Zone Bumper Cars', icon: '⭐' },
    { grades: 'Grades 4–6', label: 'Base Campers', desc: 'All ground-level activities plus guided Tree House and Exploration Play Area', icon: '🏕️' },
    { grades: 'Grades 7–12', label: 'Summit Seekers', desc: 'Full park access including Ropes Course, Zip Lines, and Via Ferrata with certified guides', icon: '🧗' }
  ];

  reviews = [
    { name: 'Ms. Rodriguez', role: 'Elementary School Teacher', quote: 'My students were completely lit up the entire time. They pushed themselves in ways I\'ve never seen in a classroom. This is exactly the kind of experiential learning that sticks.' },
    { name: 'Coach Davis', role: 'Middle School PE Teacher', quote: 'The staff made it so easy to coordinate for 45 students. Every kid was engaged, even the shy ones found their brave. We\'re already planning next year\'s trip.' },
    { name: 'Principal Martinez', role: 'High School Principal', quote: 'Bolder turned our annual field trip into something our students will remember. The team-building aspect was incredible — kids who don\'t usually interact were cheering each other on.' }
  ];

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    school: '',
    gradeLevel: '',
    guests: '',
    date: '',
    message: ''
  };

  submitted = false;
  submitting = false;

  error = false;

  submitForm(): void {
    if (this.submitting) return;
    this.submitting = true;
    this.error = false;
    this.mail.send(this.formData, 'Field Trip Inquiry — ' + (this.formData.school || 'School Group')).subscribe({
      next: () => {
        this.submitted = true;
        this.submitting = false;
        this.formData = { firstName: '', lastName: '', email: '', phone: '', school: '', gradeLevel: '', guests: '', date: '', message: '' };
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
