import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
function FieldTripsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40)(1, "div", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 42);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 43);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 44);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r6 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.grades);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(g_r5.desc);
} }
function FieldTripsComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r8 * 0.08 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r7.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r7.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r7.desc);
} }
function FieldTripsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Inquiry Sent!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Thanks! Our events team will be in touch within 72 hours to help plan your trip.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 49);
    i0.ɵɵlistener("click", function FieldTripsComponent_div_56_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.submitted = false; });
    i0.ɵɵtext(8, "Send Another");
    i0.ɵɵelementEnd()();
} }
function FieldTripsComponent_form_57_span_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Submit Inquiry \u2197");
    i0.ɵɵelementEnd();
} }
function FieldTripsComponent_form_57_span_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Sending...");
    i0.ɵɵelementEnd();
} }
function FieldTripsComponent_form_57_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 50, 51);
    i0.ɵɵlistener("ngSubmit", function FieldTripsComponent_form_57_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.submitForm(); });
    i0.ɵɵelementStart(2, "div", 52)(3, "div", 53)(4, "label");
    i0.ɵɵtext(5, "First Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 54);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.formData.firstName = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 53)(8, "label");
    i0.ɵɵtext(9, "Last Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 55);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.formData.lastName = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 52)(12, "div", 53)(13, "label");
    i0.ɵɵtext(14, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 56);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.formData.email = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 53)(17, "label");
    i0.ɵɵtext(18, "Mobile *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 57);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.formData.phone = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 52)(21, "div", 53)(22, "label");
    i0.ɵɵtext(23, "School / Organization");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 58);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.formData.school = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 53)(26, "label");
    i0.ɵɵtext(27, "Grade Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "select", 59);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.formData.gradeLevel = $event; });
    i0.ɵɵelementStart(29, "option", 60);
    i0.ɵɵtext(30, "Select grade range");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 61);
    i0.ɵɵtext(32, "Grades K\u20133");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 62);
    i0.ɵɵtext(34, "Grades 4\u20136");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 63);
    i0.ɵɵtext(36, "Grades 7\u20139");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 64);
    i0.ɵɵtext(38, "Grades 10\u201312");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 65);
    i0.ɵɵtext(40, "Mixed / Multiple Grades");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(41, "div", 52)(42, "div", 53)(43, "label");
    i0.ɵɵtext(44, "Number of Students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 66);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_45_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.formData.guests = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "div", 53)(47, "label");
    i0.ɵɵtext(48, "Preferred Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "input", 67);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_input_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.formData.date = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 68)(51, "label");
    i0.ɵɵtext(52, "Message / Special Requirements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "textarea", 69);
    i0.ɵɵlistener("ngModelChange", function FieldTripsComponent_form_57_Template_textarea_ngModelChange_53_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.formData.message = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "button", 70);
    i0.ɵɵtemplate(55, FieldTripsComponent_form_57_span_55_Template, 2, 0, "span", 71);
    i0.ɵɵtemplate(56, FieldTripsComponent_form_57_span_56_Template, 2, 0, "span", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(1);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.firstName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.lastName);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.email);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.phone);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.school);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.gradeLevel);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.guests);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.date);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r3.formData.message);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-loading", ctx_r3.submitting);
    i0.ɵɵproperty("disabled", ctx_r3.submitting || _r11.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.submitting);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.submitting);
} }
function FieldTripsComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72)(1, "div", 73);
    i0.ɵɵtext(2, "\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 74)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r26 * 0.1 + "s");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(r_r25.quote);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r25.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r25.role);
} }
export class FieldTripsComponent {
    constructor(seo) {
        this.seo = seo;
        this.photos = [
            { src: 'assets/images/Groups2.jpg', alt: 'Kids on field trip adventure' },
            { src: 'assets/carousel-images/Carousel-4.jpg', alt: 'Students climbing activity' },
            { src: 'assets/images/Action-on-the-ground.jpg', alt: 'Field trip group activity' }
        ];
        this.features = [
            { icon: '🧒', title: 'All Ages Welcome', desc: 'Activities scaled for every age group — from elementary school adventurers to high school thrill-seekers.' },
            { icon: '📚', title: 'Curriculum Aligned', desc: 'Our programs can align with physical education, teamwork, and leadership development goals.' },
            { icon: '👨‍🏫', title: 'Dedicated Guides', desc: 'Certified instructors lead every group through the activities with safety briefings and encouragement.' },
            { icon: '🎟️', title: 'Group Pricing', desc: 'Special group rates for schools and educational groups. Contact us for a custom quote.' },
            { icon: '🛡️', title: 'Safe & Supervised', desc: 'Every activity is designed with student safety in mind. Gear, training, and supervision included.' },
            { icon: '🏆', title: 'Unforgettable Experience', desc: 'Students will be talking about this trip for years. Real adventure that builds confidence and teamwork.' }
        ];
        this.gradeGroups = [
            { grades: 'Grades K–3', label: 'Little Explorers', desc: 'Jump Pad, Adventure Nets, Blaster Zone, Spin Zone Bumper Cars', icon: '⭐' },
            { grades: 'Grades 4–6', label: 'Base Campers', desc: 'All ground-level activities plus guided Tree House and Exploration Play Area', icon: '🏕️' },
            { grades: 'Grades 7–12', label: 'Summit Seekers', desc: 'Full park access including Ropes Course, Zip Lines, and Via Ferrata with certified guides', icon: '🧗' }
        ];
        this.reviews = [
            { name: 'Ms. Rodriguez', role: 'Elementary School Teacher', quote: 'My students were completely lit up the entire time. They pushed themselves in ways I\'ve never seen in a classroom. This is exactly the kind of experiential learning that sticks.' },
            { name: 'Coach Davis', role: 'Middle School PE Teacher', quote: 'The staff made it so easy to coordinate for 45 students. Every kid was engaged, even the shy ones found their brave. We\'re already planning next year\'s trip.' },
            { name: 'Principal Martinez', role: 'High School Principal', quote: 'Bolder turned our annual field trip into something our students will remember. The team-building aspect was incredible — kids who don\'t usually interact were cheering each other on.' }
        ];
        this.formData = {
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
        this.submitted = false;
        this.submitting = false;
    }
    ngOnInit() {
        this.seo.update({
            title: 'Field Trips',
            description: 'Book a school field trip at Bolder Adventure Park in Grand Prairie, TX. Curriculum-aligned programs, certified guides, and group pricing for all grade levels.',
            path: '/group-events/field-trips',
            keywords: 'school field trip, educational trip, kids adventure, group pricing, Grand Prairie field trip'
        });
    }
    submitForm() {
        if (this.submitting)
            return;
        this.submitting = true;
        setTimeout(() => {
            this.submitted = true;
            this.submitting = false;
            this.formData = { firstName: '', lastName: '', email: '', phone: '', school: '', gradeLevel: '', guests: '', date: '', message: '' };
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
FieldTripsComponent.ɵfac = function FieldTripsComponent_Factory(t) { return new (t || FieldTripsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
FieldTripsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldTripsComponent, selectors: [["app-field-trips"]], decls: 81, vars: 5, consts: [[1, "inner-page", "field-trips-page"], ["title", "Field Trips", "subtitle", "Skip the ordinary field trip. Bolder turns classroom outings into stories kids won't stop talking about.", "backgroundImage", "assets/carousel-images/Carousel-1.jpg", "tag", "Schools & Groups"], ["speed", "slow"], [1, "ip-section", "ft-intro-section"], [1, "ip-container"], [1, "ft-intro-wrap"], [1, "ft-photo-mosaic", "sr", "sr-left"], [1, "ft-photo-grid"], [1, "ft-photo", "ft-photo--main"], ["src", "assets/images/Groups2.jpg", "alt", "Kids on field trip adventure", "loading", "lazy"], [1, "ft-photo-overlay"], [1, "ft-photo-tag"], [1, "ft-photo"], ["src", "assets/carousel-images/Carousel-4.jpg", "alt", "Students adventure activity", "loading", "lazy"], ["src", "assets/images/Action-on-the-ground.jpg", "alt", "Field trip group fun", "loading", "lazy"], [1, "ft-intro-text", "sr", "sr-right"], [1, "ft-kicker"], [1, "ft-heading"], [1, "ft-accent-bar"], ["routerLink", "/group-events", 1, "btn", "btn-outline", "ft-back-link"], [1, "ip-section", "ft-tiers-section"], [1, "section-title", "sr", "sr-up"], [1, "ft-tiers-grid"], ["class", "ft-tier-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "ip-section", "ft-features-section"], [1, "ft-features-grid"], ["class", "ft-feature-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "ip-section", "ft-form-section"], [1, "ip-container", "ft-form-container"], [1, "ft-form-header", "sr", "sr-up"], ["class", "ft-success sr sr-up", 4, "ngIf"], ["class", "ft-form sr sr-up", "data-sr-delay", "0.1s", 3, "ngSubmit", 4, "ngIf"], [1, "ip-section", "ft-reviews-section"], [1, "ft-reviews-grid"], ["class", "ft-review-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], ["routerLink", "/contact-us", 1, "btn", "btn-outline", "btn-lg"], [1, "ft-tier-card", "sr", "sr-up"], [1, "ft-tier-icon"], [1, "ft-tier-grades"], [1, "ft-tier-label"], [1, "ft-tier-desc"], [1, "ft-feature-card", "sr", "sr-up"], [1, "ft-feature-icon"], [1, "ft-success", "sr", "sr-up"], [1, "ft-success-icon"], [1, "btn", "btn-orange", 3, "click"], ["data-sr-delay", "0.1s", 1, "ft-form", "sr", "sr-up", 3, "ngSubmit"], ["ftForm", "ngForm"], [1, "ft-form-row"], [1, "ft-field"], ["type", "text", "name", "firstName", "placeholder", "First name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastName", "placeholder", "Last name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "your@school.edu", "required", "", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", "placeholder", "(555) 000-0000", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "school", "placeholder", "Your school name", 3, "ngModel", "ngModelChange"], ["name", "gradeLevel", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "k-3"], ["value", "4-6"], ["value", "7-9"], ["value", "10-12"], ["value", "mixed"], ["type", "number", "name", "guests", "placeholder", "Estimated headcount", "min", "10", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "date", 3, "ngModel", "ngModelChange"], [1, "ft-field", "ft-field--full"], ["name", "message", "rows", "5", "placeholder", "Tell us about your group, any accessibility needs, or special requests...", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "ft-submit-btn", 3, "disabled"], [4, "ngIf"], [1, "ft-review-card", "sr", "sr-up"], [1, "ft-review-quote"], [1, "ft-review-meta"]], template: function FieldTripsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
        i0.ɵɵelement(9, "img", 9)(10, "div", 10);
        i0.ɵɵelementStart(11, "div", 11);
        i0.ɵɵtext(12, "A Class Favourite!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 12);
        i0.ɵɵelement(14, "img", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵelement(16, "img", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(17, "div", 15)(18, "span", 16);
        i0.ɵɵtext(19, "Plan Your Field Trip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "h2", 17);
        i0.ɵɵtext(21, "An Adventure They'll Never Forget");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "div", 18);
        i0.ɵɵelementStart(23, "p");
        i0.ɵɵtext(24, "Planning a field trip? Skip the ordinary. Bolder turns field trips into stories kids won't stop talking about. Give your class the chance to learn action-adventure skills, while testing their bravery and having a huge amount of fun.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "p");
        i0.ɵɵtext(26, "Fill out the form below to get started, and our event team will be in contact within 72 hours. Sales & Events office is open Monday\u2013Friday, 9am to 5pm.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "a", 19);
        i0.ɵɵtext(28, "\u2190 All Group Events");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(29, "section", 20)(30, "div", 4)(31, "div", 21)(32, "p");
        i0.ɵɵtext(33, "Something For Everyone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "h2");
        i0.ɵɵtext(35, "Programs By Grade Level");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(36, "div", 22);
        i0.ɵɵtemplate(37, FieldTripsComponent_div_37_Template, 9, 5, "div", 23);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(38, "section", 24)(39, "div", 4)(40, "div", 21)(41, "p");
        i0.ɵɵtext(42, "Why Choose Bolder");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "h2");
        i0.ɵɵtext(44, "What Every Field Trip Includes");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(45, "div", 25);
        i0.ɵɵtemplate(46, FieldTripsComponent_div_46_Template, 7, 4, "div", 26);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(47, "section", 27)(48, "div", 28)(49, "div", 29)(50, "span", 16);
        i0.ɵɵtext(51, "Book Your Trip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "h2", 17);
        i0.ɵɵtext(53, "Inquire About A Field Trip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "p");
        i0.ɵɵtext(55, "Our event team will respond within 72 hours with all the details you need.");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(56, FieldTripsComponent_div_56_Template, 9, 0, "div", 30);
        i0.ɵɵtemplate(57, FieldTripsComponent_form_57_Template, 57, 14, "form", 31);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(58, "section", 32)(59, "div", 4)(60, "div", 21)(61, "p");
        i0.ɵɵtext(62, "Teachers Love It Too");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "h2");
        i0.ɵɵtext(64, "What Educators Are Saying");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(65, "div", 33);
        i0.ɵɵtemplate(66, FieldTripsComponent_div_66_Template, 10, 4, "div", 34);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(67, "div", 4)(68, "div", 35)(69, "div")(70, "div", 36);
        i0.ɵɵtext(71, "Book Your Field Trip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(72, "h2");
        i0.ɵɵtext(73, "Give Your Class An Adventure They Deserve");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "p");
        i0.ɵɵtext(75, "Contact our events team to plan your school's next unforgettable outing.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(76, "div", 37)(77, "a", 38);
        i0.ɵɵtext(78, "Get Tickets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(79, "a", 39);
        i0.ɵɵtext(80, "Contact Us");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(37);
        i0.ɵɵproperty("ngForOf", ctx.gradeGroups);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.features);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", ctx.submitted);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.submitted);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.RouterLinkWithHref, i5.NgForOf, i5.NgIf, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.NgForm, i6.DefaultValueAccessor, i6.RequiredValidator, i6.NgControlStatus, i6.NgModel, i6.SelectControlValueAccessor, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.MinValidator, i6.NumberValueAccessor], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n\n\n.ft-kicker[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ft-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 1rem;\n}\n\n.ft-accent-bar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin-bottom: 1.25rem;\n}\n\n\n.ft-intro-section[_ngcontent-%COMP%] { padding-bottom: 2rem; }\n\n.ft-intro-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ft-intro-text[_ngcontent-%COMP%] {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.75;\n    margin: 0 0 1rem;\n  }\n}\n\n.ft-back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n}\n\n\n.ft-photo-mosaic[_ngcontent-%COMP%] { width: 100%; }\n\n.ft-photo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 240px 180px;\n  gap: 0.75rem;\n}\n\n.ft-photo[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n  min-height: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.ft-photo--main[_ngcontent-%COMP%] {\n  grid-column: 1 / span 2;\n}\n\n.ft-photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.6) 0%, transparent 50%);\n}\n\n.ft-photo-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.85rem;\n  border-radius: 6px;\n}\n\n\n.ft-tiers-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(244,81,19,0.05) 0%, transparent 60%);\n  border-radius: 24px;\n  margin: 0 1.5rem;\n}\n\n.ft-tiers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n\n  @media (max-width: 700px) { grid-template-columns: 1fr; }\n}\n\n.ft-tier-card[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  text-align: center;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 3px;\n    background: var(--orange);\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n    &::before { opacity: 1; }\n  }\n}\n\n.ft-tier-icon[_ngcontent-%COMP%] { font-size: 2rem; margin-bottom: 0.75rem; }\n\n.ft-tier-grades[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.4rem;\n}\n\n.ft-tier-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n}\n\n.ft-tier-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n.ft-features-section[_ngcontent-%COMP%] {\n  background: rgba(244,81,19,0.03);\n  border-top: 1px solid rgba(244,81,19,0.1);\n  border-bottom: 1px solid rgba(244,81,19,0.1);\n}\n\n.ft-features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ft-feature-card[_ngcontent-%COMP%] {\n  padding: 1.75rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.65;\n    margin: 0;\n  }\n}\n\n.ft-feature-icon[_ngcontent-%COMP%] { font-size: 1.8rem; line-height: 1; }\n\n\n.ft-form-section[_ngcontent-%COMP%] { padding-bottom: 2rem; }\n.ft-form-container[_ngcontent-%COMP%] { max-width: 860px; }\n\n.ft-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0.5rem 0 0; }\n}\n\n.ft-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.ft-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.ft-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.ft-field--full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ft-submit-btn[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-2px); }\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n  &.is-loading { opacity: 0.8; pointer-events: none; }\n\n  @media (max-width: 500px) { width: 100%; }\n}\n\n\n.ft-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n  margin-bottom: 2rem;\n\n  .ft-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 { font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; color: var(--white); margin: 0 0 0.5rem; }\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0 0 1.5rem; }\n}\n\n\n.ft-reviews-section[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, transparent, rgba(244,81,19,0.04));\n}\n\n.ft-reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ft-review-card[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover { transform: translateY(-4px); border-color: rgba(244,81,19,0.25); }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1.25rem;\n    font-style: italic;\n  }\n}\n\n.ft-review-quote[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 4rem;\n  color: var(--orange);\n  opacity: 0.35;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n\n.ft-review-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong { font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--white); }\n  span { font-family: var(--font-body); font-size: 0.78rem; color: var(--orange); }\n}\n\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0.5rem;\n  p { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin: 0 0 0.5rem; }\n  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); color: var(--white); text-transform: uppercase; line-height: 1; margin: 0; }\n}\n\n\n.sr[_ngcontent-%COMP%] { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up[_ngcontent-%COMP%] { transform: translateY(30px); }\n.sr-left[_ngcontent-%COMP%] { transform: translateX(-30px); }\n.sr-right[_ngcontent-%COMP%] { transform: translateX(30px); }\n.sr.sr-visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n\n@media (max-width: 600px) {\n  .ft-photo-grid[_ngcontent-%COMP%] { grid-template-rows: 180px 140px; }\n  .page-cta-banner[_ngcontent-%COMP%] { flex-direction: column; text-align: center; }\n  .cta-actions[_ngcontent-%COMP%] { justify-content: center; }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldTripsComponent, [{
        type: Component,
        args: [{ selector: 'app-field-trips', template: "<div class=\"inner-page field-trips-page\">\n\n  <app-page-hero\n    title=\"Field Trips\"\n    subtitle=\"Skip the ordinary field trip. Bolder turns classroom outings into stories kids won't stop talking about.\"\n    backgroundImage=\"assets/carousel-images/Carousel-1.jpg\"\n    tag=\"Schools & Groups\">\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Intro + Photo Grid -->\n  <section class=\"ip-section ft-intro-section\">\n    <div class=\"ip-container\">\n      <div class=\"ft-intro-wrap\">\n        <div class=\"ft-photo-mosaic sr sr-left\">\n          <div class=\"ft-photo-grid\">\n            <div class=\"ft-photo ft-photo--main\">\n              <img src=\"assets/images/Groups2.jpg\" alt=\"Kids on field trip adventure\" loading=\"lazy\"/>\n              <div class=\"ft-photo-overlay\"></div>\n              <div class=\"ft-photo-tag\">A Class Favourite!</div>\n            </div>\n            <div class=\"ft-photo\">\n              <img src=\"assets/carousel-images/Carousel-4.jpg\" alt=\"Students adventure activity\" loading=\"lazy\"/>\n            </div>\n            <div class=\"ft-photo\">\n              <img src=\"assets/images/Action-on-the-ground.jpg\" alt=\"Field trip group fun\" loading=\"lazy\"/>\n            </div>\n          </div>\n        </div>\n        <div class=\"ft-intro-text sr sr-right\">\n          <span class=\"ft-kicker\">Plan Your Field Trip</span>\n          <h2 class=\"ft-heading\">An Adventure They'll Never Forget</h2>\n          <div class=\"ft-accent-bar\"></div>\n          <p>Planning a field trip? Skip the ordinary. Bolder turns field trips into stories kids won't stop talking about. Give your class the chance to learn action-adventure skills, while testing their bravery and having a huge amount of fun.</p>\n          <p>Fill out the form below to get started, and our event team will be in contact within 72 hours. Sales & Events office is open Monday\u2013Friday, 9am to 5pm.</p>\n          <a routerLink=\"/group-events\" class=\"btn btn-outline ft-back-link\">\u2190 All Group Events</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Grade Level Tiers -->\n  <section class=\"ip-section ft-tiers-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Something For Everyone</p>\n        <h2>Programs By Grade Level</h2>\n      </div>\n      <div class=\"ft-tiers-grid\">\n        <div class=\"ft-tier-card sr sr-up\"\n             *ngFor=\"let g of gradeGroups; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <div class=\"ft-tier-icon\">{{ g.icon }}</div>\n          <div class=\"ft-tier-grades\">{{ g.grades }}</div>\n          <h3 class=\"ft-tier-label\">{{ g.label }}</h3>\n          <p class=\"ft-tier-desc\">{{ g.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Features Grid -->\n  <section class=\"ip-section ft-features-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Why Choose Bolder</p>\n        <h2>What Every Field Trip Includes</h2>\n      </div>\n      <div class=\"ft-features-grid\">\n        <div class=\"ft-feature-card sr sr-up\"\n             *ngFor=\"let f of features; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.08) + 's'\">\n          <div class=\"ft-feature-icon\">{{ f.icon }}</div>\n          <h4>{{ f.title }}</h4>\n          <p>{{ f.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Inquiry Form -->\n  <section class=\"ip-section ft-form-section\">\n    <div class=\"ip-container ft-form-container\">\n      <div class=\"ft-form-header sr sr-up\">\n        <span class=\"ft-kicker\">Book Your Trip</span>\n        <h2 class=\"ft-heading\">Inquire About A Field Trip</h2>\n        <p>Our event team will respond within 72 hours with all the details you need.</p>\n      </div>\n\n      <div class=\"ft-success sr sr-up\" *ngIf=\"submitted\">\n        <div class=\"ft-success-icon\">\u2713</div>\n        <h3>Inquiry Sent!</h3>\n        <p>Thanks! Our events team will be in touch within 72 hours to help plan your trip.</p>\n        <button class=\"btn btn-orange\" (click)=\"submitted = false\">Send Another</button>\n      </div>\n\n      <form class=\"ft-form sr sr-up\" (ngSubmit)=\"submitForm()\" *ngIf=\"!submitted\" data-sr-delay=\"0.1s\" #ftForm=\"ngForm\">\n        <div class=\"ft-form-row\">\n          <div class=\"ft-field\">\n            <label>First Name *</label>\n            <input type=\"text\" [(ngModel)]=\"formData.firstName\" name=\"firstName\" placeholder=\"First name\" required/>\n          </div>\n          <div class=\"ft-field\">\n            <label>Last Name *</label>\n            <input type=\"text\" [(ngModel)]=\"formData.lastName\" name=\"lastName\" placeholder=\"Last name\" required/>\n          </div>\n        </div>\n        <div class=\"ft-form-row\">\n          <div class=\"ft-field\">\n            <label>Email *</label>\n            <input type=\"email\" [(ngModel)]=\"formData.email\" name=\"email\" placeholder=\"your@school.edu\" required/>\n          </div>\n          <div class=\"ft-field\">\n            <label>Mobile *</label>\n            <input type=\"tel\" [(ngModel)]=\"formData.phone\" name=\"phone\" placeholder=\"(555) 000-0000\" required/>\n          </div>\n        </div>\n        <div class=\"ft-form-row\">\n          <div class=\"ft-field\">\n            <label>School / Organization</label>\n            <input type=\"text\" [(ngModel)]=\"formData.school\" name=\"school\" placeholder=\"Your school name\"/>\n          </div>\n          <div class=\"ft-field\">\n            <label>Grade Level</label>\n            <select [(ngModel)]=\"formData.gradeLevel\" name=\"gradeLevel\">\n              <option value=\"\" disabled selected>Select grade range</option>\n              <option value=\"k-3\">Grades K\u20133</option>\n              <option value=\"4-6\">Grades 4\u20136</option>\n              <option value=\"7-9\">Grades 7\u20139</option>\n              <option value=\"10-12\">Grades 10\u201312</option>\n              <option value=\"mixed\">Mixed / Multiple Grades</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"ft-form-row\">\n          <div class=\"ft-field\">\n            <label>Number of Students</label>\n            <input type=\"number\" [(ngModel)]=\"formData.guests\" name=\"guests\" placeholder=\"Estimated headcount\" min=\"10\"/>\n          </div>\n          <div class=\"ft-field\">\n            <label>Preferred Date</label>\n            <input type=\"date\" [(ngModel)]=\"formData.date\" name=\"date\"/>\n          </div>\n        </div>\n        <div class=\"ft-field ft-field--full\">\n          <label>Message / Special Requirements</label>\n          <textarea [(ngModel)]=\"formData.message\" name=\"message\" rows=\"5\" placeholder=\"Tell us about your group, any accessibility needs, or special requests...\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"ft-submit-btn\" [class.is-loading]=\"submitting\" [disabled]=\"submitting || ftForm.invalid\">\n          <span *ngIf=\"!submitting\">Submit Inquiry \u2197</span>\n          <span *ngIf=\"submitting\">Sending...</span>\n        </button>\n      </form>\n    </div>\n  </section>\n\n  <!-- Reviews -->\n  <section class=\"ip-section ft-reviews-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Teachers Love It Too</p>\n        <h2>What Educators Are Saying</h2>\n      </div>\n      <div class=\"ft-reviews-grid\">\n        <div class=\"ft-review-card sr sr-up\"\n             *ngFor=\"let r of reviews; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <div class=\"ft-review-quote\">\"</div>\n          <p>{{ r.quote }}</p>\n          <div class=\"ft-review-meta\">\n            <strong>{{ r.name }}</strong>\n            <span>{{ r.role }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Your Field Trip</div>\n        <h2>Give Your Class An Adventure They Deserve</h2>\n        <p>Contact our events team to plan your school's next unforgettable outing.</p>\n      </div>\n      <div class=\"cta-actions\">\n        <a href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-dark btn-lg\">Get Tickets</a>\n        <a routerLink=\"/contact-us\" class=\"btn btn-outline btn-lg\">Contact Us</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1200px; margin: 0 auto; }\n\n/* \u2500\u2500 Reusable \u2500\u2500 */\n.ft-kicker {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ft-heading {\n  font-family: var(--font-display);\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 1rem;\n}\n\n.ft-accent-bar {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin-bottom: 1.25rem;\n}\n\n/* \u2500\u2500 Intro \u2500\u2500 */\n.ft-intro-section { padding-bottom: 2rem; }\n\n.ft-intro-wrap {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ft-intro-text {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.75;\n    margin: 0 0 1rem;\n  }\n}\n\n.ft-back-link {\n  display: inline-block;\n  margin-top: 0.75rem;\n  font-size: 0.85rem;\n}\n\n/* \u2500\u2500 Photo Mosaic \u2500\u2500 */\n.ft-photo-mosaic { width: 100%; }\n\n.ft-photo-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 240px 180px;\n  gap: 0.75rem;\n}\n\n.ft-photo {\n  border-radius: 14px;\n  overflow: hidden;\n  position: relative;\n  min-height: 0;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.ft-photo--main {\n  grid-column: 1 / span 2;\n}\n\n.ft-photo-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.6) 0%, transparent 50%);\n}\n\n.ft-photo-tag {\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 0.85rem;\n  border-radius: 6px;\n}\n\n/* \u2500\u2500 Tiers \u2500\u2500 */\n.ft-tiers-section {\n  background: linear-gradient(135deg, rgba(244,81,19,0.05) 0%, transparent 60%);\n  border-radius: 24px;\n  margin: 0 1.5rem;\n}\n\n.ft-tiers-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n\n  @media (max-width: 700px) { grid-template-columns: 1fr; }\n}\n\n.ft-tier-card {\n  padding: 2rem 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  text-align: center;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 3px;\n    background: var(--orange);\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n    &::before { opacity: 1; }\n  }\n}\n\n.ft-tier-icon { font-size: 2rem; margin-bottom: 0.75rem; }\n\n.ft-tier-grades {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.4rem;\n}\n\n.ft-tier-label {\n  font-family: var(--font-display);\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n}\n\n.ft-tier-desc {\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n/* \u2500\u2500 Features \u2500\u2500 */\n.ft-features-section {\n  background: rgba(244,81,19,0.03);\n  border-top: 1px solid rgba(244,81,19,0.1);\n  border-bottom: 1px solid rgba(244,81,19,0.1);\n}\n\n.ft-features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ft-feature-card {\n  padding: 1.75rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.65;\n    margin: 0;\n  }\n}\n\n.ft-feature-icon { font-size: 1.8rem; line-height: 1; }\n\n/* \u2500\u2500 Form \u2500\u2500 */\n.ft-form-section { padding-bottom: 2rem; }\n.ft-form-container { max-width: 860px; }\n\n.ft-form-header {\n  margin-bottom: 2.5rem;\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0.5rem 0 0; }\n}\n\n.ft-form { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.ft-form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.ft-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.ft-field--full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.75rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ft-submit-btn {\n  padding: 1rem 2.5rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-2px); }\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n  &.is-loading { opacity: 0.8; pointer-events: none; }\n\n  @media (max-width: 500px) { width: 100%; }\n}\n\n/* \u2500\u2500 Success \u2500\u2500 */\n.ft-success {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n  margin-bottom: 2rem;\n\n  .ft-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 { font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; color: var(--white); margin: 0 0 0.5rem; }\n  p { font-family: var(--font-body); font-size: 0.95rem; color: var(--muted); margin: 0 0 1.5rem; }\n}\n\n/* \u2500\u2500 Reviews \u2500\u2500 */\n.ft-reviews-section {\n  background: linear-gradient(to bottom, transparent, rgba(244,81,19,0.04));\n}\n\n.ft-reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.ft-review-card {\n  padding: 2rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover { transform: translateY(-4px); border-color: rgba(244,81,19,0.25); }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1.25rem;\n    font-style: italic;\n  }\n}\n\n.ft-review-quote {\n  font-family: var(--font-display);\n  font-size: 4rem;\n  color: var(--orange);\n  opacity: 0.35;\n  line-height: 1;\n  margin-bottom: 0.5rem;\n}\n\n.ft-review-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong { font-family: var(--font-display); font-size: 1rem; text-transform: uppercase; color: var(--white); }\n  span { font-family: var(--font-body); font-size: 0.78rem; color: var(--orange); }\n}\n\n/* \u2500\u2500 Section Title \u2500\u2500 */\n.section-title {\n  text-align: center;\n  margin-bottom: 0.5rem;\n  p { font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--orange); margin: 0 0 0.5rem; }\n  h2 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); color: var(--white); text-transform: uppercase; line-height: 1; margin: 0; }\n}\n\n/* \u2500\u2500 Scroll Reveal \u2500\u2500 */\n.sr { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up { transform: translateY(30px); }\n.sr-left { transform: translateX(-30px); }\n.sr-right { transform: translateX(30px); }\n.sr.sr-visible { opacity: 1; transform: none; }\n\n@media (max-width: 600px) {\n  .ft-photo-grid { grid-template-rows: 180px 140px; }\n  .page-cta-banner { flex-direction: column; text-align: center; }\n  .cta-actions { justify-content: center; }\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=field-trips.component.js.map