import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/router";
import * as i6 from "@angular/forms";
function GroupEventsComponent_div_11_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const event_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", event_r2.routerLink);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", event_r2.linkText, " \u2192");
} }
function GroupEventsComponent_div_11_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 42);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", event_r2.linkText, " \u2192");
} }
function GroupEventsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33);
    i0.ɵɵelement(2, "img", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 35)(4, "div", 36);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 13);
    i0.ɵɵtext(7, "Group Experience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h3", 37);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "div", 38);
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, GroupEventsComponent_div_11_ng_container_13_Template, 3, 2, "ng-container", 39);
    i0.ɵɵtemplate(14, GroupEventsComponent_div_11_ng_template_14_Template, 2, 1, "ng-template", null, 40, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const even_r4 = ctx.even;
    const _r6 = i0.ɵɵreference(15);
    i0.ɵɵclassProp("sr-left", even_r4)("sr-right", !even_r4);
    i0.ɵɵattribute("data-sr-delay", i_r3 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", event_r2.image, i0.ɵɵsanitizeUrl)("alt", event_r2.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(event_r2.icon);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(event_r2.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(event_r2.desc);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", event_r2.routerLink)("ngIfElse", _r6);
} }
function GroupEventsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "span", 44);
    i0.ɵɵtext(2, "\"");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 45)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r11 * 0.1 + "s");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(r_r10.quote);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r10.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r10.role);
} }
export class GroupEventsComponent {
    constructor(seo) {
        this.seo = seo;
        this.eventTypes = [
            {
                title: 'Corporate Events',
                icon: '🏢',
                desc: 'Host a corporate event with a difference. Our unique venue is perfect for a corporate event to remember. Team-building that feels fun, not forced.',
                image: 'assets/images/Groups1.jpg',
                linkText: 'Corporate Events Info',
                routerLink: '/group-events/corporate-events'
            },
            {
                title: 'Field Trips',
                icon: '🎒',
                desc: 'A field trip to Bolder is a class favorite! Give your class the chance to learn action-adventure skills, while testing their bravery and having a huge amount of fun.',
                image: 'assets/images/Groups2.jpg',
                linkText: 'Field Trips Info',
                routerLink: '/group-events/field-trips'
            },
            {
                title: 'Birthday Parties',
                icon: '🎂',
                desc: 'If you are looking for a one-of-a-kind birthday experience for your big day, Bolder Adventure Park is your destination!',
                image: 'assets/images/Parties3.jpg',
                linkText: 'Birthday Parties',
                routerLink: '/birthday-parties'
            }
        ];
        this.reviews = [
            { name: 'Ally Smith', role: 'Birthday Party Guest', quote: 'So fun! Even great for adults, we came here for a baby party and had a blast!' },
            { name: 'Tiffany Erdynn', role: 'Birthday Party Host', quote: "Came here for a kid's birthday party for about 15 kids. We all had a blast. Kids loved the slides and the shooting game. Will definitely be back." },
            { name: 'Sarah M.', role: 'Company Event Host', quote: 'Bolder Adventure Park was the perfect venue for our company outing. The activities kept everyone engaged, and the staff made planning effortless. Our team is already asking when we can come back!' }
        ];
        this.formData = { name: '', email: '', phone: '', eventType: '', guests: '', message: '', date: '' };
    }
    ngOnInit() {
        this.seo.update({
            title: 'Group Events',
            description: 'Book group events at Bolder Adventure Park — corporate team building, school field trips, and birthday parties in Grand Prairie, TX.',
            path: '/group-events',
            keywords: 'group events, corporate events, field trips, team building, Grand Prairie group booking'
        });
    }
    submitForm() {
        alert('Thank you! We will be in touch shortly.');
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
GroupEventsComponent.ɵfac = function GroupEventsComponent_Factory(t) { return new (t || GroupEventsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
GroupEventsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GroupEventsComponent, selectors: [["app-group-events"]], decls: 72, vars: 9, consts: [[1, "inner-page", "group-events-page"], ["title", "Group Events", "subtitle", "Planning a group event? Skip the ordinary. Bolder turns field trips, corporate outings, and celebrations into stories people won't stop sharing.", "backgroundImage", "assets/images/Group-events.jpg", "tag", "Groups & Corporate"], ["speed", "slow"], [1, "ip-section"], [1, "ip-container"], [1, "section-title", "sr", "sr-up"], [1, "ge-event-blocks"], ["class", "ge-event-block sr", 3, "sr-left", "sr-right", 4, "ngFor", "ngForOf"], [1, "ip-section", "ge-reviews-section"], [1, "ge-reviews-grid"], ["class", "ge-review-card sr sr-up", 4, "ngFor", "ngForOf"], [1, "ip-section", "ge-form-section"], [1, "ge-form-header", "sr", "sr-up"], [1, "ip-kicker"], [1, "ip-heading"], ["data-sr-delay", "0.1s", 1, "ge-form", "sr", "sr-up", 3, "ngSubmit"], [1, "ge-form-grid"], [1, "ge-field"], ["type", "text", "name", "name", "placeholder", "Your name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Your email", "required", "", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", "placeholder", "(xxx) xxx-xxxx", 3, "ngModel", "ngModelChange"], ["name", "eventType", "required", "", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "corporate"], ["value", "fieldtrip"], ["value", "birthday"], ["value", "other"], ["type", "number", "name", "guests", "placeholder", "Estimated number", "min", "10", "required", "", 3, "ngModel", "ngModelChange"], ["type", "date", "name", "date", 3, "ngModel", "ngModelChange"], [1, "ge-field", "ge-field--full"], ["name", "message", "rows", "5", "placeholder", "Tell us more about your event...", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-orange", "btn-lg", "ge-submit"], [1, "ge-event-block", "sr"], [1, "ge-event-image"], ["loading", "lazy", 3, "src", "alt"], [1, "ge-event-copy"], [1, "ge-event-icon"], [1, "ge-event-title"], [1, "ge-divider"], [4, "ngIf", "ngIfElse"], ["externalLink", ""], [1, "btn", "btn-orange", 3, "routerLink"], ["routerLink", "/contact-us", 1, "btn", "btn-orange"], [1, "ge-review-card", "sr", "sr-up"], [1, "ger-quote"], [1, "ger-meta"]], template: function GroupEventsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "p");
        i0.ɵɵtext(7, "What We Offer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "h2");
        i0.ɵɵtext(9, "Group Experiences For Every Occasion");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵtemplate(11, GroupEventsComponent_div_11_Template, 16, 12, "div", 7);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(12, "section", 8)(13, "div", 4)(14, "div", 5)(15, "p");
        i0.ɵɵtext(16, "What They Said");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "h2");
        i0.ɵɵtext(18, "Our Guests Love It");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "div", 9);
        i0.ɵɵtemplate(20, GroupEventsComponent_div_20_Template, 10, 4, "div", 10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "section", 11)(22, "div", 4)(23, "div", 12)(24, "span", 13);
        i0.ɵɵtext(25, "Get In Touch");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "h2", 14);
        i0.ɵɵtext(27, "Complete The Form To Inquire Today");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, "Tell us about your group and we'll get back to you with a tailored quote within 24 hours.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(30, "form", 15);
        i0.ɵɵlistener("ngSubmit", function GroupEventsComponent_Template_form_ngSubmit_30_listener() { return ctx.submitForm(); });
        i0.ɵɵelementStart(31, "div", 16)(32, "div", 17)(33, "label");
        i0.ɵɵtext(34, "Full Name *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "input", 18);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_input_ngModelChange_35_listener($event) { return ctx.formData.name = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(36, "div", 17)(37, "label");
        i0.ɵɵtext(38, "Email Address *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "input", 19);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_input_ngModelChange_39_listener($event) { return ctx.formData.email = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(40, "div", 17)(41, "label");
        i0.ɵɵtext(42, "Phone Number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "input", 20);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_input_ngModelChange_43_listener($event) { return ctx.formData.phone = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(44, "div", 17)(45, "label");
        i0.ɵɵtext(46, "Event Type *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "select", 21);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_select_ngModelChange_47_listener($event) { return ctx.formData.eventType = $event; });
        i0.ɵɵelementStart(48, "option", 22);
        i0.ɵɵtext(49, "Select event type");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "option", 23);
        i0.ɵɵtext(51, "Corporate Event");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(52, "option", 24);
        i0.ɵɵtext(53, "Field Trip");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "option", 25);
        i0.ɵɵtext(55, "Birthday Party");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(56, "option", 26);
        i0.ɵɵtext(57, "Other Group Event");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(58, "div", 17)(59, "label");
        i0.ɵɵtext(60, "Number of Guests *");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "input", 27);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_input_ngModelChange_61_listener($event) { return ctx.formData.guests = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(62, "div", 17)(63, "label");
        i0.ɵɵtext(64, "Preferred Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "input", 28);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_input_ngModelChange_65_listener($event) { return ctx.formData.date = $event; });
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(66, "div", 29)(67, "label");
        i0.ɵɵtext(68, "Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(69, "textarea", 30);
        i0.ɵɵlistener("ngModelChange", function GroupEventsComponent_Template_textarea_ngModelChange_69_listener($event) { return ctx.formData.message = $event; });
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(70, "button", 31);
        i0.ɵɵtext(71, "Send Inquiry");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngForOf", ctx.eventTypes);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngForOf", ctx.reviews);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("ngModel", ctx.formData.name);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.formData.email);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.formData.phone);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.formData.eventType);
        i0.ɵɵadvance(14);
        i0.ɵɵproperty("ngModel", ctx.formData.guests);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.formData.date);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.formData.message);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.NgForOf, i4.NgIf, i5.RouterLinkWithHref, i6.ɵNgNoValidate, i6.NgControlStatusGroup, i6.NgForm, i6.DefaultValueAccessor, i6.RequiredValidator, i6.NgControlStatus, i6.NgModel, i6.SelectControlValueAccessor, i6.NgSelectOption, i6.ɵNgSelectMultipleOption, i6.MinValidator, i6.NumberValueAccessor], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1100px; margin: 0 auto; }\n.ip-kicker[_ngcontent-%COMP%] { display:inline-block;font-family:var(--font-ui);font-size:0.78rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--orange);margin-bottom:0.6rem; }\n.ip-heading[_ngcontent-%COMP%] { font-family:var(--font-display);font-size:clamp(2.5rem,6vw,4.5rem);color:var(--white);line-height:1;margin:0 0 1rem; }\n\n\n.ge-event-blocks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  margin-top: 3rem;\n}\n\n.ge-event-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  @media (max-width: 768px) { grid-template-columns: 1fr; }\n\n  &:nth-child(even) {\n    direction: rtl;\n    > * { direction: ltr; }\n  }\n}\n\n.ge-event-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n.ge-event-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n\n.ge-event-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  color: var(--white);\n  margin: 0.3rem 0 0.75rem;\n  line-height: 1;\n}\n\n.ge-divider[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin: 0 0 1.25rem;\n}\n\n.ge-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--muted);\n  line-height: 1.7;\n  margin: 0 0 1.5rem;\n}\n\n\n.ge-reviews-section[_ngcontent-%COMP%] { background: #060606; }\n\n.ge-reviews-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 500px; margin-inline: auto; }\n}\n\n.ge-review-card[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 2rem;\n  p { font-family:var(--font-body);font-size:0.88rem;color:var(--muted);line-height:1.7;margin:0 0 1.25rem; }\n}\n\n.ger-quote[_ngcontent-%COMP%] { font-family:var(--font-display);font-size:5rem;color:var(--orange);line-height:0.7;display:block;margin-bottom:0.75rem; }\n.ger-meta[_ngcontent-%COMP%] { strong { font-family:var(--font-ui);font-size:1rem;font-weight:700;color:var(--white);display:block; } span { font-family:var(--font-body);font-size:0.78rem;color:var(--orange); } }\n\n\n.ge-form-section[_ngcontent-%COMP%] { background: #080808; }\n\n.ge-form-header[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  p { font-family:var(--font-body);font-size:0.95rem;color:var(--muted);margin-top:0.5rem; }\n}\n\n.ge-form[_ngcontent-%COMP%] {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2.5rem;\n}\n\n.ge-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n  @media (max-width: 650px) { grid-template-columns: 1fr; }\n}\n\n.ge-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &--full { margin-bottom: 1.5rem; }\n\n  label {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.05);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 10px;\n    padding: 0.75rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s;\n\n    &::placeholder { color: rgba(255,255,255,0.3); }\n    &:focus { border-color: var(--orange); }\n\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ge-submit[_ngcontent-%COMP%] { align-self: flex-start; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupEventsComponent, [{
        type: Component,
        args: [{ selector: 'app-group-events', template: "<div class=\"inner-page group-events-page\">\n\n  <app-page-hero\n    title=\"Group Events\"\n    subtitle=\"Planning a group event? Skip the ordinary. Bolder turns field trips, corporate outings, and celebrations into stories people won't stop sharing.\"\n    backgroundImage=\"assets/images/Group-events.jpg\"\n    tag=\"Groups & Corporate\">\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Event Types -->\n  <section class=\"ip-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>What We Offer</p>\n        <h2>Group Experiences For Every Occasion</h2>\n      </div>\n\n      <div class=\"ge-event-blocks\">\n        <div class=\"ge-event-block sr\"\n             *ngFor=\"let event of eventTypes; let i = index; let even = even\"\n             [class.sr-left]=\"even\"\n             [class.sr-right]=\"!even\"\n             [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <div class=\"ge-event-image\">\n            <img [src]=\"event.image\" [alt]=\"event.title\" loading=\"lazy\"/>\n          </div>\n          <div class=\"ge-event-copy\">\n            <div class=\"ge-event-icon\">{{ event.icon }}</div>\n            <span class=\"ip-kicker\">Group Experience</span>\n            <h3 class=\"ge-event-title\">{{ event.title }}</h3>\n            <div class=\"ge-divider\"></div>\n            <p>{{ event.desc }}</p>\n            <ng-container *ngIf=\"event.routerLink; else externalLink\">\n              <a [routerLink]=\"event.routerLink\" class=\"btn btn-orange\">{{ event.linkText }} \u2192</a>\n            </ng-container>\n            <ng-template #externalLink>\n              <a routerLink=\"/contact-us\" class=\"btn btn-orange\">{{ event.linkText }} \u2192</a>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Reviews -->\n  <section class=\"ip-section ge-reviews-section\">\n    <div class=\"ip-container\">\n      <div class=\"section-title sr sr-up\">\n        <p>What They Said</p>\n        <h2>Our Guests Love It</h2>\n      </div>\n      <div class=\"ge-reviews-grid\">\n        <div class=\"ge-review-card sr sr-up\"\n             *ngFor=\"let r of reviews; let i = index\"\n             [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <span class=\"ger-quote\">\"</span>\n          <p>{{ r.quote }}</p>\n          <div class=\"ger-meta\">\n            <strong>{{ r.name }}</strong>\n            <span>{{ r.role }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Inquiry Form -->\n  <section class=\"ip-section ge-form-section\">\n    <div class=\"ip-container\">\n      <div class=\"ge-form-header sr sr-up\">\n        <span class=\"ip-kicker\">Get In Touch</span>\n        <h2 class=\"ip-heading\">Complete The Form To Inquire Today</h2>\n        <p>Tell us about your group and we'll get back to you with a tailored quote within 24 hours.</p>\n      </div>\n\n      <form class=\"ge-form sr sr-up\" (ngSubmit)=\"submitForm()\" data-sr-delay=\"0.1s\">\n        <div class=\"ge-form-grid\">\n          <div class=\"ge-field\">\n            <label>Full Name *</label>\n            <input type=\"text\" [(ngModel)]=\"formData.name\" name=\"name\" placeholder=\"Your name\" required/>\n          </div>\n          <div class=\"ge-field\">\n            <label>Email Address *</label>\n            <input type=\"email\" [(ngModel)]=\"formData.email\" name=\"email\" placeholder=\"Your email\" required/>\n          </div>\n          <div class=\"ge-field\">\n            <label>Phone Number</label>\n            <input type=\"tel\" [(ngModel)]=\"formData.phone\" name=\"phone\" placeholder=\"(xxx) xxx-xxxx\"/>\n          </div>\n          <div class=\"ge-field\">\n            <label>Event Type *</label>\n            <select [(ngModel)]=\"formData.eventType\" name=\"eventType\" required>\n              <option value=\"\" disabled selected>Select event type</option>\n              <option value=\"corporate\">Corporate Event</option>\n              <option value=\"fieldtrip\">Field Trip</option>\n              <option value=\"birthday\">Birthday Party</option>\n              <option value=\"other\">Other Group Event</option>\n            </select>\n          </div>\n          <div class=\"ge-field\">\n            <label>Number of Guests *</label>\n            <input type=\"number\" [(ngModel)]=\"formData.guests\" name=\"guests\" placeholder=\"Estimated number\" min=\"10\" required/>\n          </div>\n          <div class=\"ge-field\">\n            <label>Preferred Date</label>\n            <input type=\"date\" [(ngModel)]=\"formData.date\" name=\"date\"/>\n          </div>\n        </div>\n        <div class=\"ge-field ge-field--full\">\n          <label>Message</label>\n          <textarea [(ngModel)]=\"formData.message\" name=\"message\" rows=\"5\" placeholder=\"Tell us more about your event...\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-orange btn-lg ge-submit\">Send Inquiry</button>\n      </form>\n    </div>\n  </section>\n\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1100px; margin: 0 auto; }\n.ip-kicker { display:inline-block;font-family:var(--font-ui);font-size:0.78rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--orange);margin-bottom:0.6rem; }\n.ip-heading { font-family:var(--font-display);font-size:clamp(2.5rem,6vw,4.5rem);color:var(--white);line-height:1;margin:0 0 1rem; }\n\n/* \u2500\u2500 Event blocks \u2500\u2500 */\n.ge-event-blocks {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n  margin-top: 3rem;\n}\n\n.ge-event-block {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: center;\n  @media (max-width: 768px) { grid-template-columns: 1fr; }\n\n  &:nth-child(even) {\n    direction: rtl;\n    > * { direction: ltr; }\n  }\n}\n\n.ge-event-image {\n  border-radius: 20px;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n.ge-event-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n\n.ge-event-title {\n  font-family: var(--font-display);\n  font-size: clamp(2rem, 4vw, 3.5rem);\n  color: var(--white);\n  margin: 0.3rem 0 0.75rem;\n  line-height: 1;\n}\n\n.ge-divider {\n  width: 48px;\n  height: 3px;\n  background: var(--orange);\n  border-radius: 2px;\n  margin: 0 0 1.25rem;\n}\n\n.ge-event-copy p {\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--muted);\n  line-height: 1.7;\n  margin: 0 0 1.5rem;\n}\n\n/* \u2500\u2500 Reviews \u2500\u2500 */\n.ge-reviews-section { background: #060606; }\n\n.ge-reviews-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  margin-top: 2.5rem;\n  @media (max-width: 900px) { grid-template-columns: 1fr; max-width: 500px; margin-inline: auto; }\n}\n\n.ge-review-card {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  padding: 2rem;\n  p { font-family:var(--font-body);font-size:0.88rem;color:var(--muted);line-height:1.7;margin:0 0 1.25rem; }\n}\n\n.ger-quote { font-family:var(--font-display);font-size:5rem;color:var(--orange);line-height:0.7;display:block;margin-bottom:0.75rem; }\n.ger-meta { strong { font-family:var(--font-ui);font-size:1rem;font-weight:700;color:var(--white);display:block; } span { font-family:var(--font-body);font-size:0.78rem;color:var(--orange); } }\n\n/* \u2500\u2500 Form \u2500\u2500 */\n.ge-form-section { background: #080808; }\n\n.ge-form-header {\n  margin-bottom: 2.5rem;\n  p { font-family:var(--font-body);font-size:0.95rem;color:var(--muted);margin-top:0.5rem; }\n}\n\n.ge-form {\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 20px;\n  padding: 2.5rem;\n}\n\n.ge-form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n  @media (max-width: 650px) { grid-template-columns: 1fr; }\n}\n\n.ge-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &--full { margin-bottom: 1.5rem; }\n\n  label {\n    font-family: var(--font-ui);\n    font-size: 0.82rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.05);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 10px;\n    padding: 0.75rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s;\n\n    &::placeholder { color: rgba(255,255,255,0.3); }\n    &:focus { border-color: var(--orange); }\n\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.ge-submit { align-self: flex-start; }\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=group-events.component.js.map