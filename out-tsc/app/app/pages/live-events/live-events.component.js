import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function LiveEventsComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 90);
    i0.ɵɵlistener("click", function LiveEventsComponent_button_20_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const f_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.setFilter(f_r8.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r0.activeFilter === f_r8.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", f_r8.label, " ");
} }
const _c0 = function (a1) { return ["/live-events", a1]; };
function LiveEventsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 91)(1, "div", 92);
    i0.ɵɵelement(2, "img", 39);
    i0.ɵɵelementStart(3, "span", 93);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 94);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 95)(8, "h3", 96);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 97);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 98)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "a", 99);
    i0.ɵɵtext(18, "View Details \u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const event_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r12 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", event_r11.image, i0.ɵɵsanitizeUrl)("alt", event_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r11.dateLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", event_r11.badgeClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(event_r11.badge);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(event_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r11.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\uD83D\uDDD3 ", event_r11.date, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDCCD ", event_r11.location, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(11, _c0, event_r11.slug));
} }
function LiveEventsComponent_button_122_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 100);
    i0.ɵɵlistener("click", function LiveEventsComponent_button_122_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r16); const i_r14 = restoredCtx.index; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.goToSlide(i_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", i_r14 === ctx_r2.carouselIndex);
    i0.ɵɵattribute("aria-label", "Go to slide " + (i_r14 + 1));
} }
function LiveEventsComponent_button_136_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 101);
    i0.ɵɵlistener("click", function LiveEventsComponent_button_136_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r19); const t_r17 = restoredCtx.$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.setTab(t_r17.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const t_r17 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r3.activeTab === t_r17.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", t_r17.label, " ");
} }
function LiveEventsComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102)(1, "div", 103)(2, "span", 104);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 105);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(6, "div", 106);
    i0.ɵɵelementStart(7, "div", 107)(8, "span", 108);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h3", 109);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 110)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "a", 111);
    i0.ɵɵtext(18, "View Event \u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r21 * 0.1 + "s");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r20.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r20.year);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r20.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r20.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\u23F0 ", item_r20.time, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\uD83D\uDCCD ", item_r20.location, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, item_r20.slug));
} }
function LiveEventsComponent_div_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112)(1, "span");
    i0.ɵɵtext(2, "No events in this category yet. Check back soon!");
    i0.ɵɵelementEnd()();
} }
function LiveEventsComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 112)(1, "span");
    i0.ɵɵtext(2, "More events coming \u2014 stay tuned!");
    i0.ɵɵelementEnd()();
} }
function LiveEventsComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 113);
    i0.ɵɵelement(1, "img", 114);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r23 * 0.06 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", img_r22, i0.ɵɵsanitizeUrl);
} }
export class LiveEventsComponent {
    constructor(seo) {
        this.seo = seo;
        this.activeFilter = 'all';
        this.activeTab = 'all';
        // Carousel state
        this.carouselIndex = 0;
        this.countdownDays = 0;
        this.countdownHours = 0;
        this.countdownMinutes = 0;
        this.countdownSeconds = 0;
        this.events = [
            {
                slug: 'mj-dejavu',
                title: 'MJ Dejavu',
                carouselTitle: 'MJ',
                carouselAccent: 'Dejavu',
                date: 'June 28, 2026',
                dateLabel: 'Jun 28',
                time: '7:00 PM – 11:00 PM',
                location: 'Main Stage',
                type: 'concerts',
                ageRestriction: 'All Ages',
                badge: 'Limited Slots',
                badgeClass: 'badge-limited',
                image: 'assets/MJ Dejavu/0 - HERO IMAGE.png',
                description: 'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — rated the #1 MJ tribute.',
                targetDate: new Date('2026-06-28T19:00:00'),
                ticketUrl: 'https://ecom.roller.app/bolderadventurepark/liveevents/en-us/home?_gl=1*m3lrmr*_gcl_aw*R0NMLjE3ODA5MjQ5MjAuQ2owS0NRancwSm5SQmhESkFSSXNBTG9iblhZaE50VmU4LTRZOTM0UUZqQkVieFZTSm8tbXRHRl9EUG96SDY0S2lySVc5ZWlKRm5BQ2Y1MGFBdDh6RUFMd193Y0I.*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODEzOTY2MDkkbzc5JGcxJHQxNzgxMzk4MTUzJGozMyRsMCRoMA..*_fplc*RVRscXhFeUpreEZpeElaSiUyQlFVWVFuS2hla2xqSmNoM0FqRkZGalFyempXYTFtNDRueHpRVTBBbkp3OGZ3OUJjeGIlMkY3WHBienh1eEt5TzE3eXhtcFRNUmh5clUwSUVZaGhyZlltJTJGaVV6M2RzcmtBZlBYMGtvejFPckJyTUZRJTNEJTNE'
            },
            {
                slug: 'adult-night-july-2026',
                title: 'Adult Night July 2026',
                carouselTitle: 'Adult Night',
                carouselAccent: 'July 2026',
                date: 'July 3, 2026',
                dateLabel: 'Jul 3',
                time: '8:00 PM – 12:00 AM',
                location: 'Whole Park',
                type: 'adult-nights',
                ageRestriction: '18+',
                badge: 'Open Registration',
                badgeClass: 'badge-open',
                image: 'assets/images/Groups3.jpg',
                description: 'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome.',
                targetDate: new Date('2026-07-03T20:00:00'),
                ticketUrl: 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*sngnkv*_gcl_aw*R0NMLjE3ODA0OTQ1NTQuRUFJYUlRb2JDaE1Ja2N2WHdfX3FsQU1WdW9EQ0NCM01iUkZoRUFBWUFTQUFFZ0tOYnZEX0J3RQ..*_gcl_au*MTc5MjAyNzQ4OC4xNzc3NDc3NTY5LjEwMjU5OTA2MzIuMTc3OTkyNzI1MC4xNzc5OTI4Nzg2*FPAU*ODQwNTg4NzgwLjE3NzgzNjM5NDQ.*_ga*MTQ5NTU2MDkzMS4xNzgwNDIyMjA2*_ga_42GXW9EFND*czE3ODEwNTc2MDAkbzExJGcxJHQxNzgxMDU4NjY3JGo2MCRsMCRoMA..*_fplc*VDJBR3dCUzZlekJGTVlVaHZOcmE3TGJibEh3dkdmY3g0dHpTU3BqaDVoazhXd25rZG5YWVdzJTJGN2hUYUx5UjhmWVpxOGJqY2l6NWlRV1g2enFsNFl0QzFYMHNjQk8lMkJvcExzbUNXS0tVSGpxa3RtZFppRGclMkZQQUw5aXp1Q3BnJTNEJTNE'
            },
            {
                slug: 'adult-night-august-2026',
                title: 'Adult Night August 2026',
                carouselTitle: 'Adult Night',
                carouselAccent: 'August 2026',
                date: 'August 7, 2026',
                dateLabel: 'Aug 7',
                time: '8:00 PM – 12:00 AM',
                location: 'Whole Park',
                type: 'adult-nights',
                ageRestriction: '18+',
                badge: 'Open Registration',
                badgeClass: 'badge-open',
                image: 'assets/images/Thrills-in-the-air.jpg',
                description: 'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
                targetDate: new Date('2026-08-07T20:00:00'),
                ticketUrl: 'https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*sngnkv*_gcl_aw*R0NMLjE3ODA0OTQ1NTQuRUFJYUlRb2JDaE1Ja2N2WHdfX3FsQU1WdW9EQ0NCM01iUkZoRUFBWUFTQUFFZ0tOYnZEX0J3RQ..*_gcl_au*MTc5MjAyNzQ4OC4xNzc3NDc3NTY5LjEwMjU5OTA2MzIuMTc3OTkyNzI1MC4xNzc5OTI4Nzg2*FPAU*ODQwNTg4NzgwLjE3NzgzNjM5NDQ.*_ga*MTQ5NTU2MDkzMS4xNzgwNDIyMjA2*_ga_42GXW9EFND*czE3ODEwNTc2MDAkbzExJGcxJHQxNzgxMDU4NjY3JGo2MCRsMCRoMA..*_fplc*VDJBR3dCUzZlekJGTVlVaHZOcmE3TGJibEh3dkdmY3g0dHpTU3BqaDVoazhXd25rZG5YWVdzJTJGN2hUYUx5UjhmWVpxOGJqY2l6NWlRV1g2enFsNFl0QzFYMHNjQk8lMkJvcExzbUNXS0tVSGpxa3RtZFppRGclMkZQQUw5aXp1Q3BnJTNEJTNE'
            }
        ];
        this.challenges = [
            { name: 'Mountain Experience', image: 'assets/All-Attraction/Mountain-experience.jpg' },
            { name: 'Ropes Courses', image: 'assets/All-Attraction/Ropes-courses.jpg' },
            { name: 'Zip Lines', image: 'assets/All-Attraction/Zip-lines.jpg' },
            { name: 'Timber Climb', image: 'assets/All-Attraction/Adventure-nets.jpg' },
            { name: 'Free Fall Drop', image: 'assets/All-Attraction/Free-fall-drop.jpg' }
        ];
        this.timeline = [
            { date: 'Jun 28', year: '2026', title: 'MJ Dejavu', type: 'Concert', location: 'Main Stage', time: '7:00 PM – 11:00 PM', slug: 'mj-dejavu', category: 'concerts' },
            { date: 'Jul 3', year: '2026', title: 'Adult Night July 2026', type: 'Adult Night', location: 'Whole Park', time: '8:00 PM – 12:00 AM', slug: 'adult-night-july-2026', category: 'adult-nights' },
            { date: 'Aug 7', year: '2026', title: 'Adult Night August 2026', type: 'Adult Night', location: 'Whole Park', time: '8:00 PM – 12:00 AM', slug: 'adult-night-august-2026', category: 'adult-nights' }
        ];
        this.groupOptions = [
            {
                title: 'School Trips',
                image: 'assets/images/Groups1.jpg',
                desc: 'Give your students an unforgettable adventure day with exclusive group rates and dedicated staff.',
                link: '/group-events/field-trips'
            },
            {
                title: 'Church Groups',
                image: 'assets/images/Groups2.jpg',
                desc: 'Unite your congregation through shared challenges and unforgettable memories at Bolder.',
                link: '/group-events'
            },
            {
                title: 'Sports Teams',
                image: 'assets/images/Groups3.jpg',
                desc: 'Build team chemistry through action, competition, and shared victory. Perfect for pre-season bonding.',
                link: '/group-events'
            }
        ];
        this.galleryImages = [
            'assets/MJ Dejavu/0 - HERO IMAGE.png',
            'assets/MJ Dejavu/Crowds.png',
            'assets/MJ Dejavu/Justin as Michael Jackson.png',
            'assets/images/Thrills-in-the-air.jpg',
            'assets/MJ Dejavu/Justin.png',
            'assets/images/Action-on-the-ground.jpg',
            'assets/MJ Dejavu/Stage pic.png',
            'assets/carousel-images/Carousel-1.jpg'
        ];
        this.filters = [
            { label: 'All Events', value: 'all' },
            { label: 'Adult Nights', value: 'adult-nights' },
            { label: 'Concerts', value: 'concerts' }
        ];
        this.tabs = [
            { label: 'All', value: 'all' },
            { label: 'Concerts', value: 'concerts' },
            { label: 'Adult Nights', value: 'adult-nights' }
        ];
    }
    prevSlide() {
        this.carouselIndex = (this.carouselIndex - 1 + this.events.length) % this.events.length;
        this.startCountdown();
        this.resetAutoPlay();
    }
    nextSlide() {
        this.carouselIndex = (this.carouselIndex + 1) % this.events.length;
        this.startCountdown();
        this.resetAutoPlay();
    }
    goToSlide(i) {
        this.carouselIndex = i;
        this.startCountdown();
        this.resetAutoPlay();
    }
    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.carouselIndex = (this.carouselIndex + 1) % this.events.length;
            this.startCountdown();
        }, 5000);
    }
    resetAutoPlay() {
        if (this.autoPlayTimer)
            clearInterval(this.autoPlayTimer);
        this.startAutoPlay();
    }
    startCountdown() {
        if (this.countdownTimer)
            clearInterval(this.countdownTimer);
        const update = () => {
            const target = this.events[this.carouselIndex].targetDate.getTime();
            const now = Date.now();
            const diff = Math.max(0, target - now);
            this.countdownDays = Math.floor(diff / 86400000);
            this.countdownHours = Math.floor((diff % 86400000) / 3600000);
            this.countdownMinutes = Math.floor((diff % 3600000) / 60000);
            this.countdownSeconds = Math.floor((diff % 60000) / 1000);
        };
        update();
        this.countdownTimer = setInterval(update, 1000);
    }
    ngOnInit() {
        this.startCountdown();
        this.startAutoPlay();
    }
    get filteredTimeline() {
        if (this.activeTab === 'all')
            return this.timeline;
        return this.timeline.filter(e => e.category === this.activeTab);
    }
    get filteredEvents() {
        if (this.activeFilter === 'all')
            return this.events;
        return this.events.filter(e => e.type === this.activeFilter);
    }
    scrollTo(id) {
        var _a;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setFilter(filter) {
        this.activeFilter = filter;
        setTimeout(() => this.observeSr(), 50);
    }
    setTab(tab) {
        this.activeTab = tab;
        setTimeout(() => this.observeSr(), 50);
    }
    pad(n) {
        return n < 10 ? '0' + n : '' + n;
    }
    observeSr() {
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
        }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
        document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
    }
    ngAfterViewInit() {
        setTimeout(() => this.observeSr(), 50);
    }
    ngOnDestroy() {
        clearInterval(this.countdownTimer);
        clearInterval(this.autoPlayTimer);
    }
}
LiveEventsComponent.ɵfac = function LiveEventsComponent_Factory(t) { return new (t || LiveEventsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
LiveEventsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LiveEventsComponent, selectors: [["app-live-events"]], decls: 170, vars: 27, consts: [[1, "inner-page", "live-events-page"], [1, "le-hero"], ["src", "assets/After-hero-section/Attractions - A view from Mezz 1.jpg", "alt", "Bolder Live Events", "fetchpriority", "high", 1, "le-hero-bg"], [1, "le-hero-overlay"], [1, "le-hero-grad"], [1, "le-hero-content"], [1, "le-hero-kicker", "sr", "sr-up"], ["data-sr-delay", "0.08s", 1, "le-hero-title", "sr", "sr-up"], ["data-sr-delay", "0.16s", 1, "le-hero-sub", "sr", "sr-up"], ["data-sr-delay", "0.24s", 1, "le-hero-actions", "sr", "sr-up"], [1, "btn", "btn-orange", "btn-lg", 2, "cursor", "pointer", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M8 5v14l11-7z"], ["data-sr-delay", "0.3s", 1, "le-hero-filters", "sr", "sr-up"], ["class", "le-filter-chip", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "le-hero-bottom-fade"], ["id", "on-the-boards", 1, "le-section", "le-board"], [1, "le-container", "le-board-grid"], [1, "le-board-left"], [1, "le-kicker", "sr", "sr-up"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "5px"], ["d", "M5 12.55a11 11 0 0 1 14.08 0"], ["d", "M1.42 9a16 16 0 0 1 21.16 0"], ["d", "M8.53 16.11a6 6 0 0 1 6.95 0"], ["x1", "12", "y1", "20", "x2", "12", "y2", "20.5"], ["x1", "12", "y1", "20", "x2", "12", "y2", "13"], ["data-sr-delay", "0.08s", 1, "le-heading", "sr", "sr-up"], [1, "accent-orange"], ["data-sr-delay", "0.16s", 1, "le-board-desc", "sr", "sr-up"], [1, "le-board-cards"], ["class", "le-event-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "le-event-card", "le-card-incoming", "sr", "sr-up"], [1, "le-incoming-inner"], [1, "le-incoming-icon"], ["routerLink", "/contact-us", 1, "btn", "btn-outline"], [1, "le-section", "le-carousel-section"], [1, "le-container"], [1, "le-carousel-card", "sr", "sr-up"], [1, "le-car-image-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "le-car-img-overlay"], [1, "le-car-next-badge"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"], ["aria-label", "Previous event", 1, "le-car-arrow", "le-car-prev", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M15 18l-6-6 6-6"], ["aria-label", "Next event", 1, "le-car-arrow", "le-car-next", 3, "click"], ["d", "M9 18l6-6-6-6"], [1, "le-car-copy"], [1, "le-car-title"], [1, "le-car-meta"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], [1, "le-car-sep"], ["d", "M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z"], ["cx", "12", "cy", "9", "r", "2.4"], [1, "le-car-desc"], [1, "le-car-countdown"], [1, "le-car-cd-box"], [1, "le-car-cd-num"], [1, "le-car-cd-label"], [1, "le-car-actions"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg", 3, "href"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true"], ["d", "M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z"], [1, "le-car-detail-link", 3, "routerLink"], [1, "le-car-dots"], ["class", "le-car-dot", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "le-section", "le-timeline-section"], [1, "section-title", "le-timeline-title", "sr", "sr-up"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "5px"], ["data-sr-delay", "0.1s", 1, "le-timeline-tabs", "sr", "sr-up"], ["class", "le-tab-btn", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "le-timeline"], ["class", "le-timeline-item sr sr-up", 4, "ngFor", "ngForOf"], ["class", "le-tl-end-label", 4, "ngIf"], [1, "le-section", "le-gallery-section"], [1, "section-title", "le-gallery-title", "sr", "sr-up"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "5px"], ["d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"], ["cx", "12", "cy", "13", "r", "4"], [1, "le-gallery-grid"], ["class", "le-gallery-item sr sr-up", 4, "ngFor", "ngForOf"], [1, "le-section", "le-ready-section"], [1, "le-ready-title", "sr", "sr-up"], ["data-sr-delay", "0.1s", 1, "le-ready-sub", "sr", "sr-up"], ["data-sr-delay", "0.2s", 1, "le-ready-actions", "sr", "sr-up"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg"], [1, "le-filter-chip", 3, "click"], [1, "le-event-card", "sr", "sr-up"], [1, "le-card-image"], [1, "le-card-date-badge"], [1, "le-card-badge", 3, "ngClass"], [1, "le-card-body"], [1, "le-card-title"], [1, "le-card-desc"], [1, "le-card-meta"], [1, "le-card-link", 3, "routerLink"], [1, "le-car-dot", 3, "click"], [1, "le-tab-btn", 3, "click"], [1, "le-timeline-item", "sr", "sr-up"], [1, "le-tl-date"], [1, "le-tl-day"], [1, "le-tl-year"], [1, "le-tl-dot"], [1, "le-tl-content"], [1, "le-tl-type"], [1, "le-tl-title"], [1, "le-tl-meta"], [1, "le-tl-link", 3, "routerLink"], [1, "le-tl-end-label"], [1, "le-gallery-item", "sr", "sr-up"], ["alt", "Bolder Adventure Park gallery", "loading", "lazy", 3, "src"]], template: function LiveEventsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "section", 1);
        i0.ɵɵelement(2, "img", 2)(3, "div", 3)(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5)(6, "span", 6);
        i0.ɵɵtext(7, "Bolder Live & Special Events");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "h1", 7);
        i0.ɵɵtext(9, " Bolder Live & Special");
        i0.ɵɵelement(10, "br");
        i0.ɵɵtext(11, "Events Night ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p", 8);
        i0.ɵɵtext(13, " Discover Bolder's adventure, upcoming challenges, special nights, and really awesome live events \u2014 all happening under one massive roof! ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 9)(15, "a", 10);
        i0.ɵɵlistener("click", function LiveEventsComponent_Template_a_click_15_listener() { return ctx.scrollTo("on-the-boards"); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(16, "svg", 11);
        i0.ɵɵelement(17, "path", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(18, " View Today's Events ");
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(19, "div", 13);
        i0.ɵɵtemplate(20, LiveEventsComponent_button_20_Template, 2, 3, "button", 14);
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(21, "div", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "section", 16)(23, "div", 17)(24, "div", 18)(25, "span", 19);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(26, "svg", 20);
        i0.ɵɵelement(27, "path", 21)(28, "path", 22)(29, "path", 23)(30, "line", 24)(31, "line", 25);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(32, "Current Events");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(33, "h2", 26);
        i0.ɵɵtext(34, " On The");
        i0.ɵɵelement(35, "br");
        i0.ɵɵelementStart(36, "span", 27);
        i0.ɵɵtext(37, "Board");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(38, "p", 28);
        i0.ɵɵtext(39, " Stay up to date on the latest Bolder special nights, upcoming challenges, special nights, and really awesome live events happening at the park. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(40, "div", 29);
        i0.ɵɵtemplate(41, LiveEventsComponent_div_41_Template, 19, 13, "div", 30);
        i0.ɵɵelementStart(42, "div", 31)(43, "div", 32)(44, "span", 33);
        i0.ɵɵtext(45, "\uD83D\uDCC5");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(46, "h3");
        i0.ɵɵtext(47, "More Events Incoming");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "p");
        i0.ɵɵtext(49, " More events are being planned at Bolder Adventure Park. Sign up to be the first to know. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "a", 34);
        i0.ɵɵtext(51, "Notify Me \u2192");
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(52, "section", 35)(53, "div", 36)(54, "div", 37)(55, "div", 38);
        i0.ɵɵelement(56, "img", 39)(57, "div", 40);
        i0.ɵɵelementStart(58, "span", 41);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(59, "svg", 42);
        i0.ɵɵelement(60, "path", 43);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(61);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(62, "button", 44);
        i0.ɵɵlistener("click", function LiveEventsComponent_Template_button_click_62_listener() { return ctx.prevSlide(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(63, "svg", 45);
        i0.ɵɵelement(64, "path", 46);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(65, "button", 47);
        i0.ɵɵlistener("click", function LiveEventsComponent_Template_button_click_65_listener() { return ctx.nextSlide(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(66, "svg", 45);
        i0.ɵɵelement(67, "path", 48);
        i0.ɵɵelementEnd()()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(68, "div", 49)(69, "h2", 50);
        i0.ɵɵtext(70);
        i0.ɵɵelement(71, "br");
        i0.ɵɵelementStart(72, "span", 27);
        i0.ɵɵtext(73);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(74, "div", 51)(75, "span");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(76, "svg", 52);
        i0.ɵɵelement(77, "rect", 53)(78, "path", 54);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(79);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(80, "span", 55);
        i0.ɵɵtext(81, "\u00B7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "span");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(83, "svg", 52);
        i0.ɵɵelement(84, "path", 56)(85, "circle", 57);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(86);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(87, "span", 55);
        i0.ɵɵtext(88, "\u00B7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(89, "span");
        i0.ɵɵtext(90);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(91, "p", 58);
        i0.ɵɵtext(92);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(93, "div", 59)(94, "div", 60)(95, "span", 61);
        i0.ɵɵtext(96);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(97, "span", 62);
        i0.ɵɵtext(98, "Days");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(99, "div", 60)(100, "span", 61);
        i0.ɵɵtext(101);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(102, "span", 62);
        i0.ɵɵtext(103, "Hrs");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(104, "div", 60)(105, "span", 61);
        i0.ɵɵtext(106);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(107, "span", 62);
        i0.ɵɵtext(108, "Min");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(109, "div", 60)(110, "span", 61);
        i0.ɵɵtext(111);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(112, "span", 62);
        i0.ɵɵtext(113, "Sec");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(114, "div", 63)(115, "a", 64);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(116, "svg", 65);
        i0.ɵɵelement(117, "path", 66);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(118, " Get Tickets ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(119, "a", 67);
        i0.ɵɵtext(120, " View Event Details \u2192 ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(121, "div", 68);
        i0.ɵɵtemplate(122, LiveEventsComponent_button_122_Template, 1, 3, "button", 69);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(123, "section", 70)(124, "div", 36)(125, "div", 71)(126, "p");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(127, "svg", 72);
        i0.ɵɵelement(128, "rect", 53)(129, "path", 54);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(130, " What's Coming ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(131, "h2");
        i0.ɵɵtext(132, "The Route ");
        i0.ɵɵelementStart(133, "span", 27);
        i0.ɵɵtext(134, "Ahead");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(135, "div", 73);
        i0.ɵɵtemplate(136, LiveEventsComponent_button_136_Template, 2, 3, "button", 74);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(137, "div", 75);
        i0.ɵɵtemplate(138, LiveEventsComponent_div_138_Template, 19, 10, "div", 76);
        i0.ɵɵtemplate(139, LiveEventsComponent_div_139_Template, 3, 0, "div", 77);
        i0.ɵɵtemplate(140, LiveEventsComponent_div_140_Template, 3, 0, "div", 77);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(141, "section", 78)(142, "div", 36)(143, "div", 79)(144, "p");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(145, "svg", 80);
        i0.ɵɵelement(146, "path", 81)(147, "circle", 82);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(148, " Caught In The Act ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(149, "h2");
        i0.ɵɵtext(150, "Gallery ");
        i0.ɵɵelementStart(151, "span", 27);
        i0.ɵɵtext(152, "Shots");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(153, "div", 83);
        i0.ɵɵtemplate(154, LiveEventsComponent_div_154_Template, 2, 2, "div", 84);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(155, "section", 85)(156, "div", 36)(157, "h2", 86);
        i0.ɵɵtext(158, " Ready to");
        i0.ɵɵelement(159, "br");
        i0.ɵɵelementStart(160, "span", 27);
        i0.ɵɵtext(161, "Experience");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(162, " It? ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(163, "p", 87);
        i0.ɵɵtext(164, " Book your tickets online and guarantee your spot at the next big event. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(165, "div", 88)(166, "a", 89);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(167, "svg", 65);
        i0.ɵɵelement(168, "path", 66);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(169, " Book Tickets ");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(20);
        i0.ɵɵproperty("ngForOf", ctx.filters);
        i0.ɵɵadvance(21);
        i0.ɵɵproperty("ngForOf", ctx.filteredEvents);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-sr-delay", ctx.filteredEvents.length * 0.1 + "s");
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("src", ctx.events[ctx.carouselIndex].image, i0.ɵɵsanitizeUrl)("alt", ctx.events[ctx.carouselIndex].title);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate2(" NEXT UP \u00A0", ctx.pad(ctx.carouselIndex + 1), "/", ctx.pad(ctx.events.length), " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.events[ctx.carouselIndex].carouselTitle, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.events[ctx.carouselIndex].carouselAccent);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.events[ctx.carouselIndex].date, " ");
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.events[ctx.carouselIndex].location, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.events[ctx.carouselIndex].ageRestriction);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.events[ctx.carouselIndex].description);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.pad(ctx.countdownDays));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.pad(ctx.countdownHours));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.pad(ctx.countdownMinutes));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.pad(ctx.countdownSeconds));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("href", ctx.events[ctx.carouselIndex].ticketUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(25, _c0, ctx.events[ctx.carouselIndex].slug));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.events);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filteredTimeline);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filteredTimeline.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filteredTimeline.length > 0);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngForOf", ctx.galleryImages);
    } }, directives: [i2.NgForOf, i2.NgClass, i3.RouterLinkWithHref, i2.NgIf], styles: ["//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   BASE\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.inner-page[_ngcontent-%COMP%] { background: var(--black); color: var(--white); min-height: 100vh; }\n\n.le-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.le-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n\n.le-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.le-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 1rem;\n\n  // Override global span rule \u2014 keep display font inside headings\n  span { font-family: var(--font-display); }\n}\n\n//[_ngcontent-%COMP%]   Fix[_ngcontent-%COMP%]   font[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   accent[_ngcontent-%COMP%]   spans[_ngcontent-%COMP%]   inside[_ngcontent-%COMP%]   section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   globally[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   this[_ngcontent-%COMP%]   page\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .le-car-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .le-ready-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n}\n\n.accent-orange[_ngcontent-%COMP%] { color: var(--orange); }\n.accent-blue[_ngcontent-%COMP%]   { color: var(--blue); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   HERO\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: clamp(580px, 85vh, 800px);\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  padding-top: 148px;\n}\n\n.le-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 35%;\n  z-index: 0;\n}\n\n.le-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(3, 3, 3, 0.62);\n  z-index: 1;\n}\n\n.le-hero-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    160deg,\n    rgba(244, 81, 19, 0.15) 0%,\n    transparent 40%,\n    rgba(17, 158, 232, 0.08) 100%\n  );\n  z-index: 2;\n}\n\n.le-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 4;\n  padding: 0 2rem 4rem;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.le-hero-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n\n.le-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(3rem, 9vw, 7rem);\n  color: #fff;\n  margin: 0 0 1rem;\n  line-height: 0.95;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.7);\n\n  span { color: var(--orange); }\n}\n\n.le-hero-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.78);\n  max-width: 520px;\n  line-height: 1.6;\n  margin: 0 0 1.75rem;\n}\n\n.le-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n\n.le-hero-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.le-filter-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.4rem 1rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n\n  &.is-active,\n  &:hover {\n    background: var(--orange);\n    border-color: var(--orange);\n  }\n}\n\n.le-hero-bottom-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0; right: 0;\n  height: 140px;\n  background: linear-gradient(to bottom, transparent, var(--black));\n  z-index: 3;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   ON[_ngcontent-%COMP%]   THE[_ngcontent-%COMP%]   BOARD\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-board[_ngcontent-%COMP%] {\n  background: #060606;\n}\n\n.le-board-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 4rem;\n  align-items: start;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.le-board-left[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 160px;\n\n  .le-kicker {\n    font-size: 0.72rem;\n    letter-spacing: 0.18em;\n    margin-bottom: 0.4rem;\n  }\n\n  .le-heading {\n    font-size: clamp(4rem, 9vw, 6.5rem);\n    line-height: 0.92;\n    margin-bottom: 1.2rem;\n  }\n\n  @media (max-width: 900px) {\n    position: static;\n    top: auto;\n    text-align: center;\n\n    .le-kicker { justify-content: center; }\n    .le-heading { font-size: clamp(3rem, 14vw, 5rem); margin-bottom: 0.75rem; }\n  }\n}\n\n.le-board-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.7;\n  max-width: 260px;\n  margin: 0;\n\n  @media (max-width: 900px) {\n    max-width: 100%;\n    text-align: center;\n  }\n}\n\n.le-board-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.5rem;\n\n  @media (max-width: 540px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n//[_ngcontent-%COMP%]   Event[_ngcontent-%COMP%]   Card\n.le-event-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: border-color 0.2s, transform 0.2s;\n\n  &:hover {\n    border-color: rgba(244, 81, 19, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-card-image[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.le-card-date-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(3, 3, 3, 0.85);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  backdrop-filter: blur(4px);\n}\n\n.le-card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.6rem;\n  border-radius: 4px;\n\n  &.badge-limited {\n    background: var(--orange);\n    color: #fff;\n  }\n  &.badge-open {\n    background: #1a7a3a;\n    color: #fff;\n  }\n}\n\n.le-card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.le-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n  line-height: 1.1;\n}\n\n.le-card-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 0.75rem;\n}\n\n.le-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: rgba(255, 255, 255, 0.55);\n    letter-spacing: 0.04em;\n  }\n}\n\n.le-card-link[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--orange);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n//[_ngcontent-%COMP%]   Incoming[_ngcontent-%COMP%]   card\n.le-card-incoming[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 220px;\n  background: rgba(17, 158, 232, 0.04);\n\n  &:hover {\n    border-color: rgba(17, 158, 232, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-incoming-inner[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.4rem;\n    margin: 0;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    line-height: 1.5;\n    margin: 0;\n  }\n}\n\n.le-incoming-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   PICK[_ngcontent-%COMP%]   YOUR[_ngcontent-%COMP%]   CHALLENGE\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-challenges[_ngcontent-%COMP%] {\n  background: var(--black);\n\n  .section-title {\n    h2 { color: var(--white); }\n  }\n}\n\n.le-challenge-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.75rem;\n\n  @media (max-width: 900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (max-width: 550px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.le-challenge-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 3/4;\n  display: block;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.08); }\n}\n\n.le-challenge-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.85) 0%, transparent 55%);\n  transition: background 0.3s;\n}\n\n.le-challenge-card[_ngcontent-%COMP%]:hover   .le-challenge-overlay[_ngcontent-%COMP%] {\n  background: linear-gradient(to top, rgba(244, 81, 19, 0.7) 0%, rgba(3,3,3,0.3) 100%);\n}\n\n.le-challenge-name[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.875rem;\n  left: 0.875rem;\n  right: 0.875rem;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 2px 8px rgba(0,0,0,0.6);\n  line-height: 1.1;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   EVENT[_ngcontent-%COMP%]   CAROUSEL\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-carousel-section[_ngcontent-%COMP%] {\n  background: var(--black);\n  padding: clamp(3rem, 6vw, 5rem) 1.5rem;\n}\n\n.le-carousel-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 55% 1fr;\n  background: #0d1219;\n  border-radius: 20px;\n  overflow: hidden;\n  min-height: 520px;\n  border: 1px solid rgba(255,255,255,0.07);\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Image[_ngcontent-%COMP%]   panel[_ngcontent-%COMP%]   \u2500\u2500\n.le-car-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 420px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.6s ease;\n  }\n\n  &:hover img { transform: scale(1.03); }\n}\n\n.le-car-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, transparent 60%, #0d1219 100%);\n  pointer-events: none;\n}\n\n//[_ngcontent-%COMP%]   \"NEXT UP 01/03\"[_ngcontent-%COMP%]   badge\n.le-car-next-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  z-index: 5;\n}\n\n//[_ngcontent-%COMP%]   Prev[_ngcontent-%COMP%]   /[_ngcontent-%COMP%]   Next[_ngcontent-%COMP%]   arrows\n.le-car-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255,255,255,0.25);\n  background: rgba(0,0,0,0.5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.2s, border-color 0.2s;\n  backdrop-filter: blur(4px);\n\n  &:hover { background: var(--orange); border-color: var(--orange); }\n}\n\n.le-car-prev[_ngcontent-%COMP%] { left: 1rem; }\n.le-car-next[_ngcontent-%COMP%] { right: 1rem; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Content[_ngcontent-%COMP%]   panel[_ngcontent-%COMP%]   \u2500\u2500\n.le-car-copy[_ngcontent-%COMP%] {\n  padding: clamp(2rem, 4vw, 3rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0;\n}\n\n.le-car-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 0.95;\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-car-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    color: rgba(255,255,255,0.55);\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    letter-spacing: 0.02em;\n  }\n}\n\n.le-car-sep[_ngcontent-%COMP%] { color: rgba(255,255,255,0.25) !important; }\n\n.le-car-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.65;\n  margin: 0 0 1.5rem;\n}\n\n//[_ngcontent-%COMP%]   Countdown[_ngcontent-%COMP%]   boxes\n.le-car-countdown[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n\n.le-car-cd-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  min-width: 62px;\n  text-align: center;\n}\n\n.le-car-cd-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-car-cd-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.25rem;\n}\n\n.le-car-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.75rem;\n}\n\n.le-car-detail-link[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.45);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n//[_ngcontent-%COMP%]   Dot[_ngcontent-%COMP%]   indicators\n.le-car-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n@keyframes dot-progress {\n  from { width: 0%; }\n  to   { width: 100%; }\n}\n\n.le-car-dot[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 32px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255,255,255,0.2);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: width 0.25s;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    width: 0%;\n    background: var(--orange);\n    border-radius: 2px;\n  }\n\n  &.is-active {\n    width: 48px;\n\n    &::after {\n      animation: dot-progress 5s linear forwards;\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   THE[_ngcontent-%COMP%]   ROUTE[_ngcontent-%COMP%]   AHEAD[_ngcontent-%COMP%]   (Timeline)\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-timeline-section[_ngcontent-%COMP%] {\n  background: #050505;\n}\n\n//[_ngcontent-%COMP%]   Force[_ngcontent-%COMP%]   heading[_ngcontent-%COMP%]   onto[_ngcontent-%COMP%]   ONE[_ngcontent-%COMP%]   LINE[_ngcontent-%COMP%]   \u2014[_ngcontent-%COMP%]   accent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   must[_ngcontent-%COMP%]   stay[_ngcontent-%COMP%]   inline\n.le-timeline-title[_ngcontent-%COMP%] {\n  h2 {\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n  p svg { display: inline; vertical-align: middle; }\n}\n\n.le-timeline-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n\n.le-tab-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.6);\n  font-family: var(--font-ui);\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.5rem 1.25rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.is-active,\n  &:hover {\n    background: var(--orange);\n    border-color: var(--orange);\n    color: #fff;\n  }\n}\n\n.le-timeline[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 130px;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background: rgba(255, 255, 255, 0.08);\n  }\n\n  @media (max-width: 600px) {\n    &::before { left: 60px; }\n  }\n}\n\n.le-timeline-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 24px 1fr;\n  gap: 1.5rem;\n  align-items: start;\n  margin-bottom: 2.5rem;\n  position: relative;\n\n  @media (max-width: 600px) {\n    grid-template-columns: 52px 24px 1fr;\n    gap: 0.75rem;\n  }\n}\n\n.le-tl-date[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-top: 0.1rem;\n}\n\n.le-tl-day[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-tl-year[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  color: var(--muted);\n  margin-top: 0.1rem;\n}\n\n.le-tl-dot[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  background: var(--orange);\n  border-radius: 50%;\n  border: 3px solid var(--black);\n  box-shadow: 0 0 0 2px var(--orange);\n  margin-top: 0.2rem;\n  flex-shrink: 0;\n}\n\n.le-tl-content[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 1.25rem 1.5rem;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: rgba(244, 81, 19, 0.3); }\n}\n\n.le-tl-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.4rem;\n}\n\n.le-tl-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n  line-height: 1.1;\n}\n\n.le-tl-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.75rem;\n    color: rgba(255,255,255,0.5);\n  }\n}\n\n.le-tl-link[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--blue);\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n.le-tl-end-label[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem 0 0;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.3);\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   BRING[_ngcontent-%COMP%]   THE[_ngcontent-%COMP%]   WHOLE[_ngcontent-%COMP%]   CREW\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-crew-section[_ngcontent-%COMP%] {\n  background: #060606;\n}\n\n.le-crew-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n  flex-wrap: wrap;\n\n  .section-title h2 { font-size: clamp(2.2rem, 5vw, 4rem); }\n}\n\n.le-crew-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n\n  @media (max-width: 800px) {\n    grid-template-columns: 1fr;\n    max-width: 420px;\n    margin: 0 auto;\n  }\n}\n\n.le-crew-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  display: block;\n  text-decoration: none;\n  color: var(--white);\n  transition: border-color 0.2s, transform 0.2s;\n\n  &:hover {\n    border-color: rgba(244, 81, 19, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-crew-img[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  .le-crew-card:hover & img { transform: scale(1.06); }\n}\n\n.le-crew-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.6) 0%, transparent 60%);\n}\n\n.le-crew-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.6rem;\n    margin: 0 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    line-height: 1.6;\n    margin: 0 0 0.75rem;\n  }\n}\n\n.le-crew-cta[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--orange);\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   GALLERY\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-gallery-section[_ngcontent-%COMP%] {\n  background: var(--black);\n}\n\n//[_ngcontent-%COMP%]   Ensure[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   heading[_ngcontent-%COMP%]   renders[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   ONE[_ngcontent-%COMP%]   LINE[_ngcontent-%COMP%]   \u2014[_ngcontent-%COMP%]   accent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   must[_ngcontent-%COMP%]   be[_ngcontent-%COMP%]   inline\n\n.le-gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto auto;\n  gap: 0.5rem;\n  margin-top: 2rem;\n}\n\n.le-gallery-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 8px;\n  aspect-ratio: 4/3;\n\n  &:first-child {\n    grid-column: span 2;\n    grid-row: span 2;\n    aspect-ratio: unset;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img {\n    transform: scale(1.05);\n  }\n}\n\n.le-gallery-title[_ngcontent-%COMP%] {\n  h2 {\n    font-size: clamp(2rem, 5.5vw, 4.2rem);\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   Ensure[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   heading[_ngcontent-%COMP%]   renders[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   ONE[_ngcontent-%COMP%]   LINE[_ngcontent-%COMP%]   \u2014[_ngcontent-%COMP%]   accent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   must[_ngcontent-%COMP%]   be[_ngcontent-%COMP%]   inline\n.le-timeline-title[_ngcontent-%COMP%] {\n  h2 {\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   READY[_ngcontent-%COMP%]   CTA\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-ready-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--black);\n  padding: clamp(5rem, 10vw, 8rem) 1.5rem;\n  text-align: center;\n  overflow: hidden;\n\n  // Subtle radial glow behind content\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n    height: 400px;\n    background: radial-gradient(ellipse, rgba(244,81,19,0.12) 0%, transparent 70%);\n    pointer-events: none;\n  }\n}\n\n.le-ready-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.le-ready-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  line-height: 1;\n  color: var(--white);\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-ready-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255,255,255,0.55);\n  max-width: 520px;\n  margin: 0 auto 2.5rem;\n  line-height: 1.6;\n}\n\n.le-ready-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LiveEventsComponent, [{
        type: Component,
        args: [{ selector: 'app-live-events', template: "<div class=\"inner-page live-events-page\">\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       HERO\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-hero\">\n    <img\n      class=\"le-hero-bg\"\n      src=\"assets/After-hero-section/Attractions - A view from Mezz 1.jpg\"\n      alt=\"Bolder Live Events\"\n      fetchpriority=\"high\"\n    />\n    <div class=\"le-hero-overlay\"></div>\n    <div class=\"le-hero-grad\"></div>\n\n    <div class=\"le-hero-content\">\n      <span class=\"le-hero-kicker sr sr-up\">Bolder Live & Special Events</span>\n      <h1 class=\"le-hero-title sr sr-up\" data-sr-delay=\"0.08s\">\n        Bolder Live &amp; Special<br />Events Night\n      </h1>\n      <p class=\"le-hero-sub sr sr-up\" data-sr-delay=\"0.16s\">\n        Discover Bolder's adventure, upcoming challenges, special nights, and\n        really awesome live events \u2014 all happening under one massive roof!\n      </p>\n      <div class=\"le-hero-actions sr sr-up\" data-sr-delay=\"0.24s\">\n        <a\n          (click)=\"scrollTo('on-the-boards')\"\n          class=\"btn btn-orange btn-lg\"\n          style=\"cursor: pointer\"\n        >\n          <svg\n            width=\"16\"\n            height=\"16\"\n            viewBox=\"0 0 24 24\"\n            fill=\"currentColor\"\n            aria-hidden=\"true\"\n          >\n            <path d=\"M8 5v14l11-7z\" />\n          </svg>\n          View Today's Events\n        </a>\n      </div>\n\n      <div class=\"le-hero-filters sr sr-up\" data-sr-delay=\"0.3s\">\n        <button\n          *ngFor=\"let f of filters\"\n          class=\"le-filter-chip\"\n          [class.is-active]=\"activeFilter === f.value\"\n          (click)=\"setFilter(f.value)\"\n        >\n          {{ f.label }}\n        </button>\n      </div>\n    </div>\n\n    <div class=\"le-hero-bottom-fade\"></div>\n  </section>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       ON THE BOARD\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-section le-board\" id=\"on-the-boards\">\n    <div class=\"le-container le-board-grid\">\n      <div class=\"le-board-left\">\n        <span class=\"le-kicker sr sr-up\"\n          ><svg\n            width=\"13\"\n            height=\"13\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            aria-hidden=\"true\"\n            style=\"vertical-align: -2px; margin-right: 5px\"\n          >\n            <path d=\"M5 12.55a11 11 0 0 1 14.08 0\" />\n            <path d=\"M1.42 9a16 16 0 0 1 21.16 0\" />\n            <path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\" />\n            <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"20.5\" />\n            <line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"13\" /></svg\n          >Current Events</span\n        >\n        <h2 class=\"le-heading sr sr-up\" data-sr-delay=\"0.08s\">\n          On The<br /><span class=\"accent-orange\">Board</span>\n        </h2>\n        <p class=\"le-board-desc sr sr-up\" data-sr-delay=\"0.16s\">\n          Stay up to date on the latest Bolder special nights, upcoming\n          challenges, special nights, and really awesome live events happening\n          at the park.\n        </p>\n      </div>\n\n      <div class=\"le-board-cards\">\n        <div\n          class=\"le-event-card sr sr-up\"\n          *ngFor=\"let event of filteredEvents; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.1 + 's'\"\n        >\n          <div class=\"le-card-image\">\n            <img [src]=\"event.image\" [alt]=\"event.title\" loading=\"lazy\" />\n            <span class=\"le-card-date-badge\">{{ event.dateLabel }}</span>\n            <span class=\"le-card-badge\" [ngClass]=\"event.badgeClass\">{{\n              event.badge\n            }}</span>\n          </div>\n          <div class=\"le-card-body\">\n            <h3 class=\"le-card-title\">{{ event.title }}</h3>\n            <p class=\"le-card-desc\">{{ event.description }}</p>\n            <div class=\"le-card-meta\">\n              <span>\uD83D\uDDD3 {{ event.date }}</span>\n              <span>\uD83D\uDCCD {{ event.location }}</span>\n            </div>\n            <a [routerLink]=\"['/live-events', event.slug]\" class=\"le-card-link\"\n              >View Details \u2192</a\n            >\n          </div>\n        </div>\n\n        <div\n          class=\"le-event-card le-card-incoming sr sr-up\"\n          [attr.data-sr-delay]=\"filteredEvents.length * 0.1 + 's'\"\n        >\n          <div class=\"le-incoming-inner\">\n            <span class=\"le-incoming-icon\">\uD83D\uDCC5</span>\n            <h3>More Events Incoming</h3>\n            <p>\n              More events are being planned at Bolder Adventure Park. Sign up to\n              be the first to know.\n            </p>\n            <a routerLink=\"/contact-us\" class=\"btn btn-outline\">Notify Me \u2192</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       EVENT CAROUSEL\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-section le-carousel-section\">\n    <div class=\"le-container\">\n      <div class=\"le-carousel-card sr sr-up\">\n        <!-- Image panel -->\n        <div class=\"le-car-image-wrap\">\n          <img\n            [src]=\"events[carouselIndex].image\"\n            [alt]=\"events[carouselIndex].title\"\n            loading=\"lazy\"\n          />\n          <div class=\"le-car-img-overlay\"></div>\n\n          <span class=\"le-car-next-badge\">\n            <svg\n              width=\"12\"\n              height=\"12\"\n              viewBox=\"0 0 24 24\"\n              fill=\"currentColor\"\n              aria-hidden=\"true\"\n            >\n              <path\n                d=\"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z\"\n              />\n            </svg>\n            NEXT UP &nbsp;{{ pad(carouselIndex + 1) }}/{{ pad(events.length) }}\n          </span>\n\n          <button\n            class=\"le-car-arrow le-car-prev\"\n            (click)=\"prevSlide()\"\n            aria-label=\"Previous event\"\n          >\n            <svg\n              width=\"20\"\n              height=\"20\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2.5\"\n              aria-hidden=\"true\"\n            >\n              <path d=\"M15 18l-6-6 6-6\" />\n            </svg>\n          </button>\n          <button\n            class=\"le-car-arrow le-car-next\"\n            (click)=\"nextSlide()\"\n            aria-label=\"Next event\"\n          >\n            <svg\n              width=\"20\"\n              height=\"20\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2.5\"\n              aria-hidden=\"true\"\n            >\n              <path d=\"M9 18l6-6-6-6\" />\n            </svg>\n          </button>\n        </div>\n\n        <!-- Content panel -->\n        <div class=\"le-car-copy\">\n          <h2 class=\"le-car-title\">\n            {{ events[carouselIndex].carouselTitle }}<br />\n            <span class=\"accent-orange\">{{\n              events[carouselIndex].carouselAccent\n            }}</span>\n          </h2>\n\n          <div class=\"le-car-meta\">\n            <span>\n              <svg\n                width=\"13\"\n                height=\"13\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                aria-hidden=\"true\"\n              >\n                <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" />\n                <path d=\"M16 2v4M8 2v4M3 10h18\" />\n              </svg>\n              {{ events[carouselIndex].date }}\n            </span>\n            <span class=\"le-car-sep\">\u00B7</span>\n            <span>\n              <svg\n                width=\"13\"\n                height=\"13\"\n                viewBox=\"0 0 24 24\"\n                fill=\"none\"\n                stroke=\"currentColor\"\n                stroke-width=\"2\"\n                aria-hidden=\"true\"\n              >\n                <path d=\"M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z\" />\n                <circle cx=\"12\" cy=\"9\" r=\"2.4\" />\n              </svg>\n              {{ events[carouselIndex].location }}\n            </span>\n            <span class=\"le-car-sep\">\u00B7</span>\n            <span>{{ events[carouselIndex].ageRestriction }}</span>\n          </div>\n\n          <p class=\"le-car-desc\">{{ events[carouselIndex].description }}</p>\n\n          <div class=\"le-car-countdown\">\n            <div class=\"le-car-cd-box\">\n              <span class=\"le-car-cd-num\">{{ pad(countdownDays) }}</span>\n              <span class=\"le-car-cd-label\">Days</span>\n            </div>\n            <div class=\"le-car-cd-box\">\n              <span class=\"le-car-cd-num\">{{ pad(countdownHours) }}</span>\n              <span class=\"le-car-cd-label\">Hrs</span>\n            </div>\n            <div class=\"le-car-cd-box\">\n              <span class=\"le-car-cd-num\">{{ pad(countdownMinutes) }}</span>\n              <span class=\"le-car-cd-label\">Min</span>\n            </div>\n            <div class=\"le-car-cd-box\">\n              <span class=\"le-car-cd-num\">{{ pad(countdownSeconds) }}</span>\n              <span class=\"le-car-cd-label\">Sec</span>\n            </div>\n          </div>\n\n          <div class=\"le-car-actions\">\n            <a\n              [href]=\"events[carouselIndex].ticketUrl\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              class=\"btn btn-orange btn-lg\"\n            >\n              <svg\n                width=\"16\"\n                height=\"16\"\n                viewBox=\"0 0 16 16\"\n                fill=\"currentColor\"\n                aria-hidden=\"true\"\n              >\n                <path\n                  d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"\n                />\n              </svg>\n              Get Tickets\n            </a>\n            <a\n              [routerLink]=\"['/live-events', events[carouselIndex].slug]\"\n              class=\"le-car-detail-link\"\n            >\n              View Event Details \u2192\n            </a>\n          </div>\n\n          <!-- Dot indicators -->\n          <div class=\"le-car-dots\">\n            <button\n              *ngFor=\"let e of events; let i = index\"\n              class=\"le-car-dot\"\n              [class.is-active]=\"i === carouselIndex\"\n              (click)=\"goToSlide(i)\"\n              [attr.aria-label]=\"'Go to slide ' + (i + 1)\"\n            ></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       THE ROUTE AHEAD (Timeline)\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-section le-timeline-section\">\n    <div class=\"le-container\">\n      <div class=\"section-title le-timeline-title sr sr-up\">\n        <p>\n          <svg\n            width=\"13\"\n            height=\"13\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2.2\"\n            aria-hidden=\"true\"\n            style=\"vertical-align: -2px; margin-right: 5px\"\n          >\n            <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" />\n            <path d=\"M16 2v4M8 2v4M3 10h18\" />\n          </svg>\n          What's Coming\n        </p>\n        <h2>The Route <span class=\"accent-orange\">Ahead</span></h2>\n      </div>\n\n      <div class=\"le-timeline-tabs sr sr-up\" data-sr-delay=\"0.1s\">\n        <button\n          *ngFor=\"let t of tabs\"\n          class=\"le-tab-btn\"\n          [class.is-active]=\"activeTab === t.value\"\n          (click)=\"setTab(t.value)\"\n        >\n          {{ t.label }}\n        </button>\n      </div>\n\n      <div class=\"le-timeline\">\n        <div\n          class=\"le-timeline-item sr sr-up\"\n          *ngFor=\"let item of filteredTimeline; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.1 + 's'\"\n        >\n          <div class=\"le-tl-date\">\n            <span class=\"le-tl-day\">{{ item.date }}</span>\n            <span class=\"le-tl-year\">{{ item.year }}</span>\n          </div>\n          <div class=\"le-tl-dot\"></div>\n          <div class=\"le-tl-content\">\n            <span class=\"le-tl-type\">{{ item.type }}</span>\n            <h3 class=\"le-tl-title\">{{ item.title }}</h3>\n            <div class=\"le-tl-meta\">\n              <span>\u23F0 {{ item.time }}</span>\n              <span>\uD83D\uDCCD {{ item.location }}</span>\n            </div>\n            <a [routerLink]=\"['/live-events', item.slug]\" class=\"le-tl-link\"\n              >View Event \u2192</a\n            >\n          </div>\n        </div>\n\n        <div class=\"le-tl-end-label\" *ngIf=\"filteredTimeline.length === 0\">\n          <span>No events in this category yet. Check back soon!</span>\n        </div>\n        <div class=\"le-tl-end-label\" *ngIf=\"filteredTimeline.length > 0\">\n          <span>More events coming \u2014 stay tuned!</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       CAUGHT IN THE ACT (Gallery)\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-section le-gallery-section\">\n    <div class=\"le-container\">\n      <div class=\"section-title le-gallery-title sr sr-up\">\n        <p>\n          <svg\n            width=\"14\"\n            height=\"14\"\n            viewBox=\"0 0 24 24\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            stroke-width=\"2.2\"\n            aria-hidden=\"true\"\n            style=\"vertical-align: -2px; margin-right: 5px\"\n          >\n            <path\n              d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"\n            />\n            <circle cx=\"12\" cy=\"13\" r=\"4\" />\n          </svg>\n          Caught In The Act\n        </p>\n        <h2>Gallery <span class=\"accent-orange\">Shots</span></h2>\n      </div>\n      <div class=\"le-gallery-grid\">\n        <div\n          class=\"le-gallery-item sr sr-up\"\n          *ngFor=\"let img of galleryImages; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.06 + 's'\"\n        >\n          <img [src]=\"img\" alt=\"Bolder Adventure Park gallery\" loading=\"lazy\" />\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n       BOOK NOW CTA\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class=\"le-section le-ready-section\">\n    <div class=\"le-container\">\n      <h2 class=\"le-ready-title sr sr-up\">\n        Ready to<br /><span class=\"accent-orange\">Experience</span> It?\n      </h2>\n      <p class=\"le-ready-sub sr sr-up\" data-sr-delay=\"0.1s\">\n        Book your tickets online and guarantee your spot at the next big event.\n      </p>\n      <div class=\"le-ready-actions sr sr-up\" data-sr-delay=\"0.2s\">\n        <a\n          href=\"https://ticket.bolderadventurepark.com/\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-orange btn-lg\"\n        >\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\">\n            <path d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"/>\n          </svg>\n          Book Tickets\n        </a>\n      </div>\n    </div>\n  </section>\n\n</div>\n", styles: ["// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  BASE\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.inner-page { background: var(--black); color: var(--white); min-height: 100vh; }\n\n.le-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.le-container { max-width: 1200px; margin: 0 auto; }\n\n.le-kicker {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n.le-heading {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 1rem;\n\n  // Override global span rule \u2014 keep display font inside headings\n  span { font-family: var(--font-display); }\n}\n\n// Fix font for accent spans inside section-title h2 globally on this page\n.section-title h2 span,\n.le-car-title span,\n.le-ready-title span {\n  font-family: var(--font-display);\n}\n\n.accent-orange { color: var(--orange); }\n.accent-blue   { color: var(--blue); }\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  HERO\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-hero {\n  position: relative;\n  width: 100%;\n  min-height: clamp(580px, 85vh, 800px);\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  padding-top: 148px;\n}\n\n.le-hero-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 35%;\n  z-index: 0;\n}\n\n.le-hero-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(3, 3, 3, 0.62);\n  z-index: 1;\n}\n\n.le-hero-grad {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    160deg,\n    rgba(244, 81, 19, 0.15) 0%,\n    transparent 40%,\n    rgba(17, 158, 232, 0.08) 100%\n  );\n  z-index: 2;\n}\n\n.le-hero-content {\n  position: relative;\n  z-index: 4;\n  padding: 0 2rem 4rem;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.le-hero-kicker {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.3rem 1rem;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n\n.le-hero-title {\n  font-family: var(--font-display);\n  font-size: clamp(3rem, 9vw, 7rem);\n  color: #fff;\n  margin: 0 0 1rem;\n  line-height: 0.95;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 40px rgba(0, 0, 0, 0.7);\n\n  span { color: var(--orange); }\n}\n\n.le-hero-sub {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.78);\n  max-width: 520px;\n  line-height: 1.6;\n  margin: 0 0 1.75rem;\n}\n\n.le-hero-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n\n.le-hero-filters {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.le-filter-chip {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.4rem 1rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n\n  &.is-active,\n  &:hover {\n    background: var(--orange);\n    border-color: var(--orange);\n  }\n}\n\n.le-hero-bottom-fade {\n  position: absolute;\n  bottom: 0;\n  left: 0; right: 0;\n  height: 140px;\n  background: linear-gradient(to bottom, transparent, var(--black));\n  z-index: 3;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  ON THE BOARD\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-board {\n  background: #060606;\n}\n\n.le-board-grid {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 4rem;\n  align-items: start;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.le-board-left {\n  position: sticky;\n  top: 160px;\n\n  .le-kicker {\n    font-size: 0.72rem;\n    letter-spacing: 0.18em;\n    margin-bottom: 0.4rem;\n  }\n\n  .le-heading {\n    font-size: clamp(4rem, 9vw, 6.5rem);\n    line-height: 0.92;\n    margin-bottom: 1.2rem;\n  }\n\n  @media (max-width: 900px) {\n    position: static;\n    top: auto;\n    text-align: center;\n\n    .le-kicker { justify-content: center; }\n    .le-heading { font-size: clamp(3rem, 14vw, 5rem); margin-bottom: 0.75rem; }\n  }\n}\n\n.le-board-desc {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.7;\n  max-width: 260px;\n  margin: 0;\n\n  @media (max-width: 900px) {\n    max-width: 100%;\n    text-align: center;\n  }\n}\n\n.le-board-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1.5rem;\n\n  @media (max-width: 540px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n// Event Card\n.le-event-card {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  transition: border-color 0.2s, transform 0.2s;\n\n  &:hover {\n    border-color: rgba(244, 81, 19, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-card-image {\n  position: relative;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.05); }\n}\n\n.le-card-date-badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(3, 3, 3, 0.85);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.6rem;\n  border-radius: 6px;\n  backdrop-filter: blur(4px);\n}\n\n.le-card-badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.6rem;\n  border-radius: 4px;\n\n  &.badge-limited {\n    background: var(--orange);\n    color: #fff;\n  }\n  &.badge-open {\n    background: #1a7a3a;\n    color: #fff;\n  }\n}\n\n.le-card-body {\n  padding: 1.25rem;\n}\n\n.le-card-title {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n  line-height: 1.1;\n}\n\n.le-card-desc {\n  font-family: var(--font-body);\n  font-size: 0.82rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 0.75rem;\n}\n\n.le-card-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.75rem;\n    font-weight: 600;\n    color: rgba(255, 255, 255, 0.55);\n    letter-spacing: 0.04em;\n  }\n}\n\n.le-card-link {\n  font-family: var(--font-ui);\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--orange);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n// Incoming card\n.le-card-incoming {\n  border: 2px dashed rgba(255, 255, 255, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 220px;\n  background: rgba(17, 158, 232, 0.04);\n\n  &:hover {\n    border-color: rgba(17, 158, 232, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-incoming-inner {\n  padding: 2rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.4rem;\n    margin: 0;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    line-height: 1.5;\n    margin: 0;\n  }\n}\n\n.le-incoming-icon {\n  font-size: 2rem;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  PICK YOUR CHALLENGE\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-challenges {\n  background: var(--black);\n\n  .section-title {\n    h2 { color: var(--white); }\n  }\n}\n\n.le-challenge-grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.75rem;\n\n  @media (max-width: 900px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (max-width: 550px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.le-challenge-card {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  aspect-ratio: 3/4;\n  display: block;\n  cursor: pointer;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img { transform: scale(1.08); }\n}\n\n.le-challenge-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.85) 0%, transparent 55%);\n  transition: background 0.3s;\n}\n\n.le-challenge-card:hover .le-challenge-overlay {\n  background: linear-gradient(to top, rgba(244, 81, 19, 0.7) 0%, rgba(3,3,3,0.3) 100%);\n}\n\n.le-challenge-name {\n  position: absolute;\n  bottom: 0.875rem;\n  left: 0.875rem;\n  right: 0.875rem;\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 2px 8px rgba(0,0,0,0.6);\n  line-height: 1.1;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  EVENT CAROUSEL\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-carousel-section {\n  background: var(--black);\n  padding: clamp(3rem, 6vw, 5rem) 1.5rem;\n}\n\n.le-carousel-card {\n  display: grid;\n  grid-template-columns: 55% 1fr;\n  background: #0d1219;\n  border-radius: 20px;\n  overflow: hidden;\n  min-height: 520px;\n  border: 1px solid rgba(255,255,255,0.07);\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n// \u2500\u2500 Image panel \u2500\u2500\n.le-car-image-wrap {\n  position: relative;\n  overflow: hidden;\n  min-height: 420px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.6s ease;\n  }\n\n  &:hover img { transform: scale(1.03); }\n}\n\n.le-car-img-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, transparent 60%, #0d1219 100%);\n  pointer-events: none;\n}\n\n// \"NEXT UP 01/03\" badge\n.le-car-next-badge {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  z-index: 5;\n}\n\n// Prev / Next arrows\n.le-car-arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255,255,255,0.25);\n  background: rgba(0,0,0,0.5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.2s, border-color 0.2s;\n  backdrop-filter: blur(4px);\n\n  &:hover { background: var(--orange); border-color: var(--orange); }\n}\n\n.le-car-prev { left: 1rem; }\n.le-car-next { right: 1rem; }\n\n// \u2500\u2500 Content panel \u2500\u2500\n.le-car-copy {\n  padding: clamp(2rem, 4vw, 3rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0;\n}\n\n.le-car-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 0.95;\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-car-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    color: rgba(255,255,255,0.55);\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    letter-spacing: 0.02em;\n  }\n}\n\n.le-car-sep { color: rgba(255,255,255,0.25) !important; }\n\n.le-car-desc {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.65;\n  margin: 0 0 1.5rem;\n}\n\n// Countdown boxes\n.le-car-countdown {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n\n.le-car-cd-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  min-width: 62px;\n  text-align: center;\n}\n\n.le-car-cd-num {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-car-cd-label {\n  font-family: var(--font-ui);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.25rem;\n}\n\n.le-car-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.75rem;\n}\n\n.le-car-detail-link {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.45);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n// Dot indicators\n.le-car-dots {\n  display: flex;\n  gap: 0.5rem;\n}\n\n@keyframes dot-progress {\n  from { width: 0%; }\n  to   { width: 100%; }\n}\n\n.le-car-dot {\n  position: relative;\n  overflow: hidden;\n  width: 32px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255,255,255,0.2);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: width 0.25s;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    width: 0%;\n    background: var(--orange);\n    border-radius: 2px;\n  }\n\n  &.is-active {\n    width: 48px;\n\n    &::after {\n      animation: dot-progress 5s linear forwards;\n    }\n  }\n}\n\n//  THE ROUTE AHEAD (Timeline)\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-timeline-section {\n  background: #050505;\n}\n\n// Force heading onto ONE LINE \u2014 accent span must stay inline\n.le-timeline-title {\n  h2 {\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n  p svg { display: inline; vertical-align: middle; }\n}\n\n.le-timeline-tabs {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n\n.le-tab-btn {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.6);\n  font-family: var(--font-ui);\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 0.5rem 1.25rem;\n  border-radius: 9999px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &.is-active,\n  &:hover {\n    background: var(--orange);\n    border-color: var(--orange);\n    color: #fff;\n  }\n}\n\n.le-timeline {\n  max-width: 700px;\n  margin: 0 auto;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 130px;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background: rgba(255, 255, 255, 0.08);\n  }\n\n  @media (max-width: 600px) {\n    &::before { left: 60px; }\n  }\n}\n\n.le-timeline-item {\n  display: grid;\n  grid-template-columns: 120px 24px 1fr;\n  gap: 1.5rem;\n  align-items: start;\n  margin-bottom: 2.5rem;\n  position: relative;\n\n  @media (max-width: 600px) {\n    grid-template-columns: 52px 24px 1fr;\n    gap: 0.75rem;\n  }\n}\n\n.le-tl-date {\n  text-align: right;\n  padding-top: 0.1rem;\n}\n\n.le-tl-day {\n  display: block;\n  font-family: var(--font-display);\n  font-size: 1.2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-tl-year {\n  display: block;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  color: var(--muted);\n  margin-top: 0.1rem;\n}\n\n.le-tl-dot {\n  width: 14px;\n  height: 14px;\n  background: var(--orange);\n  border-radius: 50%;\n  border: 3px solid var(--black);\n  box-shadow: 0 0 0 2px var(--orange);\n  margin-top: 0.2rem;\n  flex-shrink: 0;\n}\n\n.le-tl-content {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  padding: 1.25rem 1.5rem;\n  transition: border-color 0.2s;\n\n  &:hover { border-color: rgba(244, 81, 19, 0.3); }\n}\n\n.le-tl-type {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.4rem;\n}\n\n.le-tl-title {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n  line-height: 1.1;\n}\n\n.le-tl-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.75rem;\n    color: rgba(255,255,255,0.5);\n  }\n}\n\n.le-tl-link {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--blue);\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n.le-tl-end-label {\n  text-align: center;\n  padding: 1.5rem 0 0;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    color: rgba(255,255,255,0.3);\n  }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  BRING THE WHOLE CREW\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-crew-section {\n  background: #060606;\n}\n\n.le-crew-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n  flex-wrap: wrap;\n\n  .section-title h2 { font-size: clamp(2.2rem, 5vw, 4rem); }\n}\n\n.le-crew-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n\n  @media (max-width: 800px) {\n    grid-template-columns: 1fr;\n    max-width: 420px;\n    margin: 0 auto;\n  }\n}\n\n.le-crew-card {\n  background: var(--panel);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  overflow: hidden;\n  display: block;\n  text-decoration: none;\n  color: var(--white);\n  transition: border-color 0.2s, transform 0.2s;\n\n  &:hover {\n    border-color: rgba(244, 81, 19, 0.4);\n    transform: translateY(-4px);\n  }\n}\n\n.le-crew-img {\n  position: relative;\n  aspect-ratio: 16/10;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  .le-crew-card:hover & img { transform: scale(1.06); }\n}\n\n.le-crew-img-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to top, rgba(3,3,3,0.6) 0%, transparent 60%);\n}\n\n.le-crew-body {\n  padding: 1.25rem;\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.6rem;\n    margin: 0 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    line-height: 1.6;\n    margin: 0 0 0.75rem;\n  }\n}\n\n.le-crew-cta {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--orange);\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  GALLERY\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-gallery-section {\n  background: var(--black);\n}\n\n// Ensure the heading renders on ONE LINE \u2014 accent span must be inline\n\n.le-gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: auto auto;\n  gap: 0.5rem;\n  margin-top: 2rem;\n}\n\n.le-gallery-item {\n  overflow: hidden;\n  border-radius: 8px;\n  aspect-ratio: 4/3;\n\n  &:first-child {\n    grid-column: span 2;\n    grid-row: span 2;\n    aspect-ratio: unset;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  &:hover img {\n    transform: scale(1.05);\n  }\n}\n\n.le-gallery-title {\n  h2 {\n    font-size: clamp(2rem, 5.5vw, 4.2rem);\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n}\n\n// Ensure the heading renders on ONE LINE \u2014 accent span must be inline\n.le-timeline-title {\n  h2 {\n    white-space: nowrap;\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  READY CTA\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.le-ready-section {\n  position: relative;\n  background: var(--black);\n  padding: clamp(5rem, 10vw, 8rem) 1.5rem;\n  text-align: center;\n  overflow: hidden;\n\n  // Subtle radial glow behind content\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n    height: 400px;\n    background: radial-gradient(ellipse, rgba(244,81,19,0.12) 0%, transparent 70%);\n    pointer-events: none;\n  }\n}\n\n.le-ready-inner {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.le-ready-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  line-height: 1;\n  color: var(--white);\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-ready-sub {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255,255,255,0.55);\n  max-width: 520px;\n  margin: 0 auto 2.5rem;\n  line-height: 1.6;\n}\n\n.le-ready-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=live-events.component.js.map