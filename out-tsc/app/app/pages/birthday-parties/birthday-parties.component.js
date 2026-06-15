import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
function BirthdayPartiesComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "div", 37);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r5 * 0.07 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
} }
function BirthdayPartiesComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵtext(1, "Most Popular");
    i0.ɵɵelementEnd();
} }
function BirthdayPartiesComponent_div_45_li_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r10);
} }
function BirthdayPartiesComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, BirthdayPartiesComponent_div_45_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementStart(2, "div", 41)(3, "div", 42);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3", 43);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 44)(8, "span", 45);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 46);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 47);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "ul", 48);
    i0.ɵɵtemplate(15, BirthdayPartiesComponent_div_45_li_15_Template, 2, 1, "li", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 50);
    i0.ɵɵtext(17, "Book This Package \u2197");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pkg_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵstyleProp("--pkg-color", pkg_r6.color);
    i0.ɵɵclassProp("is-popular", pkg_r6.popular);
    i0.ɵɵattribute("data-sr-delay", i_r7 * 0.1 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", pkg_r6.popular);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pkg_r6.tag);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pkg_r6.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pkg_r6.price);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pkg_r6.priceSuffix);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pkg_r6.priceNote);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", pkg_r6.includes);
} }
function BirthdayPartiesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "span", 53);
    i0.ɵɵtext(2, "\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 54);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 55)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r12 * 0.1 + "s");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(r_r11.quote);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r11.role);
} }
function BirthdayPartiesComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56)(1, "button", 57);
    i0.ɵɵlistener("click", function BirthdayPartiesComponent_div_63_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const i_r14 = restoredCtx.index; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.toggleFaq(i_r14); });
    i0.ɵɵelementStart(2, "span", 58);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 59);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 60)(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const faq_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r3.openFaqs.has(i_r14));
    i0.ɵɵattribute("data-sr-delay", i_r14 * 0.07 + "s");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(faq_r13.q);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.openFaqs.has(i_r14) ? "\u2212" : "+");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-open", ctx_r3.openFaqs.has(i_r14));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(faq_r13.a);
} }
const _c0 = function () { return { icon: "\uD83D\uDC65", label: "10 Party Guests Admission" }; };
const _c1 = function () { return { icon: "\uD83C\uDFAB", label: "2 Parent Passes" }; };
const _c2 = function () { return { icon: "\uD83E\uDE91", label: "45-Min. Party Table Reservation" }; };
const _c3 = function () { return { icon: "\uD83C\uDF55", label: "Pizza Meal" }; };
const _c4 = function () { return { icon: "\uD83E\uDD64", label: "Unlimited Drinks" }; };
const _c5 = function () { return { icon: "\uD83C\uDF82", label: "Bring Your Own Cake" }; };
const _c6 = function (a0, a1, a2, a3, a4, a5) { return [a0, a1, a2, a3, a4, a5]; };
export class BirthdayPartiesComponent {
    constructor(seo) {
        this.seo = seo;
        this.packages = [
            {
                name: 'Base Camp Birthday Party',
                tag: 'Great for All Ages',
                price: '$25.50*',
                priceSuffix: '/guest',
                priceNote: '*Min. 10 guests',
                color: '#119ee8',
                includes: [
                    'Celebrate your special day with us',
                    'All Base Camp ground-level attractions',
                    '2 parent passes included',
                    'Pizza meal for all guests',
                    'Unlimited drinks',
                    'Bring your own cake option'
                ]
            },
            {
                name: 'Summit Ropes Course Birthday Party',
                tag: 'Most Popular',
                price: '$55.00*',
                priceSuffix: '/guest',
                priceNote: '*Min. 10 guests',
                color: '#f45113',
                popular: true,
                includes: [
                    'All Base Camp ground-level attractions',
                    'Vertical climbing walls access',
                    'Ropes course included',
                    '2 parent passes included',
                    'Pizza meal for all guests',
                    'Unlimited drinks'
                ]
            },
            {
                name: 'Summit Mountain Experience Birthday Party',
                tag: 'Ultimate Experience',
                price: '$55.00*',
                priceSuffix: '/guest',
                priceNote: '*Min. 10 guests',
                color: '#8f34cd',
                includes: [
                    'All Base Camp ground-level attractions',
                    'Vertical climbing walls access',
                    'Mountain Experience activities',
                    '2 parent passes included',
                    'Pizza meal for all guests',
                    'Unlimited drinks'
                ]
            }
        ];
        this.reviews = [
            { name: 'Ally Smith', role: 'Birthday Party Guest', quote: 'So fun! Even great for adults, we came here for a baby party and had a blast!' },
            { name: 'Tiffany Erdynn', role: 'Birthday Party Host', quote: "Came here for a kid's birthday party for about 15 kids. We all had a blast. Kids loved the slides and the shooting game. Will definitely be back." },
            { name: 'Chrismar Cortina', role: 'Birthday Party Host', quote: 'Game here for my son\'s birthday party and the party hosts were amazing. Everyone was outstanding. Everything was so nice. Definitely recommended.' }
        ];
        this.openFaqs = new Set();
        this.faqs = [
            { q: 'What ages are the parties best for?', a: 'Birthday parties at Bolder are suitable for ages 4 and up. We recommend the Base Camp package for younger guests (under 7) and Summit or Extreme for older kids.' },
            { q: 'Can I add more than 10 guests?', a: 'Absolutely! The package prices are based on a minimum of 10 guests. Additional guests can be added at a per-person rate. Contact us for group pricing.' },
            { q: "What's included in the 45-minute table reservation?", a: 'Your exclusive party table reservation includes private party space, table decoration setup, and your dedicated party host. You are also welcome to bring a cake and decorations.' },
            { q: 'What if I need to cancel or reschedule?', a: 'We require at least 72 hours\' notice for cancellations or reschedules. Deposits are non-refundable but can be applied to a future booking.' },
            { q: 'Do parents need to supervise during activities?', a: 'Parents are encouraged to participate! Both packages include 2 free parent passes. Younger children (under 7) must be accompanied by an adult on some attractions.' },
            { q: 'How far in advance should I book?', a: 'We recommend booking at least 2–4 weeks in advance, especially for weekend slots which fill up fast. You can book online 24/7.' }
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Birthday Parties',
            description: 'Throw an unforgettable birthday party at Bolder Adventure Park. Choose from Base Camp, Summit Ropes Course, or Summit Mountain Experience party packages in Grand Prairie, TX.',
            path: '/birthday-parties',
            keywords: 'birthday party, kids birthday, adventure party, party packages, Grand Prairie birthday'
        });
    }
    toggleFaq(i) {
        if (this.openFaqs.has(i)) {
            this.openFaqs.delete(i);
        }
        else {
            this.openFaqs.add(i);
        }
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
BirthdayPartiesComponent.ɵfac = function BirthdayPartiesComponent_Factory(t) { return new (t || BirthdayPartiesComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
BirthdayPartiesComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BirthdayPartiesComponent, selectors: [["app-birthday-parties"]], decls: 76, vars: 17, consts: [[1, "inner-page", "birthday-parties-page"], ["title", "Birthday Parties", "subtitle", "If you are looking for a one of a kind birthday experience for your big day, Bolder Adventure Park is your destination!", "backgroundImage", "assets/images/Birthday-parties.jpg", "tag", "Celebrate with Bolder"], ["speed", "slow"], [1, "bp-intro-section", "ip-section"], [1, "ip-container"], [1, "bp-intro-grid", "sr", "sr-up"], [1, "bp-intro-photos"], [1, "bp-photo-main"], ["src", "assets/images/Birthday-parties.jpg", "alt", "Birthday parties at Bolder", "loading", "lazy"], [1, "bp-photo-duo"], ["src", "assets/images/Parties1.png", "alt", "Party activities", "loading", "lazy"], ["src", "assets/images/Parties2.png", "alt", "Birthday celebration", "loading", "lazy"], [1, "bp-intro-copy"], [1, "ip-kicker"], [1, "ip-heading"], [1, "bp-intro-ctas"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*1a467vw*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzUzNzYyJGozOSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg"], ["routerLink", "/contact-us", 1, "btn", "btn-outline"], [1, "bp-includes-section", "ip-section"], [1, "section-title", "sr", "sr-up"], [1, "bp-includes-grid"], ["class", "bp-include-item sr sr-up", 4, "ngFor", "ngForOf"], [1, "bp-packages-section", "ip-section"], [1, "bp-packages-grid"], ["class", "bp-package-card sr sr-up", 3, "is-popular", "--pkg-color", 4, "ngFor", "ngForOf"], [1, "bp-reviews-section", "ip-section"], [1, "bp-reviews-grid"], ["class", "bp-review-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "ip-section"], [1, "faq-header", "sr", "sr-up"], [1, "faq-list"], ["class", "faq-item sr sr-up", 3, "is-open", 4, "ngFor", "ngForOf"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*tawbul*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU0NDAxJGo1NSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], [1, "bp-include-item", "sr", "sr-up"], [1, "bp-include-icon"], [1, "bp-include-label"], [1, "bp-package-card", "sr", "sr-up"], ["class", "bpp-popular-tag", 4, "ngIf"], [1, "bpp-header"], [1, "bpp-tag"], [1, "bpp-name"], [1, "bpp-price"], [1, "bpp-amount"], [1, "bpp-suffix"], [1, "bpp-note"], [1, "bpp-includes"], [4, "ngFor", "ngForOf"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*tawbul*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU0NDAxJGo1NSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..", "target", "_blank", "rel", "noopener", 1, "bpp-cta"], [1, "bpp-popular-tag"], [1, "bp-review-card", "sr", "sr-up"], [1, "bpr-quote-mark"], [1, "bpr-text"], [1, "bpr-meta"], [1, "faq-item", "sr", "sr-up"], ["type", "button", 1, "faq-trigger", 3, "click"], [1, "faq-q"], [1, "faq-plus"], [1, "faq-body"]], template: function BirthdayPartiesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        i0.ɵɵelement(8, "img", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelement(10, "img", 10)(11, "img", 11);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "div", 12)(13, "span", 13);
        i0.ɵɵtext(14, "Make It Unforgettable");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h2", 14);
        i0.ɵɵtext(16, "Throw The Best");
        i0.ɵɵelement(17, "br");
        i0.ɵɵtext(18, "Birthday Party Ever!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "p");
        i0.ɵɵtext(20, " If you are looking for a one of a kind birthday experience for your big day, Bolder Adventure Park is your destination! We've got the best birthday packages with endless fun. Check them out below and book a party to get started. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22, " The party team will contact you ahead of the day to ensure everything is catered to your requirements. The Bolder team will be there on the big day to make sure the celebrations run smoothly from start to finish. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 15)(24, "a", 16);
        i0.ɵɵtext(25, "Book A Party");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "a", 17);
        i0.ɵɵtext(27, "Inquire Now");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(28, "section", 18)(29, "div", 4)(30, "div", 19)(31, "p");
        i0.ɵɵtext(32, "All Party Packages Include");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "h2");
        i0.ɵɵtext(34, "What You Get");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(35, "div", 20);
        i0.ɵɵtemplate(36, BirthdayPartiesComponent_div_36_Template, 5, 3, "div", 21);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(37, "section", 22)(38, "div", 4)(39, "div", 19)(40, "p");
        i0.ɵɵtext(41, "Choose Your Adventure Level");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "h2");
        i0.ɵɵtext(43, "Party Packages");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 23);
        i0.ɵɵtemplate(45, BirthdayPartiesComponent_div_45_Template, 18, 12, "div", 24);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(46, "section", 25)(47, "div", 4)(48, "div", 19)(49, "p");
        i0.ɵɵtext(50, "Happy Families");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "h2");
        i0.ɵɵtext(52, "Parents & Kids Love A Bolder Birthday Party");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "div", 26);
        i0.ɵɵtemplate(54, BirthdayPartiesComponent_div_54_Template, 10, 4, "div", 27);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(55, "section", 28)(56, "div", 4)(57, "div", 29)(58, "span", 13);
        i0.ɵɵtext(59, "Got Questions?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(60, "h2", 14);
        i0.ɵɵtext(61, "Frequently Asked Questions");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 30);
        i0.ɵɵtemplate(63, BirthdayPartiesComponent_div_63_Template, 9, 8, "div", 31);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(64, "div", 4)(65, "div", 32)(66, "div")(67, "div", 33);
        i0.ɵɵtext(68, "Easy Online Booking");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "h2");
        i0.ɵɵtext(70, "Ready To Throw The Best Party Ever?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "p");
        i0.ɵɵtext(72, " Book online in just a few clicks. Our team will reach out to confirm the details. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(73, "div", 34)(74, "a", 35);
        i0.ɵɵtext(75, "Book A Party Now");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(36);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction6(10, _c6, i0.ɵɵpureFunction0(4, _c0), i0.ɵɵpureFunction0(5, _c1), i0.ɵɵpureFunction0(6, _c2), i0.ɵɵpureFunction0(7, _c3), i0.ɵɵpureFunction0(8, _c4), i0.ɵɵpureFunction0(9, _c5)));
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.packages);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.faqs);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.RouterLinkWithHref, i5.NgForOf, i5.NgIf], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1100px; margin: 0 auto; }\n.ip-kicker[_ngcontent-%COMP%] { display:inline-block;font-family:var(--font-ui);font-size:0.78rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--orange);margin-bottom:0.6rem; }\n.ip-heading[_ngcontent-%COMP%] { font-family:var(--font-display);font-size:clamp(2.5rem,6vw,4.5rem);color:var(--white);line-height:1;margin:0 0 1rem; }\n\n\n.bp-intro-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  @media (max-width: 800px) { grid-template-columns: 1fr; }\n}\n\n.bp-intro-photos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.bp-photo-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  border-radius: 16px;\n  display: block;\n}\n\n.bp-photo-duo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n\n  img {\n    width: 100%;\n    height: 180px;\n    object-fit: cover;\n    border-radius: 12px;\n    display: block;\n  }\n}\n\n.bp-intro-copy[_ngcontent-%COMP%] {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.92rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1rem;\n  }\n}\n\n.bp-intro-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n\n\n.bp-includes-section[_ngcontent-%COMP%] { background: #090909; }\n\n.bp-includes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 700px) { grid-template-columns: 1fr 1fr; }\n  @media (max-width: 480px) { grid-template-columns: 1fr; }\n}\n\n.bp-include-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  text-align: center;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 1.75rem 1rem;\n}\n\n.bp-include-icon[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n\n.bp-include-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white);\n  text-align: center;\n}\n\n\n.bp-packages-section[_ngcontent-%COMP%] { background: var(--black); }\n\n.bp-packages-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }\n}\n\n.bp-package-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: var(--pkg-color, var(--orange));\n    border-radius: 20px 20px 0 0;\n  }\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(255,255,255,0.2);\n    box-shadow: 0 20px 50px rgba(0,0,0,0.4);\n  }\n\n  &.is-popular {\n    border-color: var(--pkg-color, var(--orange));\n    box-shadow: 0 0 0 1px var(--pkg-color, var(--orange)), 0 20px 60px rgba(0,0,0,0.4);\n  }\n}\n\n.bpp-popular-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--pkg-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 1rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n\n.bpp-header[_ngcontent-%COMP%] {}\n\n.bpp-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255,255,255,0.07);\n  color: var(--muted);\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.6rem;\n  border-radius: 4px;\n  margin-bottom: 0.75rem;\n}\n\n.bpp-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n  line-height: 1;\n}\n\n.bpp-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.3rem;\n  margin-bottom: 0.25rem;\n}\n\n.bpp-amount[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2.8rem;\n  color: var(--pkg-color, var(--orange));\n  line-height: 1;\n}\n\n.bpp-suffix[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  color: var(--muted);\n}\n\n.bpp-note[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.78rem;\n  color: var(--muted);\n  margin-bottom: 0.5rem;\n}\n\n.bpp-includes[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0.5rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.85rem;\n    color: var(--muted);\n    padding-left: 1.2em;\n    position: relative;\n    line-height: 1.4;\n\n    &::before {\n      content: '\u2713';\n      position: absolute;\n      left: 0;\n      color: var(--pkg-color, var(--orange));\n      font-weight: 700;\n    }\n  }\n}\n\n.bpp-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  border-radius: 999px;\n  background: var(--pkg-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.2s;\n  margin-top: auto;\n\n  &:hover { opacity: 0.88; transform: translateY(-2px); }\n}\n\n\n.bp-reviews-section[_ngcontent-%COMP%] { background: #060606; }\n\n.bp-reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }\n}\n\n.bp-review-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 2rem;\n  position: relative;\n}\n\n.bpr-quote-mark[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 5rem;\n  color: var(--orange);\n  line-height: 0.7;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.bpr-text[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.7;\n  margin: 0 0 1.25rem;\n}\n\n.bpr-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong {\n    font-family: var(--font-ui);\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--white);\n  }\n\n  span {\n    font-family: var(--font-body);\n    font-size: 0.8rem;\n    color: var(--orange);\n  }\n}\n\n\n.faq-header[_ngcontent-%COMP%] { margin-bottom: 2rem; }\n.faq-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2.5rem; }\n.faq-item[_ngcontent-%COMP%] { background:var(--panel);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color 0.2s; &.is-open { border-color:rgba(244,81,19,0.35); } }\n.faq-trigger[_ngcontent-%COMP%] { width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.5rem;background:none;border:none;cursor:pointer;text-align:left;gap:1rem; }\n.faq-q[_ngcontent-%COMP%] { font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.5rem);color:var(--white);text-transform:uppercase;line-height:1.1; }\n.faq-plus[_ngcontent-%COMP%] { font-size:1.6rem;color:var(--orange);line-height:1;flex-shrink:0; }\n.faq-body[_ngcontent-%COMP%] { max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.35s ease; &.is-open { max-height:300px;padding:0 1.5rem 1.25rem; } p { font-family:var(--font-body);font-size:0.9rem;color:var(--muted);line-height:1.7;margin:0; } }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BirthdayPartiesComponent, [{
        type: Component,
        args: [{ selector: 'app-birthday-parties', template: "<div class=\"inner-page birthday-parties-page\">\n  <app-page-hero\n    title=\"Birthday Parties\"\n    subtitle=\"If you are looking for a one of a kind birthday experience for your big day, Bolder Adventure Park is your destination!\"\n    backgroundImage=\"assets/images/Birthday-parties.jpg\"\n    tag=\"Celebrate with Bolder\"\n  >\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Photo strip + intro -->\n  <section class=\"bp-intro-section ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"bp-intro-grid sr sr-up\">\n        <div class=\"bp-intro-photos\">\n          <div class=\"bp-photo-main\">\n            <img\n              src=\"assets/images/Birthday-parties.jpg\"\n              alt=\"Birthday parties at Bolder\"\n              loading=\"lazy\"\n            />\n          </div>\n          <div class=\"bp-photo-duo\">\n            <img\n              src=\"assets/images/Parties1.png\"\n              alt=\"Party activities\"\n              loading=\"lazy\"\n            />\n            <img\n              src=\"assets/images/Parties2.png\"\n              alt=\"Birthday celebration\"\n              loading=\"lazy\"\n            />\n          </div>\n        </div>\n        <div class=\"bp-intro-copy\">\n          <span class=\"ip-kicker\">Make It Unforgettable</span>\n          <h2 class=\"ip-heading\">Throw The Best<br />Birthday Party Ever!</h2>\n          <p>\n            If you are looking for a one of a kind birthday experience for your\n            big day, Bolder Adventure Park is your destination! We've got the\n            best birthday packages with endless fun. Check them out below and\n            book a party to get started.\n          </p>\n          <p>\n            The party team will contact you ahead of the day to ensure\n            everything is catered to your requirements. The Bolder team will be\n            there on the big day to make sure the celebrations run smoothly from\n            start to finish.\n          </p>\n          <div class=\"bp-intro-ctas\">\n            <a\n              href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*1a467vw*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzUzNzYyJGozOSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              class=\"btn btn-orange btn-lg\"\n              >Book A Party</a\n            >\n            <a routerLink=\"/contact-us\" class=\"btn btn-outline\">Inquire Now</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- What's included -->\n  <section class=\"bp-includes-section ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>All Party Packages Include</p>\n        <h2>What You Get</h2>\n      </div>\n      <div class=\"bp-includes-grid\">\n        <div\n          class=\"bp-include-item sr sr-up\"\n          *ngFor=\"\n            let item of [\n              { icon: '\uD83D\uDC65', label: '10 Party Guests Admission' },\n              { icon: '\uD83C\uDFAB', label: '2 Parent Passes' },\n              { icon: '\uD83E\uDE91', label: '45-Min. Party Table Reservation' },\n              { icon: '\uD83C\uDF55', label: 'Pizza Meal' },\n              { icon: '\uD83E\uDD64', label: 'Unlimited Drinks' },\n              { icon: '\uD83C\uDF82', label: 'Bring Your Own Cake' },\n            ];\n            let i = index\n          \"\n          [attr.data-sr-delay]=\"i * 0.07 + 's'\"\n        >\n          <div class=\"bp-include-icon\">{{ item.icon }}</div>\n          <span class=\"bp-include-label\">{{ item.label }}</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Party Packages -->\n  <section class=\"bp-packages-section ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Choose Your Adventure Level</p>\n        <h2>Party Packages</h2>\n      </div>\n      <div class=\"bp-packages-grid\">\n        <div\n          class=\"bp-package-card sr sr-up\"\n          *ngFor=\"let pkg of packages; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.1 + 's'\"\n          [class.is-popular]=\"pkg.popular\"\n          [style.--pkg-color]=\"pkg.color\"\n        >\n          <div class=\"bpp-popular-tag\" *ngIf=\"pkg.popular\">Most Popular</div>\n          <div class=\"bpp-header\">\n            <div class=\"bpp-tag\">{{ pkg.tag }}</div>\n            <h3 class=\"bpp-name\">{{ pkg.name }}</h3>\n            <div class=\"bpp-price\">\n              <span class=\"bpp-amount\">{{ pkg.price }}</span>\n              <span class=\"bpp-suffix\">{{ pkg.priceSuffix }}</span>\n            </div>\n            <div class=\"bpp-note\">{{ pkg.priceNote }}</div>\n          </div>\n          <ul class=\"bpp-includes\">\n            <li *ngFor=\"let item of pkg.includes\">{{ item }}</li>\n          </ul>\n          <a\n            href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*tawbul*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU0NDAxJGo1NSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..\"\n            target=\"_blank\"\n            rel=\"noopener\"\n            class=\"bpp-cta\"\n            >Book This Package \u2197</a\n          >\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Reviews -->\n  <section class=\"bp-reviews-section ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Happy Families</p>\n        <h2>Parents &amp; Kids Love A Bolder Birthday Party</h2>\n      </div>\n      <div class=\"bp-reviews-grid\">\n        <div\n          class=\"bp-review-card sr sr-up\"\n          *ngFor=\"let r of reviews; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.1 + 's'\"\n        >\n          <span class=\"bpr-quote-mark\">\"</span>\n          <p class=\"bpr-text\">{{ r.quote }}</p>\n          <div class=\"bpr-meta\">\n            <strong>{{ r.name }}</strong>\n            <span>{{ r.role }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- FAQ -->\n  <section class=\"ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"faq-header sr sr-up\">\n        <span class=\"ip-kicker\">Got Questions?</span>\n        <h2 class=\"ip-heading\">Frequently Asked Questions</h2>\n      </div>\n      <div class=\"faq-list\">\n        <div\n          class=\"faq-item sr sr-up\"\n          *ngFor=\"let faq of faqs; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.07 + 's'\"\n          [class.is-open]=\"openFaqs.has(i)\"\n        >\n          <button class=\"faq-trigger\" type=\"button\" (click)=\"toggleFaq(i)\">\n            <span class=\"faq-q\">{{ faq.q }}</span>\n            <span class=\"faq-plus\">{{ openFaqs.has(i) ? \"\u2212\" : \"+\" }}</span>\n          </button>\n          <div class=\"faq-body\" [class.is-open]=\"openFaqs.has(i)\">\n            <p>{{ faq.a }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Easy Online Booking</div>\n        <h2>Ready To Throw The Best Party Ever?</h2>\n        <p>\n          Book online in just a few clicks. Our team will reach out to confirm\n          the details.\n        </p>\n      </div>\n      <div class=\"cta-actions\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*tawbul*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU0NDAxJGo1NSRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-dark btn-lg\"\n          >Book A Party Now</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1100px; margin: 0 auto; }\n.ip-kicker { display:inline-block;font-family:var(--font-ui);font-size:0.78rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--orange);margin-bottom:0.6rem; }\n.ip-heading { font-family:var(--font-display);font-size:clamp(2.5rem,6vw,4.5rem);color:var(--white);line-height:1;margin:0 0 1rem; }\n\n/* \u2500\u2500 Intro \u2500\u2500 */\n.bp-intro-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  @media (max-width: 800px) { grid-template-columns: 1fr; }\n}\n\n.bp-intro-photos {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.bp-photo-main img {\n  width: 100%;\n  height: 280px;\n  object-fit: cover;\n  border-radius: 16px;\n  display: block;\n}\n\n.bp-photo-duo {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n\n  img {\n    width: 100%;\n    height: 180px;\n    object-fit: cover;\n    border-radius: 12px;\n    display: block;\n  }\n}\n\n.bp-intro-copy {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.92rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1rem;\n  }\n}\n\n.bp-intro-ctas {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n\n/* \u2500\u2500 What's included \u2500\u2500 */\n.bp-includes-section { background: #090909; }\n\n.bp-includes-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 700px) { grid-template-columns: 1fr 1fr; }\n  @media (max-width: 480px) { grid-template-columns: 1fr; }\n}\n\n.bp-include-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  text-align: center;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 1.75rem 1rem;\n}\n\n.bp-include-icon {\n  font-size: 2.2rem;\n}\n\n.bp-include-label {\n  font-family: var(--font-ui);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--white);\n  text-align: center;\n}\n\n/* \u2500\u2500 Packages \u2500\u2500 */\n.bp-packages-section { background: var(--black); }\n\n.bp-packages-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }\n}\n\n.bp-package-card {\n  position: relative;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: var(--pkg-color, var(--orange));\n    border-radius: 20px 20px 0 0;\n  }\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(255,255,255,0.2);\n    box-shadow: 0 20px 50px rgba(0,0,0,0.4);\n  }\n\n  &.is-popular {\n    border-color: var(--pkg-color, var(--orange));\n    box-shadow: 0 0 0 1px var(--pkg-color, var(--orange)), 0 20px 60px rgba(0,0,0,0.4);\n  }\n}\n\n.bpp-popular-tag {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--pkg-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 1rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n\n.bpp-header {}\n\n.bpp-tag {\n  display: inline-block;\n  background: rgba(255,255,255,0.07);\n  color: var(--muted);\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.6rem;\n  border-radius: 4px;\n  margin-bottom: 0.75rem;\n}\n\n.bpp-name {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n  line-height: 1;\n}\n\n.bpp-price {\n  display: flex;\n  align-items: baseline;\n  gap: 0.3rem;\n  margin-bottom: 0.25rem;\n}\n\n.bpp-amount {\n  font-family: var(--font-display);\n  font-size: 2.8rem;\n  color: var(--pkg-color, var(--orange));\n  line-height: 1;\n}\n\n.bpp-suffix {\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  color: var(--muted);\n}\n\n.bpp-note {\n  font-family: var(--font-body);\n  font-size: 0.78rem;\n  color: var(--muted);\n  margin-bottom: 0.5rem;\n}\n\n.bpp-includes {\n  list-style: none;\n  padding: 0;\n  margin: 0.5rem 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.85rem;\n    color: var(--muted);\n    padding-left: 1.2em;\n    position: relative;\n    line-height: 1.4;\n\n    &::before {\n      content: '\u2713';\n      position: absolute;\n      left: 0;\n      color: var(--pkg-color, var(--orange));\n      font-weight: 700;\n    }\n  }\n}\n\n.bpp-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  border-radius: 999px;\n  background: var(--pkg-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: opacity 0.2s, transform 0.2s;\n  margin-top: auto;\n\n  &:hover { opacity: 0.88; transform: translateY(-2px); }\n}\n\n/* \u2500\u2500 Reviews \u2500\u2500 */\n.bp-reviews-section { background: #060606; }\n\n.bp-reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }\n}\n\n.bp-review-card {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 2rem;\n  position: relative;\n}\n\n.bpr-quote-mark {\n  font-family: var(--font-display);\n  font-size: 5rem;\n  color: var(--orange);\n  line-height: 0.7;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.bpr-text {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.7;\n  margin: 0 0 1.25rem;\n}\n\n.bpr-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n\n  strong {\n    font-family: var(--font-ui);\n    font-size: 1rem;\n    font-weight: 700;\n    color: var(--white);\n  }\n\n  span {\n    font-family: var(--font-body);\n    font-size: 0.8rem;\n    color: var(--orange);\n  }\n}\n\n/* \u2500\u2500 FAQ \u2500\u2500 */\n.faq-header { margin-bottom: 2rem; }\n.faq-list { display:flex;flex-direction:column;gap:0.75rem;margin-bottom:2.5rem; }\n.faq-item { background:var(--panel);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color 0.2s; &.is-open { border-color:rgba(244,81,19,0.35); } }\n.faq-trigger { width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.5rem;background:none;border:none;cursor:pointer;text-align:left;gap:1rem; }\n.faq-q { font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.5rem);color:var(--white);text-transform:uppercase;line-height:1.1; }\n.faq-plus { font-size:1.6rem;color:var(--orange);line-height:1;flex-shrink:0; }\n.faq-body { max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.35s ease; &.is-open { max-height:300px;padding:0 1.5rem 1.25rem; } p { font-family:var(--font-body);font-size:0.9rem;color:var(--muted);line-height:1.7;margin:0; } }\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=birthday-parties.component.js.map