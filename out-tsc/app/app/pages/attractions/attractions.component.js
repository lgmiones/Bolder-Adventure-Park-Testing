import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
function AttractionsComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function AttractionsComponent_button_11_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const tab_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.setTab(tab_r2.id); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r0.activeTab === tab_r2.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tab_r2.label, " ");
} }
function AttractionsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 30);
    i0.ɵɵelement(2, "img", 31)(3, "div", 32);
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 34)(7, "h3", 35);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 36);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r6 * 0.06 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", card_r5.image, i0.ɵɵsanitizeUrl)("alt", card_r5.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", card_r5.category === "base" ? "Base Camp" : card_r5.category === "mountain" ? "Mountain Course" : "Ropes Course", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(card_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.desc);
} }
export class AttractionsComponent {
    constructor(seo) {
        this.seo = seo;
        this.activeTab = 'all';
        this.tabs = [
            { id: 'all', label: 'All Attractions' },
            { id: 'base', label: 'Base Camp' },
            { id: 'mountain', label: 'Mountain Course' },
            { id: 'ropes', label: 'Ropes Course' },
        ];
        this.cards = [
            { title: 'Ropes Course', image: 'assets/All-Attraction/Ropes-courses.jpg', category: 'ropes', desc: '4-level aerial ropes course with zip lines and climbing challenges. Great for all thrill levels.' },
            { title: 'Mountain Experience', image: 'assets/All-Attraction/Mountain-experience.jpg', category: 'mountain', desc: 'Two mountain trails to explore — featuring the iconic Free Fall Drop at the top.' },
            { title: 'Zip Lines', image: 'assets/All-Attraction/Zip-lines.jpg', category: 'ropes', desc: 'Soar across the park on our epic zip lines. A crowd favorite!' },
            { title: 'Tubing Slides', image: 'assets/All-Attraction/Tubing-slides.jpg', category: 'base', desc: 'Speed down our thrilling tubing slides — Speed Shot or Rolling Hills, your choice.' },
            { title: 'Blaster Zone', image: 'assets/All-Attraction/Blaster-zone.jpg', category: 'base', desc: 'Team-based laser blaster arena. Strategy, speed, and tons of fun.' },
            { title: 'Bumper Cars', image: 'assets/All-Attraction/Bumper-cars.jpg', category: 'base', desc: 'Spin Zone bumper cars for the whole family. Crash, spin, and laugh.' },
            { title: 'Free Fall Drop', image: 'assets/All-Attraction/Free-fall-drop.jpg', category: 'mountain', desc: 'The ultimate drop experience. Step off the edge and fall through a trap door or from the top of the arch.' },
            { title: 'Jump Pad', image: 'assets/All-Attraction/Jump-pads.png', category: 'base', desc: 'Bounce and jump on our giant inflatable jump pads. Socks required.' },
            { title: 'Adventure Nets', image: 'assets/All-Attraction/Adventure-nets.jpg', category: 'base', desc: 'Multi-level adventure nets for climbing, crawling, and exploring.' },
            { title: 'Exploration Playground', image: 'assets/All-Attraction/Exploration-play.jpg', category: 'base', desc: 'A massive playground for younger adventurers with slides, climbers, and more.' },
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Attractions',
            description: 'Explore all attractions at Bolder Adventure Park — ropes course, zip lines, mountain experience, free fall drop, bumper cars, and more in Grand Prairie, TX.',
            path: '/attractions',
            keywords: 'ropes course, zip lines, rock climbing, free fall drop, bumper cars, adventure park attractions'
        });
    }
    get filteredCards() {
        if (this.activeTab === 'all')
            return this.cards;
        return this.cards.filter(c => c.category === this.activeTab);
    }
    setTab(id) {
        this.activeTab = id;
        setTimeout(() => {
            document.querySelectorAll('.attraction-cards-enhanced .sr:not(.sr-visible)').forEach(el => {
                var _a;
                const htmlEl = el;
                htmlEl.style.transitionDelay = (_a = htmlEl.dataset['srDelay']) !== null && _a !== void 0 ? _a : '0s';
                htmlEl.classList.add('sr-visible');
            });
        }, 50);
    }
    trackBy(_, item) {
        return this.activeTab + '_' + item.title;
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
AttractionsComponent.ɵfac = function AttractionsComponent_Factory(t) { return new (t || AttractionsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
AttractionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttractionsComponent, selectors: [["app-attractions"]], decls: 72, vars: 3, consts: [[1, "inner-page", "attractions-page"], ["title", "Attractions at Bolder", "subtitle", "We have attractions to suit all ages. Explore the options below.", "backgroundImage", "assets/carousel-images/Carousel-1.jpg", "tag", "Explore Everything"], ["speed", "slow"], [1, "ip-section"], [1, "ip-container"], [1, "section-title", "sr", "sr-up"], ["data-sr-delay", "0.1s", 1, "attraction-tabs", "sr", "sr-up"], ["class", "attraction-tab", "type", "button", 3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "attraction-cards-enhanced"], ["class", "ace-card sr sr-up", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ip-section", "parkmap-section"], [1, "parkmap-wrapper", "sr", "sr-scale"], [1, "parkmap-glow"], ["routerLink", "/contact-us", 1, "parkmap-link"], ["src", "assets/images/Parkmap.png", "alt", "Bolder Adventure Park Map", 1, "parkmap-img"], [1, "parkmap-badge"], [1, "ip-section", "passes-promo-section"], [1, "passes-promo-grid"], [1, "passes-promo-card", "sr", "sr-left"], [1, "ppc-icon"], ["routerLink", "/memberships", 1, "btn", "btn-outline-orange"], ["data-sr-delay", "0.1s", 1, "passes-promo-card", "sr", "sr-right"], ["href", "https://s.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "btn", "btn-outline-orange"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*louhhd*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3OTIzMzYkbzYyJGcxJHQxNzgwNzkyOTA4JGo1NiRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], ["routerLink", "/plan-your-visit", 1, "btn", "btn-outline", "btn-lg"], ["type", "button", 1, "attraction-tab", 3, "click"], [1, "ace-card", "sr", "sr-up"], [1, "ace-img-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "ace-img-overlay"], [1, "ace-cat-badge"], [1, "ace-body"], [1, "ace-title"], [1, "ace-desc"]], template: function AttractionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "p");
        i0.ɵɵtext(7, "What's Inside");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "h2");
        i0.ɵɵtext(9, "All Of Our Attractions");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵtemplate(11, AttractionsComponent_button_11_Template, 2, 3, "button", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 8);
        i0.ɵɵtemplate(13, AttractionsComponent_div_13_Template, 11, 6, "div", 9);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "section", 10)(15, "div", 4)(16, "div", 5)(17, "p");
        i0.ɵɵtext(18, "Navigate The Park");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h2");
        i0.ɵɵtext(20, "Park Map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "span");
        i0.ɵɵtext(22, "Get to know every corner of Bolder Adventure Park before you arrive.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(23, "div", 11);
        i0.ɵɵelement(24, "div", 12);
        i0.ɵɵelementStart(25, "a", 13);
        i0.ɵɵelement(26, "img", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 15)(28, "span");
        i0.ɵɵtext(29, "\uD83D\uDDFA\uFE0F Bolder Adventure Park \u2014 Grand Prairie, TX");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(30, "section", 16)(31, "div", 4)(32, "div", 5)(33, "p");
        i0.ɵɵtext(34, "Maximize Your Fun");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "h2");
        i0.ɵɵtext(36, "Book Online & Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "span");
        i0.ɵɵtext(38, "Pre-booking online is the best and most cost-effective way to guarantee your spot at Bolder.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(39, "div", 17)(40, "div", 18)(41, "div", 19);
        i0.ɵɵtext(42, "\uD83C\uDF9F\uFE0F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "h3");
        i0.ɵɵtext(44, "Annual Passes & Memberships");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "p");
        i0.ɵɵtext(46, " Get the most out of Bolder Adventure Park with an annual pass. The annual pass gives you unlimited access to all ground and aerial attractions. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "a", 20);
        i0.ɵɵtext(48, "View Memberships");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(49, "div", 21)(50, "div", 19);
        i0.ɵɵtext(51, "\uD83C\uDFD5\uFE0F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "h3");
        i0.ɵɵtext(53, "Summer Camps");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "p");
        i0.ɵɵtext(55, " Bolder summer camps run from 1:00 PM to 5:00 PM, Monday \u2013 Friday, with activities including climbing, zip-lining, and more. All indoors, climate-controlled. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "a", 22);
        i0.ɵɵtext(57, "View Summer Camps");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(58, "div", 4)(59, "div", 23)(60, "div")(61, "div", 24);
        i0.ɵɵtext(62, "Book Now");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "h2");
        i0.ɵɵtext(64, "Ready For Your Next Adventure?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "p");
        i0.ɵɵtext(66, "Book tickets online for the best price and guaranteed entry.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(67, "div", 25)(68, "a", 26);
        i0.ɵɵtext(69, "Get Tickets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "a", 27);
        i0.ɵɵtext(71, "Plan Your Visit");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filteredCards)("ngForTrackBy", ctx.trackBy);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.NgForOf, i5.RouterLinkWithHref], styles: [".inner-page[_ngcontent-%COMP%] {\n  padding-top: 148px;\n  background: var(--black);\n  color: var(--white);\n  min-height: 100vh;\n}\n\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n\n.ip-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n\n.attraction-cards-enhanced[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n\n.ace-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255,255,255,0.07);\n  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(244,81,19,0.3);\n    box-shadow: 0 20px 50px rgba(0,0,0,0.4);\n\n    .ace-img-wrap img { transform: scale(1.06); }\n  }\n}\n\n\n@media (max-width: 700px) {\n  .attraction-cards-enhanced[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    gap: 1rem;\n    margin-top: 2rem;\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-bottom: 1rem;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar { display: none; }\n  }\n\n  .ace-card[_ngcontent-%COMP%] {\n    flex: 0 0 80vw;\n    max-width: 320px;\n    scroll-snap-align: start;\n  }\n}\n\n.ace-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.4s ease;\n    display: block;\n  }\n}\n\n.ace-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%);\n}\n\n.ace-cat-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  background: rgba(244,81,19,0.9);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.65rem;\n  border-radius: 4px;\n}\n\n.ace-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n\n.ace-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--white);\n  margin: 0 0 0.6rem;\n  line-height: 1;\n}\n\n.ace-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.875rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n.passes-promo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n\n  @media (max-width: 700px) { grid-template-columns: 1fr; }\n}\n\n.passes-promo-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: border-color 0.25s;\n\n  &:hover { border-color: rgba(244,81,19,0.3); }\n}\n\n.ppc-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.passes-promo-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--white);\n  margin: 0;\n  line-height: 1;\n}\n\n.passes-promo-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n\n.btn-outline-orange[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 0.6rem 1.5rem;\n  background: transparent;\n  color: var(--orange);\n  border: 2px solid var(--orange);\n  border-radius: 999px;\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background 0.2s, color 0.2s, transform 0.15s;\n  align-self: flex-start;\n\n  &:hover {\n    background: var(--orange);\n    color: #fff;\n    transform: translateY(-2px);\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttractionsComponent, [{
        type: Component,
        args: [{ selector: 'app-attractions', template: "<div class=\"inner-page attractions-page\">\n  <app-page-hero\n    title=\"Attractions at Bolder\"\n    subtitle=\"We have attractions to suit all ages. Explore the options below.\"\n    backgroundImage=\"assets/carousel-images/Carousel-1.jpg\"\n    tag=\"Explore Everything\"\n  >\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Attraction Filter + Grid -->\n  <section class=\"ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>What's Inside</p>\n        <h2>All Of Our Attractions</h2>\n      </div>\n\n      <!-- Filter tabs -->\n      <div class=\"attraction-tabs sr sr-up\" data-sr-delay=\"0.1s\">\n        <button\n          *ngFor=\"let tab of tabs\"\n          class=\"attraction-tab\"\n          [class.is-active]=\"activeTab === tab.id\"\n          (click)=\"setTab(tab.id)\"\n          type=\"button\"\n        >\n          {{ tab.label }}\n        </button>\n      </div>\n\n      <!-- Cards grid -->\n      <div class=\"attraction-cards-enhanced\">\n        <div\n          class=\"ace-card sr sr-up\"\n          *ngFor=\"let card of filteredCards; let i = index; trackBy: trackBy\"\n          [attr.data-sr-delay]=\"i * 0.06 + 's'\"\n        >\n          <div class=\"ace-img-wrap\">\n            <img [src]=\"card.image\" [alt]=\"card.title\" loading=\"lazy\" />\n            <div class=\"ace-img-overlay\"></div>\n            <div class=\"ace-cat-badge\">\n              {{\n                card.category === \"base\"\n                  ? \"Base Camp\"\n                  : card.category === \"mountain\"\n                    ? \"Mountain Course\"\n                    : \"Ropes Course\"\n              }}\n            </div>\n          </div>\n          <div class=\"ace-body\">\n            <h3 class=\"ace-title\">{{ card.title }}</h3>\n            <p class=\"ace-desc\">{{ card.desc }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Park Map -->\n  <section class=\"ip-section parkmap-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Navigate The Park</p>\n        <h2>Park Map</h2>\n        <span\n          >Get to know every corner of Bolder Adventure Park before you\n          arrive.</span\n        >\n      </div>\n      <div class=\"parkmap-wrapper sr sr-scale\">\n        <div class=\"parkmap-glow\"></div>\n        <a routerLink=\"/contact-us\" class=\"parkmap-link\">\n          <img\n            src=\"assets/images/Parkmap.png\"\n            alt=\"Bolder Adventure Park Map\"\n            class=\"parkmap-img\"\n          />\n        </a>\n        <div class=\"parkmap-badge\">\n          <span>\uD83D\uDDFA\uFE0F Bolder Adventure Park \u2014 Grand Prairie, TX</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Passes section -->\n  <section class=\"ip-section passes-promo-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Maximize Your Fun</p>\n        <h2>Book Online &amp; Save</h2>\n        <span\n          >Pre-booking online is the best and most cost-effective way to\n          guarantee your spot at Bolder.</span\n        >\n      </div>\n\n      <div class=\"passes-promo-grid\">\n        <div class=\"passes-promo-card sr sr-left\">\n          <div class=\"ppc-icon\">\uD83C\uDF9F\uFE0F</div>\n          <h3>Annual Passes &amp; Memberships</h3>\n          <p>\n            Get the most out of Bolder Adventure Park with an annual pass. The\n            annual pass gives you unlimited access to all ground and aerial\n            attractions.\n          </p>\n          <a routerLink=\"/memberships\" class=\"btn btn-outline-orange\"\n            >View Memberships</a\n          >\n        </div>\n        <div class=\"passes-promo-card sr sr-right\" data-sr-delay=\"0.1s\">\n          <div class=\"ppc-icon\">\uD83C\uDFD5\uFE0F</div>\n          <h3>Summer Camps</h3>\n          <p>\n            Bolder summer camps run from 1:00 PM to 5:00 PM, Monday \u2013 Friday,\n            with activities including climbing, zip-lining, and more. All\n            indoors, climate-controlled.\n          </p>\n          <a\n            href=\"https://s.bolderadventurepark.com/\"\n            target=\"_blank\"\n            rel=\"noopener\"\n            class=\"btn btn-outline-orange\"\n            >View Summer Camps</a\n          >\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Now</div>\n        <h2>Ready For Your Next Adventure?</h2>\n        <p>Book tickets online for the best price and guaranteed entry.</p>\n      </div>\n      <div class=\"cta-actions\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*louhhd*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3OTIzMzYkbzYyJGcxJHQxNzgwNzkyOTA4JGo1NiRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-dark btn-lg\"\n          >Get Tickets</a\n        >\n        <a routerLink=\"/plan-your-visit\" class=\"btn btn-outline btn-lg\"\n          >Plan Your Visit</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".inner-page {\n  padding-top: 148px;\n  background: var(--black);\n  color: var(--white);\n  min-height: 100vh;\n}\n\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1200px; margin: 0 auto; }\n\n.ip-kicker {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n/* \u2500\u2500 Enhanced attraction cards \u2500\u2500 */\n.attraction-cards-enhanced {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2rem;\n}\n\n.ace-card {\n  background: var(--panel);\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255,255,255,0.07);\n  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;\n\n  &:hover {\n    transform: translateY(-6px);\n    border-color: rgba(244,81,19,0.3);\n    box-shadow: 0 20px 50px rgba(0,0,0,0.4);\n\n    .ace-img-wrap img { transform: scale(1.06); }\n  }\n}\n\n/* \u2500\u2500 Mobile: horizontal scroll carousel \u2500\u2500 */\n@media (max-width: 700px) {\n  .attraction-cards-enhanced {\n    display: flex;\n    flex-direction: row;\n    overflow-x: auto;\n    scroll-snap-type: x mandatory;\n    gap: 1rem;\n    margin-top: 2rem;\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    padding-bottom: 1rem;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar { display: none; }\n  }\n\n  .ace-card {\n    flex: 0 0 80vw;\n    max-width: 320px;\n    scroll-snap-align: start;\n  }\n}\n\n.ace-img-wrap {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.4s ease;\n    display: block;\n  }\n}\n\n.ace-img-overlay {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%);\n}\n\n.ace-cat-badge {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  background: rgba(244,81,19,0.9);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.65rem;\n  border-radius: 4px;\n}\n\n.ace-body {\n  padding: 1.25rem 1.5rem 1.5rem;\n}\n\n.ace-title {\n  font-family: var(--font-display);\n  font-size: 1.6rem;\n  color: var(--white);\n  margin: 0 0 0.6rem;\n  line-height: 1;\n}\n\n.ace-desc {\n  font-family: var(--font-body);\n  font-size: 0.875rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n/* \u2500\u2500 Passes promo \u2500\u2500 */\n.passes-promo-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n\n  @media (max-width: 700px) { grid-template-columns: 1fr; }\n}\n\n.passes-promo-card {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2.5rem 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  transition: border-color 0.25s;\n\n  &:hover { border-color: rgba(244,81,19,0.3); }\n}\n\n.ppc-icon {\n  font-size: 2.5rem;\n}\n\n.passes-promo-card h3 {\n  font-family: var(--font-display);\n  font-size: 1.8rem;\n  color: var(--white);\n  margin: 0;\n  line-height: 1;\n}\n\n.passes-promo-card p {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n  flex: 1;\n}\n\n.btn-outline-orange {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 0.6rem 1.5rem;\n  background: transparent;\n  color: var(--orange);\n  border: 2px solid var(--orange);\n  border-radius: 999px;\n  font-family: var(--font-ui);\n  font-size: 0.9rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background 0.2s, color 0.2s, transform 0.15s;\n  align-self: flex-start;\n\n  &:hover {\n    background: var(--orange);\n    color: #fff;\n    transform: translateY(-2px);\n  }\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=attractions.component.js.map