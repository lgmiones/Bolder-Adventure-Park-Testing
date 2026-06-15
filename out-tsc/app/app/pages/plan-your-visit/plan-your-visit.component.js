import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
function PlanYourVisitComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 63);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3", 64);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 65);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 66);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 67);
    i0.ɵɵtext(10, "Book Now \u2197");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵstyleProp("--accent", t_r2.color);
    i0.ɵɵattribute("data-sr-delay", i_r3 * 0.12 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.tag);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.desc);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(t_r2.price);
} }
function PlanYourVisitComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 68)(1, "button", 69);
    i0.ɵɵlistener("click", function PlanYourVisitComponent_div_145_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const i_r5 = restoredCtx.index; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.toggleFaq(i_r5); });
    i0.ɵɵelementStart(2, "span", 70);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 71);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 72)(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r1.openFaqs.has(i_r5));
    i0.ɵɵattribute("data-sr-delay", i_r5 * 0.08 + "s");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(faq_r4.q);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.openFaqs.has(i_r5) ? "\u2212" : "+");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-open", ctx_r1.openFaqs.has(i_r5));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(faq_r4.a);
} }
export class PlanYourVisitComponent {
    constructor(seo) {
        this.seo = seo;
        this.ticketOptions = [
            {
                id: 'base',
                name: 'Base Camp',
                tag: 'Ground Level',
                desc: 'Action is on the ground — Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars. Perfect for every age.',
                price: 'From $27.99',
                color: '#119ee8'
            },
            {
                id: 'summit',
                name: 'Summit',
                tag: 'Popular Choice',
                desc: 'All Base Camp activities plus your choice of a Ropes Course or a Mountain Experience session. The adventure levels up.',
                price: 'From $47.99',
                color: '#f45113'
            },
            {
                id: 'extreme',
                name: 'Extreme All Access',
                tag: 'Ultimate Experience',
                desc: 'Unlimited access to the entire venue — every Rope, every Mountain course, every ground activity. This is the complete Bolder experience.',
                price: 'From $69.99',
                color: '#8f34cd'
            }
        ];
        this.openFaqs = new Set();
        this.faqs = [
            { q: 'Do I have to pay if I\'m not participating?', a: 'A non-participating adult (observer) does not need to purchase a ticket — however, we do have limited seating for observers. All children must have a valid ticket to enter the park area.' },
            { q: 'What are the age / height / weight restrictions?', a: 'Most Base Camp activities are suitable for all ages. Aerial and ropes activities require a minimum height of 42"–54" depending on the attraction. Maximum weight limits apply to some aerial attractions (up to 265 lbs with gear).' },
            { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'Yes, the Ropes Course and Via Ferrata (Mountain Experience) require advance reservations to guarantee your time slot. We highly recommend booking online in advance.' },
            { q: 'Is there a place to store my belongings?', a: 'Yes! Lockers are available on-site for a small fee to keep your personal belongings safe while you explore the park.' }
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Plan Your Visit',
            description: 'Everything you need to know before visiting Bolder Adventure Park in Grand Prairie, TX. Hours, tickets, park map, and FAQs.',
            path: '/plan-your-visit',
            keywords: 'plan visit, hours, tickets, park map, Grand Prairie adventure park'
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
PlanYourVisitComponent.ɵfac = function PlanYourVisitComponent_Factory(t) { return new (t || PlanYourVisitComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
PlanYourVisitComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PlanYourVisitComponent, selectors: [["app-plan-your-visit"]], decls: 163, vars: 2, consts: [[1, "inner-page", "plan-your-visit-page"], ["title", "Plan Your Visit", "subtitle", "To help ensure you have the best visit possible, please review the following pre-visit information.", "backgroundImage", "assets/carousel-images/Carousel-2.jpg", "tag", "Know Before You Go"], ["speed", "slow"], [1, "ip-section", "ticket-options-section"], [1, "ip-container"], [1, "ip-split-header", "sr", "sr-up"], [1, "ip-split-left"], [1, "ip-kicker"], [1, "ip-heading"], [1, "ip-split-right"], [1, "ip-cta-row"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*18ohgh7*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1MjAxJGozNSRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange"], ["routerLink", "/attractions", 1, "btn", "btn-outline"], [1, "ticket-cards-grid"], ["class", "ticket-card sr sr-up", 3, "--accent", 4, "ngFor", "ngForOf"], ["id", "passes", 1, "plan-your-visit"], [1, "attraction-stack"], [1, "ac-slide"], [1, "ac-section", "ac--navy"], [1, "ac-content"], [1, "ac-num"], ["viewBox", "0 0 52 52", "fill", "none", 1, "ac-icon"], ["x", "4", "y", "4", "width", "44", "height", "44", "rx", "10", "stroke", "rgba(255,255,255,0.6)", "stroke-width", "3"], [1, "ac-name"], [1, "ac-desc"], [1, "ac-features"], ["routerLink", "/attractions", 1, "ac-cta"], [1, "ac-image"], ["src", "assets/carousel-images/Carousel-4.jpg", "alt", "Base Camp activities", "loading", "lazy"], [1, "ac-section", "ac--gold"], ["src", "assets/carousel-images/Carousel-6.jpg", "alt", "Summit activities", "loading", "lazy"], ["points", "26,3 49,26 26,49 3,26", "stroke", "rgba(0,0,0,0.45)", "stroke-width", "3", "fill", "rgba(0,0,0,0.08)"], [1, "ac-features", 2, "color", "#111"], ["routerLink", "/attractions", 1, "ac-cta", "ac-cta--dark"], [1, "ac-section", "ac--violet"], ["viewBox", "0 0 106 52", "fill", "none", 1, "ac-icon", "ac-icon--wide"], ["points", "26,3 49,26 26,49 3,26", "fill", "rgba(255,255,255,0.28)"], ["points", "80,3 103,26 80,49 57,26", "fill", "rgba(255,255,255,0.28)"], ["routerLink", "/attractions", "target", "_blank", "rel", "noopener", 1, "ac-cta"], ["src", "assets/carousel-images/Carousel-8.jpg", "alt", "Extreme All Access", "loading", "lazy"], ["id", "hours", 1, "ip-section", "hours-section"], [1, "hours-card", "sr", "sr-up"], [1, "hours-left"], [1, "hours-right"], [1, "hours-row"], [1, "hours-day"], [1, "hours-time"], [1, "hours-divider"], [1, "hours-note"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange"], [1, "ip-section", "faq-preview-section"], [1, "faq-header", "sr", "sr-up"], ["routerLink", "/faqs", 1, "ip-link"], [1, "faq-list"], ["class", "faq-item sr sr-up", 3, "is-open", 4, "ngFor", "ngForOf"], [1, "faq-cta-row", "sr", "sr-up"], ["routerLink", "/faqs", 1, "btn", "btn-outline"], ["routerLink", "/contact-us", 1, "btn", "btn-orange"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], [1, "ticket-card", "sr", "sr-up"], [1, "ticket-card-badge"], [1, "ticket-card-name"], [1, "ticket-card-desc"], [1, "ticket-card-price"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE", "targer", "_blank", "rel", "noopener", 1, "ticket-card-cta"], [1, "faq-item", "sr", "sr-up"], ["type", "button", 1, "faq-trigger", 3, "click"], [1, "faq-q"], [1, "faq-plus"], [1, "faq-body"]], template: function PlanYourVisitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        i0.ɵɵtext(8, "Ticket Options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h2", 8);
        i0.ɵɵtext(10, "Choose The Right Pass");
        i0.ɵɵelement(11, "br");
        i0.ɵɵtext(12, "For Your Visit");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(13, "div", 9)(14, "p");
        i0.ɵɵtext(15, " The park is split by ground level and aerial activities \u2014 our ticket options are easy to understand. Whatever your comfort level, there's a pass that fits. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p");
        i0.ɵɵtext(17, " The easiest way to book is via our website, where you will get the best price guaranteed! ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "div", 10)(19, "a", 11);
        i0.ɵɵtext(20, "Get Tickets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "a", 12);
        i0.ɵɵtext(22, "Explore The Park");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(23, "div", 13);
        i0.ɵɵtemplate(24, PlanYourVisitComponent_div_24_Template, 11, 7, "div", 14);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(25, "section", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "span", 20);
        i0.ɵɵtext(31, "01 \u00A0/\u00A0 Base");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(32, "svg", 21);
        i0.ɵɵelement(33, "rect", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(34, "h3", 23);
        i0.ɵɵtext(35, "Base Camp");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(36, "p", 24);
        i0.ɵɵtext(37, " Action is on the ground \u2014 Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "ul", 25)(39, "li");
        i0.ɵɵtext(40, "Jump Pad (socks required)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "li");
        i0.ɵɵtext(42, "Adventure Nets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "li");
        i0.ɵɵtext(44, "Exploration Playground");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "li");
        i0.ɵɵtext(46, "Tubing Slides");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "li");
        i0.ɵɵtext(48, "Blaster Zone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "li");
        i0.ɵɵtext(50, "Bumper Cars");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(51, "a", 26);
        i0.ɵɵtext(52, "Explore Base Camp \u2197");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "div", 27);
        i0.ɵɵelement(54, "img", 28);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(55, "div", 17)(56, "div", 29)(57, "div", 27);
        i0.ɵɵelement(58, "img", 30);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "div", 19)(60, "span", 20);
        i0.ɵɵtext(61, "02 \u00A0/\u00A0 Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(62, "svg", 21);
        i0.ɵɵelement(63, "polygon", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(64, "h3", 23);
        i0.ɵɵtext(65, "Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "p", 24);
        i0.ɵɵtext(67, " All Base Camp activities, plus your choice of a Ropes Course ");
        i0.ɵɵelementStart(68, "em");
        i0.ɵɵtext(69, "or");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(70, " a Mountain Experience session. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "ul", 32)(72, "li");
        i0.ɵɵtext(73, "Everything in Base Camp");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(74, "li");
        i0.ɵɵtext(75, "Ropes Course (4 levels)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(76, "li");
        i0.ɵɵtext(77, "Zip Lines");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(78, "li");
        i0.ɵɵtext(79, "Rock Climbing");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(80, "a", 33);
        i0.ɵɵtext(81, "Explore Summit \u2197");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(82, "div", 17)(83, "div", 34)(84, "div", 19)(85, "span", 20);
        i0.ɵɵtext(86, "03 \u00A0/\u00A0 Extreme");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(87, "svg", 35);
        i0.ɵɵelement(88, "polygon", 36)(89, "polygon", 37);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(90, "h3", 23);
        i0.ɵɵtext(91, "Extreme All Access");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "p", 24);
        i0.ɵɵtext(93, " Unlimited access to the entire venue \u2014 every Rope, every Mountain course, every ground activity. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(94, "ul", 25)(95, "li");
        i0.ɵɵtext(96, "Everything in Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "li");
        i0.ɵɵtext(98, "Mountain Experience (2 trails)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "li");
        i0.ɵɵtext(100, "Free Fall Drop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(101, "li");
        i0.ɵɵtext(102, "Archery & Darts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(103, "li");
        i0.ɵɵtext(104, "$10 Arcade Card");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(105, "a", 38);
        i0.ɵɵtext(106, "Explore Extreme All Access \u2197");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(107, "div", 27);
        i0.ɵɵelement(108, "img", 39);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(109, "section", 40)(110, "div", 4)(111, "div", 41)(112, "div", 42)(113, "span", 7);
        i0.ɵɵtext(114, "When We're Open");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(115, "h2", 8);
        i0.ɵɵtext(116, "Opening Hours");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(117, "div", 43)(118, "div", 44)(119, "span", 45);
        i0.ɵɵtext(120, "Friday & Saturday");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(121, "span", 46);
        i0.ɵɵtext(122, "11am \u2013 9pm");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(123, "div", 47);
        i0.ɵɵelementStart(124, "div", 44)(125, "span", 45);
        i0.ɵɵtext(126, "Sunday to Thursday");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "span", 46);
        i0.ɵɵtext(128, "11am \u2013 8pm");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(129, "p", 48);
        i0.ɵɵtext(130, " * Hours may vary on public holidays. Check our social media for updates. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(131, "a", 49);
        i0.ɵɵtext(132, "Book Tickets In Advance");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(133, "section", 50)(134, "div", 4)(135, "div", 51)(136, "span", 7);
        i0.ɵɵtext(137, "Quick Answers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(138, "h2", 8);
        i0.ɵɵtext(139, "Frequently Asked Questions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(140, "p");
        i0.ɵɵtext(141, " Have a question? Here are the most common ones. ");
        i0.ɵɵelementStart(142, "a", 52);
        i0.ɵɵtext(143, "See all FAQs \u2192");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(144, "div", 53);
        i0.ɵɵtemplate(145, PlanYourVisitComponent_div_145_Template, 9, 8, "div", 54);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(146, "div", 55)(147, "a", 56);
        i0.ɵɵtext(148, "See All FAQs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(149, "a", 57);
        i0.ɵɵtext(150, "Contact Us");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(151, "div", 4)(152, "div", 58)(153, "div")(154, "div", 59);
        i0.ɵɵtext(155, "Book Now");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(156, "h2");
        i0.ɵɵtext(157, "Book Your Next Bolder Adventure Now!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(158, "p");
        i0.ɵɵtext(159, " Book your tickets in advance to avoid disappointment and guarantee the best price! ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(160, "div", 60)(161, "a", 61);
        i0.ɵɵtext(162, "Get Tickets");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(24);
        i0.ɵɵproperty("ngForOf", ctx.ticketOptions);
        i0.ɵɵadvance(121);
        i0.ɵɵproperty("ngForOf", ctx.faqs);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.RouterLinkWithHref, i5.NgForOf], styles: [".inner-page[_ngcontent-%COMP%] {\n  padding-top: 148px;\n  background: var(--black);\n  color: var(--white);\n  min-height: 100vh;\n}\n\n.ip-section[_ngcontent-%COMP%] {\n  padding: clamp(4rem, 8vw, 6rem) 1.5rem;\n}\n\n.ip-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.ip-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ip-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 1rem;\n}\n\n.ip-link[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-weight: 700;\n  text-decoration: none;\n  &:hover { text-decoration: underline; }\n}\n\n\n.ip-split-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: start;\n  margin-bottom: 3.5rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n\n.ip-split-right[_ngcontent-%COMP%] {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1rem;\n  }\n}\n\n.ip-cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n\n\n.ticket-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ticket-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px;\n  padding: 2rem;\n  transition: transform 0.25s, border-color 0.25s;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 3px;\n    background: var(--accent, var(--orange));\n    border-radius: 16px 16px 0 0;\n  }\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(255,255,255,0.18);\n  }\n}\n\n.ticket-card-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255,255,255,0.08);\n  color: var(--muted);\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.65rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n\n.ticket-card-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n  line-height: 1;\n}\n\n.ticket-card-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.ticket-card-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--accent, var(--orange));\n  margin-bottom: 1.25rem;\n}\n\n.ticket-card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-family: var(--font-ui);\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--white);\n  text-decoration: none;\n  border-bottom: 1px solid rgba(255,255,255,0.25);\n  padding-bottom: 2px;\n  transition: border-color 0.2s, color 0.2s;\n\n  &:hover {\n    color: var(--accent, var(--orange));\n    border-color: var(--accent, var(--orange));\n  }\n}\n\n\n.ac-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.88rem;\n    color: rgba(255,255,255,0.75);\n    padding-left: 1.2em;\n    position: relative;\n\n    &::before {\n      content: '\u2713';\n      position: absolute;\n      left: 0;\n      color: var(--orange);\n      font-weight: 700;\n    }\n  }\n}\n\n\n.hours-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 3rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  align-items: center;\n\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n    padding: 2rem;\n  }\n}\n\n.hours-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n}\n\n.hours-day[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.hours-time[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--orange);\n}\n\n.hours-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255,255,255,0.1);\n}\n\n.hours-note[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  color: var(--muted);\n  margin: 1rem 0 1.5rem;\n}\n\n\n.faq-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin-top: 0.5rem;\n  }\n}\n\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 2.5rem;\n}\n\n.faq-item[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &.is-open {\n    border-color: rgba(244,81,19,0.35);\n  }\n}\n\n.faq-trigger[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  gap: 1rem;\n}\n\n.faq-q[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.1rem, 2.5vw, 1.5rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.1;\n}\n\n.faq-plus[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  color: var(--orange);\n  line-height: 1;\n  flex-shrink: 0;\n}\n\n.faq-body[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.35s ease, padding 0.35s ease;\n\n  &.is-open {\n    max-height: 300px;\n    padding: 0 1.5rem 1.25rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0;\n  }\n}\n\n.faq-cta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlanYourVisitComponent, [{
        type: Component,
        args: [{ selector: 'app-plan-your-visit', template: "<div class=\"inner-page plan-your-visit-page\">\n  <app-page-hero\n    title=\"Plan Your Visit\"\n    subtitle=\"To help ensure you have the best visit possible, please review the following pre-visit information.\"\n    backgroundImage=\"assets/carousel-images/Carousel-2.jpg\"\n    tag=\"Know Before You Go\"\n  >\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Ticket options intro -->\n  <section class=\"ip-section ticket-options-section\">\n    <div class=\"ip-container\">\n      <div class=\"ip-split-header sr sr-up\">\n        <div class=\"ip-split-left\">\n          <span class=\"ip-kicker\">Ticket Options</span>\n          <h2 class=\"ip-heading\">Choose The Right Pass<br />For Your Visit</h2>\n        </div>\n        <div class=\"ip-split-right\">\n          <p>\n            The park is split by ground level and aerial activities \u2014 our ticket\n            options are easy to understand. Whatever your comfort level, there's\n            a pass that fits.\n          </p>\n          <p>\n            The easiest way to book is via our website, where you will get the\n            best price guaranteed!\n          </p>\n          <div class=\"ip-cta-row\">\n            <a\n              href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*18ohgh7*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1MjAxJGozNSRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              class=\"btn btn-orange\"\n              >Get Tickets</a\n            >\n            <a routerLink=\"/attractions\" class=\"btn btn-outline\"\n              >Explore The Park</a\n            >\n          </div>\n        </div>\n      </div>\n\n      <!-- Ticket option cards -->\n      <div class=\"ticket-cards-grid\">\n        <div\n          class=\"ticket-card sr sr-up\"\n          *ngFor=\"let t of ticketOptions; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.12 + 's'\"\n          [style.--accent]=\"t.color\"\n        >\n          <div class=\"ticket-card-badge\">{{ t.tag }}</div>\n          <h3 class=\"ticket-card-name\">{{ t.name }}</h3>\n          <p class=\"ticket-card-desc\">{{ t.desc }}</p>\n          <div class=\"ticket-card-price\">{{ t.price }}</div>\n          <a\n            href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE\"\n            targer=\"_blank\"\n            rel=\"noopener\"\n            class=\"ticket-card-cta\"\n            >Book Now \u2197</a\n          >\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Stacking pass cards (Base / Summit / Extreme visual) -->\n  <section class=\"plan-your-visit\" id=\"passes\">\n    <div class=\"attraction-stack\">\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--navy\">\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">01 &nbsp;/&nbsp; Base</span>\n            <svg class=\"ac-icon\" viewBox=\"0 0 52 52\" fill=\"none\">\n              <rect\n                x=\"4\"\n                y=\"4\"\n                width=\"44\"\n                height=\"44\"\n                rx=\"10\"\n                stroke=\"rgba(255,255,255,0.6)\"\n                stroke-width=\"3\"\n              />\n            </svg>\n            <h3 class=\"ac-name\">Base Camp</h3>\n            <p class=\"ac-desc\">\n              Action is on the ground \u2014 Jump Pad, Adventure Nets, Exploration\n              Playground, Tubing Slides, Blaster Zone and Bumper Cars.\n            </p>\n            <ul class=\"ac-features\">\n              <li>Jump Pad (socks required)</li>\n              <li>Adventure Nets</li>\n              <li>Exploration Playground</li>\n              <li>Tubing Slides</li>\n              <li>Blaster Zone</li>\n              <li>Bumper Cars</li>\n            </ul>\n            <a routerLink=\"/attractions\" class=\"ac-cta\">Explore Base Camp \u2197</a>\n          </div>\n          <div class=\"ac-image\">\n            <img\n              src=\"assets/carousel-images/Carousel-4.jpg\"\n              alt=\"Base Camp activities\"\n              loading=\"lazy\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--gold\">\n          <div class=\"ac-image\">\n            <img\n              src=\"assets/carousel-images/Carousel-6.jpg\"\n              alt=\"Summit activities\"\n              loading=\"lazy\"\n            />\n          </div>\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">02 &nbsp;/&nbsp; Summit</span>\n            <svg class=\"ac-icon\" viewBox=\"0 0 52 52\" fill=\"none\">\n              <polygon\n                points=\"26,3 49,26 26,49 3,26\"\n                stroke=\"rgba(0,0,0,0.45)\"\n                stroke-width=\"3\"\n                fill=\"rgba(0,0,0,0.08)\"\n              />\n            </svg>\n            <h3 class=\"ac-name\">Summit</h3>\n            <p class=\"ac-desc\">\n              All Base Camp activities, plus your choice of a Ropes Course\n              <em>or</em> a Mountain Experience session.\n            </p>\n            <ul class=\"ac-features\" style=\"color: #111\">\n              <li>Everything in Base Camp</li>\n              <li>Ropes Course (4 levels)</li>\n              <li>Zip Lines</li>\n              <li>Rock Climbing</li>\n            </ul>\n            <a routerLink=\"/attractions\" class=\"ac-cta ac-cta--dark\"\n              >Explore Summit \u2197</a\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--violet\">\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">03 &nbsp;/&nbsp; Extreme</span>\n            <svg class=\"ac-icon ac-icon--wide\" viewBox=\"0 0 106 52\" fill=\"none\">\n              <polygon\n                points=\"26,3 49,26 26,49 3,26\"\n                fill=\"rgba(255,255,255,0.28)\"\n              />\n              <polygon\n                points=\"80,3 103,26 80,49 57,26\"\n                fill=\"rgba(255,255,255,0.28)\"\n              />\n            </svg>\n            <h3 class=\"ac-name\">Extreme All Access</h3>\n            <p class=\"ac-desc\">\n              Unlimited access to the entire venue \u2014 every Rope, every Mountain\n              course, every ground activity.\n            </p>\n            <ul class=\"ac-features\">\n              <li>Everything in Summit</li>\n              <li>Mountain Experience (2 trails)</li>\n              <li>Free Fall Drop</li>\n              <li>Archery &amp; Darts</li>\n              <li>$10 Arcade Card</li>\n            </ul>\n            <a\n              routerLink=\"/attractions\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              class=\"ac-cta\"\n              >Explore Extreme All Access \u2197</a\n            >\n          </div>\n          <div class=\"ac-image\">\n            <img\n              src=\"assets/carousel-images/Carousel-8.jpg\"\n              alt=\"Extreme All Access\"\n              loading=\"lazy\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Opening Hours -->\n  <section class=\"ip-section hours-section\" id=\"hours\">\n    <div class=\"ip-container\">\n      <div class=\"hours-card sr sr-up\">\n        <div class=\"hours-left\">\n          <span class=\"ip-kicker\">When We're Open</span>\n          <h2 class=\"ip-heading\">Opening Hours</h2>\n        </div>\n        <div class=\"hours-right\">\n          <div class=\"hours-row\">\n            <span class=\"hours-day\">Friday &amp; Saturday</span>\n            <span class=\"hours-time\">11am \u2013 9pm</span>\n          </div>\n          <div class=\"hours-divider\"></div>\n          <div class=\"hours-row\">\n            <span class=\"hours-day\">Sunday to Thursday</span>\n            <span class=\"hours-time\">11am \u2013 8pm</span>\n          </div>\n          <p class=\"hours-note\">\n            * Hours may vary on public holidays. Check our social media for\n            updates.\n          </p>\n          <a\n            href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE\"\n            target=\"_blank\"\n            rel=\"noopener\"\n            class=\"btn btn-orange\"\n            >Book Tickets In Advance</a\n          >\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- FAQ preview -->\n  <section class=\"ip-section faq-preview-section\">\n    <div class=\"ip-container\">\n      <div class=\"faq-header sr sr-up\">\n        <span class=\"ip-kicker\">Quick Answers</span>\n        <h2 class=\"ip-heading\">Frequently Asked Questions</h2>\n        <p>\n          Have a question? Here are the most common ones.\n          <a routerLink=\"/faqs\" class=\"ip-link\">See all FAQs \u2192</a>\n        </p>\n      </div>\n      <div class=\"faq-list\">\n        <div\n          class=\"faq-item sr sr-up\"\n          *ngFor=\"let faq of faqs; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.08 + 's'\"\n          [class.is-open]=\"openFaqs.has(i)\"\n        >\n          <button class=\"faq-trigger\" type=\"button\" (click)=\"toggleFaq(i)\">\n            <span class=\"faq-q\">{{ faq.q }}</span>\n            <span class=\"faq-plus\">{{ openFaqs.has(i) ? \"\u2212\" : \"+\" }}</span>\n          </button>\n          <div class=\"faq-body\" [class.is-open]=\"openFaqs.has(i)\">\n            <p>{{ faq.a }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"faq-cta-row sr sr-up\">\n        <a routerLink=\"/faqs\" class=\"btn btn-outline\">See All FAQs</a>\n        <a routerLink=\"/contact-us\" class=\"btn btn-orange\">Contact Us</a>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA Banner -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Now</div>\n        <h2>Book Your Next Bolder Adventure Now!</h2>\n        <p>\n          Book your tickets in advance to avoid disappointment and guarantee the\n          best price!\n        </p>\n      </div>\n      <div class=\"cta-actions\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*p4qz8g*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA2MDQ2NzckbzU2JGcxJHQxNzgwNjA1ODg0JGo1OCRsMCRoMA..*_fplc*OCUyQiUyQmN4R3pBa0w5b25welNPU3g1b0dkdUVHYTRyd2ROSmxvVSUyRjczOWxKMlF4YlhiSVBIcWhwSGdMdnU1Q3BiWVgzT2RoekdIaiUyRlZuJTJGZVRPJTJGalM1THpidVFveGpPJTJCWSUyRnRrTCUyQnRLa0lTeWdWTzBZSDJFMEpKNjJZNUh4OEZRJTNEJTNE\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-dark btn-lg\"\n          >Get Tickets</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["/* \u2500\u2500 Inner-page shared layout \u2500\u2500 */\n.inner-page {\n  padding-top: 148px;\n  background: var(--black);\n  color: var(--white);\n  min-height: 100vh;\n}\n\n.ip-section {\n  padding: clamp(4rem, 8vw, 6rem) 1.5rem;\n}\n\n.ip-container {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.ip-kicker {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.ip-heading {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 1rem;\n}\n\n.ip-link {\n  color: var(--orange);\n  font-weight: 700;\n  text-decoration: none;\n  &:hover { text-decoration: underline; }\n}\n\n/* \u2500\u2500 Split header \u2500\u2500 */\n.ip-split-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: start;\n  margin-bottom: 3.5rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n}\n\n.ip-split-right {\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0 0 1rem;\n  }\n}\n\n.ip-cta-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-top: 1.5rem;\n}\n\n/* \u2500\u2500 Ticket cards \u2500\u2500 */\n.ticket-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ticket-card {\n  position: relative;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 16px;\n  padding: 2rem;\n  transition: transform 0.25s, border-color 0.25s;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 3px;\n    background: var(--accent, var(--orange));\n    border-radius: 16px 16px 0 0;\n  }\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(255,255,255,0.18);\n  }\n}\n\n.ticket-card-badge {\n  display: inline-block;\n  background: rgba(255,255,255,0.08);\n  color: var(--muted);\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.65rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n\n.ticket-card-name {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  margin: 0 0 0.75rem;\n  line-height: 1;\n}\n\n.ticket-card-desc {\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.ticket-card-price {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--accent, var(--orange));\n  margin-bottom: 1.25rem;\n}\n\n.ticket-card-cta {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-family: var(--font-ui);\n  font-size: 0.88rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--white);\n  text-decoration: none;\n  border-bottom: 1px solid rgba(255,255,255,0.25);\n  padding-bottom: 2px;\n  transition: border-color 0.2s, color 0.2s;\n\n  &:hover {\n    color: var(--accent, var(--orange));\n    border-color: var(--accent, var(--orange));\n  }\n}\n\n/* Pass list */\n.ac-features {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.88rem;\n    color: rgba(255,255,255,0.75);\n    padding-left: 1.2em;\n    position: relative;\n\n    &::before {\n      content: '\u2713';\n      position: absolute;\n      left: 0;\n      color: var(--orange);\n      font-weight: 700;\n    }\n  }\n}\n\n/* \u2500\u2500 Opening Hours \u2500\u2500 */\n.hours-card {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 3rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 3rem;\n  align-items: center;\n\n  @media (max-width: 700px) {\n    grid-template-columns: 1fr;\n    padding: 2rem;\n  }\n}\n\n.hours-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 0;\n}\n\n.hours-day {\n  font-family: var(--font-ui);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--white);\n}\n\n.hours-time {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--orange);\n}\n\n.hours-divider {\n  height: 1px;\n  background: rgba(255,255,255,0.1);\n}\n\n.hours-note {\n  font-family: var(--font-body);\n  font-size: 0.8rem;\n  color: var(--muted);\n  margin: 1rem 0 1.5rem;\n}\n\n/* \u2500\u2500 FAQ \u2500\u2500 */\n.faq-header {\n  margin-bottom: 2.5rem;\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin-top: 0.5rem;\n  }\n}\n\n.faq-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 2.5rem;\n}\n\n.faq-item {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 12px;\n  overflow: hidden;\n  transition: border-color 0.2s;\n\n  &.is-open {\n    border-color: rgba(244,81,19,0.35);\n  }\n}\n\n.faq-trigger {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  gap: 1rem;\n}\n\n.faq-q {\n  font-family: var(--font-display);\n  font-size: clamp(1.1rem, 2.5vw, 1.5rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.1;\n}\n\n.faq-plus {\n  font-size: 1.6rem;\n  color: var(--orange);\n  line-height: 1;\n  flex-shrink: 0;\n}\n\n.faq-body {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.35s ease, padding 0.35s ease;\n\n  &.is-open {\n    max-height: 300px;\n    padding: 0 1.5rem 1.25rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    color: var(--muted);\n    line-height: 1.7;\n    margin: 0;\n  }\n}\n\n.faq-cta-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=plan-your-visit.component.js.map