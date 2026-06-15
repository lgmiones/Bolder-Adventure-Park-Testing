import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
function MembershipsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtext(1, "Most Popular");
    i0.ɵɵelementEnd();
} }
function MembershipsComponent_div_13_li_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 33);
} if (rf & 2) {
    const f_r8 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", f_r8, i0.ɵɵsanitizeHtml);
} }
function MembershipsComponent_div_13_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pass_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(pass_r2.note);
} }
function MembershipsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, MembershipsComponent_div_13_div_1_Template, 2, 0, "div", 19);
    i0.ɵɵelementStart(2, "div", 20);
    i0.ɵɵelement(3, "img", 21)(4, "div", 22);
    i0.ɵɵelementStart(5, "div", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 24);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 25)(10, "h3", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 27);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "ul", 28);
    i0.ɵɵtemplate(15, MembershipsComponent_div_13_li_15_Template, 1, 1, "li", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, MembershipsComponent_div_13_p_16_Template, 2, 1, "p", 30);
    i0.ɵɵelementStart(17, "a", 31);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pass_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const even_r4 = ctx.even;
    i0.ɵɵstyleProp("--pass-color", pass_r2.color);
    i0.ɵɵclassProp("sr-left", even_r4)("sr-right", !even_r4)("is-featured", pass_r2.popular);
    i0.ɵɵattribute("data-sr-delay", i_r3 * 0.12 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", pass_r2.popular);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", pass_r2.image, i0.ɵɵsanitizeUrl)("alt", pass_r2.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pass_r2.badge);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pass_r2.tagline);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pass_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pass_r2.desc);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", pass_r2.features);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", pass_r2.note);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", pass_r2.cta, " \u2197");
} }
function MembershipsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const b_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r11 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r10.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r10.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(b_r10.desc);
} }
const _c0 = "One annual pass pays for itself after just 2\u20133 visits.";
const _c1 = function () { return { icon: "\uD83D\uDCB0", title: "Save Money", desc: _c0 }; };
const _c2 = "Annual pass holders get priority access at peak times.";
const _c3 = function () { return { icon: "\u26A1", title: "Skip The Line", desc: _c2 }; };
const _c4 = "Come back as many times as you like, all year long.";
const _c5 = function () { return { icon: "\uD83C\uDFAF", title: "Unlimited Visits", desc: _c4 }; };
const _c6 = "Exclusive discounts on food, merchandise, and events.";
const _c7 = function () { return { icon: "\uD83C\uDF81", title: "Member Perks", desc: _c6 }; };
const _c8 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
export class MembershipsComponent {
    constructor(seo) {
        this.seo = seo;
        this.passes = [
            {
                name: 'Annual Blue Pass',
                tagline: 'ONLY $89.99',
                badge: 'Ground Level',
                color: '#119ee8',
                image: 'assets/images/extreme-all-access-pass.jpg',
                desc: 'The Blue Annual Pass gives you unlimited access to all of the ground-level attractions.',
                features: [
                    'Tree House',
                    'Adventure Nets',
                    'Exploration Play Area',
                    'Jump Pad',
                    'Blaster Zone',
                    'Spin Zone Bumper Cars',
                    'Tubing Slides'
                ],
                cta: 'Get Blue Pass'
            },
            {
                name: 'Annual Black Diamond Pass',
                tagline: 'ALL ATTRACTIONS',
                badge: 'All Attractions',
                color: '#f45113',
                popular: true,
                image: 'assets/carousel-images/Carousel-8.jpg',
                desc: 'The Black Diamond Annual Pass gives you unlimited access to all ground and aerial attractions.',
                features: [
                    'Everything in Blue Pass',
                    'Climbing Adventures*',
                    'Ropes Course &amp; Zip Lines',
                    'Mountain Experience via Ferrata',
                    'Free Fall Drop'
                ],
                note: '* Height and weight restrictions apply',
                cta: 'Get Black Diamond'
            }
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Memberships & Passes',
            description: 'Get unlimited access to Bolder Adventure Park with our membership passes. Monthly and annual options available for individuals and families in Grand Prairie, TX.',
            path: '/memberships',
            keywords: 'adventure park membership, unlimited pass, annual pass, Grand Prairie membership'
        });
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
MembershipsComponent.ɵfac = function MembershipsComponent_Factory(t) { return new (t || MembershipsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
MembershipsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MembershipsComponent, selectors: [["app-memberships"]], decls: 37, vars: 11, consts: [[1, "inner-page", "memberships-page"], ["title", "Memberships & Annual Passes", "subtitle", "Ultimate fun, for ultimate value. Access Bolder Adventure Park all year round with unlimited adventures for one great price.", "backgroundImage", "assets/carousel-images/Carousel-3.jpg", "tag", "Unlimited Access"], ["speed", "slow"], [1, "ip-section", "mem-intro-section"], [1, "ip-container"], [1, "mem-intro", "sr", "sr-up"], [1, "ip-section", "mem-passes-section"], [1, "mem-passes-grid"], ["class", "mem-pass-card sr", 3, "sr-left", "sr-right", "is-featured", "--pass-color", 4, "ngFor", "ngForOf"], [1, "ip-section", "mem-why-section"], [1, "section-title", "sr", "sr-up"], [1, "mem-benefits-grid"], ["class", "mem-benefit sr sr-up", 4, "ngFor", "ngForOf"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], ["routerLink", "/contact-us", 1, "btn", "btn-outline", "btn-lg"], [1, "mem-pass-card", "sr"], ["class", "mpc-popular", 4, "ngIf"], [1, "mpc-image-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "mpc-image-overlay"], [1, "mpc-badge"], [1, "mpc-tagline"], [1, "mpc-body"], [1, "mpc-name"], [1, "mpc-desc"], [1, "mpc-features"], [3, "innerHTML", 4, "ngFor", "ngForOf"], ["class", "mpc-note", 4, "ngIf"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "mpc-cta"], [1, "mpc-popular"], [3, "innerHTML"], [1, "mpc-note"], [1, "mem-benefit", "sr", "sr-up"], [1, "mem-benefit-icon"]], template: function MembershipsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "p");
        i0.ɵɵtext(7, "Ultimate fun, for ultimate value. Access Bolder Adventure Park all year round with unlimited adventures for one great price.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9, "Seasonal membership passes such as the Summer Pass are also available.");
        i0.ɵɵelementEnd()()()();
        i0.ɵɵelementStart(10, "section", 6)(11, "div", 4)(12, "div", 7);
        i0.ɵɵtemplate(13, MembershipsComponent_div_13_Template, 19, 19, "div", 8);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "section", 9)(15, "div", 4)(16, "div", 10)(17, "p");
        i0.ɵɵtext(18, "Why Go Annual?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h2");
        i0.ɵɵtext(20, "The Smart Choice For Regular Adventurers");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(21, "div", 11);
        i0.ɵɵtemplate(22, MembershipsComponent_div_22_Template, 7, 4, "div", 12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(23, "div", 4)(24, "div", 13)(25, "div")(26, "div", 14);
        i0.ɵɵtext(27, "Unlimited Fun");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "h2");
        i0.ɵɵtext(29, "Get Your Annual Pass Today!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "p");
        i0.ɵɵtext(31, "Seasonal passes like the Summer Pass are also available. Don't miss out!");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "div", 15)(33, "a", 16);
        i0.ɵɵtext(34, "Buy Now");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "a", 17);
        i0.ɵɵtext(36, "Get In Touch");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", ctx.passes);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction4(6, _c8, i0.ɵɵpureFunction0(2, _c1), i0.ɵɵpureFunction0(3, _c3), i0.ɵɵpureFunction0(4, _c5), i0.ɵɵpureFunction0(5, _c7)));
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.NgForOf, i4.NgIf, i5.RouterLinkWithHref], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n\n\n.mem-intro-section[_ngcontent-%COMP%] { padding-bottom: 0; }\n.mem-intro[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  text-align: center;\n  p { font-family: var(--font-body); font-size: 1.05rem; color: var(--muted); line-height: 1.7; margin: 0 0 0.75rem; }\n}\n\n\n.mem-passes-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  gap: 2rem;\n  align-items: start;\n}\n\n.mem-pass-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n    border-color: rgba(255,255,255,0.14);\n  }\n\n  &.is-featured {\n    border-color: color-mix(in srgb, var(--pass-color, var(--orange)) 40%, transparent);\n    box-shadow: 0 0 40px color-mix(in srgb, var(--pass-color, var(--orange)) 12%, transparent);\n  }\n}\n\n.mpc-popular[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: var(--orange);\n  color: var(--white);\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  padding: 0.3rem 0.75rem;\n  border-radius: 999px;\n  z-index: 10;\n  text-transform: uppercase;\n}\n\n.mpc-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  .mem-pass-card:hover & img { transform: scale(1.05); }\n\n  .mpc-image-overlay {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to bottom, transparent 30%, rgba(3,3,3,0.85));\n  }\n\n  .mpc-badge {\n    position: absolute;\n    bottom: 1rem;\n    left: 1.25rem;\n    background: color-mix(in srgb, var(--pass-color, var(--orange)) 90%, black);\n    color: #fff;\n    font-family: var(--font-display);\n    font-size: 0.8rem;\n    letter-spacing: 0.12em;\n    text-transform: uppercase;\n    padding: 0.3rem 0.8rem;\n    border-radius: 6px;\n  }\n\n  .mpc-tagline {\n    position: absolute;\n    bottom: 1rem;\n    right: 1.25rem;\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    letter-spacing: 0.05em;\n    color: #fff;\n    text-shadow: 0 2px 8px rgba(0,0,0,0.6);\n  }\n}\n\n.mpc-body[_ngcontent-%COMP%] {\n  padding: 1.75rem 1.75rem 2rem;\n  border-top: 3px solid var(--pass-color, var(--orange));\n}\n\n.mpc-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1;\n  margin: 0 0 0.75rem;\n}\n\n.mpc-desc[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.mpc-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.88rem;\n    color: var(--white);\n    padding: 0.45rem 0;\n    border-bottom: 1px solid rgba(255,255,255,0.06);\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n\n    &::before {\n      content: '\u2713';\n      color: var(--pass-color, var(--orange));\n      font-weight: 700;\n      flex-shrink: 0;\n    }\n\n    &:last-child { border-bottom: none; }\n  }\n}\n\n.mpc-note[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.78rem;\n  color: var(--muted);\n  opacity: 0.7;\n  margin: 0 0 1.5rem;\n  font-style: italic;\n}\n\n.mpc-cta[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.9rem 1.5rem;\n  background: var(--pass-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 10px;\n  transition: filter 0.2s, transform 0.2s;\n  margin-top: 0.25rem;\n\n  &:hover {\n    filter: brightness(1.15);\n    transform: translateY(-2px);\n  }\n}\n\n\n.mem-why-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(244,81,19,0.05) 0%, transparent 60%);\n  border-radius: 24px;\n  margin: 0 1.5rem;\n}\n\n.mem-benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.mem-benefit[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.2rem;\n    color: var(--white);\n    text-transform: uppercase;\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.6;\n    margin: 0;\n  }\n}\n\n.mem-benefit-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 1;\n}\n\n\n.section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0.5rem;\n\n  p {\n    font-family: var(--font-display);\n    font-size: 0.9rem;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n    color: var(--orange);\n    margin: 0 0 0.5rem;\n  }\n\n  h2 {\n    font-family: var(--font-display);\n    font-size: clamp(2rem, 5vw, 3.5rem);\n    color: var(--white);\n    text-transform: uppercase;\n    line-height: 1;\n    margin: 0;\n  }\n}\n\n\n.page-cta-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);\n  border: 1px solid rgba(244,81,19,0.25);\n  border-radius: 20px;\n  padding: clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 3rem);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n  margin: 0 1.5rem clamp(3rem, 6vw, 5rem);\n\n  .cta-label {\n    font-family: var(--font-display);\n    font-size: 0.85rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--orange);\n    margin-bottom: 0.5rem;\n  }\n\n  h2 {\n    font-family: var(--font-display);\n    font-size: clamp(1.8rem, 4vw, 2.8rem);\n    color: var(--white);\n    text-transform: uppercase;\n    margin: 0 0 0.5rem;\n    line-height: 1.05;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin: 0;\n  }\n\n  .cta-actions {\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n  }\n}\n\n\n.sr[_ngcontent-%COMP%] { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up[_ngcontent-%COMP%] { transform: translateY(30px); }\n.sr-left[_ngcontent-%COMP%] { transform: translateX(-30px); }\n.sr-right[_ngcontent-%COMP%] { transform: translateX(30px); }\n.sr.sr-visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n\n\n@media (max-width: 600px) {\n  .mem-passes-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .mem-benefits-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\n  .page-cta-banner[_ngcontent-%COMP%] { flex-direction: column; text-align: center; }\n  .cta-actions[_ngcontent-%COMP%] { justify-content: center; }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MembershipsComponent, [{
        type: Component,
        args: [{ selector: 'app-memberships', template: "<div class=\"inner-page memberships-page\">\n\n  <app-page-hero\n    title=\"Memberships &amp; Annual Passes\"\n    subtitle=\"Ultimate fun, for ultimate value. Access Bolder Adventure Park all year round with unlimited adventures for one great price.\"\n    backgroundImage=\"assets/carousel-images/Carousel-3.jpg\"\n    tag=\"Unlimited Access\">\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Intro -->\n  <section class=\"ip-section mem-intro-section\">\n    <div class=\"ip-container\">\n      <div class=\"mem-intro sr sr-up\">\n        <p>Ultimate fun, for ultimate value. Access Bolder Adventure Park all year round with unlimited adventures for one great price.</p>\n        <p>Seasonal membership passes such as the Summer Pass are also available.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- Pass Cards -->\n  <section class=\"ip-section mem-passes-section\">\n    <div class=\"ip-container\">\n      <div class=\"mem-passes-grid\">\n        <div class=\"mem-pass-card sr\"\n             *ngFor=\"let pass of passes; let i = index; let even = even\"\n             [class.sr-left]=\"even\"\n             [class.sr-right]=\"!even\"\n             [attr.data-sr-delay]=\"(i * 0.12) + 's'\"\n             [class.is-featured]=\"pass.popular\"\n             [style.--pass-color]=\"pass.color\">\n\n          <div class=\"mpc-popular\" *ngIf=\"pass.popular\">Most Popular</div>\n\n          <div class=\"mpc-image-wrap\">\n            <img [src]=\"pass.image\" [alt]=\"pass.name\" loading=\"lazy\"/>\n            <div class=\"mpc-image-overlay\"></div>\n            <div class=\"mpc-badge\">{{ pass.badge }}</div>\n            <div class=\"mpc-tagline\">{{ pass.tagline }}</div>\n          </div>\n\n          <div class=\"mpc-body\">\n            <h3 class=\"mpc-name\">{{ pass.name }}</h3>\n            <p class=\"mpc-desc\">{{ pass.desc }}</p>\n\n            <ul class=\"mpc-features\">\n              <li *ngFor=\"let f of pass.features\" [innerHTML]=\"f\"></li>\n            </ul>\n\n            <p class=\"mpc-note\" *ngIf=\"pass.note\">{{ pass.note }}</p>\n\n            <a href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\" target=\"_blank\" rel=\"noopener\" class=\"mpc-cta\">{{ pass.cta }} \u2197</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Why Annual Pass -->\n  <section class=\"ip-section mem-why-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>Why Go Annual?</p>\n        <h2>The Smart Choice For Regular Adventurers</h2>\n      </div>\n      <div class=\"mem-benefits-grid\">\n        <div class=\"mem-benefit sr sr-up\" *ngFor=\"let b of [\n          {icon:'\uD83D\uDCB0', title:'Save Money', desc:'One annual pass pays for itself after just 2\u20133 visits.'},\n          {icon:'\u26A1', title:'Skip The Line', desc:'Annual pass holders get priority access at peak times.'},\n          {icon:'\uD83C\uDFAF', title:'Unlimited Visits', desc:'Come back as many times as you like, all year long.'},\n          {icon:'\uD83C\uDF81', title:'Member Perks', desc:'Exclusive discounts on food, merchandise, and events.'}\n        ]; let i = index\" [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <div class=\"mem-benefit-icon\">{{ b.icon }}</div>\n          <h4>{{ b.title }}</h4>\n          <p>{{ b.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Unlimited Fun</div>\n        <h2>Get Your Annual Pass Today!</h2>\n        <p>Seasonal passes like the Summer Pass are also available. Don't miss out!</p>\n      </div>\n      <div class=\"cta-actions\">\n        <a href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-dark btn-lg\">Buy Now</a>\n        <a routerLink=\"/contact-us\" class=\"btn btn-outline btn-lg\">Get In Touch</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1200px; margin: 0 auto; }\n\n/* \u2500\u2500 Intro \u2500\u2500 */\n.mem-intro-section { padding-bottom: 0; }\n.mem-intro {\n  max-width: 700px;\n  margin: 0 auto;\n  text-align: center;\n  p { font-family: var(--font-body); font-size: 1.05rem; color: var(--muted); line-height: 1.7; margin: 0 0 0.75rem; }\n}\n\n/* \u2500\u2500 Pass Cards Grid \u2500\u2500 */\n.mem-passes-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));\n  gap: 2rem;\n  align-items: start;\n}\n\n.mem-pass-card {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 20px 60px rgba(0,0,0,0.5);\n    border-color: rgba(255,255,255,0.14);\n  }\n\n  &.is-featured {\n    border-color: color-mix(in srgb, var(--pass-color, var(--orange)) 40%, transparent);\n    box-shadow: 0 0 40px color-mix(in srgb, var(--pass-color, var(--orange)) 12%, transparent);\n  }\n}\n\n.mpc-popular {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: var(--orange);\n  color: var(--white);\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  padding: 0.3rem 0.75rem;\n  border-radius: 999px;\n  z-index: 10;\n  text-transform: uppercase;\n}\n\n.mpc-image-wrap {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.5s ease;\n  }\n\n  .mem-pass-card:hover & img { transform: scale(1.05); }\n\n  .mpc-image-overlay {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to bottom, transparent 30%, rgba(3,3,3,0.85));\n  }\n\n  .mpc-badge {\n    position: absolute;\n    bottom: 1rem;\n    left: 1.25rem;\n    background: color-mix(in srgb, var(--pass-color, var(--orange)) 90%, black);\n    color: #fff;\n    font-family: var(--font-display);\n    font-size: 0.8rem;\n    letter-spacing: 0.12em;\n    text-transform: uppercase;\n    padding: 0.3rem 0.8rem;\n    border-radius: 6px;\n  }\n\n  .mpc-tagline {\n    position: absolute;\n    bottom: 1rem;\n    right: 1.25rem;\n    font-family: var(--font-display);\n    font-size: 1.1rem;\n    letter-spacing: 0.05em;\n    color: #fff;\n    text-shadow: 0 2px 8px rgba(0,0,0,0.6);\n  }\n}\n\n.mpc-body {\n  padding: 1.75rem 1.75rem 2rem;\n  border-top: 3px solid var(--pass-color, var(--orange));\n}\n\n.mpc-name {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1;\n  margin: 0 0 0.75rem;\n}\n\n.mpc-desc {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.mpc-features {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem;\n\n  li {\n    font-family: var(--font-body);\n    font-size: 0.88rem;\n    color: var(--white);\n    padding: 0.45rem 0;\n    border-bottom: 1px solid rgba(255,255,255,0.06);\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n\n    &::before {\n      content: '\u2713';\n      color: var(--pass-color, var(--orange));\n      font-weight: 700;\n      flex-shrink: 0;\n    }\n\n    &:last-child { border-bottom: none; }\n  }\n}\n\n.mpc-note {\n  font-family: var(--font-body);\n  font-size: 0.78rem;\n  color: var(--muted);\n  opacity: 0.7;\n  margin: 0 0 1.5rem;\n  font-style: italic;\n}\n\n.mpc-cta {\n  display: block;\n  width: 100%;\n  padding: 0.9rem 1.5rem;\n  background: var(--pass-color, var(--orange));\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 10px;\n  transition: filter 0.2s, transform 0.2s;\n  margin-top: 0.25rem;\n\n  &:hover {\n    filter: brightness(1.15);\n    transform: translateY(-2px);\n  }\n}\n\n/* \u2500\u2500 Why Annual Section \u2500\u2500 */\n.mem-why-section {\n  background: linear-gradient(135deg, rgba(244,81,19,0.05) 0%, transparent 60%);\n  border-radius: 24px;\n  margin: 0 1.5rem;\n}\n\n.mem-benefits-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n}\n\n.mem-benefit {\n  text-align: center;\n  padding: 2rem 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  transition: transform 0.3s ease, border-color 0.3s ease;\n\n  &:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.3);\n  }\n\n  h4 {\n    font-family: var(--font-display);\n    font-size: 1.2rem;\n    color: var(--white);\n    text-transform: uppercase;\n    margin: 0.75rem 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.875rem;\n    color: var(--muted);\n    line-height: 1.6;\n    margin: 0;\n  }\n}\n\n.mem-benefit-icon {\n  font-size: 2rem;\n  line-height: 1;\n}\n\n/* \u2500\u2500 Section Title \u2500\u2500 */\n.section-title {\n  text-align: center;\n  margin-bottom: 0.5rem;\n\n  p {\n    font-family: var(--font-display);\n    font-size: 0.9rem;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n    color: var(--orange);\n    margin: 0 0 0.5rem;\n  }\n\n  h2 {\n    font-family: var(--font-display);\n    font-size: clamp(2rem, 5vw, 3.5rem);\n    color: var(--white);\n    text-transform: uppercase;\n    line-height: 1;\n    margin: 0;\n  }\n}\n\n/* \u2500\u2500 CTA Banner (global, but scoped fallback) \u2500\u2500 */\n.page-cta-banner {\n  background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);\n  border: 1px solid rgba(244,81,19,0.25);\n  border-radius: 20px;\n  padding: clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 3rem);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n  margin: 0 1.5rem clamp(3rem, 6vw, 5rem);\n\n  .cta-label {\n    font-family: var(--font-display);\n    font-size: 0.85rem;\n    letter-spacing: 0.2em;\n    text-transform: uppercase;\n    color: var(--orange);\n    margin-bottom: 0.5rem;\n  }\n\n  h2 {\n    font-family: var(--font-display);\n    font-size: clamp(1.8rem, 4vw, 2.8rem);\n    color: var(--white);\n    text-transform: uppercase;\n    margin: 0 0 0.5rem;\n    line-height: 1.05;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin: 0;\n  }\n\n  .cta-actions {\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n  }\n}\n\n/* \u2500\u2500 Scroll Reveal \u2500\u2500 */\n.sr { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up { transform: translateY(30px); }\n.sr-left { transform: translateX(-30px); }\n.sr-right { transform: translateX(30px); }\n.sr.sr-visible { opacity: 1; transform: none; }\n\n/* \u2500\u2500 Responsive \u2500\u2500 */\n@media (max-width: 600px) {\n  .mem-passes-grid { grid-template-columns: 1fr; }\n  .mem-benefits-grid { grid-template-columns: repeat(2, 1fr); }\n  .page-cta-banner { flex-direction: column; text-align: center; }\n  .cta-actions { justify-content: center; }\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=memberships.component.js.map