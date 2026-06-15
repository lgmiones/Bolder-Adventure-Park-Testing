import { Component, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../services/seo.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../../shared/infinite-carousel/infinite-carousel.component";
const _c0 = ["heroVideo"];
function HomeComponent_button_167_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 241);
    i0.ɵɵlistener("click", function HomeComponent_button_167_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const i_r10 = restoredCtx.index; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.goToCarousel(i_r10); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", i_r10 === ctx_r1.carouselIndex);
    i0.ɵɵattribute("aria-label", "Go to slide " + (i_r10 + 1));
} }
function HomeComponent_button_175_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 242);
    i0.ɵɵlistener("click", function HomeComponent_button_175_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const tab_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.setAttractionTab(tab_r13.id); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r2.activeAttractionTab === tab_r13.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r13.label);
} }
function HomeComponent_a_177_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 243);
    i0.ɵɵelement(1, "img", 51);
    i0.ɵɵelementStart(2, "div", 244)(3, "span", 245);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 246);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(6, "svg", 247);
    i0.ɵɵelement(7, "line", 248)(8, "polyline", 249);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const card_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    i0.ɵɵstyleProp("animation-delay", i_r17 * 0.055 + "s");
    i0.ɵɵproperty("routerLink", card_r16.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", card_r16.image, i0.ɵɵsanitizeUrl)("alt", card_r16.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(card_r16.title);
} }
function HomeComponent_div_272_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 250);
    i0.ɵɵlistener("click", function HomeComponent_div_272_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r20); const vid_r18 = restoredCtx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.openVideo(vid_r18.id); });
    i0.ɵɵelement(1, "img", 251)(2, "div", 252);
    i0.ɵɵelementStart(3, "div", 253)(4, "div", 254);
    i0.ɵɵelement(5, "img", 255);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 256)(7, "span", 257);
    i0.ɵɵtext(8, "Bolder Adventure Park");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 258);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 259);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(12, "svg", 260);
    i0.ɵɵelement(13, "path", 261)(14, "path", 262);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(15, "div", 263);
    i0.ɵɵelementStart(16, "div", 264)(17, "button", 265);
    i0.ɵɵlistener("click", function HomeComponent_div_272_Template_button_click_17_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const vid_r18 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.shareVideo(vid_r18.id, $event); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(18, "svg", 266);
    i0.ɵɵelement(19, "circle", 267)(20, "circle", 268)(21, "circle", 269)(22, "line", 270)(23, "line", 271);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "div", 272);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(25, "svg", 273);
    i0.ɵɵelement(26, "path", 274);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " Shorts ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vid_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "https://img.youtube.com/vi/" + vid_r18.id + "/maxresdefault.jpg", i0.ɵɵsanitizeUrl)("alt", vid_r18.title);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(vid_r18.title);
} }
function HomeComponent_div_273_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 275)(1, "button", 276);
    i0.ɵɵlistener("click", function HomeComponent_div_273_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.prevVideoPage(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 277);
    i0.ɵɵelement(3, "polyline", 224);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "button", 278);
    i0.ɵɵlistener("click", function HomeComponent_div_273_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.nextVideoPage(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 277);
    i0.ɵɵelement(6, "polyline", 130);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r5.videoPage === 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r5.videoPage >= ctx_r5.maxVideoPage);
} }
function HomeComponent_article_616_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 279)(1, "div", 280);
    i0.ɵɵelement(2, "img", 281);
    i0.ɵɵelementStart(3, "span", 282);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 283)(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 284)(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 285);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 286);
    i0.ɵɵtext(14, "\u2605\u2605\u2605\u2605\u2605");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const review_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", "assets/images/" + ctx_r6.reviewImages[i_r26].file, i0.ɵɵsanitizeUrl)("alt", ctx_r6.reviewImages[i_r26].tag);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.reviewImages[i_r26].tag);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("\"", review_r25.quote, "\"");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(review_r25.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(review_r25.source);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r6.reviewImages[i_r26].color);
} }
function HomeComponent_button_624_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 287);
    i0.ɵɵlistener("click", function HomeComponent_button_624_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r30); const i_r28 = restoredCtx.index; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.goToReview(i_r28); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r28 = ctx.index;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r7.activeReviewIndex === i_r28);
    i0.ɵɵattribute("aria-label", "Go to review " + (i_r28 + 1));
} }
function HomeComponent_div_647_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 288);
    i0.ɵɵlistener("click", function HomeComponent_div_647_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.closeVideo(); });
    i0.ɵɵelementStart(1, "div", 289);
    i0.ɵɵlistener("click", function HomeComponent_div_647_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(2, "button", 290);
    i0.ɵɵlistener("click", function HomeComponent_div_647_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r32); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.closeVideo(); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 291);
    i0.ɵɵelement(4, "line", 292)(5, "line", 293);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(6, "iframe", 294);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("src", ctx_r8.activeVideoUrl, i0.ɵɵsanitizeResourceUrl);
} }
const _c1 = function (a1) { return ["/live-events", a1]; };
export class HomeComponent {
    constructor(sanitizer, seo) {
        this.sanitizer = sanitizer;
        this.seo = seo;
        this.activePlanTab = 'things';
        this.activeReviewIndex = 0;
        this.activeVideoUrl = null;
        this.videoPage = 0;
        this.videosPerPage = 5;
        this.tickets = [
            { title: 'Daily Tickets', subtitle: 'Fast checkout for today, this weekend, or a planned family day.', label: 'Most direct' },
            { title: 'Current Deals', subtitle: 'Use this for your giveaway, discount, or seasonal campaign.', label: 'Limited time' },
            { title: 'Annual Pass', subtitle: 'Upsell guests from one visit to repeat revenue.', label: 'Best value' },
            { title: 'Birthday Parties', subtitle: 'Simple packages for parents who want less planning stress.', label: 'High converting' },
            { title: 'Group Events', subtitle: 'Schools, camps, churches, teams, and corporate outings.', label: 'Request info' }
        ];
        this.planTabs = [
            { id: 'things', title: 'Things To Do' },
            { id: 'map', title: 'Park Map' },
            { id: 'tour', title: 'Virtual Tour' },
            { id: 'location', title: 'Location' },
            { id: 'hours', title: 'Hours' },
            { id: 'faq', title: 'FAQ' },
            { id: 'waiver', title: 'Waiver' }
        ];
        this.activeAttractionTab = 'all';
        this.attractionTabs = [
            { id: 'all', label: 'All Attractions' },
            { id: 'base', label: 'Base Camp' },
            { id: 'mountain', label: 'Mountain Course' },
            { id: 'ropes', label: 'Ropes Course' },
        ];
        this.attractionCards = [
            { title: 'Ropes Course', image: 'assets/All-Attraction/Ropes-courses.jpg', category: 'ropes', link: '/attractions' },
            { title: 'Mountain Experience', image: 'assets/All-Attraction/Mountain-experience.jpg', category: 'mountain', link: '/attractions' },
            { title: 'Zip Line', image: 'assets/All-Attraction/Zip-lines.jpg', category: 'ropes', link: '/attractions' },
            { title: 'Tubing Slides', image: 'assets/All-Attraction/Tubing-slides.jpg', category: 'base', link: '/attractions' },
            { title: 'Blaster Zone', image: 'assets/All-Attraction/Blaster-zone.jpg', category: 'base', link: '/attractions' },
            { title: 'Bumper Cars', image: 'assets/All-Attraction/Bumper-cars.jpg', category: 'base', link: '/attractions' },
            { title: 'Free Fall Drop', image: 'assets/All-Attraction/Free-fall-drop.jpg', category: 'mountain', link: '/attractions' },
            { title: 'Jump Pad', image: 'assets/All-Attraction/Jump-pads.png', category: 'base', link: '/attractions' },
            { title: 'Adventure Nets', image: 'assets/All-Attraction/Adventure-nets.jpg', category: 'base', link: '/attractions' },
            { title: 'Exploration Playground', image: 'assets/All-Attraction/Exploration-play.jpg', category: 'base', link: '/attractions' },
        ];
        this.comparison = [
            { feature: 'Exploration Play Area', base: true, summit: true, extreme: true },
            { feature: 'Adventure Nets', base: true, summit: true, extreme: true },
            { feature: 'Ropes Course', base: false, summit: true, extreme: true },
            { feature: 'Climbing Adventure', base: false, summit: true, extreme: true },
            { feature: 'Tubing Slides', base: false, summit: true, extreme: true },
            { feature: 'Spin Zone Bumper Cars', base: false, summit: true, extreme: true },
            { feature: 'Via Ferrata', base: false, summit: false, extreme: true },
            { feature: 'Zip Line Experience', base: false, summit: false, extreme: true }
        ];
        this.reviews = [
            { name: 'Chelsea D.', source: 'Group Events', quote: 'This place is amazing, looks crazy big when you get inside.. the slide was great and all the kids had a blast..' },
            { name: 'Whitney C.', source: 'Mountain Experience', quote: 'This place is AWESOME!!! My Son loved the blaster, trampoline, bumper cars, game videos! Staff is great and friendly!' },
            { name: 'Kenzie B.', source: 'Via Ferrata', quote: "Bolder has become one of my daughter's favorite places to hang out. She enjoys the blue pass because it gives her unlimited activities." },
            { name: 'Jasmine R.', source: 'Birthday Parties', quote: 'The via ferrata was the highlight of my visit. Challenging, exciting, and safe. The views from above were unforgettable!' }
        ];
        this.reviewImages = [
            { file: 'Reviews-events.jpg', tag: 'Events', color: '#f45113' },
            { file: 'Reviews-mountain-experience.jpg', tag: 'Mountain Experience', color: '#4caf50' },
            { file: 'Reviews-via-ferrata.jpg', tag: 'Via Ferrata', color: '#119ee8' },
            { file: 'Reviews-birthday-parties.jpg', tag: 'Birthday Parties', color: '#ff8a00' },
        ];
        this.carouselImages = [
            'Carousel-1.jpg', 'Carousel-2.jpg', 'Carousel-3.jpg', 'Carousel-4.jpg',
            'Carousel-5.jpg', 'Carousel-10.jpg', 'Carousel-30.jpg',
        ];
        this.videos = [
            { id: 'h2UZdBha4X8', title: 'Longest Zip Line in the Park' },
            { id: '8A8uiUUt92E', title: 'Day at Bolder Adventure Park!' },
            { id: 'KPIuG6osxGU', title: 'New Attraction: The Bolder Bounce Pad' },
            { id: '4dz7RBSOl2Y', title: 'Parents — Summer Camp Your Kids Will Love' },
            { id: 'dbFyqjz_iPo', title: 'Epic Indoor Mountain Climbing Challenge' },
        ];
        // ── Events Carousel ──────────────────────────────
        this.carouselIndex = 0;
        this.carouselCountdownDays = 0;
        this.carouselCountdownHours = 0;
        this.carouselCountdownMinutes = 0;
        this.carouselCountdownSeconds = 0;
        this.carouselEvents = [
            {
                slug: 'mj-dejavu',
                carouselTitle: 'MJ', carouselAccent: 'Dejavu',
                date: 'June 28, 2026', location: 'Main Stage', ageRestriction: 'All Ages',
                image: 'assets/MJ Dejavu/0 - HERO IMAGE.png',
                description: 'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — rated the #1 MJ tribute.',
                targetDate: new Date('2026-06-28T19:00:00')
            },
            {
                slug: 'adult-night-july-2026',
                carouselTitle: 'Adult Night', carouselAccent: 'July 2026',
                date: 'July 3, 2026', location: 'Whole Park', ageRestriction: '18+',
                image: 'assets/images/Groups3.jpg',
                description: 'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome.',
                targetDate: new Date('2026-07-03T20:00:00')
            },
            {
                slug: 'adult-night-august-2026',
                carouselTitle: 'Adult Night', carouselAccent: 'August 2026',
                date: 'August 7, 2026', location: 'Whole Park', ageRestriction: '18+',
                image: 'assets/images/Thrills-in-the-air.jpg',
                description: 'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
                targetDate: new Date('2026-08-07T20:00:00')
            }
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Bolder Adventure Park',
            description: 'Bolder Adventure Park — 66,000 sq ft indoor adventure park in Grand Prairie, TX. Ropes course, zip lines, climbing, birthday parties & group events.',
            path: '/',
            keywords: 'indoor adventure park, Grand Prairie TX, ropes course, zip lines, rock climbing, birthday parties, family fun'
        });
        this.startCarouselCountdown();
        this.startCarouselAutoPlay();
    }
    get filteredAttractions() {
        if (this.activeAttractionTab === 'all')
            return this.attractionCards;
        return this.attractionCards.filter(c => c.category === this.activeAttractionTab);
    }
    setAttractionTab(id) {
        this.activeAttractionTab = id;
    }
    trackByAttraction(_, item) {
        return this.activeAttractionTab + '_' + item.title;
    }
    get visibleVideos() {
        const start = this.videoPage * this.videosPerPage;
        return this.videos.slice(start, start + this.videosPerPage);
    }
    get maxVideoPage() {
        return Math.ceil(this.videos.length / this.videosPerPage) - 1;
    }
    prevVideoPage() { if (this.videoPage > 0)
        this.videoPage--; }
    nextVideoPage() { if (this.videoPage < this.maxVideoPage)
        this.videoPage++; }
    openVideo(id) {
        this.activeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`);
    }
    closeVideo() { this.activeVideoUrl = null; }
    shareVideo(id, event) {
        event.stopPropagation();
        const url = `https://www.youtube.com/shorts/${id}`;
        if (navigator.share) {
            navigator.share({ url });
        }
        else {
            navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!'));
        }
    }
    setPlanTab(id) { this.activePlanTab = id; }
    nextReview() { this.activeReviewIndex = (this.activeReviewIndex + 1) % this.reviews.length; }
    prevReview() { this.activeReviewIndex = (this.activeReviewIndex - 1 + this.reviews.length) % this.reviews.length; }
    goToReview(index) { this.activeReviewIndex = index; }
    ngAfterViewInit() {
        var _a;
        const vid = (_a = this.heroVideoRef) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (vid) {
            vid.muted = true;
            vid.play().catch(() => { });
        }
    }
    padNum(n) { return n < 10 ? '0' + n : '' + n; }
    prevCarousel() {
        this.carouselIndex = (this.carouselIndex - 1 + this.carouselEvents.length) % this.carouselEvents.length;
        this.startCarouselCountdown();
        this.resetCarouselAutoPlay();
    }
    nextCarousel() {
        this.carouselIndex = (this.carouselIndex + 1) % this.carouselEvents.length;
        this.startCarouselCountdown();
        this.resetCarouselAutoPlay();
    }
    goToCarousel(i) {
        this.carouselIndex = i;
        this.startCarouselCountdown();
        this.resetCarouselAutoPlay();
    }
    startCarouselAutoPlay() {
        this.carouselAutoPlayTimer = setInterval(() => {
            this.carouselIndex = (this.carouselIndex + 1) % this.carouselEvents.length;
            this.startCarouselCountdown();
        }, 5000);
    }
    resetCarouselAutoPlay() {
        if (this.carouselAutoPlayTimer)
            clearInterval(this.carouselAutoPlayTimer);
        this.startCarouselAutoPlay();
    }
    startCarouselCountdown() {
        if (this.carouselCountdownTimer)
            clearInterval(this.carouselCountdownTimer);
        const update = () => {
            const diff = this.carouselEvents[this.carouselIndex].targetDate.getTime() - Date.now();
            if (diff <= 0) {
                this.carouselCountdownDays = this.carouselCountdownHours = this.carouselCountdownMinutes = this.carouselCountdownSeconds = 0;
                return;
            }
            this.carouselCountdownDays = Math.floor(diff / 86400000);
            this.carouselCountdownHours = Math.floor((diff % 86400000) / 3600000);
            this.carouselCountdownMinutes = Math.floor((diff % 3600000) / 60000);
            this.carouselCountdownSeconds = Math.floor((diff % 60000) / 1000);
        };
        update();
        this.carouselCountdownTimer = setInterval(update, 1000);
    }
    ngOnDestroy() {
        if (this.carouselCountdownTimer)
            clearInterval(this.carouselCountdownTimer);
        if (this.carouselAutoPlayTimer)
            clearInterval(this.carouselAutoPlayTimer);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.SeoService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.heroVideoRef = _t.first);
    } }, decls: 648, vars: 28, consts: [["id", "home", 1, "hero"], [1, "hero-video-wrapper"], ["src", "assets/videos/Bolder-video.webm", "poster", "assets/After-hero-section/Attractions - A view from Mezz 1.jpg", "autoplay", "", "muted", "", "loop", "", "playsinline", "", "preload", "none", 1, "hero-video"], ["heroVideo", ""], [1, "hero-overlay"], ["aria-hidden", "true", 1, "hero-deco"], [1, "hero-content"], [1, "hero-eyebrow", "reveal"], [1, "hero-eyebrow-dot"], [1, "hero-eyebrow-sep"], [1, "reveal", "delay-1"], [1, "hero-t1"], [1, "hero-t2"], [1, "hero-sub", "reveal", "delay-2"], [1, "hero-actions", "reveal", "delay-3"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg", "hero-btn-primary"], ["routerLink", "/attractions", 1, "btn", "btn-outline", "btn-lg"], [1, "hero-proof", "reveal", "delay-4"], [1, "hproof-item"], [1, "hproof-check"], [1, "hproof-sep"], ["aria-hidden", "true", 1, "hero-scroll-hint", "reveal", "delay-4"], [1, "hero-scroll-mouse"], [1, "hero-scroll-wheel-inner"], [1, "hero-scroll-label"], ["id", "about", 1, "about-stats"], [1, "about-stats-grid"], [1, "as-cell", "as-cell--tl", "sr", "sr-left"], [1, "as-number"], [1, "as-label"], [1, "as-photo"], ["src", "assets/After-hero-section/Attractions - A view from Mezz 1.jpg", "alt", "18+ attractions", "loading", "lazy", "decoding", "async", "width", "600", "height", "400"], [1, "as-cell", "as-cell--center", "sr", "sr-up"], [1, "as-tagline"], [1, "as-cell", "as-cell--tr", "sr", "sr-right"], ["src", "assets/After-hero-section/DSC08395.jpg", "alt", "100% all out fun", "loading", "lazy", "decoding", "async", "width", "600", "height", "400"], ["data-sr-delay", "0.15s", 1, "as-cell", "as-cell--bl", "sr", "sr-left"], [1, "as-number", "as-number--lg"], ["src", "assets/After-hero-section/Dome photos-03988-2.jpg", "alt", "66,000 sq ft dome", "loading", "lazy", "decoding", "async", "width", "600", "height", "400"], ["data-sr-delay", "0.15s", 1, "as-cell", "as-cell--br", "sr", "sr-right"], [1, "home-events-section"], [1, "home-events-header"], [1, "home-events-kicker"], ["width", "13", "height", "13", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "6px"], ["d", "M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z"], [1, "home-events-title"], [1, "accent-orange"], ["routerLink", "/live-events", 1, "home-events-viewall"], [1, "le-container"], [1, "le-carousel-card", "sr", "sr-up"], [1, "le-car-image-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "le-car-img-overlay"], [1, "le-car-next-badge"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"], ["aria-label", "Previous event", 1, "le-car-arrow", "le-car-prev", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M15 18l-6-6 6-6"], ["aria-label", "Next event", 1, "le-car-arrow", "le-car-next", 3, "click"], ["d", "M9 18l6-6-6-6"], [1, "le-car-copy"], [1, "le-car-title"], [1, "le-car-meta"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], [1, "le-car-sep"], ["d", "M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z"], ["cx", "12", "cy", "9", "r", "2.4"], [1, "le-car-desc"], [1, "le-car-countdown"], [1, "le-car-cd-box"], [1, "le-car-cd-num"], [1, "le-car-cd-label"], [1, "le-car-actions"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true"], [1, "le-car-detail-link", 3, "routerLink"], [1, "le-car-dots"], ["class", "le-car-dot", 3, "is-active", "click", 4, "ngFor", "ngForOf"], ["id", "experiences", 1, "section", "experiences"], [1, "section-title", "sr", "sr-up"], ["data-sr-delay", "0.1s", 1, "attraction-tabs", "sr", "sr-up"], ["class", "attraction-tab", "type", "button", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "attraction-grid"], ["class", "attraction-card", 3, "routerLink", "animation-delay", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "attractions", 1, "plan-your-visit"], [1, "pyv-header", "sr", "sr-up"], [1, "pyv-heading"], [1, "pyv-kicker"], [1, "pyv-accent-line"], [1, "pyv-intro"], [1, "pyv-tag"], ["routerLink", "/plan-your-visit", 1, "pyv-scroll-hint"], [1, "attraction-stack"], [1, "ac-slide"], [1, "ac-section", "ac--navy"], [1, "ac-content"], [1, "ac-num"], ["viewBox", "0 0 52 52", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "ac-icon"], ["x", "4", "y", "4", "width", "44", "height", "44", "rx", "10", "stroke", "rgba(255,255,255,0.6)", "stroke-width", "3"], [1, "ac-name"], [1, "ac-desc"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "ac-cta"], [1, "ac-image"], ["src", "assets/carousel-images/Carousel-4.jpg", "alt", "Base Camp", "loading", "lazy"], [1, "ac-section", "ac--gold"], ["src", "assets/carousel-images/Carousel-6.jpg", "alt", "Summit", "loading", "lazy"], ["points", "26,3 49,26 26,49 3,26", "stroke", "rgba(0,0,0,0.45)", "stroke-width", "3", "fill", "rgba(0,0,0,0.08)"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "ac-cta", "ac-cta--dark"], [1, "ac-section", "ac--violet"], ["viewBox", "0 0 106 52", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "ac-icon", "ac-icon--wide"], ["points", "26,3 49,26 26,49 3,26", "fill", "rgba(255,255,255,0.28)"], ["points", "80,3 103,26 80,49 57,26", "fill", "rgba(255,255,255,0.28)"], ["src", "assets/carousel-images/Carousel-8.jpg", "alt", "Extreme All Access", "loading", "lazy"], [1, "comparison"], [1, "video-reel-wrap", "sr", "sr-up"], [1, "vr-shelf-header"], [1, "vr-shelf-left"], [1, "vr-yt-logo-wrap"], ["viewBox", "0 0 32 22", "width", "38", "height", "26", "aria-hidden", "true"], ["width", "32", "height", "22", "rx", "5", "fill", "#FF0000"], ["points", "13,6 13,16 22,11", "fill", "#fff"], [1, "vr-yt-wordmark"], [1, "vr-shelf-text"], [1, "vr-shelf-kicker"], [1, "vr-shelf-heading"], ["href", "https://www.youtube.com/@bolderadventurepark", "target", "_blank", "rel", "noopener", 1, "vr-see-all"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "width", "15", "height", "15", "aria-hidden", "true"], ["points", "9 6 15 12 9 18"], [1, "video-reel-grid"], ["class", "video-reel-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "video-reel-nav", 4, "ngIf"], [1, "compare-table-wrap", "sr", "sr-up"], [1, "ct-logo-card"], ["src", "assets/images/bolder-logo-white-text.png", "alt", "Bolder Adventure Park", 1, "ct-logo-img"], [1, "ct-kicker"], [1, "ct-title"], [1, "ct-header"], [1, "ct-h-cell"], [1, "ct-attr-label"], [1, "ct-h-cell", "tier-base"], [1, "ct-h-label"], [1, "ct-h-sub"], [1, "ct-h-badge"], [1, "ct-h-cell", "tier-summit"], [1, "ct-h-cell", "tier-extreme"], [1, "ct-section-tag"], [1, "ct-row"], [1, "ct-cell"], [1, "ct-note"], [1, "ic-yes", "base"], [1, "ic-yes", "summit"], [1, "ic-yes", "extreme"], [1, "ic-no"], [1, "ic-special"], [1, "ct-footer"], [1, "ct-footer-cell"], [1, "ct-footer-cell", "fb"], [1, "ct-footer-cell", "fs"], [1, "ct-footer-cell", "fe"], ["id", "parties", 1, "parties"], [1, "parties-heading", "sr", "sr-up"], [1, "parties-heading-line"], [1, "parties-block"], [1, "parties-collage"], [1, "pc-tall", "sr", "sr-left"], ["src", "assets/images/Birthday-parties.jpg", "alt", "Birthday celebrations", "loading", "lazy"], [1, "pc-right"], ["data-sr-delay", "0.10s", 1, "pc-wide", "sr", "sr-up"], ["src", "assets/images/Parties1.png", "alt", "Ropes course adventure", "loading", "lazy"], [1, "pc-duo"], ["data-sr-delay", "0.20s", 1, "pc-duo-item", "sr", "sr-up"], ["src", "assets/images/Parties2.png", "alt", "Parties", "loading", "lazy"], ["data-sr-delay", "0.30s", 1, "pc-duo-item", "sr", "sr-up"], ["src", "assets/images/Parties3.jpg", "alt", "Parties", "loading", "lazy"], [1, "parties-copy", "sr", "sr-right"], [1, "parties-badge"], ["routerLink", "/birthday-parties", 1, "parties-cta"], ["data-sr-delay", "0.05s", 1, "parties-copy", "sr", "sr-left"], [1, "parties-badge", "parties-badge--blue"], ["routerLink", "/group-events", 1, "parties-cta"], ["data-sr-delay", "0.05s", 1, "pc-tall", "sr", "sr-right"], ["src", "assets/images/Group-events.jpg", "alt", "Group events", "loading", "lazy"], ["data-sr-delay", "0.15s", 1, "pc-wide", "sr", "sr-up"], ["src", "assets/images/Groups1.jpg", "alt", "Summit activities", "loading", "lazy"], ["data-sr-delay", "0.25s", 1, "pc-duo-item", "sr", "sr-up"], ["src", "assets/images/Groups2.jpg", "alt", "Extreme all access", "loading", "lazy"], ["data-sr-delay", "0.35s", 1, "pc-duo-item", "sr", "sr-up"], ["src", "assets/images/Groups3.jpg", "alt", "Group adventure", "loading", "lazy"], [1, "annual-pass"], [1, "annual-card"], [1, "annual-card-left", "sr", "sr-left"], [1, "annual-badge"], [1, "annual-heading"], [1, "annual-desc"], [1, "annual-actions"], ["routerLink", "/memberships", 1, "annual-btn-dark"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "annual-btn-outline"], ["data-sr-delay", "0.15s", 1, "annual-photo-grid", "sr", "sr-right"], [1, "annual-photo"], ["src", "assets/carousel-images/Carousel-3.jpg", "alt", "Ropes course", "loading", "lazy"], ["src", "assets/carousel-images/Carousel-5.jpg", "alt", "Adventure activity", "loading", "lazy"], ["src", "assets/carousel-images/Carousel-7.jpg", "alt", "Zip line", "loading", "lazy"], [1, "annual-photo", "ap-offset"], ["src", "assets/carousel-images/Carousel-9.jpg", "alt", "Balance walk", "loading", "lazy"], [1, "annual-photo", "ap-pull"], ["src", "assets/carousel-images/Carousel-11.jpg", "alt", "Tubing slides", "loading", "lazy"], ["src", "assets/carousel-images/Carousel-13.jpg", "alt", "Blaster arena", "loading", "lazy"], ["id", "park-map", 1, "section", "parkmap-section"], [1, "parkmap-wrapper", "sr", "sr-scale"], [1, "parkmap-glow"], ["href", "https://bolderadventurepark.com/park-maps/", "target", "_blank", "rel", "noopener", 1, "parkmap-link"], ["src", "assets/images/Parkmap.png", "alt", "Bolder Adventure Park Map", 1, "parkmap-img"], [1, "parkmap-badge"], ["speed", "slow"], [1, "section", "reviews"], ["data-sr-delay", "0.1s", 1, "review-carousel", "sr", "sr-up"], [1, "review-track-wrap"], [1, "review-track"], ["class", "review-card", 4, "ngFor", "ngForOf"], ["aria-label", "Previous review", "type", "button", 1, "review-arrow", "review-arrow--prev", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["points", "15 18 9 12 15 6"], ["aria-label", "Next review", "type", "button", 1, "review-arrow", "review-arrow--next", 3, "click"], ["points", "9 18 15 12 9 6"], [1, "review-dots"], ["class", "review-dot", "type", "button", 3, "is-active", "click", 4, "ngFor", "ngForOf"], ["id", "visit", 1, "visit"], [1, "map-shell", "sr", "sr-left"], ["title", "Bolder Adventure Park Location", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", "src", "https://www.google.com/maps?q=2324%20W%20Warrior%20Trail%2C%20Grand%20Prairie%2C%20TX&output=embed", 1, "map-frame"], [1, "map-glow"], [1, "map-pin"], ["data-sr-delay", "0.15s", 1, "visit-card", "sr", "sr-right"], ["src", "assets/images/bolder-logo-white-text.png", "alt", "Bolder at EpicCentral logo", 1, "visit-logo-img"], [1, "visit-kicker"], [1, "visit-actions"], ["href", "https://www.google.com/maps/search/?api=1&query=2324%20W%20Warrior%20Trail%2C%20Grand%20Prairie%2C%20TX", "target", "_blank", "rel", "noopener", 1, "btn", "btn-outline"], ["routerLink", "/plan-your-visit", 1, "btn", "btn-orange"], ["class", "video-modal", 3, "click", 4, "ngIf"], [1, "le-car-dot", 3, "click"], ["type", "button", 1, "attraction-tab", 3, "click"], [1, "attraction-card", 3, "routerLink"], [1, "attraction-card-content"], [1, "attraction-card-title"], ["aria-hidden", "true", 1, "attraction-card-arrow"], ["viewBox", "0 0 24 24", "width", "14", "height", "14", "fill", "none", "stroke", "currentColor", "stroke-width", "2.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["x1", "7", "y1", "17", "x2", "17", "y2", "7"], ["points", "7 7 17 7 17 17"], [1, "video-reel-card", 3, "click"], ["loading", "lazy", 1, "video-reel-thumb", 3, "src", "alt"], [1, "vr-top-grad"], [1, "vr-card-top"], [1, "vr-avatar"], ["src", "assets/images/bolder-logo.png", "alt", "Bolder Adventure Park"], [1, "vr-top-text"], [1, "vr-channel-name"], [1, "vr-card-title"], [1, "video-reel-play"], ["viewBox", "0 0 68 48", "width", "56", "height", "40", "aria-hidden", "true"], ["d", "M66.52 7.74C65.7 4.72 63.28 2.3 60.27 1.49 55.01.05 34 0 34 0S12.99.05 7.73 1.49C4.72 2.3 2.3 4.72 1.48 7.74.05 13.01 0 24 0 24s.05 10.99 1.48 16.26C2.3 43.28 4.72 45.7 7.73 46.51 12.99 47.95 34 48 34 48s21.01-.05 26.27-1.49C63.28 45.7 65.7 43.28 66.52 40.26 67.95 35 68 24 68 24s-.05-10.99-1.48-16.26z", "fill", "#ff0000"], ["d", "M27 34 45 24 27 14z", "fill", "#fff"], [1, "vr-bottom-grad"], [1, "vr-card-bottom"], ["aria-label", "Share", 1, "vr-share-btn", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18", "aria-hidden", "true"], ["cx", "18", "cy", "5", "r", "3"], ["cx", "6", "cy", "12", "r", "3"], ["cx", "18", "cy", "19", "r", "3"], ["x1", "8.59", "y1", "13.51", "x2", "15.42", "y2", "17.49"], ["x1", "15.41", "y1", "6.51", "x2", "8.59", "y2", "10.49"], [1, "vr-shorts-badge"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "12", "height", "12", "aria-hidden", "true"], ["d", "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"], [1, "video-reel-nav"], ["aria-label", "Previous videos", 1, "vrn-arrow", 3, "disabled", "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.8", "width", "22", "height", "22", "aria-hidden", "true"], ["aria-label", "Next videos", 1, "vrn-arrow", 3, "disabled", "click"], [1, "review-card"], [1, "review-image-wrap"], [1, "review-img", 3, "src", "alt"], [1, "review-tag"], [1, "review-body"], [1, "review-meta"], [1, "review-time"], [1, "review-stars"], ["type", "button", 1, "review-dot", 3, "click"], [1, "video-modal", 3, "click"], [1, "video-modal-box", 3, "click"], ["aria-label", "Close video", 1, "video-modal-close", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.8", "width", "18", "height", "18", "aria-hidden", "true"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["title", "Bolder Adventure Park Video", "frameborder", "0", "allow", "autoplay; encrypted-media; fullscreen", "allowfullscreen", "", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "main")(1, "section", 0)(2, "div", 1);
        i0.ɵɵelement(3, "video", 2, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4)(6, "div", 5);
        i0.ɵɵelementStart(7, "div", 6)(8, "div", 7);
        i0.ɵɵelement(9, "span", 8);
        i0.ɵɵtext(10, " Indoor Adventure Park ");
        i0.ɵɵelementStart(11, "span", 9);
        i0.ɵɵtext(12, "\u2022");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(13, " Grand Prairie, TX ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "h1", 10)(15, "span", 11);
        i0.ɵɵtext(16, "Adventure");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "span", 12);
        i0.ɵɵtext(18, "Awaits");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "p", 13);
        i0.ɵɵtext(20, " North Texas' premier 66,000 sq\u00A0ft indoor thrill zone \u2014 built for the bold. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 14)(22, "a", 15);
        i0.ɵɵtext(23, "Get Tickets \u2197");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "a", 16);
        i0.ɵɵtext(25, "Explore Attractions");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(26, "div", 17)(27, "span", 18)(28, "span", 19);
        i0.ɵɵtext(29, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(30, "Best for families");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "span", 20);
        i0.ɵɵelementStart(32, "span", 18)(33, "span", 19);
        i0.ɵɵtext(34, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(35, "Birthday packages");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(36, "span", 20);
        i0.ɵɵelementStart(37, "span", 18)(38, "span", 19);
        i0.ɵɵtext(39, "\u2713");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(40, "Group events");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(41, "div", 21)(42, "div", 22);
        i0.ɵɵelement(43, "span", 23);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "span", 24);
        i0.ɵɵtext(45, "Scroll");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(46, "section", 25)(47, "div", 26)(48, "div", 27)(49, "div", 28);
        i0.ɵɵtext(50, "18");
        i0.ɵɵelementStart(51, "sup");
        i0.ɵɵtext(52, "+");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(53, "div", 29);
        i0.ɵɵtext(54, "Attractions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "div", 30);
        i0.ɵɵelement(56, "img", 31);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(57, "div", 32)(58, "p", 33);
        i0.ɵɵtext(59, " Experience year-round fun at the Bolder Adventure Park \u2014 a ");
        i0.ɵɵelementStart(60, "strong");
        i0.ɵɵtext(61, "66,000 sq\u00A0ft");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(62, " indoor family entertainment center. One of the most unique family days out in North Texas, there's fun for kids of all ages\u2026 and big kids too! ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(63, "div", 34)(64, "div", 28);
        i0.ɵɵtext(65, "100");
        i0.ɵɵelementStart(66, "sup");
        i0.ɵɵtext(67, "%");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(68, "div", 29);
        i0.ɵɵtext(69, "All Out Fun");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "div", 30);
        i0.ɵɵelement(71, "img", 35);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(72, "div", 36)(73, "div", 37);
        i0.ɵɵtext(74, "66,000");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(75, "div", 29);
        i0.ɵɵtext(76, "Square Foot Dome");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(77, "div", 30);
        i0.ɵɵelement(78, "img", 38);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(79, "div", 39)(80, "div", 28);
        i0.ɵɵtext(81, "5");
        i0.ɵɵelementStart(82, "sup");
        i0.ɵɵtext(83, "\u2605");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(84, "div", 29);
        i0.ɵɵtext(85, "Party Venue");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(86, "section", 40)(87, "div", 41)(88, "p", 42);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(89, "svg", 43);
        i0.ɵɵelement(90, "path", 44);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(91, " Live & Special Events ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(92, "h2", 45);
        i0.ɵɵtext(93, "What's On ");
        i0.ɵɵelementStart(94, "span", 46);
        i0.ɵɵtext(95, "At Bolder");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(96, "a", 47);
        i0.ɵɵtext(97, "View All Events \u2192");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(98, "div", 48)(99, "div", 49)(100, "div", 50);
        i0.ɵɵelement(101, "img", 51)(102, "div", 52);
        i0.ɵɵelementStart(103, "span", 53);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(104, "svg", 54);
        i0.ɵɵelement(105, "path", 55);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(106);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(107, "button", 56);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_107_listener() { return ctx.prevCarousel(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(108, "svg", 57);
        i0.ɵɵelement(109, "path", 58);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(110, "button", 59);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_110_listener() { return ctx.nextCarousel(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(111, "svg", 57);
        i0.ɵɵelement(112, "path", 60);
        i0.ɵɵelementEnd()()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(113, "div", 61)(114, "h2", 62);
        i0.ɵɵtext(115);
        i0.ɵɵelement(116, "br");
        i0.ɵɵelementStart(117, "span", 46);
        i0.ɵɵtext(118);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(119, "div", 63)(120, "span");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(121, "svg", 64);
        i0.ɵɵelement(122, "rect", 65)(123, "path", 66);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(124);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(125, "span", 67);
        i0.ɵɵtext(126, "\u00B7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "span");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(128, "svg", 64);
        i0.ɵɵelement(129, "path", 68)(130, "circle", 69);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(131);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(132, "span", 67);
        i0.ɵɵtext(133, "\u00B7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(134, "span");
        i0.ɵɵtext(135);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(136, "p", 70);
        i0.ɵɵtext(137);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(138, "div", 71)(139, "div", 72)(140, "span", 73);
        i0.ɵɵtext(141);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(142, "span", 74);
        i0.ɵɵtext(143, "Days");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(144, "div", 72)(145, "span", 73);
        i0.ɵɵtext(146);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(147, "span", 74);
        i0.ɵɵtext(148, "Hrs");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(149, "div", 72)(150, "span", 73);
        i0.ɵɵtext(151);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(152, "span", 74);
        i0.ɵɵtext(153, "Min");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(154, "div", 72)(155, "span", 73);
        i0.ɵɵtext(156);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(157, "span", 74);
        i0.ɵɵtext(158, "Sec");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(159, "div", 75)(160, "a", 76);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(161, "svg", 77);
        i0.ɵɵelement(162, "path", 44);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(163, " Get Tickets ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(164, "a", 78);
        i0.ɵɵtext(165, "View Event Details \u2192");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(166, "div", 79);
        i0.ɵɵtemplate(167, HomeComponent_button_167_Template, 1, 3, "button", 80);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(168, "section", 81)(169, "div", 82)(170, "p");
        i0.ɵɵtext(171, "Daily Experiences");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(172, "h2");
        i0.ɵɵtext(173, "Big adventure, easy decision");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(174, "div", 83);
        i0.ɵɵtemplate(175, HomeComponent_button_175_Template, 2, 3, "button", 84);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(176, "div", 85);
        i0.ɵɵtemplate(177, HomeComponent_a_177_Template, 9, 6, "a", 86);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(178, "section", 87)(179, "div", 88)(180, "div", 89)(181, "span", 90);
        i0.ɵɵtext(182, "Choose Your Pass");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(183, "h2");
        i0.ɵɵtext(184, "Plan Your");
        i0.ɵɵelement(185, "br");
        i0.ɵɵtext(186, "Visit");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(187, "div", 91);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(188, "div", 92)(189, "p");
        i0.ɵɵtext(190, "The park is split by ground level and aerial activities \u2014 our ticket options are simple to understand.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(191, "p");
        i0.ɵɵtext(192, "The Jump Pad, Adventure Nets and Exploration Playground are perfect for smaller kids. More daring ones can also ride the Tubing Slides, Bumper Cars and fight it out in the Blaster Zone \u2014 all available with a ");
        i0.ɵɵelementStart(193, "span", 93);
        i0.ɵɵtext(194, "Base Camp Pass");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(195, ".");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(196, "p");
        i0.ɵɵtext(197, "For bigger thrills, there are two ways to explore Bolder Adventure Mountain: the Ropes Course, including Zip Lines, and the Mountain Course featuring an exhilarating ");
        i0.ɵɵelementStart(198, "span", 93);
        i0.ɵɵtext(199, "Free Fall Drop!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(200, "a", 94);
        i0.ɵɵtext(201, "Explore all pass options \u2197");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(202, "div", 95)(203, "div", 96)(204, "div", 97)(205, "div", 98)(206, "span", 99);
        i0.ɵɵtext(207, "01 \u00A0/\u00A0 Base");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(208, "svg", 100);
        i0.ɵɵelement(209, "rect", 101);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(210, "h3", 102);
        i0.ɵɵtext(211, "Base Camp");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(212, "p", 103);
        i0.ɵɵtext(213, "Action is on the ground \u2014 Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(214, "a", 104);
        i0.ɵɵtext(215, "Get Your Pass \u2197");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(216, "div", 105);
        i0.ɵɵelement(217, "img", 106);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(218, "div", 96)(219, "div", 107)(220, "div", 105);
        i0.ɵɵelement(221, "img", 108);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(222, "div", 98)(223, "span", 99);
        i0.ɵɵtext(224, "02 \u00A0/\u00A0 Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(225, "svg", 100);
        i0.ɵɵelement(226, "polygon", 109);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(227, "h3", 102);
        i0.ɵɵtext(228, "Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(229, "p", 103);
        i0.ɵɵtext(230, "All Base Camp activities, plus your choice of a Ropes Course ");
        i0.ɵɵelementStart(231, "em");
        i0.ɵɵtext(232, "or");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(233, " a Mountain Experience session. The adventure levels up.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(234, "a", 110);
        i0.ɵɵtext(235, "Get Your Pass \u2197");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(236, "div", 96)(237, "div", 111)(238, "div", 98)(239, "span", 99);
        i0.ɵɵtext(240, "03 \u00A0/\u00A0 Extreme");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(241, "svg", 112);
        i0.ɵɵelement(242, "polygon", 113)(243, "polygon", 114);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(244, "h3", 102);
        i0.ɵɵtext(245, "Extreme All\u00A0Access");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(246, "p", 103);
        i0.ɵɵtext(247, "Unlimited access to the entire venue \u2014 every Rope, every Mountain course, every ground activity. This is the complete Bolder experience.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(248, "a", 104);
        i0.ɵɵtext(249, "Get Your Pass \u2197");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(250, "div", 105);
        i0.ɵɵelement(251, "img", 115);
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(252, "section", 116)(253, "div", 117)(254, "div", 118)(255, "div", 119)(256, "div", 120);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(257, "svg", 121);
        i0.ɵɵelement(258, "rect", 122)(259, "polygon", 123);
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(260, "span", 124);
        i0.ɵɵtext(261, "YouTube");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(262, "div", 125)(263, "span", 126);
        i0.ɵɵtext(264, "Watch On YouTube");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(265, "h2", 127);
        i0.ɵɵtext(266, "Watch The Adventure");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(267, "a", 128);
        i0.ɵɵtext(268, " See all ");
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(269, "svg", 129);
        i0.ɵɵelement(270, "polyline", 130);
        i0.ɵɵelementEnd()()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(271, "div", 131);
        i0.ɵɵtemplate(272, HomeComponent_div_272_Template, 28, 3, "div", 132);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(273, HomeComponent_div_273_Template, 7, 2, "div", 133);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(274, "div", 134)(275, "div", 135);
        i0.ɵɵelement(276, "img", 136);
        i0.ɵɵelementStart(277, "span", 137);
        i0.ɵɵtext(278, "Ticket Options");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(279, "div", 138);
        i0.ɵɵtext(280, "Choose Your Adventure Level");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(281, "div", 139)(282, "div", 140)(283, "span", 141);
        i0.ɵɵtext(284, "Attraction");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(285, "div", 142)(286, "span", 143);
        i0.ɵɵtext(287, "Base Camp");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(288, "span", 144);
        i0.ɵɵtext(289, "Action on the Ground");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(290, "span", 145);
        i0.ɵɵtext(291, "Included");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(292, "div", 146)(293, "span", 143);
        i0.ɵɵtext(294, "Summit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(295, "span", 144);
        i0.ɵɵtext(296, "Ropes Course + Zip Lines");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(297, "span", 145);
        i0.ɵɵtext(298, "Popular");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(299, "div", 147)(300, "span", 143);
        i0.ɵɵtext(301, "Extreme");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(302, "span", 144);
        i0.ɵɵtext(303, "All Access");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(304, "span", 145);
        i0.ɵɵtext(305, "Ultimate");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(306, "div", 148)(307, "span");
        i0.ɵɵtext(308, "Ground Level");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(309, "div", 149)(310, "div", 150);
        i0.ɵɵtext(311, "Jump Pad ");
        i0.ɵɵelementStart(312, "span", 151);
        i0.ɵɵtext(313, "(Socks Additional)");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(314, "div", 150)(315, "span", 152);
        i0.ɵɵtext(316, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(317, "div", 150)(318, "span", 153);
        i0.ɵɵtext(319, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(320, "div", 150)(321, "span", 154);
        i0.ɵɵtext(322, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(323, "div", 149)(324, "div", 150);
        i0.ɵɵtext(325, "Adventure Nets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(326, "div", 150)(327, "span", 152);
        i0.ɵɵtext(328, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(329, "div", 150)(330, "span", 153);
        i0.ɵɵtext(331, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(332, "div", 150)(333, "span", 154);
        i0.ɵɵtext(334, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(335, "div", 149)(336, "div", 150);
        i0.ɵɵtext(337, "Exploration Play (Playground)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(338, "div", 150)(339, "span", 152);
        i0.ɵɵtext(340, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(341, "div", 150)(342, "span", 153);
        i0.ɵɵtext(343, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(344, "div", 150)(345, "span", 154);
        i0.ɵɵtext(346, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(347, "div", 149)(348, "div", 150);
        i0.ɵɵtext(349, "Tubing Slides (Speed Shot)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(350, "div", 150)(351, "span", 152);
        i0.ɵɵtext(352, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(353, "div", 150)(354, "span", 153);
        i0.ɵɵtext(355, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(356, "div", 150)(357, "span", 154);
        i0.ɵɵtext(358, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(359, "div", 149)(360, "div", 150);
        i0.ɵɵtext(361, "Tubing Slides (Rolling Hills)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(362, "div", 150)(363, "span", 152);
        i0.ɵɵtext(364, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(365, "div", 150)(366, "span", 153);
        i0.ɵɵtext(367, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(368, "div", 150)(369, "span", 154);
        i0.ɵɵtext(370, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(371, "div", 149)(372, "div", 150);
        i0.ɵɵtext(373, "Blaster Zone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(374, "div", 150)(375, "span", 152);
        i0.ɵɵtext(376, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(377, "div", 150)(378, "span", 153);
        i0.ɵɵtext(379, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(380, "div", 150)(381, "span", 154);
        i0.ɵɵtext(382, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(383, "div", 149)(384, "div", 150);
        i0.ɵɵtext(385, "Bumper Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(386, "div", 150)(387, "span", 152);
        i0.ɵɵtext(388, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(389, "div", 150)(390, "span", 153);
        i0.ɵɵtext(391, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(392, "div", 150)(393, "span", 154);
        i0.ɵɵtext(394, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(395, "div", 148)(396, "span");
        i0.ɵɵtext(397, "Summit Level");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(398, "div", 149)(399, "div", 150);
        i0.ɵɵtext(400, "Ropes Course (4 Levels)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(401, "div", 150)(402, "span", 155);
        i0.ɵɵtext(403, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(404, "div", 150)(405, "span", 153);
        i0.ɵɵtext(406, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(407, "div", 150)(408, "span", 154);
        i0.ɵɵtext(409, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(410, "div", 149)(411, "div", 150);
        i0.ɵɵtext(412, "Rock Climbing");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(413, "div", 150)(414, "span", 155);
        i0.ɵɵtext(415, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(416, "div", 150)(417, "span", 153);
        i0.ɵɵtext(418, "\u2713");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(419, "div", 150)(420, "span", 154);
        i0.ɵɵtext(421, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(422, "div", 148)(423, "span");
        i0.ɵɵtext(424, "Extreme Only");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(425, "div", 149)(426, "div", 150);
        i0.ɵɵtext(427, "Mountain Experience (2 Trails)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(428, "div", 150)(429, "span", 155);
        i0.ɵɵtext(430, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(431, "div", 150)(432, "span", 155);
        i0.ɵɵtext(433, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(434, "div", 150)(435, "span", 154);
        i0.ɵɵtext(436, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(437, "div", 149)(438, "div", 150);
        i0.ɵɵtext(439, "Free Fall (Trap Door)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(440, "div", 150)(441, "span", 155);
        i0.ɵɵtext(442, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(443, "div", 150)(444, "span", 155);
        i0.ɵɵtext(445, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(446, "div", 150)(447, "span", 154);
        i0.ɵɵtext(448, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(449, "div", 149)(450, "div", 150);
        i0.ɵɵtext(451, "Free Fall (Top of the Arch)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(452, "div", 150)(453, "span", 155);
        i0.ɵɵtext(454, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(455, "div", 150)(456, "span", 155);
        i0.ɵɵtext(457, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(458, "div", 150)(459, "span", 154);
        i0.ɵɵtext(460, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(461, "div", 149)(462, "div", 150);
        i0.ɵɵtext(463, "Archery");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(464, "div", 150)(465, "span", 155);
        i0.ɵɵtext(466, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(467, "div", 150)(468, "span", 155);
        i0.ɵɵtext(469, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(470, "div", 150)(471, "span", 154);
        i0.ɵɵtext(472, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(473, "div", 149)(474, "div", 150);
        i0.ɵɵtext(475, "Darts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(476, "div", 150)(477, "span", 155);
        i0.ɵɵtext(478, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(479, "div", 150)(480, "span", 155);
        i0.ɵɵtext(481, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(482, "div", 150)(483, "span", 154);
        i0.ɵɵtext(484, "\u2713");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(485, "div", 149)(486, "div", 150);
        i0.ɵɵtext(487, "Arcade");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(488, "div", 150)(489, "span", 155);
        i0.ɵɵtext(490, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(491, "div", 150)(492, "span", 155);
        i0.ɵɵtext(493, "\u2717");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(494, "div", 150)(495, "span", 156);
        i0.ɵɵtext(496, "$10 Arcade Card");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(497, "div", 157);
        i0.ɵɵelement(498, "div", 158);
        i0.ɵɵelementStart(499, "div", 159);
        i0.ɵɵtext(500, "Min Height");
        i0.ɵɵelement(501, "br");
        i0.ɵɵtext(502, "42\"");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(503, "div", 160);
        i0.ɵɵtext(504, "Min Height");
        i0.ɵɵelement(505, "br");
        i0.ɵɵtext(506, "42\" | 48\" | 54\"");
        i0.ɵɵelement(507, "br");
        i0.ɵɵtext(508, "Max 265 lbs (w/ Gear)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(509, "div", 161);
        i0.ɵɵtext(510, "Min Height");
        i0.ɵɵelement(511, "br");
        i0.ɵɵtext(512, "42\" | 48\" | 54\"");
        i0.ɵɵelement(513, "br");
        i0.ɵɵtext(514, "Max 88\u2013265 lbs (w/ Gear)");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(515, "section", 162)(516, "div", 163)(517, "h2");
        i0.ɵɵtext(518, "Birthday Parties & Group Events");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(519, "div", 164);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(520, "div", 165)(521, "div", 166)(522, "div", 167);
        i0.ɵɵelement(523, "img", 168);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(524, "div", 169)(525, "div", 170);
        i0.ɵɵelement(526, "img", 171);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(527, "div", 172)(528, "div", 173);
        i0.ɵɵelement(529, "img", 174);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(530, "div", 175);
        i0.ɵɵelement(531, "img", 176);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(532, "div", 177)(533, "span", 178);
        i0.ɵɵtext(534, "Birthdays");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(535, "h3");
        i0.ɵɵtext(536, "Throw An Unforgettable Birthday Party Without Lifting A Finger");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(537, "p");
        i0.ɵɵtext(538, "All-inclusive adventure parties starting at less than $33 per child with attractions, pizza, drinks, and clean-up handled so you can actually enjoy the day.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(539, "a", 179);
        i0.ɵɵtext(540, "Birthday Parties");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(541, "div", 165)(542, "div", 180)(543, "span", 181);
        i0.ɵɵtext(544, "Groups");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(545, "h3");
        i0.ɵɵtext(546, "Plan A Group Event With A Difference");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(547, "p");
        i0.ɵɵtext(548, "Planning a group event? Skip the ordinary. Bolder turns field trips, corporate outings, and celebrations into stories people won't stop sharing.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(549, "a", 182);
        i0.ɵɵtext(550, "Group & Corporate Events");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(551, "div", 166)(552, "div", 183);
        i0.ɵɵelement(553, "img", 184);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(554, "div", 169)(555, "div", 185);
        i0.ɵɵelement(556, "img", 186);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(557, "div", 172)(558, "div", 187);
        i0.ɵɵelement(559, "img", 188);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(560, "div", 189);
        i0.ɵɵelement(561, "img", 190);
        i0.ɵɵelementEnd()()()()()();
        i0.ɵɵelementStart(562, "section", 191)(563, "div", 192)(564, "div", 193)(565, "span", 194);
        i0.ɵɵtext(566, "Unlimited Fun");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(567, "h2", 195);
        i0.ɵɵtext(568, "Annual Passes &");
        i0.ɵɵelement(569, "br");
        i0.ɵɵtext(570, "Memberships");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(571, "p", 196);
        i0.ɵɵtext(572, "Get amazing value on your Bolder adventures with a whole year of fun.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(573, "div", 197)(574, "a", 198);
        i0.ɵɵtext(575, "Membership Info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(576, "a", 199);
        i0.ɵɵtext(577, "Get Tickets \u2197");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(578, "div", 200)(579, "div", 201);
        i0.ɵɵelement(580, "img", 202);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(581, "div", 201);
        i0.ɵɵelement(582, "img", 203);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(583, "div", 201);
        i0.ɵɵelement(584, "img", 204);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(585, "div", 205);
        i0.ɵɵelement(586, "img", 206);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(587, "div", 207);
        i0.ɵɵelement(588, "img", 208);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(589, "div", 205);
        i0.ɵɵelement(590, "img", 209);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(591, "section", 210)(592, "div", 82)(593, "p");
        i0.ɵɵtext(594, "Explore The Park");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(595, "h2");
        i0.ɵɵtext(596, "Your adventure starts here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(597, "span");
        i0.ɵɵtext(598, "Get to know every corner of Bolder Adventure Park before you arrive.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(599, "div", 211);
        i0.ɵɵelement(600, "div", 212);
        i0.ɵɵelementStart(601, "a", 213);
        i0.ɵɵelement(602, "img", 214);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(603, "div", 215)(604, "span");
        i0.ɵɵtext(605, "\uD83D\uDDFA\uFE0F Bolder Adventure Park \u2014 Grand Prairie, TX");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelement(606, "app-infinite-carousel", 216);
        i0.ɵɵelementStart(607, "section", 217)(608, "div", 82)(609, "p");
        i0.ɵɵtext(610, "Our Guests Say It Best");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(611, "h2");
        i0.ɵɵtext(612, "What people are saying");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(613, "div", 218)(614, "div", 219)(615, "div", 220);
        i0.ɵɵtemplate(616, HomeComponent_article_616_Template, 15, 8, "article", 221);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(617, "button", 222);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_617_listener() { return ctx.prevReview(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(618, "svg", 223);
        i0.ɵɵelement(619, "polyline", 224);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(620, "button", 225);
        i0.ɵɵlistener("click", function HomeComponent_Template_button_click_620_listener() { return ctx.nextReview(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(621, "svg", 223);
        i0.ɵɵelement(622, "polyline", 226);
        i0.ɵɵelementEnd()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(623, "div", 227);
        i0.ɵɵtemplate(624, HomeComponent_button_624_Template, 1, 3, "button", 228);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(625, "section", 229)(626, "div", 230);
        i0.ɵɵelement(627, "iframe", 231)(628, "div", 232);
        i0.ɵɵelementStart(629, "div", 233)(630, "span");
        i0.ɵɵtext(631, "\u2316");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(632, "strong");
        i0.ɵɵtext(633, "We are here");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(634, "div", 234);
        i0.ɵɵelement(635, "img", 235);
        i0.ɵɵelementStart(636, "span", 236);
        i0.ɵɵtext(637, "Visit us today");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(638, "p");
        i0.ɵɵtext(639, "2324 W Warrior Trail, Grand Prairie, TX");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(640, "h3");
        i0.ɵɵtext(641, "(469) 858-0577");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(642, "div", 237)(643, "a", 238);
        i0.ɵɵtext(644, "Get Directions");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(645, "a", 239);
        i0.ɵɵtext(646, "Plan Your Visit");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵtemplate(647, HomeComponent_div_647_Template, 7, 1, "div", 240);
    } if (rf & 2) {
        i0.ɵɵadvance(101);
        i0.ɵɵproperty("src", ctx.carouselEvents[ctx.carouselIndex].image, i0.ɵɵsanitizeUrl)("alt", ctx.carouselEvents[ctx.carouselIndex].carouselTitle);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate2(" NEXT UP \u00A0", ctx.padNum(ctx.carouselIndex + 1), "/", ctx.padNum(ctx.carouselEvents.length), " ");
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate1(" ", ctx.carouselEvents[ctx.carouselIndex].carouselTitle, "");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.carouselEvents[ctx.carouselIndex].carouselAccent);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", ctx.carouselEvents[ctx.carouselIndex].date, " ");
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1(" ", ctx.carouselEvents[ctx.carouselIndex].location, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.carouselEvents[ctx.carouselIndex].ageRestriction);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.carouselEvents[ctx.carouselIndex].description);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.padNum(ctx.carouselCountdownDays));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.padNum(ctx.carouselCountdownHours));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.padNum(ctx.carouselCountdownMinutes));
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.padNum(ctx.carouselCountdownSeconds));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(26, _c1, ctx.carouselEvents[ctx.carouselIndex].slug));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.carouselEvents);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.attractionTabs);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filteredAttractions)("ngForTrackBy", ctx.trackByAttraction);
        i0.ɵɵadvance(95);
        i0.ɵɵproperty("ngForOf", ctx.visibleVideos);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.maxVideoPage > 0);
        i0.ɵɵadvance(342);
        i0.ɵɵstyleProp("transform", "translateX(-" + ctx.activeReviewIndex * 100 + "%)");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
        i0.ɵɵadvance(23);
        i0.ɵɵproperty("ngIf", ctx.activeVideoUrl);
    } }, directives: [i3.RouterLinkWithHref, i4.NgForOf, i4.NgIf, i5.InfiniteCarouselComponent], styles: ["//[_ngcontent-%COMP%]   Home[_ngcontent-%COMP%]   component[_ngcontent-%COMP%]   uses[_ngcontent-%COMP%]   the[_ngcontent-%COMP%]   global[_ngcontent-%COMP%]   styles[_ngcontent-%COMP%]   from[_ngcontent-%COMP%]   app.component.scss[_ngcontent-%COMP%]   (ViewEncapsulation.None)\n//[_ngcontent-%COMP%]   Only[_ngcontent-%COMP%]   add[_ngcontent-%COMP%]   HOME-SPECIFIC[_ngcontent-%COMP%]   overrides[_ngcontent-%COMP%]   or[_ngcontent-%COMP%]   additions[_ngcontent-%COMP%]   here\n\n//[_ngcontent-%COMP%]   Ensure[_ngcontent-%COMP%]   hero[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]   top[_ngcontent-%COMP%]   offset[_ngcontent-%COMP%]   accounts[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   promo[_ngcontent-%COMP%]   strip[_ngcontent-%COMP%]    + nav\n.hero[_ngcontent-%COMP%] {\n  padding-top: 148px;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   LIVE[_ngcontent-%COMP%]   EVENTS[_ngcontent-%COMP%]   CAROUSEL[_ngcontent-%COMP%]   (Home[_ngcontent-%COMP%]   Page)\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.home-events-section[_ngcontent-%COMP%] {\n  background: var(--black);\n  padding: clamp(4rem, 7vw, 6rem) 1.5rem;\n}\n\n.home-events-header[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto 2.5rem;\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 0.75rem 2rem;\n}\n\n.home-events-kicker[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin: 0;\n}\n\n.home-events-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0;\n  flex: 1;\n  span { font-family: var(--font-display); }\n}\n\n.home-events-viewall[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--orange);\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.2s;\n  &:hover { opacity: 0.75; }\n}\n.le-carousel-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 55% 1fr;\n  background: #0d1219;\n  border-radius: 20px;\n  overflow: hidden;\n  min-height: 520px;\n  border: 1px solid rgba(255,255,255,0.07);\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Image[_ngcontent-%COMP%]   panel[_ngcontent-%COMP%]   \u2500\u2500\n.le-car-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 420px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.6s ease;\n  }\n\n  &:hover img { transform: scale(1.03); }\n}\n\n.le-car-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, transparent 60%, #0d1219 100%);\n  pointer-events: none;\n}\n\n//[_ngcontent-%COMP%]   \"NEXT UP 01/03\"[_ngcontent-%COMP%]   badge\n.le-car-next-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  z-index: 5;\n}\n\n//[_ngcontent-%COMP%]   Prev[_ngcontent-%COMP%]   /[_ngcontent-%COMP%]   Next[_ngcontent-%COMP%]   arrows\n.le-car-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255,255,255,0.25);\n  background: rgba(0,0,0,0.5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.2s, border-color 0.2s;\n  backdrop-filter: blur(4px);\n\n  &:hover { background: var(--orange); border-color: var(--orange); }\n}\n\n.le-car-prev[_ngcontent-%COMP%] { left: 1rem; }\n.le-car-next[_ngcontent-%COMP%] { right: 1rem; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   Content[_ngcontent-%COMP%]   panel[_ngcontent-%COMP%]   \u2500\u2500\n.le-car-copy[_ngcontent-%COMP%] {\n  padding: clamp(2rem, 4vw, 3rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0;\n}\n\n.le-car-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 0.95;\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-car-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    color: rgba(255,255,255,0.55);\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    letter-spacing: 0.02em;\n  }\n}\n\n.le-car-sep[_ngcontent-%COMP%] { color: rgba(255,255,255,0.25) !important; }\n\n.le-car-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.65;\n  margin: 0 0 1.5rem;\n}\n\n//[_ngcontent-%COMP%]   Countdown[_ngcontent-%COMP%]   boxes\n.le-car-countdown[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n\n.le-car-cd-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  min-width: 62px;\n  text-align: center;\n}\n\n.le-car-cd-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-car-cd-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.25rem;\n}\n\n.le-car-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.75rem;\n}\n\n.le-car-detail-link[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.45);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n//[_ngcontent-%COMP%]   Dot[_ngcontent-%COMP%]   indicators\n.le-car-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\n@keyframes dot-progress {\n  from { width: 0%; }\n  to   { width: 100%; }\n}\n\n.le-car-dot[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 32px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255,255,255,0.2);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: width 0.25s;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    width: 0%;\n    background: var(--orange);\n    border-radius: 2px;\n  }\n\n  &.is-active {\n    width: 48px;\n\n    &::after {\n      animation: dot-progress 5s linear forwards;\n    }\n  }\n}\n\n//  THE ROUTE AHEAD (Timeline)"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<main>\n  <section class=\"hero\" id=\"home\">\n    <div class=\"hero-video-wrapper\">\n      <video\n        #heroVideo\n        class=\"hero-video\"\n        src=\"assets/videos/Bolder-video.webm\"\n        poster=\"assets/After-hero-section/Attractions - A view from Mezz 1.jpg\"\n        autoplay muted loop playsinline preload=\"none\"\n      ></video>\n    </div>\n    <div class=\"hero-overlay\"></div>\n    <div class=\"hero-deco\" aria-hidden=\"true\"></div>\n\n    <div class=\"hero-content\">\n      <div class=\"hero-eyebrow reveal\">\n        <span class=\"hero-eyebrow-dot\"></span>\n        Indoor Adventure Park\n        <span class=\"hero-eyebrow-sep\">\u2022</span>\n        Grand Prairie, TX\n      </div>\n\n      <h1 class=\"reveal delay-1\">\n        <span class=\"hero-t1\">Adventure</span>\n        <span class=\"hero-t2\">Awaits</span>\n      </h1>\n\n      <p class=\"hero-sub reveal delay-2\">\n        North Texas' premier 66,000 sq&nbsp;ft indoor thrill zone \u2014 built for the bold.\n      </p>\n\n      <div class=\"hero-actions reveal delay-3\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-orange btn-lg hero-btn-primary\"\n        >Get Tickets \u2197</a>\n        <a routerLink=\"/attractions\" class=\"btn btn-outline btn-lg\">Explore Attractions</a>\n      </div>\n\n      <div class=\"hero-proof reveal delay-4\">\n        <span class=\"hproof-item\"><span class=\"hproof-check\">\u2713</span>Best for families</span>\n        <span class=\"hproof-sep\"></span>\n        <span class=\"hproof-item\"><span class=\"hproof-check\">\u2713</span>Birthday packages</span>\n        <span class=\"hproof-sep\"></span>\n        <span class=\"hproof-item\"><span class=\"hproof-check\">\u2713</span>Group events</span>\n      </div>\n    </div>\n\n    <div class=\"hero-scroll-hint reveal delay-4\" aria-hidden=\"true\">\n      <div class=\"hero-scroll-mouse\">\n        <span class=\"hero-scroll-wheel-inner\"></span>\n      </div>\n      <span class=\"hero-scroll-label\">Scroll</span>\n    </div>\n  </section>\n\n  <!-- Stats / About -->\n  <section class=\"about-stats\" id=\"about\">\n    <div class=\"about-stats-grid\">\n      <div class=\"as-cell as-cell--tl sr sr-left\">\n        <div class=\"as-number\">18<sup>+</sup></div>\n        <div class=\"as-label\">Attractions</div>\n        <div class=\"as-photo\">\n          <img src=\"assets/After-hero-section/Attractions - A view from Mezz 1.jpg\" alt=\"18+ attractions\" loading=\"lazy\" decoding=\"async\" width=\"600\" height=\"400\"/>\n        </div>\n      </div>\n      <div class=\"as-cell as-cell--center sr sr-up\">\n        <p class=\"as-tagline\">\n          Experience year-round fun at the Bolder Adventure Park \u2014 a\n          <strong>66,000 sq&nbsp;ft</strong> indoor family entertainment center.\n          One of the most unique family days out in North Texas, there's fun for kids of all ages\u2026 and big kids too!\n        </p>\n      </div>\n      <div class=\"as-cell as-cell--tr sr sr-right\">\n        <div class=\"as-number\">100<sup>%</sup></div>\n        <div class=\"as-label\">All Out Fun</div>\n        <div class=\"as-photo\">\n          <img src=\"assets/After-hero-section/DSC08395.jpg\" alt=\"100% all out fun\" loading=\"lazy\" decoding=\"async\" width=\"600\" height=\"400\"/>\n        </div>\n      </div>\n      <div class=\"as-cell as-cell--bl sr sr-left\" data-sr-delay=\"0.15s\">\n        <div class=\"as-number as-number--lg\">66,000</div>\n        <div class=\"as-label\">Square Foot Dome</div>\n        <div class=\"as-photo\">\n          <img src=\"assets/After-hero-section/Dome photos-03988-2.jpg\" alt=\"66,000 sq ft dome\" loading=\"lazy\" decoding=\"async\" width=\"600\" height=\"400\"/>\n        </div>\n      </div>\n      <div class=\"as-cell as-cell--br sr sr-right\" data-sr-delay=\"0.15s\">\n        <div class=\"as-number\">5<sup>\u2605</sup></div>\n        <div class=\"as-label\">Party Venue</div>\n      </div>\n    </div>\n  </section>\n\n\n  <!-- \u2550\u2550 LIVE EVENTS CAROUSEL \u2550\u2550 -->\n  <section class=\"home-events-section\">\n    <div class=\"home-events-header\">\n      <p class=\"home-events-kicker\">\n        <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"/></svg>\n        Live &amp; Special Events\n      </p>\n      <h2 class=\"home-events-title\">What's On <span class=\"accent-orange\">At Bolder</span></h2>\n      <a routerLink=\"/live-events\" class=\"home-events-viewall\">View All Events \u2192</a>\n    </div>\n\n    <div class=\"le-container\">\n      <div class=\"le-carousel-card sr sr-up\">\n\n        <!-- Image panel -->\n        <div class=\"le-car-image-wrap\">\n          <img [src]=\"carouselEvents[carouselIndex].image\" [alt]=\"carouselEvents[carouselIndex].carouselTitle\" loading=\"lazy\" />\n          <div class=\"le-car-img-overlay\"></div>\n          <span class=\"le-car-next-badge\">\n            <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z\"/></svg>\n            NEXT UP &nbsp;{{ padNum(carouselIndex + 1) }}/{{ padNum(carouselEvents.length) }}\n          </span>\n          <button class=\"le-car-arrow le-car-prev\" (click)=\"prevCarousel()\" aria-label=\"Previous event\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n          </button>\n          <button class=\"le-car-arrow le-car-next\" (click)=\"nextCarousel()\" aria-label=\"Next event\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" aria-hidden=\"true\"><path d=\"M9 18l6-6-6-6\"/></svg>\n          </button>\n        </div>\n\n        <!-- Content panel -->\n        <div class=\"le-car-copy\">\n          <h2 class=\"le-car-title\">\n            {{ carouselEvents[carouselIndex].carouselTitle }}<br/>\n            <span class=\"accent-orange\">{{ carouselEvents[carouselIndex].carouselAccent }}</span>\n          </h2>\n          <div class=\"le-car-meta\">\n            <span>\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>\n              {{ carouselEvents[carouselIndex].date }}\n            </span>\n            <span class=\"le-car-sep\">\u00B7</span>\n            <span>\n              <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z\"/><circle cx=\"12\" cy=\"9\" r=\"2.4\"/></svg>\n              {{ carouselEvents[carouselIndex].location }}\n            </span>\n            <span class=\"le-car-sep\">\u00B7</span>\n            <span>{{ carouselEvents[carouselIndex].ageRestriction }}</span>\n          </div>\n          <p class=\"le-car-desc\">{{ carouselEvents[carouselIndex].description }}</p>\n          <div class=\"le-car-countdown\">\n            <div class=\"le-car-cd-box\"><span class=\"le-car-cd-num\">{{ padNum(carouselCountdownDays) }}</span><span class=\"le-car-cd-label\">Days</span></div>\n            <div class=\"le-car-cd-box\"><span class=\"le-car-cd-num\">{{ padNum(carouselCountdownHours) }}</span><span class=\"le-car-cd-label\">Hrs</span></div>\n            <div class=\"le-car-cd-box\"><span class=\"le-car-cd-num\">{{ padNum(carouselCountdownMinutes) }}</span><span class=\"le-car-cd-label\">Min</span></div>\n            <div class=\"le-car-cd-box\"><span class=\"le-car-cd-num\">{{ padNum(carouselCountdownSeconds) }}</span><span class=\"le-car-cd-label\">Sec</span></div>\n          </div>\n          <div class=\"le-car-actions\">\n            <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-orange btn-lg\">\n              <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"/></svg>\n              Get Tickets\n            </a>\n            <a [routerLink]=\"['/live-events', carouselEvents[carouselIndex].slug]\" class=\"le-car-detail-link\">View Event Details \u2192</a>\n          </div>\n          <div class=\"le-car-dots\">\n            <button *ngFor=\"let e of carouselEvents; let i = index\"\n                    class=\"le-car-dot\" [class.is-active]=\"i === carouselIndex\"\n                    (click)=\"goToCarousel(i)\" [attr.aria-label]=\"'Go to slide ' + (i + 1)\">\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <!-- Attractions -->\n  <section class=\"section experiences\" id=\"experiences\">\n    <div class=\"section-title sr sr-up\">\n      <p>Daily Experiences</p>\n      <h2>Big adventure, easy decision</h2>\n    </div>\n    <div class=\"attraction-tabs sr sr-up\" data-sr-delay=\"0.1s\">\n      <button *ngFor=\"let tab of attractionTabs\"\n              class=\"attraction-tab\"\n              [class.is-active]=\"activeAttractionTab === tab.id\"\n              (click)=\"setAttractionTab(tab.id)\"\n              type=\"button\">{{ tab.label }}</button>\n    </div>\n    <div class=\"attraction-grid\">\n      <a class=\"attraction-card\"\n         *ngFor=\"let card of filteredAttractions; let i = index; trackBy: trackByAttraction\"\n         [routerLink]=\"card.link\"\n         [style.animation-delay]=\"i * 0.055 + 's'\">\n        <img [src]=\"card.image\" [alt]=\"card.title\" loading=\"lazy\"/>\n        <div class=\"attraction-card-content\">\n          <span class=\"attraction-card-title\">{{ card.title }}</span>\n          <span class=\"attraction-card-arrow\" aria-hidden=\"true\">\n            <svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\">\n              <line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"/><polyline points=\"7 7 17 7 17 17\"/>\n            </svg>\n          </span>\n        </div>\n      </a>\n    </div>\n  </section>\n\n  <!-- Plan Your Visit stacking cards -->\n  <section class=\"plan-your-visit\" id=\"attractions\">\n    <div class=\"pyv-header sr sr-up\">\n      <div class=\"pyv-heading\">\n        <span class=\"pyv-kicker\">Choose Your Pass</span>\n        <h2>Plan Your<br/>Visit</h2>\n        <div class=\"pyv-accent-line\"></div>\n      </div>\n      <div class=\"pyv-intro\">\n        <p>The park is split by ground level and aerial activities \u2014 our ticket options are simple to understand.</p>\n        <p>The Jump Pad, Adventure Nets and Exploration Playground are perfect for smaller kids. More daring ones can also ride the Tubing Slides, Bumper Cars and fight it out in the Blaster Zone \u2014 all available with a <span class=\"pyv-tag\">Base Camp Pass</span>.</p>\n        <p>For bigger thrills, there are two ways to explore Bolder Adventure Mountain: the Ropes Course, including Zip Lines, and the Mountain Course featuring an exhilarating <span class=\"pyv-tag\">Free Fall Drop!</span></p>\n        <a routerLink=\"/plan-your-visit\" class=\"pyv-scroll-hint\">Explore all pass options \u2197</a>\n      </div>\n    </div>\n    <div class=\"attraction-stack\">\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--navy\">\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">01 &nbsp;/&nbsp; Base</span>\n            <svg class=\"ac-icon\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <rect x=\"4\" y=\"4\" width=\"44\" height=\"44\" rx=\"10\" stroke=\"rgba(255,255,255,0.6)\" stroke-width=\"3\"/>\n            </svg>\n            <h3 class=\"ac-name\">Base Camp</h3>\n            <p class=\"ac-desc\">Action is on the ground \u2014 Jump Pad, Adventure Nets, Exploration Playground, Tubing Slides, Blaster Zone and Bumper Cars.</p>\n            <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"ac-cta\">Get Your Pass \u2197</a>\n          </div>\n          <div class=\"ac-image\"><img src=\"assets/carousel-images/Carousel-4.jpg\" alt=\"Base Camp\" loading=\"lazy\"/></div>\n        </div>\n      </div>\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--gold\">\n          <div class=\"ac-image\"><img src=\"assets/carousel-images/Carousel-6.jpg\" alt=\"Summit\" loading=\"lazy\"/></div>\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">02 &nbsp;/&nbsp; Summit</span>\n            <svg class=\"ac-icon\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <polygon points=\"26,3 49,26 26,49 3,26\" stroke=\"rgba(0,0,0,0.45)\" stroke-width=\"3\" fill=\"rgba(0,0,0,0.08)\"/>\n            </svg>\n            <h3 class=\"ac-name\">Summit</h3>\n            <p class=\"ac-desc\">All Base Camp activities, plus your choice of a Ropes Course <em>or</em> a Mountain Experience session. The adventure levels up.</p>\n            <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"ac-cta ac-cta--dark\">Get Your Pass \u2197</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"ac-slide\">\n        <div class=\"ac-section ac--violet\">\n          <div class=\"ac-content\">\n            <span class=\"ac-num\">03 &nbsp;/&nbsp; Extreme</span>\n            <svg class=\"ac-icon ac-icon--wide\" viewBox=\"0 0 106 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <polygon points=\"26,3 49,26 26,49 3,26\" fill=\"rgba(255,255,255,0.28)\"/>\n              <polygon points=\"80,3 103,26 80,49 57,26\" fill=\"rgba(255,255,255,0.28)\"/>\n            </svg>\n            <h3 class=\"ac-name\">Extreme All&nbsp;Access</h3>\n            <p class=\"ac-desc\">Unlimited access to the entire venue \u2014 every Rope, every Mountain course, every ground activity. This is the complete Bolder experience.</p>\n            <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"ac-cta\">Get Your Pass \u2197</a>\n          </div>\n          <div class=\"ac-image\"><img src=\"assets/carousel-images/Carousel-8.jpg\" alt=\"Extreme All Access\" loading=\"lazy\"/></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Comparison / Video Reel -->\n  <section class=\"comparison\">\n    <div class=\"video-reel-wrap sr sr-up\">\n      <div class=\"vr-shelf-header\">\n        <div class=\"vr-shelf-left\">\n          <div class=\"vr-yt-logo-wrap\">\n            <svg viewBox=\"0 0 32 22\" width=\"38\" height=\"26\" aria-hidden=\"true\">\n              <rect width=\"32\" height=\"22\" rx=\"5\" fill=\"#FF0000\"/>\n              <polygon points=\"13,6 13,16 22,11\" fill=\"#fff\"/>\n            </svg>\n            <span class=\"vr-yt-wordmark\">YouTube</span>\n          </div>\n          <div class=\"vr-shelf-text\">\n            <span class=\"vr-shelf-kicker\">Watch On YouTube</span>\n            <h2 class=\"vr-shelf-heading\">Watch The Adventure</h2>\n          </div>\n        </div>\n        <a href=\"https://www.youtube.com/@bolderadventurepark\" target=\"_blank\" rel=\"noopener\" class=\"vr-see-all\">\n          See all\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" width=\"15\" height=\"15\" aria-hidden=\"true\"><polyline points=\"9 6 15 12 9 18\"/></svg>\n        </a>\n      </div>\n      <div class=\"video-reel-grid\">\n        <div class=\"video-reel-card\" *ngFor=\"let vid of visibleVideos\" (click)=\"openVideo(vid.id)\">\n          <img class=\"video-reel-thumb\" [src]=\"'https://img.youtube.com/vi/' + vid.id + '/maxresdefault.jpg'\" [alt]=\"vid.title\" loading=\"lazy\"/>\n          <div class=\"vr-top-grad\"></div>\n          <div class=\"vr-card-top\">\n            <div class=\"vr-avatar\"><img src=\"assets/images/bolder-logo.png\" alt=\"Bolder Adventure Park\"/></div>\n            <div class=\"vr-top-text\">\n              <span class=\"vr-channel-name\">Bolder Adventure Park</span>\n              <p class=\"vr-card-title\">{{ vid.title }}</p>\n            </div>\n          </div>\n          <div class=\"video-reel-play\">\n            <svg viewBox=\"0 0 68 48\" width=\"56\" height=\"40\" aria-hidden=\"true\">\n              <path d=\"M66.52 7.74C65.7 4.72 63.28 2.3 60.27 1.49 55.01.05 34 0 34 0S12.99.05 7.73 1.49C4.72 2.3 2.3 4.72 1.48 7.74.05 13.01 0 24 0 24s.05 10.99 1.48 16.26C2.3 43.28 4.72 45.7 7.73 46.51 12.99 47.95 34 48 34 48s21.01-.05 26.27-1.49C63.28 45.7 65.7 43.28 66.52 40.26 67.95 35 68 24 68 24s-.05-10.99-1.48-16.26z\" fill=\"#ff0000\"/>\n              <path d=\"M27 34 45 24 27 14z\" fill=\"#fff\"/>\n            </svg>\n          </div>\n          <div class=\"vr-bottom-grad\"></div>\n          <div class=\"vr-card-bottom\">\n            <button class=\"vr-share-btn\" (click)=\"shareVideo(vid.id, $event)\" aria-label=\"Share\">\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" width=\"18\" height=\"18\" aria-hidden=\"true\">\n                <circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/>\n                <line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"/><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"/>\n              </svg>\n            </button>\n            <div class=\"vr-shorts-badge\">\n              <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"12\" height=\"12\" aria-hidden=\"true\">\n                <path d=\"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z\"/>\n              </svg>\n              Shorts\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"video-reel-nav\" *ngIf=\"maxVideoPage > 0\">\n        <button class=\"vrn-arrow\" (click)=\"prevVideoPage()\" [disabled]=\"videoPage === 0\" aria-label=\"Previous videos\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" width=\"22\" height=\"22\" aria-hidden=\"true\"><polyline points=\"15 18 9 12 15 6\"/></svg>\n        </button>\n        <button class=\"vrn-arrow\" (click)=\"nextVideoPage()\" [disabled]=\"videoPage >= maxVideoPage\" aria-label=\"Next videos\">\n          <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" width=\"22\" height=\"22\" aria-hidden=\"true\"><polyline points=\"9 6 15 12 9 18\"/></svg>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"compare-table-wrap sr sr-up\">\n      <div class=\"ct-logo-card\">\n        <img src=\"assets/images/bolder-logo-white-text.png\" alt=\"Bolder Adventure Park\" class=\"ct-logo-img\"/>\n        <span class=\"ct-kicker\">Ticket Options</span>\n        <div class=\"ct-title\">Choose Your Adventure Level</div>\n      </div>\n      <div class=\"ct-header\">\n        <div class=\"ct-h-cell\"><span class=\"ct-attr-label\">Attraction</span></div>\n        <div class=\"ct-h-cell tier-base\"><span class=\"ct-h-label\">Base Camp</span><span class=\"ct-h-sub\">Action on the Ground</span><span class=\"ct-h-badge\">Included</span></div>\n        <div class=\"ct-h-cell tier-summit\"><span class=\"ct-h-label\">Summit</span><span class=\"ct-h-sub\">Ropes Course + Zip Lines</span><span class=\"ct-h-badge\">Popular</span></div>\n        <div class=\"ct-h-cell tier-extreme\"><span class=\"ct-h-label\">Extreme</span><span class=\"ct-h-sub\">All Access</span><span class=\"ct-h-badge\">Ultimate</span></div>\n      </div>\n      <div class=\"ct-section-tag\"><span>Ground Level</span></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Jump Pad <span class=\"ct-note\">(Socks Additional)</span></div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Adventure Nets</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Exploration Play (Playground)</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Tubing Slides (Speed Shot)</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Tubing Slides (Rolling Hills)</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Blaster Zone</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Bumper Cars</div><div class=\"ct-cell\"><span class=\"ic-yes base\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-section-tag\"><span>Summit Level</span></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Ropes Course (4 Levels)</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Rock Climbing</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes summit\">\u2713</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-section-tag\"><span>Extreme Only</span></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Mountain Experience (2 Trails)</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Free Fall (Trap Door)</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Free Fall (Top of the Arch)</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Archery</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Darts</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-yes extreme\">\u2713</span></div></div>\n      <div class=\"ct-row\"><div class=\"ct-cell\">Arcade</div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-no\">\u2717</span></div><div class=\"ct-cell\"><span class=\"ic-special\">$10 Arcade Card</span></div></div>\n      <div class=\"ct-footer\">\n        <div class=\"ct-footer-cell\"></div>\n        <div class=\"ct-footer-cell fb\">Min Height<br/>42\"</div>\n        <div class=\"ct-footer-cell fs\">Min Height<br/>42\" | 48\" | 54\"<br/>Max 265 lbs (w/ Gear)</div>\n        <div class=\"ct-footer-cell fe\">Min Height<br/>42\" | 48\" | 54\"<br/>Max 88\u2013265 lbs (w/ Gear)</div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Birthday Parties & Group Events -->\n  <section class=\"parties\" id=\"parties\">\n    <div class=\"parties-heading sr sr-up\">\n      <h2>Birthday Parties &amp; Group Events</h2>\n      <div class=\"parties-heading-line\"></div>\n    </div>\n    <div class=\"parties-block\">\n      <div class=\"parties-collage\">\n        <div class=\"pc-tall sr sr-left\"><img src=\"assets/images/Birthday-parties.jpg\" alt=\"Birthday celebrations\" loading=\"lazy\"/></div>\n        <div class=\"pc-right\">\n          <div class=\"pc-wide sr sr-up\" data-sr-delay=\"0.10s\"><img src=\"assets/images/Parties1.png\" alt=\"Ropes course adventure\" loading=\"lazy\"/></div>\n          <div class=\"pc-duo\">\n            <div class=\"pc-duo-item sr sr-up\" data-sr-delay=\"0.20s\"><img src=\"assets/images/Parties2.png\" alt=\"Parties\" loading=\"lazy\"/></div>\n            <div class=\"pc-duo-item sr sr-up\" data-sr-delay=\"0.30s\"><img src=\"assets/images/Parties3.jpg\" alt=\"Parties\" loading=\"lazy\"/></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"parties-copy sr sr-right\">\n        <span class=\"parties-badge\">Birthdays</span>\n        <h3>Throw An Unforgettable Birthday Party Without Lifting A Finger</h3>\n        <p>All-inclusive adventure parties starting at less than $33 per child with attractions, pizza, drinks, and clean-up handled so you can actually enjoy the day.</p>\n        <a routerLink=\"/birthday-parties\" class=\"parties-cta\">Birthday Parties</a>\n      </div>\n    </div>\n    <div class=\"parties-block\">\n      <div class=\"parties-copy sr sr-left\" data-sr-delay=\"0.05s\">\n        <span class=\"parties-badge parties-badge--blue\">Groups</span>\n        <h3>Plan A Group Event With A Difference</h3>\n        <p>Planning a group event? Skip the ordinary. Bolder turns field trips, corporate outings, and celebrations into stories people won't stop sharing.</p>\n        <a routerLink=\"/group-events\" class=\"parties-cta\">Group &amp; Corporate Events</a>\n      </div>\n      <div class=\"parties-collage\">\n        <div class=\"pc-tall sr sr-right\" data-sr-delay=\"0.05s\"><img src=\"assets/images/Group-events.jpg\" alt=\"Group events\" loading=\"lazy\"/></div>\n        <div class=\"pc-right\">\n          <div class=\"pc-wide sr sr-up\" data-sr-delay=\"0.15s\"><img src=\"assets/images/Groups1.jpg\" alt=\"Summit activities\" loading=\"lazy\"/></div>\n          <div class=\"pc-duo\">\n            <div class=\"pc-duo-item sr sr-up\" data-sr-delay=\"0.25s\"><img src=\"assets/images/Groups2.jpg\" alt=\"Extreme all access\" loading=\"lazy\"/></div>\n            <div class=\"pc-duo-item sr sr-up\" data-sr-delay=\"0.35s\"><img src=\"assets/images/Groups3.jpg\" alt=\"Group adventure\" loading=\"lazy\"/></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Annual Pass -->\n  <section class=\"annual-pass\">\n    <div class=\"annual-card\">\n      <div class=\"annual-card-left sr sr-left\">\n        <span class=\"annual-badge\">Unlimited Fun</span>\n        <h2 class=\"annual-heading\">Annual Passes &amp;<br/>Memberships</h2>\n        <p class=\"annual-desc\">Get amazing value on your Bolder adventures with a whole year of fun.</p>\n        <div class=\"annual-actions\">\n          <a routerLink=\"/memberships\" class=\"annual-btn-dark\">Membership Info</a>\n          <a href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\" target=\"_blank\" rel=\"noopener\" class=\"annual-btn-outline\">Get Tickets \u2197</a>\n        </div>\n      </div>\n      <div class=\"annual-photo-grid sr sr-right\" data-sr-delay=\"0.15s\">\n        <div class=\"annual-photo\"><img src=\"assets/carousel-images/Carousel-3.jpg\" alt=\"Ropes course\" loading=\"lazy\"/></div>\n        <div class=\"annual-photo\"><img src=\"assets/carousel-images/Carousel-5.jpg\" alt=\"Adventure activity\" loading=\"lazy\"/></div>\n        <div class=\"annual-photo\"><img src=\"assets/carousel-images/Carousel-7.jpg\" alt=\"Zip line\" loading=\"lazy\"/></div>\n        <div class=\"annual-photo ap-offset\"><img src=\"assets/carousel-images/Carousel-9.jpg\" alt=\"Balance walk\" loading=\"lazy\"/></div>\n        <div class=\"annual-photo ap-pull\"><img src=\"assets/carousel-images/Carousel-11.jpg\" alt=\"Tubing slides\" loading=\"lazy\"/></div>\n        <div class=\"annual-photo ap-offset\"><img src=\"assets/carousel-images/Carousel-13.jpg\" alt=\"Blaster arena\" loading=\"lazy\"/></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Park Map -->\n  <section class=\"section parkmap-section\" id=\"park-map\">\n    <div class=\"section-title sr sr-up\">\n      <p>Explore The Park</p>\n      <h2>Your adventure starts here</h2>\n      <span>Get to know every corner of Bolder Adventure Park before you arrive.</span>\n    </div>\n    <div class=\"parkmap-wrapper sr sr-scale\">\n      <div class=\"parkmap-glow\"></div>\n      <a href=\"https://bolderadventurepark.com/park-maps/\" target=\"_blank\" rel=\"noopener\" class=\"parkmap-link\">\n        <img src=\"assets/images/Parkmap.png\" alt=\"Bolder Adventure Park Map\" class=\"parkmap-img\"/>\n      </a>\n      <div class=\"parkmap-badge\"><span>\uD83D\uDDFA\uFE0F Bolder Adventure Park \u2014 Grand Prairie, TX</span></div>\n    </div>\n  </section>\n\n  <!-- Infinite Carousel -->\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Reviews -->\n  <section class=\"section reviews\">\n    <div class=\"section-title sr sr-up\">\n      <p>Our Guests Say It Best</p>\n      <h2>What people are saying</h2>\n    </div>\n    <div class=\"review-carousel sr sr-up\" data-sr-delay=\"0.1s\">\n      <div class=\"review-track-wrap\">\n        <div class=\"review-track\" [style.transform]=\"'translateX(-' + activeReviewIndex * 100 + '%)'\">\n          <article class=\"review-card\" *ngFor=\"let review of reviews; let i = index\">\n            <div class=\"review-image-wrap\">\n              <img [src]=\"'assets/images/' + reviewImages[i].file\" [alt]=\"reviewImages[i].tag\" class=\"review-img\"/>\n              <span class=\"review-tag\">{{ reviewImages[i].tag }}</span>\n            </div>\n            <div class=\"review-body\">\n              <p>\"{{ review.quote }}\"</p>\n              <div class=\"review-meta\">\n                <strong>{{ review.name }}</strong>\n                <span class=\"review-time\">{{ review.source }}</span>\n              </div>\n              <div class=\"review-stars\" [style.color]=\"reviewImages[i].color\">\u2605\u2605\u2605\u2605\u2605</div>\n            </div>\n          </article>\n        </div>\n      </div>\n      <button class=\"review-arrow review-arrow--prev\" (click)=\"prevReview()\" aria-label=\"Previous review\" type=\"button\">\n        <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"15 18 9 12 15 6\"/></svg>\n      </button>\n      <button class=\"review-arrow review-arrow--next\" (click)=\"nextReview()\" aria-label=\"Next review\" type=\"button\">\n        <svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"9 18 15 12 9 6\"/></svg>\n      </button>\n      <div class=\"review-dots\">\n        <button *ngFor=\"let r of reviews; let i = index\"\n                class=\"review-dot\"\n                [class.is-active]=\"activeReviewIndex === i\"\n                (click)=\"goToReview(i)\"\n                [attr.aria-label]=\"'Go to review ' + (i + 1)\"\n                type=\"button\"></button>\n      </div>\n    </div>\n  </section>\n\n  <!-- Visit / Map -->\n  <section class=\"visit\" id=\"visit\">\n    <div class=\"map-shell sr sr-left\">\n      <iframe class=\"map-frame\" title=\"Bolder Adventure Park Location\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"\n        src=\"https://www.google.com/maps?q=2324%20W%20Warrior%20Trail%2C%20Grand%20Prairie%2C%20TX&output=embed\">\n      </iframe>\n      <div class=\"map-glow\"></div>\n      <div class=\"map-pin\"><span>\u2316</span><strong>We are here</strong></div>\n    </div>\n    <div class=\"visit-card sr sr-right\" data-sr-delay=\"0.15s\">\n      <img class=\"visit-logo-img\" src=\"assets/images/bolder-logo-white-text.png\" alt=\"Bolder at EpicCentral logo\"/>\n      <span class=\"visit-kicker\">Visit us today</span>\n      <p>2324 W Warrior Trail, Grand Prairie, TX</p>\n      <h3>(469) 858-0577</h3>\n      <div class=\"visit-actions\">\n        <a href=\"https://www.google.com/maps/search/?api=1&query=2324%20W%20Warrior%20Trail%2C%20Grand%20Prairie%2C%20TX\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-outline\">Get Directions</a>\n        <a routerLink=\"/plan-your-visit\" class=\"btn btn-orange\">Plan Your Visit</a>\n      </div>\n    </div>\n  </section>\n</main>\n\n<!-- Video Modal -->\n<div class=\"video-modal\" *ngIf=\"activeVideoUrl\" (click)=\"closeVideo()\">\n  <div class=\"video-modal-box\" (click)=\"$event.stopPropagation()\">\n    <button class=\"video-modal-close\" (click)=\"closeVideo()\" aria-label=\"Close video\">\n      <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.8\" width=\"18\" height=\"18\" aria-hidden=\"true\">\n        <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/>\n      </svg>\n    </button>\n    <iframe [src]=\"activeVideoUrl\" title=\"Bolder Adventure Park Video\" frameborder=\"0\" allow=\"autoplay; encrypted-media; fullscreen\" allowfullscreen></iframe>\n  </div>\n</div>\n", styles: ["// Home component uses the global styles from app.component.scss (ViewEncapsulation.None)\n// Only add HOME-SPECIFIC overrides or additions here\n\n// Ensure hero video top offset accounts for promo strip + nav\n.hero {\n  padding-top: 148px;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  LIVE EVENTS CAROUSEL (Home Page)\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.home-events-section {\n  background: var(--black);\n  padding: clamp(4rem, 7vw, 6rem) 1.5rem;\n}\n\n.home-events-header {\n  max-width: 1200px;\n  margin: 0 auto 2.5rem;\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 0.75rem 2rem;\n}\n\n.home-events-kicker {\n  width: 100%;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin: 0;\n}\n\n.home-events-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0;\n  flex: 1;\n  span { font-family: var(--font-display); }\n}\n\n.home-events-viewall {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--orange);\n  text-decoration: none;\n  white-space: nowrap;\n  transition: opacity 0.2s;\n  &:hover { opacity: 0.75; }\n}\n.le-carousel-card {\n  display: grid;\n  grid-template-columns: 55% 1fr;\n  background: #0d1219;\n  border-radius: 20px;\n  overflow: hidden;\n  min-height: 520px;\n  border: 1px solid rgba(255,255,255,0.07);\n\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n// \u2500\u2500 Image panel \u2500\u2500\n.le-car-image-wrap {\n  position: relative;\n  overflow: hidden;\n  min-height: 420px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.6s ease;\n  }\n\n  &:hover img { transform: scale(1.03); }\n}\n\n.le-car-img-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to right, transparent 60%, #0d1219 100%);\n  pointer-events: none;\n}\n\n// \"NEXT UP 01/03\" badge\n.le-car-next-badge {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  z-index: 5;\n}\n\n// Prev / Next arrows\n.le-car-arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(255,255,255,0.25);\n  background: rgba(0,0,0,0.5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 5;\n  transition: background 0.2s, border-color 0.2s;\n  backdrop-filter: blur(4px);\n\n  &:hover { background: var(--orange); border-color: var(--orange); }\n}\n\n.le-car-prev { left: 1rem; }\n.le-car-next { right: 1rem; }\n\n// \u2500\u2500 Content panel \u2500\u2500\n.le-car-copy {\n  padding: clamp(2rem, 4vw, 3rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0;\n}\n\n.le-car-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.6rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 0.95;\n  margin: 0 0 1.25rem;\n\n  span { font-family: var(--font-display); }\n}\n\n.le-car-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n\n  span {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 600;\n    color: rgba(255,255,255,0.55);\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    letter-spacing: 0.02em;\n  }\n}\n\n.le-car-sep { color: rgba(255,255,255,0.25) !important; }\n\n.le-car-desc {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.65;\n  margin: 0 0 1.5rem;\n}\n\n// Countdown boxes\n.le-car-countdown {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n\n.le-car-cd-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 10px;\n  padding: 0.7rem 1rem;\n  min-width: 62px;\n  text-align: center;\n}\n\n.le-car-cd-num {\n  font-family: var(--font-display);\n  font-size: 2rem;\n  color: var(--white);\n  line-height: 1;\n}\n\n.le-car-cd-label {\n  font-family: var(--font-ui);\n  font-size: 0.6rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.25rem;\n}\n\n.le-car-actions {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.75rem;\n}\n\n.le-car-detail-link {\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.45);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n// Dot indicators\n.le-car-dots {\n  display: flex;\n  gap: 0.5rem;\n}\n\n@keyframes dot-progress {\n  from { width: 0%; }\n  to   { width: 100%; }\n}\n\n.le-car-dot {\n  position: relative;\n  overflow: hidden;\n  width: 32px;\n  height: 4px;\n  border-radius: 2px;\n  background: rgba(255,255,255,0.2);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  transition: width 0.25s;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    width: 0%;\n    background: var(--orange);\n    border-radius: 2px;\n  }\n\n  &.is-active {\n    width: 48px;\n\n    &::after {\n      animation: dot-progress 5s linear forwards;\n    }\n  }\n}\n\n//  THE ROUTE AHEAD (Timeline)\n"] }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i2.SeoService }]; }, { heroVideoRef: [{
            type: ViewChild,
            args: ['heroVideo']
        }] }); })();
//# sourceMappingURL=home.component.js.map