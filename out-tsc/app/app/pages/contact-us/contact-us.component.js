import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/seo.service";
import * as i2 from "../../shared/page-hero/page-hero.component";
import * as i3 from "../../shared/infinite-carousel/infinite-carousel.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function ContactUsComponent_a_6_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 48);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", c_r3.linkText, " \u2197");
} }
function ContactUsComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 42)(1, "div", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44)(4, "span", 45);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 46);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, ContactUsComponent_a_6_span_8_Template, 2, 1, "span", 47);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    i0.ɵɵclassProp("is-link", c_r3.link);
    i0.ɵɵproperty("href", c_r3.link || null, i0.ɵɵsanitizeUrl)("target", c_r3.link ? "_blank" : null)("rel", c_r3.link ? "noopener" : null);
    i0.ɵɵattribute("data-sr-delay", i_r4 * 0.1 + "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r3.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(c_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", c_r3.linkText);
} }
function ContactUsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 50);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Message Sent!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Thanks for reaching out. We'll be in touch soon.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 51);
    i0.ɵɵlistener("click", function ContactUsComponent_div_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.submitted = false; });
    i0.ɵɵtext(8, " Send Another ");
    i0.ɵɵelementEnd()();
} }
function ContactUsComponent_form_19_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 66);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const s_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", s_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", s_r13, " ");
} }
function ContactUsComponent_form_19_span_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Send Message \u2197");
    i0.ɵɵelementEnd();
} }
function ContactUsComponent_form_19_span_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Sending...");
    i0.ɵɵelementEnd();
} }
function ContactUsComponent_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 52, 53);
    i0.ɵɵlistener("ngSubmit", function ContactUsComponent_form_19_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.submitForm(); });
    i0.ɵɵelementStart(2, "div", 54)(3, "div", 55)(4, "label");
    i0.ɵɵtext(5, "Full Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 56);
    i0.ɵɵlistener("ngModelChange", function ContactUsComponent_form_19_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.formData.name = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 55)(8, "label");
    i0.ɵɵtext(9, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 57);
    i0.ɵɵlistener("ngModelChange", function ContactUsComponent_form_19_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.formData.email = $event; });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 54)(12, "div", 55)(13, "label");
    i0.ɵɵtext(14, "Phone (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 58);
    i0.ɵɵlistener("ngModelChange", function ContactUsComponent_form_19_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.formData.phone = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 55)(17, "label");
    i0.ɵɵtext(18, "Subject *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 59);
    i0.ɵɵlistener("ngModelChange", function ContactUsComponent_form_19_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.formData.subject = $event; });
    i0.ɵɵelementStart(20, "option", 60);
    i0.ɵɵtext(21, "Select a topic");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, ContactUsComponent_form_19_option_22_Template, 2, 2, "option", 61);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "div", 62)(24, "label");
    i0.ɵɵtext(25, "Message *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "textarea", 63);
    i0.ɵɵlistener("ngModelChange", function ContactUsComponent_form_19_Template_textarea_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.formData.message = $event; });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 64);
    i0.ɵɵtemplate(28, ContactUsComponent_form_19_span_28_Template, 2, 0, "span", 65);
    i0.ɵɵtemplate(29, ContactUsComponent_form_19_span_29_Template, 2, 0, "span", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(1);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.email);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.phone);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.subject);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r2.subjects);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r2.formData.message);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-loading", ctx_r2.submitting);
    i0.ɵɵproperty("disabled", ctx_r2.submitting || _r9.invalid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.submitting);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.submitting);
} }
export class ContactUsComponent {
    constructor(seo) {
        this.seo = seo;
        this.formData = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        };
        this.submitted = false;
        this.submitting = false;
        this.contactInfo = [
            {
                icon: '📍',
                label: 'Address',
                value: '2324 W Warrior Trail, Grand Prairie, TX',
                link: 'https://maps.google.com/?q=2324+W+Warrior+Trail+Grand+Prairie+TX',
                linkText: 'Get Directions'
            },
            {
                icon: '📞',
                label: 'Phone',
                value: '(469) 858-0577',
                link: 'tel:+14698580577',
                linkText: 'Call Us'
            },
            {
                icon: '✉️',
                label: 'Email',
                value: 'bolder@bolderpark.com',
                link: 'mailto:bolder@bolderpark.com',
                linkText: 'Send Email'
            },
            {
                icon: '🕐',
                label: 'Hours',
                value: 'Mondays – Thursdays 11 AM – 9 PM · Fridays - Sundays 11 AM – 9 PM ',
                link: null,
                linkText: null
            }
        ];
        this.subjects = [
            'General Inquiry',
            'Birthday Party Booking',
            'Group Events',
            'Memberships & Passes',
            'Tickets & Reservations',
            'Safety & Restrictions',
            'Feedback / Complaint',
            'Other'
        ];
    }
    ngOnInit() {
        this.seo.update({
            title: 'Contact Us',
            description: 'Get in touch with Bolder Adventure Park in Grand Prairie, TX. Ask about bookings, group events, birthday parties, or general inquiries.',
            path: '/contact-us',
            keywords: 'contact Bolder Adventure Park, Grand Prairie park contact, booking inquiry'
        });
    }
    submitForm() {
        if (this.submitting)
            return;
        this.submitting = true;
        setTimeout(() => {
            this.submitted = true;
            this.submitting = false;
            this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
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
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(i0.ɵɵdirectiveInject(i1.SeoService)); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 64, vars: 3, consts: [[1, "inner-page", "contact-page"], ["title", "Get In Touch", "subtitle", "Have a question, want to book a party, or planning a group event? We'd love to hear from you.", "backgroundImage", "assets/After-hero-section/Dome photos-03988-2.jpg", "tag", "Contact Us"], ["speed", "slow"], [1, "ip-section", "cu-info-section"], [1, "ip-container"], [1, "cu-info-grid"], ["class", "cu-info-card sr", 3, "href", "target", "rel", "is-link", 4, "ngFor", "ngForOf"], [1, "ip-section", "cu-main-section"], [1, "ip-container-wide"], [1, "cu-main-grid"], [1, "cu-form-col", "sr", "sr-left"], [1, "cu-form-header"], [1, "cu-kicker"], [1, "cu-heading"], [1, "cu-subhead"], ["class", "cu-success", 4, "ngIf"], ["class", "cu-form", 3, "ngSubmit", 4, "ngIf"], [1, "cu-map-col", "sr", "sr-right"], [1, "cu-map-frame"], ["src", "https://maps.google.com/maps?q=2324+W+Warrior+Trail+Grand+Prairie+TX&output=embed", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", "title", "Bolder Adventure Park Location"], [1, "cu-find-us"], [1, "cu-find-title"], [1, "cu-find-addr"], ["href", "https://maps.google.com/?q=2324+W+Warrior+Trail+Grand+Prairie+TX", "target", "_blank", "rel", "noopener", 1, "btn", "btn-outline", "cu-dir-btn"], [1, "cu-social-wrap"], [1, "cu-social-label"], [1, "cu-social-links"], ["href", "https://www.instagram.com/bolderadventurepark", "target", "_blank", "rel", "noopener", 1, "cu-social-link"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["d", "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"], ["x1", "17.5", "y1", "6.5", "x2", "17.51", "y2", "6.5"], ["href", "https://www.facebook.com/bolderadventurepark", "target", "_blank", "rel", "noopener", 1, "cu-social-link"], ["d", "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"], ["href", "https://www.tiktok.com/@bolderadventurepark", "target", "_blank", "rel", "noopener", 1, "cu-social-link"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"], [1, "page-cta-banner", "sr", "sr-up"], [1, "cta-label"], [1, "cta-actions"], ["href", "https://ecom.roller.app/bolderadventurepark/tickets/en-us/home", "target", "_blank", "rel", "noopener", 1, "btn", "btn-dark", "btn-lg"], ["href", "tel:+14698580577", 1, "btn", "btn-outline", "btn-lg"], [1, "cu-info-card", "sr", 3, "href", "target", "rel"], [1, "cu-info-icon"], [1, "cu-info-text"], [1, "cu-info-label"], [1, "cu-info-val"], ["class", "cu-info-action", 4, "ngIf"], [1, "cu-info-action"], [1, "cu-success"], [1, "cu-success-icon"], [1, "btn", "btn-orange", 3, "click"], [1, "cu-form", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "cu-form-row"], [1, "cu-field"], ["type", "text", "name", "name", "placeholder", "Your name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phone", "placeholder", "(555) 000-0000", 3, "ngModel", "ngModelChange"], ["name", "subject", "required", "", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "cu-field", "cu-field-full"], ["name", "message", "rows", "6", "placeholder", "Tell us how we can help...", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "cu-submit-btn", 3, "disabled"], [4, "ngIf"], [3, "value"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "app-page-hero", 1)(2, "app-infinite-carousel", 2);
        i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
        i0.ɵɵtemplate(6, ContactUsComponent_a_6_Template, 9, 10, "a", 6);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(7, "section", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
        i0.ɵɵtext(13, "Send A Message");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "h2", 13);
        i0.ɵɵtext(15, "We'll Get Back To You Fast");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "p", 14);
        i0.ɵɵtext(17, " Fill out the form below and our team will respond within 24 hours. ");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(18, ContactUsComponent_div_18_Template, 9, 0, "div", 15);
        i0.ɵɵtemplate(19, ContactUsComponent_form_19_Template, 30, 11, "form", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 17)(21, "div", 18);
        i0.ɵɵelement(22, "iframe", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "div", 20)(24, "h3", 21);
        i0.ɵɵtext(25, "Find Us");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "p", 22);
        i0.ɵɵtext(27, " 2324 W Warrior Trail");
        i0.ɵɵelement(28, "br");
        i0.ɵɵtext(29, "Grand Prairie, TX ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "a", 23);
        i0.ɵɵtext(31, " Open In Google Maps \u2197 ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(32, "div", 24)(33, "div", 25);
        i0.ɵɵtext(34, "Follow The Adventure");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "div", 26)(36, "a", 27);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(37, "svg", 28);
        i0.ɵɵelement(38, "rect", 29)(39, "path", 30)(40, "line", 31);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(41, " Instagram ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(42, "a", 32);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(43, "svg", 28);
        i0.ɵɵelement(44, "path", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(45, " Facebook ");
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(46, "a", 34);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(47, "svg", 35);
        i0.ɵɵelement(48, "path", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(49, " TikTok ");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(50, "div", 4)(51, "div", 37)(52, "div")(53, "div", 38);
        i0.ɵɵtext(54, "Book Now");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "h2");
        i0.ɵɵtext(56, "Ready For Your Next Adventure?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "p");
        i0.ɵɵtext(58, "Book tickets online for the best price and to guarantee entry.");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(59, "div", 39)(60, "a", 40);
        i0.ɵɵtext(61, "Get Tickets");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(62, "a", 41);
        i0.ɵɵtext(63, "(469) 858-0577");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.contactInfo);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngIf", ctx.submitted);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.submitted);
    } }, directives: [i2.PageHeroComponent, i3.InfiniteCarouselComponent, i4.NgForOf, i4.NgIf, i5.ɵNgNoValidate, i5.NgControlStatusGroup, i5.NgForm, i5.DefaultValueAccessor, i5.RequiredValidator, i5.NgControlStatus, i5.NgModel, i5.SelectControlValueAccessor, i5.NgSelectOption, i5.ɵNgSelectMultipleOption], styles: [".inner-page[_ngcontent-%COMP%] { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section[_ngcontent-%COMP%] { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container[_ngcontent-%COMP%] { max-width: 1200px; margin: 0 auto; }\n.ip-container-wide[_ngcontent-%COMP%] { max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }\n\n\n.cu-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.25rem;\n}\n\n.cu-info-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  text-decoration: none;\n  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;\n\n  &.is-link:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.35);\n    box-shadow: 0 12px 40px rgba(0,0,0,0.35);\n  }\n}\n\n.cu-info-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n\n.cu-info-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n\n.cu-info-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--orange);\n}\n\n.cu-info-val[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  color: var(--white);\n  line-height: 1.5;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.cu-info-action[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  color: var(--orange);\n  letter-spacing: 0.05em;\n  margin-top: 0.1rem;\n}\n\n\n.cu-main-section[_ngcontent-%COMP%] { padding-top: 0; }\n\n.cu-main-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: start;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n\n.cu-form-header[_ngcontent-%COMP%] { margin-bottom: 2rem; }\n\n.cu-kicker[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.85rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.5rem;\n}\n\n.cu-heading[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 0.75rem;\n}\n\n.cu-subhead[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n\n.cu-form[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.cu-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.cu-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.cu-field-full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.78rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.cu-submit-btn[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) {\n    filter: brightness(1.15);\n    transform: translateY(-2px);\n  }\n\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n\n  &.is-loading {\n    opacity: 0.8;\n    pointer-events: none;\n  }\n}\n\n\n.cu-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n\n  .cu-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.8rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin: 0 0 1.5rem;\n  }\n}\n\n\n.cu-map-frame[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255,255,255,0.08);\n  height: 340px;\n  position: relative;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n    display: block;\n    filter: invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7);\n  }\n}\n\n.cu-find-us[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1.5rem;\n  background: var(--panel);\n  border-radius: 14px;\n  border: 1px solid rgba(255,255,255,0.07);\n}\n\n.cu-find-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n}\n\n.cu-find-addr[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.cu-dir-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.85rem;\n}\n\n\n.cu-social-wrap[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.cu-social-label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--muted);\n  margin-bottom: 0.75rem;\n}\n\n.cu-social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.cu-social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.1rem;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px;\n  color: var(--white);\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n  text-decoration: none;\n  transition: background 0.2s, border-color 0.2s, color 0.2s;\n\n  svg { flex-shrink: 0; }\n\n  &:hover {\n    background: rgba(244,81,19,0.12);\n    border-color: rgba(244,81,19,0.4);\n    color: var(--orange);\n  }\n}\n\n\n.sr[_ngcontent-%COMP%] { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up[_ngcontent-%COMP%] { transform: translateY(30px); }\n.sr-left[_ngcontent-%COMP%] { transform: translateX(-30px); }\n.sr-right[_ngcontent-%COMP%] { transform: translateX(30px); }\n.sr.sr-visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }\n\n\n@media (max-width: 600px) {\n  .cu-info-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .page-cta-banner[_ngcontent-%COMP%] { flex-direction: column; text-align: center; }\n  .cta-actions[_ngcontent-%COMP%] { justify-content: center; }\n  .cu-submit-btn[_ngcontent-%COMP%] { width: 100%; }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactUsComponent, [{
        type: Component,
        args: [{ selector: 'app-contact-us', template: "<div class=\"inner-page contact-page\">\n  <app-page-hero\n    title=\"Get In Touch\"\n    subtitle=\"Have a question, want to book a party, or planning a group event? We'd love to hear from you.\"\n    backgroundImage=\"assets/After-hero-section/Dome photos-03988-2.jpg\"\n    tag=\"Contact Us\"\n  >\n  </app-page-hero>\n\n  <app-infinite-carousel speed=\"slow\"></app-infinite-carousel>\n\n  <!-- Contact Info Cards -->\n  <section class=\"ip-section cu-info-section\">\n    <div class=\"ip-container\">\n      <div class=\"cu-info-grid\">\n        <a\n          class=\"cu-info-card sr\"\n          *ngFor=\"let c of contactInfo; let i = index\"\n          [attr.data-sr-delay]=\"i * 0.1 + 's'\"\n          [href]=\"c.link || null\"\n          [target]=\"c.link ? '_blank' : null\"\n          [rel]=\"c.link ? 'noopener' : null\"\n          [class.is-link]=\"c.link\"\n        >\n          <div class=\"cu-info-icon\">{{ c.icon }}</div>\n          <div class=\"cu-info-text\">\n            <span class=\"cu-info-label\">{{ c.label }}</span>\n            <span class=\"cu-info-val\">{{ c.value }}</span>\n            <span class=\"cu-info-action\" *ngIf=\"c.linkText\"\n              >{{ c.linkText }} \u2197</span\n            >\n          </div>\n        </a>\n      </div>\n    </div>\n  </section>\n\n  <!-- Main Contact Section: Form + Map -->\n  <section class=\"ip-section cu-main-section\">\n    <div class=\"ip-container-wide\">\n      <div class=\"cu-main-grid\">\n        <!-- Form -->\n        <div class=\"cu-form-col sr sr-left\">\n          <div class=\"cu-form-header\">\n            <div class=\"cu-kicker\">Send A Message</div>\n            <h2 class=\"cu-heading\">We'll Get Back To You Fast</h2>\n            <p class=\"cu-subhead\">\n              Fill out the form below and our team will respond within 24 hours.\n            </p>\n          </div>\n\n          <div class=\"cu-success\" *ngIf=\"submitted\">\n            <div class=\"cu-success-icon\">\u2713</div>\n            <h3>Message Sent!</h3>\n            <p>Thanks for reaching out. We'll be in touch soon.</p>\n            <button class=\"btn btn-orange\" (click)=\"submitted = false\">\n              Send Another\n            </button>\n          </div>\n\n          <form\n            class=\"cu-form\"\n            (ngSubmit)=\"submitForm()\"\n            *ngIf=\"!submitted\"\n            #contactForm=\"ngForm\"\n          >\n            <div class=\"cu-form-row\">\n              <div class=\"cu-field\">\n                <label>Full Name *</label>\n                <input\n                  type=\"text\"\n                  [(ngModel)]=\"formData.name\"\n                  name=\"name\"\n                  placeholder=\"Your name\"\n                  required\n                />\n              </div>\n              <div class=\"cu-field\">\n                <label>Email *</label>\n                <input\n                  type=\"email\"\n                  [(ngModel)]=\"formData.email\"\n                  name=\"email\"\n                  placeholder=\"your@email.com\"\n                  required\n                />\n              </div>\n            </div>\n\n            <div class=\"cu-form-row\">\n              <div class=\"cu-field\">\n                <label>Phone (optional)</label>\n                <input\n                  type=\"tel\"\n                  [(ngModel)]=\"formData.phone\"\n                  name=\"phone\"\n                  placeholder=\"(555) 000-0000\"\n                />\n              </div>\n              <div class=\"cu-field\">\n                <label>Subject *</label>\n                <select [(ngModel)]=\"formData.subject\" name=\"subject\" required>\n                  <option value=\"\" disabled selected>Select a topic</option>\n                  <option *ngFor=\"let s of subjects\" [value]=\"s\">\n                    {{ s }}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"cu-field cu-field-full\">\n              <label>Message *</label>\n              <textarea\n                [(ngModel)]=\"formData.message\"\n                name=\"message\"\n                rows=\"6\"\n                placeholder=\"Tell us how we can help...\"\n                required\n              ></textarea>\n            </div>\n\n            <button\n              type=\"submit\"\n              class=\"cu-submit-btn\"\n              [class.is-loading]=\"submitting\"\n              [disabled]=\"submitting || contactForm.invalid\"\n            >\n              <span *ngIf=\"!submitting\">Send Message \u2197</span>\n              <span *ngIf=\"submitting\">Sending...</span>\n            </button>\n          </form>\n        </div>\n\n        <!-- Map + Social -->\n        <div class=\"cu-map-col sr sr-right\">\n          <div class=\"cu-map-frame\">\n            <iframe\n              src=\"https://maps.google.com/maps?q=2324+W+Warrior+Trail+Grand+Prairie+TX&output=embed\"\n              allowfullscreen\n              loading=\"lazy\"\n              referrerpolicy=\"no-referrer-when-downgrade\"\n              title=\"Bolder Adventure Park Location\"\n            >\n            </iframe>\n          </div>\n\n          <div class=\"cu-find-us\">\n            <h3 class=\"cu-find-title\">Find Us</h3>\n            <p class=\"cu-find-addr\">\n              2324 W Warrior Trail<br />Grand Prairie, TX\n            </p>\n            <a\n              href=\"https://maps.google.com/?q=2324+W+Warrior+Trail+Grand+Prairie+TX\"\n              target=\"_blank\"\n              rel=\"noopener\"\n              class=\"btn btn-outline cu-dir-btn\"\n            >\n              Open In Google Maps \u2197\n            </a>\n          </div>\n\n          <div class=\"cu-social-wrap\">\n            <div class=\"cu-social-label\">Follow The Adventure</div>\n            <div class=\"cu-social-links\">\n              <a\n                href=\"https://www.instagram.com/bolderadventurepark\"\n                target=\"_blank\"\n                rel=\"noopener\"\n                class=\"cu-social-link\"\n              >\n                <svg\n                  width=\"20\"\n                  height=\"20\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                >\n                  <rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\" />\n                  <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\" />\n                  <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\" />\n                </svg>\n                Instagram\n              </a>\n              <a\n                href=\"https://www.facebook.com/bolderadventurepark\"\n                target=\"_blank\"\n                rel=\"noopener\"\n                class=\"cu-social-link\"\n              >\n                <svg\n                  width=\"20\"\n                  height=\"20\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"currentColor\"\n                  stroke-width=\"2\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                >\n                  <path\n                    d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"\n                  />\n                </svg>\n                Facebook\n              </a>\n              <a\n                href=\"https://www.tiktok.com/@bolderadventurepark\"\n                target=\"_blank\"\n                rel=\"noopener\"\n                class=\"cu-social-link\"\n              >\n                <svg\n                  width=\"20\"\n                  height=\"20\"\n                  viewBox=\"0 0 24 24\"\n                  fill=\"currentColor\"\n                >\n                  <path\n                    d=\"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z\"\n                  />\n                </svg>\n                TikTok\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- CTA -->\n  <div class=\"ip-container\">\n    <div class=\"page-cta-banner sr sr-up\">\n      <div>\n        <div class=\"cta-label\">Book Now</div>\n        <h2>Ready For Your Next Adventure?</h2>\n        <p>Book tickets online for the best price and to guarantee entry.</p>\n      </div>\n      <div class=\"cta-actions\">\n        <a\n          href=\"https://ecom.roller.app/bolderadventurepark/tickets/en-us/home\"\n          target=\"_blank\"\n          rel=\"noopener\"\n          class=\"btn btn-dark btn-lg\"\n          >Get Tickets</a\n        >\n        <a href=\"tel:+14698580577\" class=\"btn btn-outline btn-lg\"\n          >(469) 858-0577</a\n        >\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".inner-page { padding-top: 148px; background: var(--black); color: var(--white); min-height: 100vh; }\n.ip-section { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ip-container { max-width: 1200px; margin: 0 auto; }\n.ip-container-wide { max-width: 1300px; margin: 0 auto; padding: 0 1.5rem; }\n\n/* \u2500\u2500 Info Cards \u2500\u2500 */\n.cu-info-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.25rem;\n}\n\n.cu-info-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--panel);\n  border: 1px solid rgba(255,255,255,0.07);\n  border-radius: 16px;\n  text-decoration: none;\n  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;\n\n  &.is-link:hover {\n    transform: translateY(-4px);\n    border-color: rgba(244,81,19,0.35);\n    box-shadow: 0 12px 40px rgba(0,0,0,0.35);\n  }\n}\n\n.cu-info-icon {\n  font-size: 1.75rem;\n  line-height: 1;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n\n.cu-info-text {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n\n.cu-info-label {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: var(--orange);\n}\n\n.cu-info-val {\n  font-family: var(--font-body);\n  font-size: 0.88rem;\n  color: var(--white);\n  line-height: 1.5;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.cu-info-action {\n  font-family: var(--font-display);\n  font-size: 0.8rem;\n  color: var(--orange);\n  letter-spacing: 0.05em;\n  margin-top: 0.1rem;\n}\n\n/* \u2500\u2500 Main Section \u2500\u2500 */\n.cu-main-section { padding-top: 0; }\n\n.cu-main-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3.5rem;\n  align-items: start;\n\n  @media (max-width: 900px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n/* \u2500\u2500 Form Column \u2500\u2500 */\n.cu-form-header { margin-bottom: 2rem; }\n\n.cu-kicker {\n  font-family: var(--font-display);\n  font-size: 0.85rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.5rem;\n}\n\n.cu-heading {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  color: var(--white);\n  text-transform: uppercase;\n  line-height: 1.05;\n  margin: 0 0 0.75rem;\n}\n\n.cu-subhead {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0;\n}\n\n/* \u2500\u2500 Form Fields \u2500\u2500 */\n.cu-form { display: flex; flex-direction: column; gap: 1.25rem; }\n\n.cu-form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.cu-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  &.cu-field-full { grid-column: 1 / -1; }\n\n  label {\n    font-family: var(--font-display);\n    font-size: 0.78rem;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: var(--muted);\n  }\n\n  input, select, textarea {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 10px;\n    padding: 0.85rem 1rem;\n    color: var(--white);\n    font-family: var(--font-body);\n    font-size: 0.9rem;\n    outline: none;\n    transition: border-color 0.2s, background 0.2s;\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    appearance: none;\n\n    &::placeholder { color: rgba(255,255,255,0.25); }\n\n    &:focus {\n      border-color: rgba(244,81,19,0.5);\n      background: rgba(244,81,19,0.04);\n    }\n  }\n\n  select {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 1rem center;\n    padding-right: 2.5rem;\n    cursor: pointer;\n\n    option { background: #1a1a1a; color: var(--white); }\n  }\n\n  textarea { resize: vertical; min-height: 120px; }\n}\n\n.cu-submit-btn {\n  padding: 1rem 2rem;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-display);\n  font-size: 1.05rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: filter 0.2s, transform 0.2s;\n  align-self: flex-start;\n  min-width: 200px;\n\n  &:hover:not(:disabled) {\n    filter: brightness(1.15);\n    transform: translateY(-2px);\n  }\n\n  &:disabled { opacity: 0.6; cursor: not-allowed; }\n\n  &.is-loading {\n    opacity: 0.8;\n    pointer-events: none;\n  }\n}\n\n/* \u2500\u2500 Success State \u2500\u2500 */\n.cu-success {\n  text-align: center;\n  padding: 3rem 2rem;\n  background: rgba(244,81,19,0.06);\n  border: 1px solid rgba(244,81,19,0.2);\n  border-radius: 16px;\n\n  .cu-success-icon {\n    width: 60px;\n    height: 60px;\n    background: var(--orange);\n    color: #fff;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    margin: 0 auto 1.25rem;\n  }\n\n  h3 {\n    font-family: var(--font-display);\n    font-size: 1.8rem;\n    text-transform: uppercase;\n    color: var(--white);\n    margin: 0 0 0.5rem;\n  }\n\n  p {\n    font-family: var(--font-body);\n    font-size: 0.95rem;\n    color: var(--muted);\n    margin: 0 0 1.5rem;\n  }\n}\n\n/* \u2500\u2500 Map Column \u2500\u2500 */\n.cu-map-frame {\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid rgba(255,255,255,0.08);\n  height: 340px;\n  position: relative;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n    display: block;\n    filter: invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.7);\n  }\n}\n\n.cu-find-us {\n  margin-top: 1.5rem;\n  padding: 1.5rem;\n  background: var(--panel);\n  border-radius: 14px;\n  border: 1px solid rgba(255,255,255,0.07);\n}\n\n.cu-find-title {\n  font-family: var(--font-display);\n  font-size: 1.1rem;\n  text-transform: uppercase;\n  color: var(--white);\n  margin: 0 0 0.5rem;\n}\n\n.cu-find-addr {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: var(--muted);\n  line-height: 1.6;\n  margin: 0 0 1.25rem;\n}\n\n.cu-dir-btn {\n  display: inline-block;\n  font-size: 0.85rem;\n}\n\n/* \u2500\u2500 Social \u2500\u2500 */\n.cu-social-wrap {\n  margin-top: 1.5rem;\n}\n\n.cu-social-label {\n  font-family: var(--font-display);\n  font-size: 0.75rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--muted);\n  margin-bottom: 0.75rem;\n}\n\n.cu-social-links {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.cu-social-link {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.1rem;\n  background: rgba(255,255,255,0.05);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 8px;\n  color: var(--white);\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n  text-decoration: none;\n  transition: background 0.2s, border-color 0.2s, color 0.2s;\n\n  svg { flex-shrink: 0; }\n\n  &:hover {\n    background: rgba(244,81,19,0.12);\n    border-color: rgba(244,81,19,0.4);\n    color: var(--orange);\n  }\n}\n\n/* \u2500\u2500 Scroll Reveal \u2500\u2500 */\n.sr { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }\n.sr-up { transform: translateY(30px); }\n.sr-left { transform: translateX(-30px); }\n.sr-right { transform: translateX(30px); }\n.sr.sr-visible { opacity: 1; transform: none; }\n\n/* \u2500\u2500 Responsive \u2500\u2500 */\n@media (max-width: 600px) {\n  .cu-info-grid { grid-template-columns: 1fr; }\n  .page-cta-banner { flex-direction: column; text-align: center; }\n  .cta-actions { justify-content: center; }\n  .cu-submit-btn { width: 100%; }\n}\n"] }]
    }], function () { return [{ type: i1.SeoService }]; }, null); })();
//# sourceMappingURL=contact-us.component.js.map