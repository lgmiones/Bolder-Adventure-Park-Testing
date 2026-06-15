import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/router";
import * as i5 from "@angular/common";
function FaqsComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "button", 22);
    i0.ɵɵlistener("click", function FaqsComponent_div_12_div_4_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const fi_r5 = restoredCtx.index; const gi_r2 = i0.ɵɵnextContext().index; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.toggleFaq(ctx_r6.getFaqIndex(gi_r2, fi_r5)); });
    i0.ɵɵelementStart(2, "span", 23);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 24);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 25)(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const fi_r5 = ctx.index;
    const gi_r2 = i0.ɵɵnextContext().index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-open", ctx_r3.openFaqs.has(ctx_r3.getFaqIndex(gi_r2, fi_r5)));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(faq_r4.q);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.openFaqs.has(ctx_r3.getFaqIndex(gi_r2, fi_r5)) ? "\u2212" : "+");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-open", ctx_r3.openFaqs.has(ctx_r3.getFaqIndex(gi_r2, fi_r5)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(faq_r4.a);
} }
function FaqsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "h3", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19);
    i0.ɵɵtemplate(4, FaqsComponent_div_12_div_4_Template, 9, 7, "div", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const gi_r2 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", gi_r2 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r1.category);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", group_r1.faqs);
} }
export class FaqsComponent {
    constructor(seo) {
        this.seo = seo;
        this.openFaqs = new Set();
        this.faqGroups = [
            {
                category: 'General',
                faqs: [
                    { q: 'Do I have to pay if I\'m not participating?', a: 'A non-participating adult (observer) does not need to purchase a ticket — however, we have limited seating for observers. All children must have a valid ticket to enter the park area.' },
                    { q: 'What form of payment do you accept?', a: 'We accept all major credit and debit cards, as well as Apple Pay and Google Pay. Cash is not accepted on site.' },
                    { q: 'Is smoking or tobacco allowed in the park?', a: 'Bolder Adventure Park is a completely smoke-free environment. Smoking and tobacco products are not permitted anywhere on the premises.' },
                    { q: 'Is outside food or drink allowed?', a: 'Outside food and drinks are not permitted inside the park. We have a café on-site with a variety of food and drinks available for purchase.' }
                ]
            },
            {
                category: 'Tickets & Booking',
                faqs: [
                    { q: 'Do I need a parent pass for a birthday party booking?', a: 'Yes, each birthday party package includes 2 complimentary parent passes. Additional adult passes can be purchased at a discounted rate when booking a party.' },
                    { q: 'Do you require reservations for the Ropes Course or Via Ferrata?', a: 'Yes! The Ropes Course and Mountain Experience (Via Ferrata) require advance reservations to guarantee your time slot. We highly recommend booking online in advance to avoid disappointment.' },
                    { q: 'Can I buy tickets at the door?', a: 'Walk-in tickets are available subject to capacity. However, we strongly recommend booking online in advance for the best price and to guarantee entry, especially on weekends.' }
                ]
            },
            {
                category: 'Safety & Restrictions',
                faqs: [
                    { q: 'What are the age / height / weight restrictions?', a: 'Most Base Camp activities are suitable for all ages. Aerial and ropes activities require a minimum height of 42"–54" depending on the attraction. Some aerial attractions have maximum weight limits of 88–265 lbs with gear.' },
                    { q: 'Do I have to rent shoes?', a: 'Grip socks are required for the Jump Pad and are available for purchase at the park. Regular athletic shoes or sneakers are recommended for all other attractions.' },
                    { q: 'Is there a place to store my belongings inside the park?', a: 'Yes! Lockers are available on-site for a small fee. We recommend leaving valuables in a locker while you explore the park.' }
                ]
            }
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'FAQs',
            description: 'Frequently asked questions about Bolder Adventure Park — tickets, age requirements, safety, group bookings, and more.',
            path: '/faqs',
            keywords: 'adventure park FAQ, age requirements, safety, tickets, Grand Prairie park questions'
        });
    }
    toggleFaq(globalIndex) {
        if (this.openFaqs.has(globalIndex)) {
            this.openFaqs.delete(globalIndex);
        }
        else {
            this.openFaqs.add(globalIndex);
        }
    }
    getFaqIndex(groupIndex, faqIndex) {
        let count = 0;
        for (let i = 0; i < groupIndex; i++) {
            count += this.faqGroups[i].faqs.length;
        }
        return count + faqIndex;
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
FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
FaqsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 33, vars: 1, consts: [[1, "inner-page", "faqs-page"], ["title", "Frequently Asked Questions", "subtitle", "Have a question? Explore our list of frequently asked questions. If you can't find the answer, contact us and our friendly team will be happy to assist.", "backgroundImage", "assets/carousel-images/Carousel-6.jpg", "tag", "Got Questions?"], ["speed", "slow"], [1, "ip-section"], [1, "ip-container"], [1, "faq-page-intro", "sr", "sr-up"], ["routerLink", "/contact-us", 1, "ip-link"], [1, "faq-groups"], ["class", "faq-group sr sr-up", 4, "ngFor", "ngForOf"], [1, "faq-contact-prompt", "sr", "sr-up"], [1, "faq-contact-actions"], ["routerLink", "/contact-us", 1, "btn", "btn-orange"], ["href", "tel:+14698580577", 1, "btn", "btn-outline"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*1jsekva*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU2ODQwJGo1OCRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], [1, "faq-group", "sr", "sr-up"], [1, "faq-group-title"], [1, "faq-list"], ["class", "faq-item", 3, "is-open", 4, "ngFor", "ngForOf"], [1, "faq-item"], ["type", "button", 1, "faq-trigger", 3, "click"], [1, "faq-q"], [1, "faq-plus"], [1, "faq-body"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "p");
        i0.ɵɵtext(7, " Have a question? Explore our FAQ below. If you can't find the answer, please ");
        i0.ɵɵelementStart(8, "a", 6);
        i0.ɵɵtext(9, "contact us");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(10, " and our friendly team will be happy to assist you. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵtemplate(12, FaqsComponent_div_12_Template, 5, 3, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 9)(14, "p");
        i0.ɵɵtext(15, "Still have questions? We're happy to help.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 10)(17, "a", 11);
        i0.ɵɵtext(18, "Contact Us");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "a", 12);
        i0.ɵɵtext(20, "(469) 858-0577");
        i0.ɵɵelementEnd()()()()();
        i0.ɵɵelementStart(21, "div", 4)(22, "div", 13)(23, "div")(24, "div", 14);
        i0.ɵɵtext(25, "Book Now");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "h2");
        i0.ɵɵtext(27, "Book Your Next Bolder Adventure Now!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, " Book your tickets in advance to avoid disappointment and guarantee the best price! ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "div", 15)(31, "a", 16);
        i0.ɵɵtext(32, "Get Tickets");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.faqGroups);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.RouterLinkWithHref, i5.NgForOf], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 900px; margin: 0 auto; }\n.ip-link[_ngcontent-%COMP%] { color:var(--orange);font-weight:700;text-decoration:none; &:hover { text-decoration:underline; } }\n\n.faq-page-intro[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  p { font-family:var(--font-body);font-size:1rem;color:var(--muted);line-height:1.7; }\n}\n\n.faq-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.faq-group-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 3vw, 2.4rem);\n  color: var(--orange);\n  margin: 0 0 1.25rem;\n  text-transform: uppercase;\n  line-height: 1;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(244,81,19,0.25);\n}\n\n.faq-list[_ngcontent-%COMP%] { display:flex;flex-direction:column;gap:0.75rem; }\n.faq-item[_ngcontent-%COMP%] { background:var(--panel);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color 0.2s; &.is-open { border-color:rgba(244,81,19,0.35); } }\n.faq-trigger[_ngcontent-%COMP%] { width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.5rem;background:none;border:none;cursor:pointer;text-align:left;gap:1rem; }\n.faq-q[_ngcontent-%COMP%] { font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.4rem);color:var(--white);text-transform:uppercase;line-height:1.1; }\n.faq-plus[_ngcontent-%COMP%] { font-size:1.8rem;color:var(--orange);line-height:1;flex-shrink:0; }\n.faq-body[_ngcontent-%COMP%] { max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.35s ease; &.is-open { max-height:300px;padding:0 1.5rem 1.25rem; } p { font-family:var(--font-body);font-size:0.9rem;color:var(--muted);line-height:1.7;margin:0; } }\n\n.faq-contact-prompt[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  text-align: center;\n  p { font-family:var(--font-body);font-size:1rem;color:var(--muted);margin-bottom:1.5rem; }\n}\n\n.faq-contact-actions[_ngcontent-%COMP%] { display:flex;justify-content:center;gap:1rem;flex-wrap:wrap; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FaqsComponent, [{
        type: Component,
        args: [{ selector: 'app-faqs', template: "<div class=\"inner-page faqs-page\">\n  <app-page-hero\n    title=\"Frequently Asked Questions\"\n    subtitle=\"Have a question? Explore our list of frequently asked questions. If you can't find the answer, contact us and our friendly team will be happy to assist.\"\n    backgroundImage=\"assets/carousel-images/Carousel-6.jpg\"\n    tag=\"Got Questions?\"\n  >\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <section class=\"ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"faq-page-intro sr sr-up\">\n        <p>\n          Have a question? Explore our FAQ below. If you can't find the answer,\n          please <a routerLink=\"/contact-us\" class=\"ip-link\">contact us</a> and\n          our friendly team will be happy to assist you.\n        </p>\n      </div>\n\n      <div class=\"faq-groups\">\n        <div\n          class=\"faq-group sr sr-up\"\n          *ngFor=\"let group of faqGroups; let gi = index\"\n          [attr.data-sr-delay]=\"gi * 0.1 + 's'\"\n        >\n          <h3 class=\"faq-group-title\">{{ group.category }}</h3>\n          <div class=\"faq-list\">\n            <div\n              class=\"faq-item\"\n              *ngFor=\"let faq of group.faqs; let fi = index\"\n              [class.is-open]=\"openFaqs.has(getFaqIndex(gi, fi))\"\n            >\n              <button\n                class=\"faq-trigger\"\n                type=\"button\"\n                (click)=\"toggleFaq(getFaqIndex(gi, fi))\"\n              >\n                <span class=\"faq-q\">{{ faq.q }}</span>\n                <span class=\"faq-plus\">{{\n                  openFaqs.has(getFaqIndex(gi, fi)) ? \"\u2212\" : \"+\"\n                }}</span>\n              </button>\n              <div\n                class=\"faq-body\"\n                [class.is-open]=\"openFaqs.has(getFaqIndex(gi, fi))\"\n              >\n                <p>{{ faq.a }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"faq-contact-prompt sr sr-up\">\n        <p>Still have questions? We're happy to help.</p>\n        <div class=\"faq-contact-actions\">\n          <a routerLink=\"/contact-us\" class=\"btn btn-orange\">Contact Us</a>\n          <a href=\"tel:+14698580577\" class=\"btn btn-outline\">(469) 858-0577</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA Banner -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Now</div>\n        <h2>Book Your Next Bolder Adventure Now!</h2>\n        <p>\n          Book your tickets in advance to avoid disappointment and guarantee the\n          best price!\n        </p>\n      </div>\n      <div class=\"cta-actions\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home?_gl=1*1jsekva*_gcl_au*MTU5NTM0OTU4OS4xNzgwNDQ1MjYw*FPAU*MTYzNTc3MDEuMTc3NjA2NTgwNQ..*_ga*NTYyMjA4NDkzLjE3NzYwNjU4MDU.*_ga_42GXW9EFND*czE3ODA3NTM2NjEkbzYxJGcxJHQxNzgwNzU2ODQwJGo1OCRsMCRoMA..*_fplc*N3lueDFvWVNob0xRbUNYRU5IWGxuQmhtZVJuTGdvbVFucjNWQWFuRDZDNTVRcGM0MG52eEp3M0llMG9ldXF5MTU1cXpWJTJGUzRTS3ZiVUd5MzQ5bkZ2VTJjUk1QMEI1alJ1YVclMkJXWjR1YUFLWWtDSWh3ZkN4YVRZazJLb3loZyUzRCUzRA..\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-dark btn-lg\"\n          >Get Tickets</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 900px; margin: 0 auto; }\n.ip-link { color:var(--orange);font-weight:700;text-decoration:none; &:hover { text-decoration:underline; } }\n\n.faq-page-intro {\n  margin-bottom: 3rem;\n  p { font-family:var(--font-body);font-size:1rem;color:var(--muted);line-height:1.7; }\n}\n\n.faq-groups {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.faq-group-title {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 3vw, 2.4rem);\n  color: var(--orange);\n  margin: 0 0 1.25rem;\n  text-transform: uppercase;\n  line-height: 1;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid rgba(244,81,19,0.25);\n}\n\n.faq-list { display:flex;flex-direction:column;gap:0.75rem; }\n.faq-item { background:var(--panel);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:border-color 0.2s; &.is-open { border-color:rgba(244,81,19,0.35); } }\n.faq-trigger { width:100%;display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.5rem;background:none;border:none;cursor:pointer;text-align:left;gap:1rem; }\n.faq-q { font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.4rem);color:var(--white);text-transform:uppercase;line-height:1.1; }\n.faq-plus { font-size:1.8rem;color:var(--orange);line-height:1;flex-shrink:0; }\n.faq-body { max-height:0;overflow:hidden;transition:max-height 0.35s ease,padding 0.35s ease; &.is-open { max-height:300px;padding:0 1.5rem 1.25rem; } p { font-family:var(--font-body);font-size:0.9rem;color:var(--muted);line-height:1.7;margin:0; } }\n\n.faq-contact-prompt {\n  margin-top: 4rem;\n  text-align: center;\n  p { font-family:var(--font-body);font-size:1rem;color:var(--muted);margin-bottom:1.5rem; }\n}\n\n.faq-contact-actions { display:flex;justify-content:center;gap:1rem;flex-wrap:wrap; }\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=faqs.component.js.map