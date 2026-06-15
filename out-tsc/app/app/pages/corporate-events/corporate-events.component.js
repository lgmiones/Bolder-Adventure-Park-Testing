import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function CorporateEventsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r5 * 0.08 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r4.desc);
} }
function CorporateEventsComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44)(1, "div", 45);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Inquiry Sent!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Thanks! Our events team will be in touch within 72 hours.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 46);
    i0.ɵɵlistener("click", function CorporateEventsComponent_div_68_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.submitted = false; });
    i0.ɵɵtext(8, "Send Another");
    i0.ɵɵelementEnd()();
} }
function CorporateEventsComponent_form_69_span_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Submit Inquiry \u2197");
    i0.ɵɵelementEnd();
} }
function CorporateEventsComponent_form_69_span_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Sending...");
    i0.ɵɵelementEnd();
} }
function CorporateEventsComponent_form_69_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 47, 48);
    i0.ɵɵlistener("ngSubmit", function CorporateEventsComponent_form_69_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.submitForm(); });
    i0.ɵɵelementStart(2, "div", 49)(3, "div", 50)(4, "label");
    i0.ɵɵtext(5, "First Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 51);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.formData.firstName = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 50)(8, "label");
    i0.ɵɵtext(9, "Last Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 52);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.formData.lastName = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 49)(12, "div", 50)(13, "label");
    i0.ɵɵtext(14, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 53);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.formData.email = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 50)(17, "label");
    i0.ɵɵtext(18, "Mobile *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 54);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.formData.phone = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 49)(21, "div", 50)(22, "label");
    i0.ɵɵtext(23, "Company Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 55);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.formData.company = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 50)(26, "label");
    i0.ɵɵtext(27, "Event Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "select", 56);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.formData.eventType = $event; });
    i0.ɵɵelementStart(29, "option", 57);
    i0.ɵɵtext(30, "Select event type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 58);
    i0.ɵɵtext(32, "Team Building");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 59);
    i0.ɵɵtext(34, "Company Party");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 60);
    i0.ɵɵtext(36, "Client Entertainment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 61);
    i0.ɵɵtext(38, "Conference Activity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 62);
    i0.ɵɵtext(40, "Other");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(41, "div", 49)(42, "div", 50)(43, "label");
    i0.ɵɵtext(44, "Number of Guests");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 63);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.formData.guests = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 50)(47, "label");
    i0.ɵɵtext(48, "Preferred Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "input", 64);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_input_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.formData.date = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 65)(51, "label");
    i0.ɵɵtext(52, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "textarea", 66);
    i0.ɵɵlistener("ngModelChange", function CorporateEventsComponent_form_69_Template_textarea_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.formData.message = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "button", 67);
    i0.ɵɵtemplate(55, CorporateEventsComponent_form_69_span_55_Template, 2, 0, "span", 68);
    i0.ɵɵtemplate(56, CorporateEventsComponent_form_69_span_56_Template, 2, 0, "span", 68);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(1);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.firstName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.lastName);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.email);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.phone);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.company);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.eventType);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.guests);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.date);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.message);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-loading", ctx_r2.submitting);
    i0.ɵɵproperty("disabled", ctx_r2.submitting || _r8.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.submitting);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitting);
} }
function CorporateEventsComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69)(1, "div", 70);
    i0.ɵɵtext(2, "\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 71)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r23 * 0.1 + "s");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(r_r22.quote);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r22.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r22.role);
} }
export class CorporateEventsComponent {
    constructor(seo) {
        this.seo = seo;
        this.photos = [
            { src: 'assets/images/Groups1.jpg', alt: 'Corporate team on ropes course' },
            { src: 'assets/carousel-images/Carousel-9.jpg', alt: 'Team building adventure' },
            { src: 'assets/images/Groups3.jpg', alt: 'Group via ferrata experience' }
        ];
        this.features = [
            { icon: '🧗', title: 'Team Building', desc: 'Challenge your team with real adventure — ropes, climbing, and heights that push comfort zones and build genuine trust.' },
            { icon: '🎯', title: 'Private Bookings', desc: 'Exclusive use of selected areas available for groups of 20+. Your event, your way, with dedicated staff.' },
            { icon: '🍕', title: 'Catering Options', desc: 'Custom food and beverage packages to keep your group fueled. From pizza spreads to full catered setups.' },
            { icon: '📸', title: 'Memorable Moments', desc: 'Dramatic backdrops, aerial ropes, and mountain-style via ferrata that make for unforgettable group photos.' },
            { icon: '🛡️', title: 'Safety First', desc: 'All activities are fully supervised by certified instructors. Safety briefings included for every group.' },
            { icon: '📋', title: 'Event Coordination', desc: 'Our events team handles the planning so you don\'t have to. Just show up and enjoy the adventure.' }
        ];
        this.reviews = [
            { name: 'Sarah M.', role: 'Company Event Host', quote: 'Bolder Adventure Park was the perfect venue for our company outing. The activities kept everyone engaged, and the staff made planning effortless. Our team is already asking when we can come back!' },
            { name: 'Daniel K.', role: 'Corporate Event Guest', quote: 'The via ferrata was the highlight of my visit. Challenging, exciting, and safe thanks to the excellent guidance from the instructors. The views from above were unforgettable!' },
            { name: 'Marcus T.', role: 'HR Manager', quote: 'We\'ve done traditional team-building before but nothing compared to this. People who barely spoke to each other were cheering each other on by the end of the ropes course.' }
        ];
        this.formData = {
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
        this.submitted = false;
        this.submitting = false;
    }
    ngOnInit() {
        this.seo.update({
            title: 'Corporate Events',
            description: 'Host your next corporate event or team building outing at Bolder Adventure Park in Grand Prairie, TX. Private bookings, catering options, and dedicated staff.',
            path: '/group-events/corporate-events',
            keywords: 'corporate events, team building, company outing, private booking, Grand Prairie corporate'
        });
    }
    submitForm() {
        if (this.submitting)
            return;
        this.submitting = true;
        setTimeout(() => {
            this.submitted = true;
            this.submitting = false;
            this.formData = { firstName: '', lastName: '', email: '', phone: '', company: '', eventType: '', guests: '', date: '', message: '' };
        }, 1200);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    var _a;
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.style.transitionDelay = (_a = el.dataset['srDelay']) !== null && _a !== void 0 ? _a : '0s';
                        el.classList.add('sr-visible');
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
        }, 50);
    }
}
CorporateEventsComponent.ɵfac = function CorporateEventsComponent_Factory(t) { return new (t || CorporateEventsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
CorporateEventsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CorporateEventsComponent, selectors: [["app-corporate-events"]], decls: 93, vars: 4, consts: [[1, "inner-page", "corporate-events-page"], ["title", "Corporate Events", "subtitle", "Team-building that feels fun, not forced. Bolder turns corporate outings into stories your team won't stop sharing.", "backgroundImage", "assets/carousel-images/Carousel-7.jpg", "tag", "Corporate & Groups"], ["speed", "slow"], [1, "ip-section", "ce-intro-section"], [1, "ip-container"], [1, "ce-intro-wrap"], [1, "ce-intro-text"], [1, "ce-kicker"], [1, "ce-heading"], [1, "ce-accent-bar"], ["routerLink", "/group-events", 1, "btn", "btn-outline", "ce-back-link"], [1, "ce-photo-mosaic"], [1, "ce-photo-grid"], ["data-sr-delay", "0.05s", 1, "ce-photo", "ce-photo--tall", "sr", "sr-left"], ["src", "assets/images/Groups1.jpg", "alt", "Corporate team adventure", "loading", "lazy"], [1, "ce-photo-stack"], ["data-sr-delay", "0.1s", 1, "ce-photo", "sr", "sr-right"], ["src", "assets/carousel-images/Carousel-9.jpg", "alt", "Team building via ferrata", "loading", "lazy"], ["data-sr-delay", "0.18s", 1, "ce-photo", "sr", "sr-right"], ["src", "assets/images/Groups3.jpg", "alt", "Corporate group experience", "loading", "lazy"], [1, "ip-section", "ce-features-section"], [1, "section-title", "sr", "sr-up"], [1, "ce-features-grid"], ["class", "ce-feature-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "ce-stats-section", "sr", "sr-up"], [1, "ce-stats-grid"], [1, "ce-stat"], [1, "ce-stat-num"], [1, "ce-stat-label"], [1, "ip-section", "ce-form-section"], [1, "ip-container", "ce-form-container"], [1, "ce-form-header", "sr", "sr-up"], ["class", "ce-success sr sr-up", 4, "ngIf"], ["class", "ce-form sr sr-up", "data-sr-delay", "0.1s", 3, "ngSubmit", 4, "ngIf"], [1, "ip-section", "ce-reviews-section"], [1, "ce-reviews-grid"], ["class", "ce-review-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], ["routerLink", "/contact-us", 1, "btn", "btn-outline", "btn-lg"], [1, "ce-feature-card", "sr", "sr-up"], [1, "ce-feature-icon"], [1, "ce-success", "sr", "sr-up"], [1, "ce-success-icon"], [1, "btn", "btn-orange", 3, "click"], ["data-sr-delay", "0.1s", 1, "ce-form", "sr", "sr-up", 3, "ngSubmit"], ["ceForm", "ngForm"], [1, "ce-form-row"], [1, "ce-field"], ["type", "text", "name", "firstName", "placeholder", "First name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "placeholder", "Last name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "your@company.com", "required", "", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", "placeholder", "(555) 000-0000", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "company", "placeholder", "Your company", 3, "ngModel", "ngModelChange"], ["name", "eventType", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "team-building"], ["value", "company-party"], ["value", "client-event"], ["value", "conference"], ["value", "other"], ["type", "number", "name", "guests", "placeholder", "Estimated headcount", "min", "10", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "date", 3, "ngModel", "ngModelChange"], [1, "ce-field", "ce-field--full"], ["name", "message", "rows", "5", "placeholder", "Tell us about your event goals, preferences, or any special requirements...", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "ce-submit-btn", 3, "disabled"], [4, "ngIf"], [1, "ce-review-card", "sr", "sr-up"], [1, "ce-review-quote"], [1, "ce-review-meta"]], template: function CorporateEventsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        i0.ɵɵtext(8, "Plan Your Event");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h2", 8);
        i0.ɵɵtext(10, "A Corporate Event With A Difference");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "div", 9);
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13, "Planning a group event? Skip the ordinary. Bolder turns corporate outings and celebrations into stories people won't stop sharing. Our unique venue is perfect for team-building that actually works \u2014 because it's genuinely fun.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, "Fill out the form below and our event team will be in contact within 72 hours. Sales & Events office is open Monday\u2013Friday, 9am to 5pm.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "a", 10);
        i0.ɵɵtext(17, "\u2190 All Group Events");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(18, "div", 11)(19, "div", 12)(20, "div", 13);
        i0.ɵɵelement(21, "img", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 15)(23, "div", 16);
        i0.ɵɵelement(24, "img", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "div", 18);
        i0.ɵɵelement(26, "img", 19);
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(27, "section", 20)(28, "div", 4)(29, "div", 21)(30, "p");
        i0.ɵɵtext(31, "What You Get");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "h2");
        i0.ɵɵtext(33, "Everything Your Event Needs");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(34, "div", 22);
        i0.ɵɵtemplate(35, CorporateEventsComponent_div_35_Template, 7, 4, "div", 23);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(36, "section", 24)(37, "div", 4)(38, "div", 25)(39, "div", 26)(40, "div", 27);
        i0.ɵɵtext(41, "500+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "div", 28);
        i0.ɵɵtext(43, "Corporate Groups Hosted");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 26)(45, "div", 27);
        i0.ɵɵtext(46, "20+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 28);
        i0.ɵɵtext(48, "Unique Attractions");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "div", 26)(50, "div", 27);
        i0.ɵɵtext(51, "72hr");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "div", 28);
        i0.ɵɵtext(53, "Response Time");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(54, "div", 26)(55, "div", 27);
        i0.ɵɵtext(56, "98%");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "div", 28);
        i0.ɵɵtext(58, "Would Come Back");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(59, "section", 29)(60, "div", 30)(61, "div", 31)(62, "span", 7);
        i0.ɵɵtext(63, "Get Started");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(64, "h2", 8);
        i0.ɵɵtext(65, "Inquire About Your Corporate Event");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "p");
        i0.ɵɵtext(67, "Our event team will respond within 72 hours with a tailored quote.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(68, CorporateEventsComponent_div_68_Template, 9, 0, "div", 32);
        i0.ɵɵtemplate(69, CorporateEventsComponent_form_69_Template, 57, 14, "form", 33);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(70, "section", 34)(71, "div", 4)(72, "div", 21)(73, "p");
        i0.ɵɵtext(74, "Don't Just Take Our Word For It");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "h2");
        i0.ɵɵtext(76, "What Corporate Groups Say");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(77, "div", 35);
        i0.ɵɵtemplate(78, CorporateEventsComponent_div_78_Template, 10, 4, "div", 36);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(79, "div", 4)(80, "div", 37)(81, "div")(82, "div", 38);
        i0.ɵɵtext(83, "Book Your Event");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(84, "h2");
        i0.ɵɵtext(85, "Ready To Plan Your Corporate Adventure?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(86, "p");
        i0.ɵɵtext(87, "Our events team is ready to make your next company outing unforgettable.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(88, "div", 39)(89, "a", 40);
        i0.ɵɵtext(90, "Get Tickets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(91, "a", 41);
        i0.ɵɵtext(92, "Contact Us");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(35);
        i0.ɵɵproperty("ngForOf", ctx.features);
        i0.ɵɵadvance(33);
        i0.ɵɵproperty("ngIf", ctx.submitted);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.submitted);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.RouterLinkWithHref, i5.NgForOf, i5.NgIf, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.NgForm, i6.DefaultValueAccessor, i6.RequiredValidator, i6.NgControlStatus, i6.NgModel, i6.SelectControlValueAccessor, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.MinValidator, i6.NumberValueAccessor], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n\n\n.ce-kicker[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ce-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 1rem;\n}\n\n.ce-accent-bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin-bottom: 1.25rem;\n}\n\n\n.ce-intro-section[_ngcontent-%COMP%] { padding-bottom: clamp(3rem, 6vw, 5rem); }\n\n.ce-intro-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: start;\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ce-intro-text[_ngcontent-%COMP%] {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.75;\n    margin: 0 0 1rem;\n  }\n}\n\n.ce-back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n}\n\n\n.ce-photo-mosaic[_ngcontent-%COMP%] { width: 100%; }\n\n.ce-photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 205px 205px;\n  gap: 0.75rem;\n}\n\n.ce-photo[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n  min-height: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.ce-photo--tall[_ngcontent-%COMP%] {\n  grid-row: 1 / span 2;\n}\n\n.ce-photo-stack[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n\n.ce-features-section[_ngcontent-%COMP%] {\n  background: rgba(244,81,19,0.03);\n  border-top: 1px solid rgba(244,81,19,0.1);\n  border-bottom: 1px solid rgba(244,81,19,0.1);\n}\n\n.ce-features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ce-feature-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.65;\n    margin: 0;\n  }\n}\n\n.ce-feature-icon[_ngcontent-%COMP%] { font-size: 1.8rem; line-height: 1; }\n\n\n.ce-stats-section[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  background: linear-gradient(135deg, rgba(244,81,19,0.12) 0%, rgba(244,81,19,0.04) 100%);\n  border-top: 1px solid rgba(244,81,19,0.2);\n  border-bottom: 1px solid rgba(244,81,19,0.2);\n}\n\n.ce-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  text-align: center;\n\n  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }\n}\n\n.ce-stat-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4rem);\n  color: var(--orange);\n  line-height: 1;\n}\n\n.ce-stat-label[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--muted);\n  margin-top: 0.3rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n\n.ce-form-section[_ngcontent-%COMP%] { padding-bottom: 2rem; }\n.ce-form-container[_ngcontent-%COMP%] { max-width: 860px; }\n\n.ce-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0.5rem 0 0; }\n}\n\n.ce-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.ce-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.ce-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.ce-field--full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ce-submit-btn[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-2px); }\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n  &.is-loading { opacity: 0.8; pointer-events: none; }\n\n  @media (max-width: 500px) { width: 100%; }\n}\n\n\n.ce-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n  margin-bottom: 2rem;\n\n  .ce-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 { font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; color: var(--white); margin: 0 0 0.5rem; }\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0 0 1.5rem; }\n}\n\n\n.ce-reviews-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, transparent, rgba(244,81,19,0.04));\n}\n\n.ce-reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ce-review-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n  position: relative;\n\n  &:hover { transform: translateY(-4px); border-color: rgba(244,81,19,0.25); }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1.25rem;\n    font-style: italic;\n  }\n}\n\n.ce-review-quote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 4rem;\n  color: var(--orange);\n  opacity: 0.35;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n\n.ce-review-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong { font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--white); }\n  span { font-family: var(--font-body); font-size: 0.78rem; color: var(--orange); }\n}\n\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0.5rem;\n  p { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin: 0 0 0.5rem; }\n  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); color: var(--white); text-transform: uppercase; line-height: 1; margin: 0; }\n}\n\n\n.sr[_ngcontent-%COMP%] { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up[_ngcontent-%COMP%] { transform: translateY(30px); }\n.sr-left[_ngcontent-%COMP%] { transform: translateX(-30px); }\n.sr-right[_ngcontent-%COMP%] { transform: translateX(30px); }\n.sr.sr-visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n\n@media (max-width: 600px) {\n  .ce-photo-grid[_ngcontent-%COMP%] { height: 280px; }\n  .page-cta-banner[_ngcontent-%COMP%] { flex-direction: column; text-align: center; }\n  .cta-actions[_ngcontent-%COMP%] { justify-content: center; }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CorporateEventsComponent, [{
        type: Component,
        args: [{ selector: 'app-corporate-events', template: "<div class=\"inner-page corporate-events-page\">\n\n  <app-page-hero\n    title=\"Corporate Events\"\n    subtitle=\"Team-building that feels fun, not forced. Bolder turns corporate outings into stories your team won't stop sharing.\"\n    backgroundImage=\"assets/carousel-images/Carousel-7.jpg\"\n    tag=\"Corporate & Groups\">\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Intro + Photo Grid -->\n  <section class=\"ip-section ce-intro-section\">\n    <div class=\"ip-container\">\n      <div class=\"ce-intro-wrap\">\n        <div class=\"ce-intro-text\">\n          <span class=\"ce-kicker\">Plan Your Event</span>\n          <h2 class=\"ce-heading\">A Corporate Event With A Difference</h2>\n          <div class=\"ce-accent-bar\"></div>\n          <p>Planning a group event? Skip the ordinary. Bolder turns corporate outings and celebrations into stories people won't stop sharing. Our unique venue is perfect for team-building that actually works \u2014 because it's genuinely fun.</p>\n          <p>Fill out the form below and our event team will be in contact within 72 hours. Sales & Events office is open Monday\u2013Friday, 9am to 5pm.</p>\n          <a routerLink=\"/group-events\" class=\"btn btn-outline ce-back-link\">\u2190 All Group Events</a>\n        </div>\n        <div class=\"ce-photo-mosaic\">\n          <div class=\"ce-photo-grid\">\n            <div class=\"ce-photo ce-photo--tall sr sr-left\" data-sr-delay=\"0.05s\">\n              <img src=\"assets/images/Groups1.jpg\" alt=\"Corporate team adventure\" loading=\"lazy\"/>\n            </div>\n            <div class=\"ce-photo-stack\">\n              <div class=\"ce-photo sr sr-right\" data-sr-delay=\"0.1s\">\n                <img src=\"assets/carousel-images/Carousel-9.jpg\" alt=\"Team building via ferrata\" loading=\"lazy\"/>\n              </div>\n              <div class=\"ce-photo sr sr-right\" data-sr-delay=\"0.18s\">\n                <img src=\"assets/images/Groups3.jpg\" alt=\"Corporate group experience\" loading=\"lazy\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Features Grid -->\n  <section class=\"ip-section ce-features-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>What You Get</p>\n        <h2>Everything Your Event Needs</h2>\n      </div>\n      <div class=\"ce-features-grid\">\n        <div class=\"ce-feature-card sr sr-up\"\n             *ngFor=\"let f of features; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.08) + 's'\">\n          <div class=\"ce-feature-icon\">{{ f.icon }}</div>\n          <h4>{{ f.title }}</h4>\n          <p>{{ f.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Stats Banner -->\n  <section class=\"ce-stats-section sr sr-up\">\n    <div class=\"ip-container\">\n      <div class=\"ce-stats-grid\">\n        <div class=\"ce-stat\">\n          <div class=\"ce-stat-num\">500+</div>\n          <div class=\"ce-stat-label\">Corporate Groups Hosted</div>\n        </div>\n        <div class=\"ce-stat\">\n          <div class=\"ce-stat-num\">20+</div>\n          <div class=\"ce-stat-label\">Unique Attractions</div>\n        </div>\n        <div class=\"ce-stat\">\n          <div class=\"ce-stat-num\">72hr</div>\n          <div class=\"ce-stat-label\">Response Time</div>\n        </div>\n        <div class=\"ce-stat\">\n          <div class=\"ce-stat-num\">98%</div>\n          <div class=\"ce-stat-label\">Would Come Back</div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Inquiry Form -->\n  <section class=\"ip-section ce-form-section\">\n    <div class=\"ip-container ce-form-container\">\n      <div class=\"ce-form-header sr sr-up\">\n        <span class=\"ce-kicker\">Get Started</span>\n        <h2 class=\"ce-heading\">Inquire About Your Corporate Event</h2>\n        <p>Our event team will respond within 72 hours with a tailored quote.</p>\n      </div>\n\n      <div class=\"ce-success sr sr-up\" *ngIf=\"submitted\">\n        <div class=\"ce-success-icon\">\u2713</div>\n        <h3>Inquiry Sent!</h3>\n        <p>Thanks! Our events team will be in touch within 72 hours.</p>\n        <button class=\"btn btn-orange\" (click)=\"submitted = false\">Send Another</button>\n      </div>\n\n      <form class=\"ce-form sr sr-up\" (ngSubmit)=\"submitForm()\" *ngIf=\"!submitted\" data-sr-delay=\"0.1s\" #ceForm=\"ngForm\">\n        <div class=\"ce-form-row\">\n          <div class=\"ce-field\">\n            <label>First Name *</label>\n            <input type=\"text\" [(ngModel)]=\"formData.firstName\" name=\"firstName\" placeholder=\"First name\" required/>\n          </div>\n          <div class=\"ce-field\">\n            <label>Last Name *</label>\n            <input type=\"text\" [(ngModel)]=\"formData.lastName\" name=\"lastName\" placeholder=\"Last name\" required/>\n          </div>\n        </div>\n        <div class=\"ce-form-row\">\n          <div class=\"ce-field\">\n            <label>Email *</label>\n            <input type=\"email\" [(ngModel)]=\"formData.email\" name=\"email\" placeholder=\"your@company.com\" required/>\n          </div>\n          <div class=\"ce-field\">\n            <label>Mobile *</label>\n            <input type=\"tel\" [(ngModel)]=\"formData.phone\" name=\"phone\" placeholder=\"(555) 000-0000\" required/>\n          </div>\n        </div>\n        <div class=\"ce-form-row\">\n          <div class=\"ce-field\">\n            <label>Company Name</label>\n            <input type=\"text\" [(ngModel)]=\"formData.company\" name=\"company\" placeholder=\"Your company\"/>\n          </div>\n          <div class=\"ce-field\">\n            <label>Event Type</label>\n            <select [(ngModel)]=\"formData.eventType\" name=\"eventType\">\n              <option value=\"\" disabled selected>Select event type</option>\n              <option value=\"team-building\">Team Building</option>\n              <option value=\"company-party\">Company Party</option>\n              <option value=\"client-event\">Client Entertainment</option>\n              <option value=\"conference\">Conference Activity</option>\n              <option value=\"other\">Other</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"ce-form-row\">\n          <div class=\"ce-field\">\n            <label>Number of Guests</label>\n            <input type=\"number\" [(ngModel)]=\"formData.guests\" name=\"guests\" placeholder=\"Estimated headcount\" min=\"10\"/>\n          </div>\n          <div class=\"ce-field\">\n            <label>Preferred Date</label>\n            <input type=\"date\" [(ngModel)]=\"formData.date\" name=\"date\"/>\n          </div>\n        </div>\n        <div class=\"ce-field ce-field--full\">\n          <label>Message</label>\n          <textarea [(ngModel)]=\"formData.message\" name=\"message\" rows=\"5\" placeholder=\"Tell us about your event goals, preferences, or any special requirements...\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"ce-submit-btn\" [class.is-loading]=\"submitting\" [disabled]=\"submitting || ceForm.invalid\">\n          <span *ngIf=\"!submitting\">Submit Inquiry \u2197</span>\n          <span *ngIf=\"submitting\">Sending...</span>\n        </button>\n      </form>\n    </div>\n  </section>\n\n  <!-- Reviews -->\n  <section class=\"ip-section ce-reviews-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Don't Just Take Our Word For It</p>\n        <h2>What Corporate Groups Say</h2>\n      </div>\n      <div class=\"ce-reviews-grid\">\n        <div class=\"ce-review-card sr sr-up\"\n             *ngFor=\"let r of reviews; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <div class=\"ce-review-quote\">\"</div>\n          <p>{{ r.quote }}</p>\n          <div class=\"ce-review-meta\">\n            <strong>{{ r.name }}</strong>\n            <span>{{ r.role }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Your Event</div>\n        <h2>Ready To Plan Your Corporate Adventure?</h2>\n        <p>Our events team is ready to make your next company outing unforgettable.</p>\n      </div>\n      <div class=\"cta-actions\">\n        <a href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-dark btn-lg\">Get Tickets</a>\n        <a routerLink=\"/contact-us\" class=\"btn btn-outline btn-lg\">Contact Us</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1200px; margin: 0 auto; }\n\n/* \u2500\u2500 Reusable \u2500\u2500 */\n.ce-kicker {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ce-heading {\n  font-family: var(--font-display);\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 1rem;\n}\n\n.ce-accent-bar {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin-bottom: 1.25rem;\n}\n\n/* \u2500\u2500 Intro \u2500\u2500 */\n.ce-intro-section { padding-bottom: clamp(3rem, 6vw, 5rem); }\n\n.ce-intro-wrap {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: start;\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ce-intro-text {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.75;\n    margin: 0 0 1rem;\n  }\n}\n\n.ce-back-link {\n  display: inline-block;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n}\n\n/* \u2500\u2500 Photo Mosaic \u2500\u2500 */\n.ce-photo-mosaic { width: 100%; }\n\n.ce-photo-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 205px 205px;\n  gap: 0.75rem;\n}\n\n.ce-photo {\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n  min-height: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.ce-photo--tall {\n  grid-row: 1 / span 2;\n}\n\n.ce-photo-stack {\n  display: contents;\n}\n\n/* \u2500\u2500 Features \u2500\u2500 */\n.ce-features-section {\n  background: rgba(244,81,19,0.03);\n  border-top: 1px solid rgba(244,81,19,0.1);\n  border-bottom: 1px solid rgba(244,81,19,0.1);\n}\n\n.ce-features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ce-feature-card {\n  padding: 1.75rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.65;\n    margin: 0;\n  }\n}\n\n.ce-feature-icon { font-size: 1.8rem; line-height: 1; }\n\n/* \u2500\u2500 Stats Banner \u2500\u2500 */\n.ce-stats-section {\n  padding: 3rem 1.5rem;\n  background: linear-gradient(135deg, rgba(244,81,19,0.12) 0%, rgba(244,81,19,0.04) 100%);\n  border-top: 1px solid rgba(244,81,19,0.2);\n  border-bottom: 1px solid rgba(244,81,19,0.2);\n}\n\n.ce-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  text-align: center;\n\n  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }\n}\n\n.ce-stat-num {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4rem);\n  color: var(--orange);\n  line-height: 1;\n}\n\n.ce-stat-label {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--muted);\n  margin-top: 0.3rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n/* \u2500\u2500 Form \u2500\u2500 */\n.ce-form-section { padding-bottom: 2rem; }\n.ce-form-container { max-width: 860px; }\n\n.ce-form-header {\n  margin-bottom: 2.5rem;\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0.5rem 0 0; }\n}\n\n.ce-form { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.ce-form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.ce-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.ce-field--full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ce-submit-btn {\n  padding: 1rem 2.5rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-2px); }\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n  &.is-loading { opacity: 0.8; pointer-events: none; }\n\n  @media (max-width: 500px) { width: 100%; }\n}\n\n/* \u2500\u2500 Success \u2500\u2500 */\n.ce-success {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n  margin-bottom: 2rem;\n\n  .ce-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 { font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; color: var(--white); margin: 0 0 0.5rem; }\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0 0 1.5rem; }\n}\n\n/* \u2500\u2500 Reviews \u2500\u2500 */\n.ce-reviews-section {\n  background: linear-gradient(to bottom, transparent, rgba(244,81,19,0.04));\n}\n\n.ce-reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ce-review-card {\n  padding: 2rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n  position: relative;\n\n  &:hover { transform: translateY(-4px); border-color: rgba(244,81,19,0.25); }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1.25rem;\n    font-style: italic;\n  }\n}\n\n.ce-review-quote {\n  font-family: var(--font-display);\n  font-size: 4rem;\n  color: var(--orange);\n  opacity: 0.35;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n\n.ce-review-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong { font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--white); }\n  span { font-family: var(--font-body); font-size: 0.78rem; color: var(--orange); }\n}\n\n/* \u2500\u2500 Section Title \u2500\u2500 */\n.section-title {\n  text-align: center;\n  margin-bottom: 0.5rem;\n  p { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin: 0 0 0.5rem; }\n  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); color: var(--white); text-transform: uppercase; line-height: 1; margin: 0; }\n}\n\n/* \u2500\u2500 Scroll Reveal \u2500\u2500 */\n.sr { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up { transform: translateY(30px); }\n.sr-left { transform: translateX(-30px); }\n.sr-right { transform: translateX(30px); }\n.sr.sr-visible { opacity: 1; transform: none; }\n\n@media (max-width: 600px) {\n  .ce-photo-grid { height: 280px; }\n  .page-cta-banner { flex-direction: column; text-align: center; }\n  .cta-actions { justify-content: center; }\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=corporate-events.component.js.map