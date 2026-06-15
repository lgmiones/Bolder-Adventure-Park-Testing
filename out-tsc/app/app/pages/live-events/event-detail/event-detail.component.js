import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../services/seo.service";
import * as i3 from "@angular/common";
function EventDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "h1");
    i0.ɵɵtext(2, "Event not found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 3);
    i0.ɵɵtext(4, "\u2190 Back to Live Events");
    i0.ɵɵelementEnd()();
} }
function EventDetailComponent_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.event.ageRestriction);
} }
function EventDetailComponent_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "span", 44);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.event.titleAccent);
} }
function EventDetailComponent_div_1_p_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const para_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", (i_r10 + 2) * 0.08 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", para_r9, " ");
} }
function EventDetailComponent_div_1_div_93_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵelement(1, "img", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r11 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", img_r11, i0.ɵɵsanitizeUrl)("alt", ctx_r5.event.title);
} }
function EventDetailComponent_div_1_section_94_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 94);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pkg_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(pkg_r18.label);
} }
function EventDetailComponent_div_1_section_94_div_14_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 95);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pkg_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("$", pkg_r18.originalValue, " total value included");
} }
function EventDetailComponent_div_1_section_94_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵtemplate(1, EventDetailComponent_div_1_section_94_div_14_span_1_Template, 2, 1, "span", 83);
    i0.ɵɵelementStart(2, "div", 84)(3, "h3", 85);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 86)(6, "span", 87);
    i0.ɵɵtext(7, "$");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 88);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 89);
    i0.ɵɵtext(11, "per ticket");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, EventDetailComponent_div_1_section_94_div_14_p_12_Template, 2, 1, "p", 90);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 91);
    i0.ɵɵtext(14, " Get Tickets ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(15, "svg", 92);
    i0.ɵɵelement(16, "path", 93);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const pkg_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    i0.ɵɵclassProp("is-featured", pkg_r18.featured);
    i0.ɵɵattribute("data-sr-delay", i_r19 * 0.1 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", pkg_r18.label);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(pkg_r18.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(pkg_r18.price);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", pkg_r18.originalValue);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-featured-btn", pkg_r18.featured);
} }
function EventDetailComponent_div_1_section_94_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th")(1, "span", 96);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 97);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const pkg_r24 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(pkg_r24.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("$", pkg_r24.price, "");
} }
function EventDetailComponent_div_1_section_94_tr_25_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 101);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 102);
    i0.ɵɵelement(2, "polyline", 103);
    i0.ɵɵelementEnd()();
} }
function EventDetailComponent_div_1_section_94_tr_25_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 104);
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function EventDetailComponent_div_1_section_94_tr_25_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtemplate(1, EventDetailComponent_div_1_section_94_tr_25_td_3_span_1_Template, 3, 0, "span", 99);
    i0.ɵɵtemplate(2, EventDetailComponent_div_1_section_94_tr_25_td_3_span_2_Template, 2, 0, "span", 100);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r27 = ctx.$implicit;
    const feature_r25 = i0.ɵɵnextContext().$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.packageHasFeature(p_r27, feature_r25));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r26.packageHasFeature(p_r27, feature_r25));
} }
function EventDetailComponent_div_1_section_94_tr_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 98);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, EventDetailComponent_div_1_section_94_tr_25_td_3_Template, 3, 2, "td", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feature_r25 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(feature_r25);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.event.packages);
} }
function EventDetailComponent_div_1_section_94_td_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 105);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pkg_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("$", pkg_r31.price, "");
} }
function EventDetailComponent_div_1_section_94_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 113);
    i0.ɵɵelement(1, "div", 114);
    i0.ɵɵelementStart(2, "span", 115);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 116)(5, "span", 117);
    i0.ɵɵtext(6, "$");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const a_r33 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(a_r33.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(a_r33.price);
} }
function EventDetailComponent_div_1_section_94_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 106)(1, "div", 107);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 108);
    i0.ɵɵelement(3, "line", 109)(4, "line", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Add-Ons ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div", 111);
    i0.ɵɵtemplate(7, EventDetailComponent_div_1_section_94_div_30_div_7_Template, 8, 2, "div", 112);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r17.event.addOns);
} }
function EventDetailComponent_div_1_section_94_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 68)(1, "div", 30)(2, "div", 69)(3, "p", 70);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 71);
    i0.ɵɵelement(5, "path", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Choose Your Night ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "h2", 72);
    i0.ɵɵtext(8, "Tickets & ");
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Packages");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p", 73);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 74);
    i0.ɵɵtemplate(14, EventDetailComponent_div_1_section_94_div_14_Template, 17, 9, "div", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 76)(16, "div", 77);
    i0.ɵɵtext(17, "What's Included");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "table")(19, "thead")(20, "tr")(21, "th");
    i0.ɵɵtext(22, "Feature");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, EventDetailComponent_div_1_section_94_th_23_Template, 5, 2, "th", 78);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵtemplate(25, EventDetailComponent_div_1_section_94_tr_25_Template, 4, 2, "tr", 78);
    i0.ɵɵelementStart(26, "tr", 79)(27, "td");
    i0.ɵɵtext(28, "Your Price");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(29, EventDetailComponent_div_1_section_94_td_29_Template, 2, 1, "td", 80);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(30, EventDetailComponent_div_1_section_94_div_30_Template, 8, 1, "div", 81);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1("Choose from ", ctx_r6.event.packages.length, " great ticket packages.");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r6.event.packages);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r6.event.packages);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r6.allFeatures);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r6.event.packages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.event.addOns);
} }
function EventDetailComponent_div_1_section_95_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126)(1, "span", 127);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 128);
    i0.ɵɵelement(3, "circle", 24)(4, "polyline", 129);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const h_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    i0.ɵɵattribute("data-sr-delay", i_r36 * 0.08 + "s");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(h_r35);
} }
function EventDetailComponent_div_1_section_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 118)(1, "div", 30)(2, "div", 119)(3, "p", 120);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 121);
    i0.ɵɵelement(5, "path", 122);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " What's Included ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "h2", 123);
    i0.ɵɵtext(8, "Night ");
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Highlights");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "div", 124);
    i0.ɵɵtemplate(12, EventDetailComponent_div_1_section_95_div_12_Template, 7, 2, "div", 125);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("ngForOf", ctx_r7.event.highlights);
} }
function EventDetailComponent_div_1_section_96_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 137);
    i0.ɵɵelement(1, "img", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("data-sr-delay", i_r39 * 0.07 + "s");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("object-position", img_r38.includes("Justin.png") ? "center top" : null);
    i0.ɵɵproperty("src", img_r38, i0.ɵɵsanitizeUrl)("alt", ctx_r37.event.title);
} }
function EventDetailComponent_div_1_section_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 130)(1, "div", 30)(2, "div", 131)(3, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(4, "svg", 132);
    i0.ɵɵelement(5, "path", 133)(6, "circle", 134);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Event Photos ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9, "Caught In The ");
    i0.ɵɵelementStart(10, "span", 44);
    i0.ɵɵtext(11, "Act");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 135);
    i0.ɵɵtemplate(13, EventDetailComponent_div_1_section_96_div_13_Template, 2, 5, "div", 136);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r8.event.galleryImages);
} }
function EventDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "a", 6);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 7);
    i0.ɵɵelement(4, "path", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " All Events ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "section", 9);
    i0.ɵɵelement(7, "img", 10)(8, "div", 11)(9, "div", 12);
    i0.ɵɵelementStart(10, "div", 13)(11, "div", 14)(12, "span", 15);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, EventDetailComponent_div_1_span_14_Template, 2, 1, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "h1", 17);
    i0.ɵɵtext(16);
    i0.ɵɵtemplate(17, EventDetailComponent_div_1_span_17_Template, 3, 1, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 19)(19, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(20, "svg", 20);
    i0.ɵɵelement(21, "rect", 21)(22, "path", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "span", 23);
    i0.ɵɵtext(25, "\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 23);
    i0.ɵɵtext(29, "\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(31, "svg", 20);
    i0.ɵɵelement(32, "circle", 24)(33, "path", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(35, "span", 23);
    i0.ɵɵtext(36, "\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(38, "svg", 20);
    i0.ɵɵelement(39, "path", 26)(40, "circle", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(42, "span", 23);
    i0.ɵɵtext(43, "\u2022");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "span");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(46, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "section", 29)(48, "div", 30)(49, "div", 31)(50, "div", 32)(51, "span", 33);
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "span", 34);
    i0.ɵɵtext(54, "Days");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 35);
    i0.ɵɵtext(56, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "div", 36)(58, "span", 33);
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "span", 34);
    i0.ɵɵtext(61, "Hours");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 35);
    i0.ɵɵtext(63, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div", 37)(65, "span", 33);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "span", 34);
    i0.ɵɵtext(68, "Minutes");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "div", 35);
    i0.ɵɵtext(70, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "div", 38)(72, "span", 33);
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "span", 34);
    i0.ɵɵtext(75, "Seconds");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(76, "section", 39)(77, "div", 30)(78, "div", 40)(79, "div", 41)(80, "span", 42);
    i0.ɵɵtext(81, "About The Event");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "h2", 43);
    i0.ɵɵtext(83, " The ");
    i0.ɵɵelementStart(84, "span", 44);
    i0.ɵɵtext(85, "Experience");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(86, EventDetailComponent_div_1_p_86_Template, 2, 2, "p", 45);
    i0.ɵɵelementStart(87, "a", 46);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(88, "svg", 47);
    i0.ɵɵelement(89, "path", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(90, " Get Tickets ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(91, "div", 49)(92, "div", 50);
    i0.ɵɵtemplate(93, EventDetailComponent_div_1_div_93_Template, 2, 2, "div", 51);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(94, EventDetailComponent_div_1_section_94_Template, 31, 6, "section", 52);
    i0.ɵɵtemplate(95, EventDetailComponent_div_1_section_95_Template, 13, 1, "section", 53);
    i0.ɵɵtemplate(96, EventDetailComponent_div_1_section_96_Template, 14, 1, "section", 54);
    i0.ɵɵelementStart(97, "section", 55)(98, "div", 30)(99, "div", 56)(100, "div", 57)(101, "span", 58);
    i0.ɵɵtext(102, "Book Now");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "h2", 59);
    i0.ɵɵtext(104, " Book Your Next Epic Event");
    i0.ɵɵelement(105, "br");
    i0.ɵɵtext(106, " Night At ");
    i0.ɵɵelementStart(107, "span", 44);
    i0.ɵɵtext(108, "Bolder");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(109, " Now ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "p", 60);
    i0.ɵɵtext(111, "Book your tickets in advance to avoid disappointment and guarantee the best price!");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(112, "a", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(113, "svg", 62);
    i0.ɵɵelement(114, "path", 63);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("src", ctx_r1.event.heroImage, i0.ɵɵsanitizeUrl)("alt", ctx_r1.event.title);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", ctx_r1.event.statusClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.event.statusLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.ageRestriction !== "All Ages");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.title, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.titleAccent);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.date, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.event.day);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.time, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.event.location, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.event.ageRestriction);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.pad(ctx_r1.countdownDays));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.pad(ctx_r1.countdownHours));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.pad(ctx_r1.countdownMinutes));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.pad(ctx_r1.countdownSeconds));
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngForOf", ctx_r1.event.experienceBody);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r1.event.experienceImages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.type === "concert" && ctx_r1.event.packages);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.type === "adult-night" && ctx_r1.event.highlights);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.galleryImages && ctx_r1.event.galleryImages.length);
} }
export class EventDetailComponent {
    constructor(route, seo) {
        this.route = route;
        this.seo = seo;
        this.event = null;
        this.countdownDays = 0;
        this.countdownHours = 0;
        this.countdownMinutes = 0;
        this.countdownSeconds = 0;
        this.allEvents = [
            {
                slug: 'mj-dejavu',
                title: 'MJ Dejavu',
                date: 'June 28, 2026',
                day: 'Sat',
                time: '7:00 PM – 11:00 PM',
                location: 'Main Stage',
                ageRestriction: 'All Ages',
                status: 'limited',
                statusClass: 'status-limited',
                statusLabel: 'Limited Slots',
                heroImage: 'assets/MJ Dejavu/0 - HERO IMAGE.png',
                type: 'concert',
                targetDate: new Date('2026-06-28T19:00:00'),
                experienceTitle: 'The Experience',
                experienceBody: [
                    'Step into the world of the King of Pop for an unforgettable evening with MJ Dejavu, direct from Las Vegas — voted the #1 MJ tribute. Join us at Bolder Adventure Park for a night of incredible music, and enjoy the park before the event starts.',
                    'Limited tickets available — book now and don\'t miss the thrilling tribute event.'
                ],
                experienceImages: [
                    'assets/MJ Dejavu/Justin as Michael Jackson.png',
                    'assets/MJ Dejavu/Justin.png'
                ],
                packages: [
                    {
                        name: 'Show Only',
                        price: 39,
                        includes: [
                            'MJ Dejavu Headliner Ticket',
                            'DJ After Hours - All-Beets Tribute',
                            'General Admission Seating Area'
                        ]
                    },
                    {
                        name: 'Thriller Package',
                        price: 69,
                        originalValue: 345,
                        featured: true,
                        label: 'Best Value',
                        includes: [
                            'MJ Dejavu Headliner Ticket',
                            'DJ After Hours - All-Beets Tribute',
                            'General Admission Seating Area',
                            'Full Day Entrance Pass',
                            '2-Hour Unlimited Arcade Card',
                            'Free Second Pass to Bolder Again'
                        ]
                    },
                    {
                        name: 'VIP Backstage Club',
                        price: 149,
                        originalValue: 495,
                        includes: [
                            'MJ Dejavu Headliner Ticket',
                            'DJ After Hours - All-Beets Tribute',
                            'General Admission Seating Area',
                            'Full Day Entrance Pass',
                            '2-Hour Unlimited Arcade Card',
                            'Free Second Pass to Bolder Again',
                            'MJ-Themed Catering - Appetizers & Dinner',
                            'VIP Seat & Table Service during Concert',
                            'VIP Dance Zone Upgrade',
                            'Photo with MJ after the Concert'
                        ]
                    }
                ],
                addOns: [
                    { name: 'MJ Dance Zone (first 8 ft around the stage)', price: 68 },
                    { name: 'Admission Pass (Bolder Base Camp)', price: 39 },
                    { name: 'Arcade Credits ($25 Arcade Card)', price: 25 }
                ],
                galleryImages: [
                    'assets/MJ Dejavu/0 - HERO IMAGE.png',
                    'assets/MJ Dejavu/Crowds.png',
                    'assets/MJ Dejavu/Justin as Michael Jackson.png',
                    'assets/MJ Dejavu/Justin.png',
                    'assets/MJ Dejavu/Stage pic.png'
                ]
            },
            {
                slug: 'adult-night-july-2026',
                title: 'Adult Night',
                titleAccent: 'July 2026',
                date: 'July 3, 2026',
                day: 'Fri',
                time: '8:00 PM – 12:00 AM',
                location: 'Whole Park',
                ageRestriction: '18+',
                status: 'open',
                statusClass: 'status-open',
                statusLabel: 'Open Registration',
                heroImage: 'assets/images/Groups3.jpg',
                type: 'adult-night',
                targetDate: new Date('2026-07-03T20:00:00'),
                experienceTitle: 'The Experience',
                experienceBody: [
                    'The park goes 18+ for the night. Every attraction open until late, music turned up, and zero kids\' lines — just you, your crew, and the whole dome to yourselves.',
                    'First Friday of the month. Book your tickets in advance to avoid disappointment and guarantee the best price.'
                ],
                experienceImages: [
                    'assets/images/Action-on-the-ground.jpg',
                    'assets/images/Thrills-in-the-air.jpg'
                ],
                highlights: [
                    '18+ only · open until 10 PM',
                    'All 10 attractions open',
                    'Music & DJ sets all night',
                    'No kids\' queues',
                    'Full park access included',
                    'Free parking'
                ]
            },
            {
                slug: 'adult-night-august-2026',
                title: 'Adult Night',
                titleAccent: 'August 2026',
                date: 'August 7, 2026',
                day: 'Fri',
                time: '8:00 PM – 12:00 AM',
                location: 'Whole Park',
                ageRestriction: '18+',
                status: 'open',
                statusClass: 'status-open',
                statusLabel: 'Open Registration',
                heroImage: 'assets/images/Thrills-in-the-air.jpg',
                type: 'adult-night',
                targetDate: new Date('2026-08-07T20:00:00'),
                experienceTitle: 'The Experience',
                experienceBody: [
                    'First-Friday takeover, round two. Climb, zip, and race the slides — adults only. Every attraction open, music up, kids\' lines gone.',
                    'Book your tickets in advance to avoid disappointment and guarantee the best price.'
                ],
                experienceImages: [
                    'assets/images/Thrills-in-the-air.jpg',
                    'assets/images/Action-on-the-ground.jpg'
                ],
                highlights: [
                    '18+ only · open until 10 PM',
                    'All 10 attractions open',
                    'Music & DJ sets all night',
                    'No kids\' queues',
                    'Full park access included',
                    'Free parking'
                ]
            }
        ];
    }
    pad(n) {
        return n < 10 ? '0' + n : '' + n;
    }
    get allFeatures() {
        var _a, _b;
        if (!((_b = (_a = this.event) === null || _a === void 0 ? void 0 : _a.packages) === null || _b === void 0 ? void 0 : _b.length)) {
            return [];
        }
        const last = this.event.packages[this.event.packages.length - 1];
        return last.includes;
    }
    packageHasFeature(pkg, feature) {
        return pkg.includes.includes(feature);
    }
    ngOnInit() {
        var _a, _b;
        const slug = (_a = this.route.snapshot.paramMap.get('slug')) !== null && _a !== void 0 ? _a : '';
        this.event = (_b = this.allEvents.find(e => e.slug === slug)) !== null && _b !== void 0 ? _b : null;
        if (this.event) {
            const titleFull = this.event.title + (this.event.titleAccent ? ' ' + this.event.titleAccent : '');
            this.seo.update({
                title: titleFull + ' — Live Events',
                description: this.event.experienceBody[0],
                path: '/live-events/' + this.event.slug
            });
            this.startCountdown();
        }
    }
    startCountdown() {
        if (!this.event) {
            return;
        }
        const target = this.event.targetDate;
        const update = () => {
            const diff = target.getTime() - new Date().getTime();
            if (diff <= 0) {
                this.countdownDays = 0;
                this.countdownHours = 0;
                this.countdownMinutes = 0;
                this.countdownSeconds = 0;
                return;
            }
            this.countdownDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            this.countdownHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdownMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            this.countdownSeconds = Math.floor((diff % (1000 * 60)) / 1000);
        };
        update();
        this.countdownTimer = setInterval(update, 1000);
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
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
        }, 50);
    }
    ngOnDestroy() {
        if (this.countdownTimer) {
            clearInterval(this.countdownTimer);
        }
    }
}
EventDetailComponent.ɵfac = function EventDetailComponent_Factory(t) { return new (t || EventDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.SeoService)); };
EventDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EventDetailComponent, selectors: [["app-event-detail"]], decls: 2, vars: 2, consts: [["class", "ed-not-found", 4, "ngIf"], ["class", "inner-page event-detail-page", 4, "ngIf"], [1, "ed-not-found"], ["routerLink", "/live-events", 1, "btn", "btn-orange"], [1, "inner-page", "event-detail-page"], [1, "ed-breadcrumb"], ["routerLink", "/live-events", 1, "ed-back-link"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "aria-hidden", "true"], ["d", "M15 18l-6-6 6-6"], [1, "ed-hero"], ["fetchpriority", "high", 1, "ed-hero-bg", 3, "src", "alt"], [1, "ed-hero-overlay"], [1, "ed-hero-grad"], [1, "ed-hero-content"], [1, "ed-hero-badges"], [1, "ed-status-badge", 3, "ngClass"], ["class", "ed-age-badge", 4, "ngIf"], [1, "ed-hero-title", "sr", "sr-up"], [4, "ngIf"], ["data-sr-delay", "0.1s", 1, "ed-hero-meta", "sr", "sr-up"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], [1, "ed-sep"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 6v6l4 2"], ["d", "M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z"], ["cx", "12", "cy", "9", "r", "2.4"], [1, "ed-hero-bottom-fade"], [1, "ed-countdown-section"], [1, "ed-container"], [1, "ed-countdown"], [1, "ed-cd-box", "sr", "sr-up"], [1, "ed-cd-num"], [1, "ed-cd-label"], [1, "ed-cd-sep"], ["data-sr-delay", "0.08s", 1, "ed-cd-box", "sr", "sr-up"], ["data-sr-delay", "0.16s", 1, "ed-cd-box", "sr", "sr-up"], ["data-sr-delay", "0.24s", 1, "ed-cd-box", "sr", "sr-up"], [1, "ed-section", "ed-experience"], [1, "ed-experience-grid"], [1, "ed-exp-copy"], [1, "ed-kicker", "sr", "sr-up"], ["data-sr-delay", "0.08s", 1, "ed-exp-title", "sr", "sr-up"], [1, "accent-orange"], ["class", "ed-exp-body sr sr-up", 4, "ngFor", "ngForOf"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", "data-sr-delay", "0.32s", 1, "btn", "btn-orange", "sr", "sr-up"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true"], ["d", "M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z"], [1, "ed-exp-images"], [1, "ed-exp-img-grid"], ["class", "ed-exp-img", 4, "ngFor", "ngForOf"], ["class", "ed-section ed-tickets-section", 4, "ngIf"], ["class", "ed-section ed-highlights-section", 4, "ngIf"], ["class", "ed-section ed-gallery-section", 4, "ngIf"], [1, "ed-section", "ed-cta-banner-wrap"], [1, "ed-cta-banner", "sr", "sr-up"], [1, "ed-cta-left"], [1, "ed-cta-label"], [1, "ed-cta-title"], [1, "ed-cta-sub"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "btn", "btn-orange", "btn-lg"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "6px"], ["d", "M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v1.159a2 2 0 0 1 0 3.682V11.5A2.5 2.5 0 0 1 12.5 14h-9A2.5 2.5 0 0 1 1 11.5V9.341a2 2 0 0 1 0-3.682V4.5zM2 9.5V11.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V9.5a2 2 0 0 1 0-3V4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v2a2 2 0 0 1 0 3zm4.5-5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm5 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"], [1, "ed-age-badge"], [1, "ed-exp-body", "sr", "sr-up"], [1, "ed-exp-img"], ["loading", "lazy", 3, "src", "alt"], [1, "ed-section", "ed-tickets-section"], [1, "ed-pkg-heading", "sr", "sr-up"], [1, "ed-pkg-kicker"], ["width", "13", "height", "13", "viewBox", "0 0 16 16", "fill", "currentColor", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "6px"], [1, "ed-pkg-title"], [1, "ed-pkg-sub"], [1, "ed-pkg-cards"], ["class", "ed-pkg-card sr sr-up", 3, "is-featured", 4, "ngFor", "ngForOf"], ["data-sr-delay", "0.2s", 1, "ed-compare-table", "sr", "sr-up"], [1, "ed-ct-label"], [4, "ngFor", "ngForOf"], [1, "ed-ct-total-row"], ["class", "ed-ct-total", 4, "ngFor", "ngForOf"], ["class", "ed-addons", 4, "ngIf"], [1, "ed-pkg-card", "sr", "sr-up"], ["class", "ed-pkg-best", 4, "ngIf"], [1, "ed-pkg-card-body"], [1, "ed-pkg-name"], [1, "ed-pkg-price"], [1, "ed-pkg-dollar"], [1, "ed-pkg-num"], [1, "ed-pkg-per"], ["class", "ed-pkg-value", 4, "ngIf"], ["href", "https://ticket.bolderadventurepark.com/", "target", "_blank", "rel", "noopener", 1, "ed-pkg-btn"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M7 17L17 7M17 7H7M17 7v10"], [1, "ed-pkg-best"], [1, "ed-pkg-value"], [1, "ed-ct-pkg-name"], [1, "ed-ct-pkg-price"], [1, "ed-ct-feature"], ["class", "ed-ct-check", 4, "ngIf"], ["class", "ed-ct-dash", 4, "ngIf"], [1, "ed-ct-check"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#fff", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["points", "20 6 9 17 4 12"], [1, "ed-ct-dash"], [1, "ed-ct-total"], [1, "ed-addons"], [1, "ed-addons-label"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "aria-hidden", "true"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], [1, "ed-addons-grid"], ["class", "ed-addon-row", 4, "ngFor", "ngForOf"], [1, "ed-addon-row"], [1, "ed-addon-accent"], [1, "ed-addon-name"], [1, "ed-addon-price"], [1, "ed-addon-dollar"], [1, "ed-section", "ed-highlights-section"], [1, "ed-hl-heading", "sr", "sr-up"], [1, "ed-hl-kicker"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "var(--orange)", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "6px"], ["d", "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"], [1, "ed-hl-title"], [1, "ed-highlights-grid"], ["class", "ed-highlight-chip sr sr-up", 4, "ngFor", "ngForOf"], [1, "ed-highlight-chip", "sr", "sr-up"], [1, "ed-hl-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "var(--orange)", "aria-hidden", "true"], ["points", "8 12 11 15 16 9", "stroke", "#fff", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none"], [1, "ed-section", "ed-gallery-section"], [1, "section-title", "ed-gallery-title", "sr", "sr-up"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "aria-hidden", "true", 2, "vertical-align", "-2px", "margin-right", "5px"], ["d", "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"], ["cx", "12", "cy", "13", "r", "4"], [1, "ed-gallery-grid"], ["class", "ed-gallery-item sr sr-scale", 4, "ngFor", "ngForOf"], [1, "ed-gallery-item", "sr", "sr-scale"]], template: function EventDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EventDetailComponent_div_0_Template, 5, 0, "div", 0);
        i0.ɵɵtemplate(1, EventDetailComponent_div_1_Template, 115, 21, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.event);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.event);
    } }, directives: [i3.NgIf, i1.RouterLinkWithHref, i3.NgClass, i3.NgForOf], styles: ["//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   BASE\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.inner-page[_ngcontent-%COMP%]    { background: var(--black); color: var(--white); min-height: 100vh; }\n.ed-section[_ngcontent-%COMP%]    { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ed-container[_ngcontent-%COMP%]  { max-width: 1100px; margin: 0 auto; }\n\n.accent-orange[_ngcontent-%COMP%] { color: var(--orange); }\n.accent-blue[_ngcontent-%COMP%]   { color: var(--blue); }\n\n.ed-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   NOT[_ngcontent-%COMP%]   FOUND\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 1.5rem;\n  padding-top: 148px;\n\n  h1 {\n    font-family: var(--font-display);\n    font-size: 3rem;\n    color: var(--white);\n    margin: 0;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   BREADCRUMB\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-breadcrumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 168px;\n  left: 2rem;\n  z-index: 20;\n\n  @media (max-width: 600px) { top: 160px; left: 1rem; }\n}\n\n.ed-back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   HERO\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.event-detail-page[_ngcontent-%COMP%] { position: relative; }\n\n.ed-hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: clamp(520px, 70vh, 680px);\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  padding-top: 148px;\n}\n\n.ed-hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 30%;\n  z-index: 0;\n}\n\n.ed-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(3, 3, 3, 0.6);\n  z-index: 1;\n}\n\n.ed-hero-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(3,3,3,0.1) 0%,\n    transparent 30%,\n    rgba(3,3,3,0.85) 100%\n  );\n  z-index: 2;\n}\n\n.ed-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 4;\n  padding: 0 2rem 3.5rem;\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.ed-hero-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n\n.ed-status-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 4px;\n\n  &.status-limited {\n    background: var(--orange);\n    color: #fff;\n  }\n  &.status-open {\n    background: #1a7a3a;\n    color: #fff;\n  }\n  &.status-sold-out {\n    background: #555;\n    color: rgba(255,255,255,0.7);\n  }\n}\n\n.ed-age-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 4px;\n  background: var(--orange);\n  color: #fff;\n}\n\n.ed-hero-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  color: #fff;\n  margin: 0 0 1rem;\n  line-height: 0.95;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 40px rgba(0,0,0,0.7);\n  span { font-family: var(--font-display); }\n}\n\n.ed-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n\n  span {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    font-family: var(--font-ui);\n    font-size: 0.88rem;\n    font-weight: 600;\n    color: rgba(255, 255, 255, 0.72);\n    letter-spacing: 0.04em;\n  }\n}\n\n.ed-sep[_ngcontent-%COMP%] {\n  color: rgba(255,255,255,0.25) !important;\n}\n\n.ed-hero-bottom-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0; left: 0; right: 0;\n  height: 140px;\n  background: linear-gradient(to bottom, transparent, var(--black));\n  z-index: 3;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   COUNTDOWN\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-countdown-section[_ngcontent-%COMP%] {\n  padding: 3rem 1.5rem;\n  background: #080808;\n}\n\n.ed-countdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.ed-cd-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 12px;\n  padding: 1.25rem 2rem;\n  min-width: 100px;\n  text-align: center;\n\n  @media (max-width: 500px) {\n    padding: 1rem 1.25rem;\n    min-width: 72px;\n  }\n}\n\n.ed-cd-num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 1;\n}\n\n.ed-cd-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.4rem;\n}\n\n.ed-cd-sep[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 3rem;\n  color: var(--orange);\n  line-height: 1;\n  margin-bottom: 1.25rem;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   THE[_ngcontent-%COMP%]   EXPERIENCE\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-experience[_ngcontent-%COMP%] {\n  background: var(--black);\n}\n\n.ed-experience-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n\n  @media (max-width: 850px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ed-exp-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0.4rem 0 1.25rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-exp-body[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--muted);\n  line-height: 1.75;\n  margin: 0 0 1rem;\n}\n\n.ed-exp-img-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.ed-exp-img[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  aspect-ratio: 3/4;\n\n  &:first-child {\n    grid-row: span 2;\n    aspect-ratio: unset;\n    min-height: 280px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   TICKETS[_ngcontent-%COMP%]   &[_ngcontent-%COMP%]   PACKAGES\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-tickets-section[_ngcontent-%COMP%] {\n  background: #060606;\n.ed-pkg-heading {\n}\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.ed-pkg-kicker[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin: 0 0 0.5rem;\n}\n\n.ed-pkg-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display) !important;\n  font-size: clamp(2.5rem, 5.5vw, 5rem) !important;\n  color: var(--white) !important;\n  line-height: 1 !important;\n  white-space: nowrap !important;\n  margin: 0 0 0.75rem !important;\n\n  span {\n    color: var(--orange) !important;\n    font-family: var(--font-display) !important;\n    display: inline !important;\n  }\n}\n\n.ed-pkg-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: rgba(255,255,255,0.45);\n  margin: 0;\n}\n\n\n.ed-pkg-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n  align-items: stretch;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ed-pkg-card[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 18px;\n  padding: 2rem 1.75rem 1.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.25s, transform 0.25s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.3);\n    transform: translateY(-4px);\n  }\n\n  &.is-featured {\n    border-color: var(--orange);\n    background: rgba(244,81,19,0.05);\n    padding-top: 2.5rem;\n  }\n}\n\n.ed-pkg-best[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 0.28rem 1rem;\n  border-radius: 999px;\n  white-space: nowrap;\n  box-shadow: 0 4px 14px rgba(244,81,19,0.4);\n}\n\n.ed-pkg-card-body[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 1.5rem;\n}\n\n.ed-pkg-name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  color: var(--white);\n  margin: 0 0 1.25rem;\n  line-height: 1;\n}\n\n.ed-pkg-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n\n  .ed-pkg-dollar {\n    font-family: var(--font-display);\n    font-size: 1.6rem;\n    color: var(--white);\n    line-height: 1;\n  }\n\n  .ed-pkg-num {\n    font-family: var(--font-display);\n    font-size: clamp(3rem, 5vw, 4rem);\n    color: var(--white);\n    line-height: 1;\n  }\n\n  .ed-pkg-per {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    font-weight: 400;\n    margin-left: 0.2rem;\n  }\n}\n\n.ed-pkg-value[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  color: rgba(255,255,255,0.3);\n  margin: 0;\n  letter-spacing: 0.04em;\n}\n\n.ed-pkg-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.85rem 1.5rem;\n  border-radius: 999px;\n  font-family: var(--font-ui);\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 1px solid rgba(255,255,255,0.15);\n  color: var(--white);\n  background: transparent;\n  transition: border-color 0.2s, background 0.2s, color 0.2s;\n\n  &:hover {\n    border-color: rgba(255,255,255,0.4);\n    background: rgba(255,255,255,0.05);\n  }\n\n  &.is-featured-btn {\n    background: var(--orange);\n    border-color: var(--orange);\n    color: #fff;\n    box-shadow: 0 4px 20px rgba(244,81,19,0.35);\n\n    &:hover {\n      background: #d94510;\n      border-color: #d94510;\n    }\n  }\n}\n\n.ed-compare-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.ed-ct-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-bottom: 1rem;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  text-align: center;\n}\n\nth[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255,255,255,0.5);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.ed-ct-pkg-name[_ngcontent-%COMP%] { display: block; color: #fff; }\n.ed-ct-pkg-price[_ngcontent-%COMP%] { display: block; color: var(--orange); font-size: 1rem; }\n\ntd.ed-ct-feature[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--muted);\n}\n\n.ed-ct-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: var(--orange);\n  border-radius: 50%;\n  box-shadow: 0 0 12px rgba(244, 81, 19, 0.5), 0 0 24px rgba(244, 81, 19, 0.2);\n  flex-shrink: 0;\n}\n\n.ed-ct-dash[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 2px;\n  background: rgba(255,255,255,0.15);\n  border-radius: 1px;\n  vertical-align: middle;\n}\n\ntr.ed-ct-total-row[_ngcontent-%COMP%] {\n  td {\n    font-family: var(--font-ui);\n    font-weight: 700;\n    font-size: 0.9rem;\n    color: var(--white);\n    border-top: 2px solid rgba(255,255,255,0.12);\n    border-bottom: none;\n  }\n  td.ed-ct-total { color: var(--orange); font-size: 1.2rem; }\n}\n\n//[_ngcontent-%COMP%]   Add-ons\n.ed-addons[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  padding-top: 2rem;\n  border-top: 1px solid rgba(255,255,255,0.07);\n}\n\n.ed-addons-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 1rem;\n}\n\n.ed-addons-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.ed-addon-row[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.85rem 1.25rem 0.85rem 1.5rem;\n  background: #0d1219;\n  border-radius: 10px;\n  border: 1px solid rgba(255,255,255,0.07);\n  overflow: hidden;\n  transition: border-color 0.2s, background 0.2s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.35);\n    background: #111820;\n\n    .ed-addon-accent {\n      opacity: 1;\n    }\n  }\n}\n\n.ed-addon-accent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--orange);\n  border-radius: 0 2px 2px 0;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n\n.ed-addon-name[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 0.92rem;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n  color: rgba(255,255,255,0.8);\n}\n\n.ed-addon-price[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--orange);\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n\n.ed-addon-dollar[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  vertical-align: super;\n  line-height: 0;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   NIGHT[_ngcontent-%COMP%]   HIGHLIGHTS\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-highlights-section[_ngcontent-%COMP%] {\n  background: #080808;\n}\n\n//[_ngcontent-%COMP%]   Heading[_ngcontent-%COMP%]   \u2014[_ngcontent-%COMP%]   one-line[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]   matching[_ngcontent-%COMP%]   reference[_ngcontent-%COMP%]   layout\n.ed-hl-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.ed-hl-kicker[_ngcontent-%COMP%] {\n  font-family: var(--font-ui) !important;\n  font-size: 0.72rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.2em !important;\n  text-transform: uppercase !important;\n  color: var(--orange) !important;\n  margin: 0 0 0.75rem !important;\n}\n\n.ed-hl-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display) !important;\n  font-size: clamp(3.5rem, 9vw, 7rem) !important;\n  line-height: 0.92 !important;\n  color: var(--white) !important;\n  white-space: nowrap !important;\n  margin: 0 !important;\n\n  span {\n    font-family: var(--font-display) !important;\n    color: var(--orange) !important;\n  }\n}\n\n.ed-highlights-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ed-highlight-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: #0d1219;\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: rgba(255,255,255,0.85);\n  transition: border-color 0.2s, background 0.2s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.3);\n    background: #111820;\n  }\n}\n\n.ed-hl-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   EVENT[_ngcontent-%COMP%]   GALLERY\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-gallery-section[_ngcontent-%COMP%] {\n  background: #060606;\n}\n\n//[_ngcontent-%COMP%]   Ensure[_ngcontent-%COMP%]   \"Caught In The Act\"[_ngcontent-%COMP%]   heading[_ngcontent-%COMP%]   renders[_ngcontent-%COMP%]   on[_ngcontent-%COMP%]   ONE[_ngcontent-%COMP%]   LINE\n.ed-gallery-title[_ngcontent-%COMP%] {\n  h2 {\n    font-size: clamp(2rem, 5.5vw, 4.2rem);\n    white-space: nowrap;\n\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n\n  p svg {\n    display: inline;\n    vertical-align: middle;\n  }\n}\n\n.ed-gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 2rem;\n\n  @media (max-width: 600px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.ed-gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:first-child {\n    grid-column: span 2;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    aspect-ratio: 16/10;\n    transition: transform 0.4s ease;\n  }\n\n  &:first-child img {\n    aspect-ratio: 16/7;\n  }\n\n  &:hover img { transform: scale(1.06); }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: rgba(244, 81, 19, 0);\n    transition: background 0.3s;\n  }\n\n  &:hover::after { background: rgba(244, 81, 19, 0.12); }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   CTA[_ngcontent-%COMP%]   BANNER\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-cta-banner-wrap[_ngcontent-%COMP%] {\n  background: var(--black);\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.ed-cta-banner[_ngcontent-%COMP%] {\n  background: rgba(17,158,232,0.06);\n  border: 1px solid rgba(17,158,232,0.2);\n  border-radius: 20px;\n  padding: 3rem 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: radial-gradient(circle at 0% 50%, rgba(244,81,19,0.12) 0%, transparent 50%);\n    pointer-events: none;\n  }\n}\n\n.ed-cta-left[_ngcontent-%COMP%] { flex: 1; min-width: 260px; }\n\n.ed-cta-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.75rem;\n  border-radius: 4px;\n  margin-bottom: 0.75rem;\n}\n\n\n.ed-cta-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 0.75rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-cta-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.5;\n  margin: 0;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//[_ngcontent-%COMP%]   READY[_ngcontent-%COMP%]   CTA\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-ready-section[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--black);\n  padding: clamp(5rem, 10vw, 8rem) 1.5rem;\n  text-align: center;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n    height: 400px;\n    background: radial-gradient(ellipse, rgba(244,81,19,0.12) 0%, transparent 70%);\n    pointer-events: none;\n  }\n}\n\n.ed-ready-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.ed-ready-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  line-height: 1;\n  color: var(--white);\n  margin: 0 0 1.25rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-ready-sub[_ngcontent-%COMP%] {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255,255,255,0.55);\n  max-width: 520px;\n  margin: 0 auto 2.5rem;\n  line-height: 1.6;\n}\n\n.ed-ready-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventDetailComponent, [{
        type: Component,
        args: [{ selector: 'app-event-detail', template: "<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     404 fallback\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"ed-not-found\" *ngIf=\"!event\">\n  <h1>Event not found</h1>\n  <a routerLink=\"/live-events\" class=\"btn btn-orange\">\u2190 Back to Live Events</a>\n</div>\n\n<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n     EVENT DETAIL PAGE\n\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n<div class=\"inner-page event-detail-page\" *ngIf=\"event\">\n\n  <!-- \u2500\u2500 Back breadcrumb \u2500\u2500 -->\n  <div class=\"ed-breadcrumb\">\n    <a routerLink=\"/live-events\" class=\"ed-back-link\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" aria-hidden=\"true\"><path d=\"M15 18l-6-6 6-6\"/></svg>\n      All Events\n    </a>\n  </div>\n\n  <!-- \u2500\u2500 HERO \u2500\u2500 -->\n  <section class=\"ed-hero\">\n    <img class=\"ed-hero-bg\" [src]=\"event.heroImage\" [alt]=\"event.title\" fetchpriority=\"high\" />\n    <div class=\"ed-hero-overlay\"></div>\n    <div class=\"ed-hero-grad\"></div>\n\n    <div class=\"ed-hero-content\">\n      <div class=\"ed-hero-badges\">\n        <span class=\"ed-status-badge\" [ngClass]=\"event.statusClass\">{{ event.statusLabel }}</span>\n        <span class=\"ed-age-badge\" *ngIf=\"event.ageRestriction !== 'All Ages'\">{{ event.ageRestriction }}</span>\n      </div>\n      <h1 class=\"ed-hero-title sr sr-up\">\n        {{ event.title }}<span *ngIf=\"event.titleAccent\"> <span class=\"accent-orange\">{{ event.titleAccent }}</span></span>\n      </h1>\n      <div class=\"ed-hero-meta sr sr-up\" data-sr-delay=\"0.1s\">\n        <span>\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/></svg>\n          {{ event.date }}\n        </span>\n        <span class=\"ed-sep\">\u2022</span>\n        <span>{{ event.day }}</span>\n        <span class=\"ed-sep\">\u2022</span>\n        <span>\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></svg>\n          {{ event.time }}\n        </span>\n        <span class=\"ed-sep\">\u2022</span>\n        <span>\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Z\"/><circle cx=\"12\" cy=\"9\" r=\"2.4\"/></svg>\n          {{ event.location }}\n        </span>\n        <span class=\"ed-sep\">\u2022</span>\n        <span>{{ event.ageRestriction }}</span>\n      </div>\n    </div>\n\n    <div class=\"ed-hero-bottom-fade\"></div>\n  </section>\n\n  <!-- \u2500\u2500 COUNTDOWN \u2500\u2500 -->\n  <section class=\"ed-countdown-section\">\n    <div class=\"ed-container\">\n      <div class=\"ed-countdown\">\n        <div class=\"ed-cd-box sr sr-up\">\n          <span class=\"ed-cd-num\">{{ pad(countdownDays) }}</span>\n          <span class=\"ed-cd-label\">Days</span>\n        </div>\n        <div class=\"ed-cd-sep\">:</div>\n        <div class=\"ed-cd-box sr sr-up\" data-sr-delay=\"0.08s\">\n          <span class=\"ed-cd-num\">{{ pad(countdownHours) }}</span>\n          <span class=\"ed-cd-label\">Hours</span>\n        </div>\n        <div class=\"ed-cd-sep\">:</div>\n        <div class=\"ed-cd-box sr sr-up\" data-sr-delay=\"0.16s\">\n          <span class=\"ed-cd-num\">{{ pad(countdownMinutes) }}</span>\n          <span class=\"ed-cd-label\">Minutes</span>\n        </div>\n        <div class=\"ed-cd-sep\">:</div>\n        <div class=\"ed-cd-box sr sr-up\" data-sr-delay=\"0.24s\">\n          <span class=\"ed-cd-num\">{{ pad(countdownSeconds) }}</span>\n          <span class=\"ed-cd-label\">Seconds</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 THE EXPERIENCE \u2500\u2500 -->\n  <section class=\"ed-section ed-experience\">\n    <div class=\"ed-container\">\n      <div class=\"ed-experience-grid\">\n        <div class=\"ed-exp-copy\">\n          <span class=\"ed-kicker sr sr-up\">About The Event</span>\n          <h2 class=\"ed-exp-title sr sr-up\" data-sr-delay=\"0.08s\">\n            The <span class=\"accent-orange\">Experience</span>\n          </h2>\n          <p\n            class=\"ed-exp-body sr sr-up\"\n            *ngFor=\"let para of event.experienceBody; let i = index\"\n            [attr.data-sr-delay]=\"((i + 2) * 0.08) + 's'\">\n            {{ para }}\n          </p>\n          <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-orange sr sr-up\" data-sr-delay=\"0.32s\">\n            <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"/></svg>\n            Get Tickets\n          </a>\n        </div>\n        <div class=\"ed-exp-images\">\n          <div class=\"ed-exp-img-grid\">\n            <div class=\"ed-exp-img\" *ngFor=\"let img of event.experienceImages; let i = index\">\n              <img [src]=\"img\" [alt]=\"event.title\" loading=\"lazy\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 TICKETS & PACKAGES (Concert only) \u2500\u2500 -->\n  <section class=\"ed-section ed-tickets-section\" *ngIf=\"event.type === 'concert' && event.packages\">\n    <div class=\"ed-container\">\n      <div class=\"ed-pkg-heading sr sr-up\">\n        <p class=\"ed-pkg-kicker\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5z\"/></svg>\n          Choose Your Night\n        </p>\n        <h2 class=\"ed-pkg-title\">Tickets &amp; <span>Packages</span></h2>\n        <p class=\"ed-pkg-sub\">Choose from {{ event.packages.length }} great ticket packages.</p>\n      </div>\n\n      <!-- Package cards row -->\n      <div class=\"ed-pkg-cards\">\n        <div\n          class=\"ed-pkg-card sr sr-up\"\n          [class.is-featured]=\"pkg.featured\"\n          *ngFor=\"let pkg of event.packages; let i = index\"\n          [attr.data-sr-delay]=\"(i * 0.1) + 's'\">\n          <span class=\"ed-pkg-best\" *ngIf=\"pkg.label\">{{ pkg.label }}</span>\n          <div class=\"ed-pkg-card-body\">\n            <h3 class=\"ed-pkg-name\">{{ pkg.name }}</h3>\n            <div class=\"ed-pkg-price\">\n              <span class=\"ed-pkg-dollar\">$</span><span class=\"ed-pkg-num\">{{ pkg.price }}</span>\n              <span class=\"ed-pkg-per\">per ticket</span>\n            </div>\n            <p class=\"ed-pkg-value\" *ngIf=\"pkg.originalValue\">${{ pkg.originalValue }} total value included</p>\n          </div>\n          <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"ed-pkg-btn\" [class.is-featured-btn]=\"pkg.featured\">\n            Get Tickets\n            <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\"/></svg>\n          </a>\n        </div>\n      </div>\n\n      <!-- Comparison table -->\n      <div class=\"ed-compare-table sr sr-up\" data-sr-delay=\"0.2s\">\n        <div class=\"ed-ct-label\">What's Included</div>\n        <table>\n          <thead>\n            <tr>\n              <th>Feature</th>\n              <th *ngFor=\"let pkg of event.packages\">\n                <span class=\"ed-ct-pkg-name\">{{ pkg.name }}</span>\n                <span class=\"ed-ct-pkg-price\">${{ pkg.price }}</span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let feature of allFeatures\">\n              <td class=\"ed-ct-feature\">{{ feature }}</td>\n              <td *ngFor=\"let p of event.packages\">\n                <span *ngIf=\"packageHasFeature(p, feature)\" class=\"ed-ct-check\">\n                  <svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n                </span>\n                <span *ngIf=\"!packageHasFeature(p, feature)\" class=\"ed-ct-dash\">\u2014</span>\n              </td>\n            </tr>\n            <tr class=\"ed-ct-total-row\">\n              <td>Your Price</td>\n              <td *ngFor=\"let pkg of event.packages\" class=\"ed-ct-total\">${{ pkg.price }}</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <!-- Add-ons -->\n        <div class=\"ed-addons\" *ngIf=\"event.addOns\">\n          <div class=\"ed-addons-label\">\n            <svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" aria-hidden=\"true\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/></svg>\n            Add-Ons\n          </div>\n          <div class=\"ed-addons-grid\">\n            <div class=\"ed-addon-row\" *ngFor=\"let a of event.addOns\">\n              <div class=\"ed-addon-accent\"></div>\n              <span class=\"ed-addon-name\">{{ a.name }}</span>\n              <span class=\"ed-addon-price\"><span class=\"ed-addon-dollar\">$</span>{{ a.price }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 NIGHT HIGHLIGHTS (Adult night only) \u2500\u2500 -->\n  <section class=\"ed-section ed-highlights-section\" *ngIf=\"event.type === 'adult-night' && event.highlights\">\n    <div class=\"ed-container\">\n      <div class=\"ed-hl-heading sr sr-up\">\n        <p class=\"ed-hl-kicker\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"var(--orange)\" aria-hidden=\"true\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z\"/></svg>\n          What's Included\n        </p>\n        <h2 class=\"ed-hl-title\">Night <span>Highlights</span></h2>\n      </div>\n      <div class=\"ed-highlights-grid\">\n        <div\n          class=\"ed-highlight-chip sr sr-up\"\n          *ngFor=\"let h of event.highlights; let i = index\"\n          [attr.data-sr-delay]=\"(i * 0.08) + 's'\">\n          <span class=\"ed-hl-icon\">\n            <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"var(--orange)\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"8 12 11 15 16 9\" stroke=\"#fff\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>\n          </span>\n          <span>{{ h }}</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 EVENT GALLERY \u2500\u2500 -->\n  <section class=\"ed-section ed-gallery-section\" *ngIf=\"event.galleryImages && event.galleryImages.length\">\n    <div class=\"ed-container\">\n      <div class=\"section-title ed-gallery-title sr sr-up\">\n        <p>\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" aria-hidden=\"true\" style=\"vertical-align:-2px;margin-right:5px\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></svg>\n          Event Photos\n        </p>\n        <h2>Caught In The <span class=\"accent-orange\">Act</span></h2>\n      </div>\n      <div class=\"ed-gallery-grid\">\n        <div\n          class=\"ed-gallery-item sr sr-scale\"\n          *ngFor=\"let img of event.galleryImages; let i = index\"\n          [attr.data-sr-delay]=\"(i * 0.07) + 's'\">\n          <img [src]=\"img\" [alt]=\"event.title\" loading=\"lazy\" [style.object-position]=\"img.includes('Justin.png') ? 'center top' : null\" />\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- \u2500\u2500 BOOK NOW CTA BANNER \u2500\u2500 -->\n  <section class=\"ed-section ed-cta-banner-wrap\">\n    <div class=\"ed-container\">\n      <div class=\"ed-cta-banner sr sr-up\">\n        <div class=\"ed-cta-left\">\n          <span class=\"ed-cta-label\">Book Now</span>\n          <h2 class=\"ed-cta-title\">\n            Book Your Next Epic Event<br/>\n            Night At <span class=\"accent-orange\">Bolder</span> Now\n          </h2>\n          <p class=\"ed-cta-sub\">Book your tickets in advance to avoid disappointment and guarantee the best price!</p>\n        </div>\n        <a href=\"https://ticket.bolderadventurepark.com/\" target=\"_blank\" rel=\"noopener\" class=\"btn btn-orange btn-lg\">\n          <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"currentColor\" aria-hidden=\"true\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v1.159a2 2 0 0 1 0 3.682V11.5A2.5 2.5 0 0 1 12.5 14h-9A2.5 2.5 0 0 1 1 11.5V9.341a2 2 0 0 1 0-3.682V4.5zM2 9.5V11.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V9.5a2 2 0 0 1 0-3V4.5A1.5 1.5 0 0 0 12.5 3h-9A1.5 1.5 0 0 0 2 4.5v2a2 2 0 0 1 0 3zm4.5-5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm5 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z\"/></svg>\n          ", styles: ["// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  BASE\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.inner-page    { background: var(--black); color: var(--white); min-height: 100vh; }\n.ed-section    { padding: clamp(4rem, 8vw, 6rem) 1.5rem; }\n.ed-container  { max-width: 1100px; margin: 0 auto; }\n\n.accent-orange { color: var(--orange); }\n.accent-blue   { color: var(--blue); }\n\n.ed-kicker {\n  display: inline-block;\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 0.6rem;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  NOT FOUND\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  gap: 1.5rem;\n  padding-top: 148px;\n\n  h1 {\n    font-family: var(--font-display);\n    font-size: 3rem;\n    color: var(--white);\n    margin: 0;\n  }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  BREADCRUMB\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-breadcrumb {\n  position: absolute;\n  top: 168px;\n  left: 2rem;\n  z-index: 20;\n\n  @media (max-width: 600px) { top: 160px; left: 1rem; }\n}\n\n.ed-back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-family: var(--font-ui);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  transition: color 0.2s;\n\n  &:hover { color: #fff; }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  HERO\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.event-detail-page { position: relative; }\n\n.ed-hero {\n  position: relative;\n  width: 100%;\n  min-height: clamp(520px, 70vh, 680px);\n  display: flex;\n  align-items: flex-end;\n  overflow: hidden;\n  padding-top: 148px;\n}\n\n.ed-hero-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 30%;\n  z-index: 0;\n}\n\n.ed-hero-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(3, 3, 3, 0.6);\n  z-index: 1;\n}\n\n.ed-hero-grad {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(3,3,3,0.1) 0%,\n    transparent 30%,\n    rgba(3,3,3,0.85) 100%\n  );\n  z-index: 2;\n}\n\n.ed-hero-content {\n  position: relative;\n  z-index: 4;\n  padding: 0 2rem 3.5rem;\n  width: 100%;\n  max-width: 1100px;\n  margin: 0 auto;\n}\n\n.ed-hero-badges {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n\n.ed-status-badge {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 4px;\n\n  &.status-limited {\n    background: var(--orange);\n    color: #fff;\n  }\n  &.status-open {\n    background: #1a7a3a;\n    color: #fff;\n  }\n  &.status-sold-out {\n    background: #555;\n    color: rgba(255,255,255,0.7);\n  }\n}\n\n.ed-age-badge {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 4px;\n  background: var(--orange);\n  color: #fff;\n}\n\n.ed-hero-title {\n  font-family: var(--font-display);\n  font-size: clamp(3.5rem, 10vw, 8rem);\n  color: #fff;\n  margin: 0 0 1rem;\n  line-height: 0.95;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 40px rgba(0,0,0,0.7);\n  span { font-family: var(--font-display); }\n}\n\n.ed-hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n\n  span {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.3rem;\n    font-family: var(--font-ui);\n    font-size: 0.88rem;\n    font-weight: 600;\n    color: rgba(255, 255, 255, 0.72);\n    letter-spacing: 0.04em;\n  }\n}\n\n.ed-sep {\n  color: rgba(255,255,255,0.25) !important;\n}\n\n.ed-hero-bottom-fade {\n  position: absolute;\n  bottom: 0; left: 0; right: 0;\n  height: 140px;\n  background: linear-gradient(to bottom, transparent, var(--black));\n  z-index: 3;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  COUNTDOWN\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-countdown-section {\n  padding: 3rem 1.5rem;\n  background: #080808;\n}\n\n.ed-countdown {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.ed-cd-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255,255,255,0.06);\n  border: 1px solid rgba(255,255,255,0.1);\n  border-radius: 12px;\n  padding: 1.25rem 2rem;\n  min-width: 100px;\n  text-align: center;\n\n  @media (max-width: 500px) {\n    padding: 1rem 1.25rem;\n    min-width: 72px;\n  }\n}\n\n.ed-cd-num {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 5vw, 4rem);\n  color: var(--white);\n  line-height: 1;\n}\n\n.ed-cd-label {\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-top: 0.4rem;\n}\n\n.ed-cd-sep {\n  font-family: var(--font-display);\n  font-size: 3rem;\n  color: var(--orange);\n  line-height: 1;\n  margin-bottom: 1.25rem;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  THE EXPERIENCE\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-experience {\n  background: var(--black);\n}\n\n.ed-experience-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n\n  @media (max-width: 850px) {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n\n.ed-exp-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0.4rem 0 1.25rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-exp-body {\n  font-family: var(--font-body);\n  font-size: 0.92rem;\n  color: var(--muted);\n  line-height: 1.75;\n  margin: 0 0 1rem;\n}\n\n.ed-exp-img-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.ed-exp-img {\n  border-radius: 14px;\n  overflow: hidden;\n  aspect-ratio: 3/4;\n\n  &:first-child {\n    grid-row: span 2;\n    aspect-ratio: unset;\n    min-height: 280px;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img { transform: scale(1.04); }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  TICKETS & PACKAGES\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-tickets-section {\n  background: #060606;\n.ed-pkg-heading {\n}\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.ed-pkg-kicker {\n  display: block;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin: 0 0 0.5rem;\n}\n\n.ed-pkg-title {\n  font-family: var(--font-display) !important;\n  font-size: clamp(2.5rem, 5.5vw, 5rem) !important;\n  color: var(--white) !important;\n  line-height: 1 !important;\n  white-space: nowrap !important;\n  margin: 0 0 0.75rem !important;\n\n  span {\n    color: var(--orange) !important;\n    font-family: var(--font-display) !important;\n    display: inline !important;\n  }\n}\n\n.ed-pkg-sub {\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: rgba(255,255,255,0.45);\n  margin: 0;\n}\n\n\n.ed-pkg-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n  align-items: stretch;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ed-pkg-card {\n  background: #0d1117;\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 18px;\n  padding: 2rem 1.75rem 1.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  transition: border-color 0.25s, transform 0.25s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.3);\n    transform: translateY(-4px);\n  }\n\n  &.is-featured {\n    border-color: var(--orange);\n    background: rgba(244,81,19,0.05);\n    padding-top: 2.5rem;\n  }\n}\n\n.ed-pkg-best {\n  position: absolute;\n  top: -14px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  padding: 0.28rem 1rem;\n  border-radius: 999px;\n  white-space: nowrap;\n  box-shadow: 0 4px 14px rgba(244,81,19,0.4);\n}\n\n.ed-pkg-card-body {\n  flex: 1;\n  margin-bottom: 1.5rem;\n}\n\n.ed-pkg-name {\n  font-family: var(--font-display);\n  font-size: clamp(1.6rem, 3vw, 2.2rem);\n  color: var(--white);\n  margin: 0 0 1.25rem;\n  line-height: 1;\n}\n\n.ed-pkg-price {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n\n  .ed-pkg-dollar {\n    font-family: var(--font-display);\n    font-size: 1.6rem;\n    color: var(--white);\n    line-height: 1;\n  }\n\n  .ed-pkg-num {\n    font-family: var(--font-display);\n    font-size: clamp(3rem, 5vw, 4rem);\n    color: var(--white);\n    line-height: 1;\n  }\n\n  .ed-pkg-per {\n    font-family: var(--font-body);\n    font-size: 0.82rem;\n    color: var(--muted);\n    font-weight: 400;\n    margin-left: 0.2rem;\n  }\n}\n\n.ed-pkg-value {\n  font-family: var(--font-ui);\n  font-size: 0.75rem;\n  color: rgba(255,255,255,0.3);\n  margin: 0;\n  letter-spacing: 0.04em;\n}\n\n.ed-pkg-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.85rem 1.5rem;\n  border-radius: 999px;\n  font-family: var(--font-ui);\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 1px solid rgba(255,255,255,0.15);\n  color: var(--white);\n  background: transparent;\n  transition: border-color 0.2s, background 0.2s, color 0.2s;\n\n  &:hover {\n    border-color: rgba(255,255,255,0.4);\n    background: rgba(255,255,255,0.05);\n  }\n\n  &.is-featured-btn {\n    background: var(--orange);\n    border-color: var(--orange);\n    color: #fff;\n    box-shadow: 0 4px 20px rgba(244,81,19,0.35);\n\n    &:hover {\n      background: #d94510;\n      border-color: #d94510;\n    }\n  }\n}\n\n.ed-compare-table {\n  overflow-x: auto;\n}\n\n.ed-ct-label {\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: rgba(255,255,255,0.35);\n  margin-bottom: 1rem;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-family: var(--font-body);\n  font-size: 0.85rem;\n}\n\nth, td {\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(255,255,255,0.06);\n  text-align: center;\n}\n\nth {\n  font-family: var(--font-ui);\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: rgba(255,255,255,0.5);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.ed-ct-pkg-name { display: block; color: #fff; }\n.ed-ct-pkg-price { display: block; color: var(--orange); font-size: 1rem; }\n\ntd.ed-ct-feature {\n  text-align: left;\n  color: var(--muted);\n}\n\n.ed-ct-check {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  background: var(--orange);\n  border-radius: 50%;\n  box-shadow: 0 0 12px rgba(244, 81, 19, 0.5), 0 0 24px rgba(244, 81, 19, 0.2);\n  flex-shrink: 0;\n}\n\n.ed-ct-dash {\n  display: inline-block;\n  width: 20px;\n  height: 2px;\n  background: rgba(255,255,255,0.15);\n  border-radius: 1px;\n  vertical-align: middle;\n}\n\ntr.ed-ct-total-row {\n  td {\n    font-family: var(--font-ui);\n    font-weight: 700;\n    font-size: 0.9rem;\n    color: var(--white);\n    border-top: 2px solid rgba(255,255,255,0.12);\n    border-bottom: none;\n  }\n  td.ed-ct-total { color: var(--orange); font-size: 1.2rem; }\n}\n\n// Add-ons\n.ed-addons {\n  margin-top: 2.5rem;\n  padding-top: 2rem;\n  border-top: 1px solid rgba(255,255,255,0.07);\n}\n\n.ed-addons-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-family: var(--font-ui);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: var(--orange);\n  margin-bottom: 1rem;\n}\n\n.ed-addons-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.ed-addon-row {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.85rem 1.25rem 0.85rem 1.5rem;\n  background: #0d1219;\n  border-radius: 10px;\n  border: 1px solid rgba(255,255,255,0.07);\n  overflow: hidden;\n  transition: border-color 0.2s, background 0.2s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.35);\n    background: #111820;\n\n    .ed-addon-accent {\n      opacity: 1;\n    }\n  }\n}\n\n.ed-addon-accent {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: var(--orange);\n  border-radius: 0 2px 2px 0;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n\n.ed-addon-name {\n  font-family: var(--font-ui);\n  font-size: 0.92rem;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n  color: rgba(255,255,255,0.8);\n}\n\n.ed-addon-price {\n  font-family: var(--font-display);\n  font-size: 1.4rem;\n  color: var(--orange);\n  line-height: 1;\n  letter-spacing: 0.02em;\n}\n\n.ed-addon-dollar {\n  font-size: 0.9rem;\n  vertical-align: super;\n  line-height: 0;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  NIGHT HIGHLIGHTS\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-highlights-section {\n  background: #080808;\n}\n\n// Heading \u2014 one-line title matching reference layout\n.ed-hl-heading {\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.ed-hl-kicker {\n  font-family: var(--font-ui) !important;\n  font-size: 0.72rem !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.2em !important;\n  text-transform: uppercase !important;\n  color: var(--orange) !important;\n  margin: 0 0 0.75rem !important;\n}\n\n.ed-hl-title {\n  font-family: var(--font-display) !important;\n  font-size: clamp(3.5rem, 9vw, 7rem) !important;\n  line-height: 0.92 !important;\n  color: var(--white) !important;\n  white-space: nowrap !important;\n  margin: 0 !important;\n\n  span {\n    font-family: var(--font-display) !important;\n    color: var(--orange) !important;\n  }\n}\n\n.ed-highlights-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.ed-highlight-chip {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: #0d1219;\n  border: 1px solid rgba(255,255,255,0.08);\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  font-family: var(--font-body);\n  font-size: 0.95rem;\n  color: rgba(255,255,255,0.85);\n  transition: border-color 0.2s, background 0.2s;\n\n  &:hover {\n    border-color: rgba(244,81,19,0.3);\n    background: #111820;\n  }\n}\n\n.ed-hl-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  EVENT GALLERY\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-gallery-section {\n  background: #060606;\n}\n\n// Ensure \"Caught In The Act\" heading renders on ONE LINE\n.ed-gallery-title {\n  h2 {\n    font-size: clamp(2rem, 5.5vw, 4.2rem);\n    white-space: nowrap;\n\n    span {\n      display: inline;\n      font-family: var(--font-display);\n    }\n  }\n\n  p svg {\n    display: inline;\n    vertical-align: middle;\n  }\n}\n\n.ed-gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0.5rem;\n  margin-top: 2rem;\n\n  @media (max-width: 600px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.ed-gallery-item {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &:first-child {\n    grid-column: span 2;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    aspect-ratio: 16/10;\n    transition: transform 0.4s ease;\n  }\n\n  &:first-child img {\n    aspect-ratio: 16/7;\n  }\n\n  &:hover img { transform: scale(1.06); }\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: rgba(244, 81, 19, 0);\n    transition: background 0.3s;\n  }\n\n  &:hover::after { background: rgba(244, 81, 19, 0.12); }\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  CTA BANNER\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-cta-banner-wrap {\n  background: var(--black);\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.ed-cta-banner {\n  background: rgba(17,158,232,0.06);\n  border: 1px solid rgba(17,158,232,0.2);\n  border-radius: 20px;\n  padding: 3rem 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  flex-wrap: wrap;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background: radial-gradient(circle at 0% 50%, rgba(244,81,19,0.12) 0%, transparent 50%);\n    pointer-events: none;\n  }\n}\n\n.ed-cta-left { flex: 1; min-width: 260px; }\n\n.ed-cta-label {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--font-ui);\n  font-size: 0.7rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.75rem;\n  border-radius: 4px;\n  margin-bottom: 0.75rem;\n}\n\n\n.ed-cta-title {\n  font-family: var(--font-display);\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  color: var(--white);\n  line-height: 1;\n  margin: 0 0 0.75rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-cta-sub {\n  font-family: var(--font-body);\n  font-size: 0.9rem;\n  color: rgba(255,255,255,0.55);\n  line-height: 1.5;\n  margin: 0;\n}\n\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n//  READY CTA\n// \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.ed-ready-section {\n  position: relative;\n  background: var(--black);\n  padding: clamp(5rem, 10vw, 8rem) 1.5rem;\n  text-align: center;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n    height: 400px;\n    background: radial-gradient(ellipse, rgba(244,81,19,0.12) 0%, transparent 70%);\n    pointer-events: none;\n  }\n}\n\n.ed-ready-inner {\n  position: relative;\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.ed-ready-title {\n  font-family: var(--font-display);\n  font-size: clamp(2.8rem, 7vw, 5.5rem);\n  line-height: 1;\n  color: var(--white);\n  margin: 0 0 1.25rem;\n  span { font-family: var(--font-display); }\n}\n\n.ed-ready-sub {\n  font-family: var(--font-body);\n  font-size: 1.05rem;\n  color: rgba(255,255,255,0.55);\n  max-width: 520px;\n  margin: 0 auto 2.5rem;\n  line-height: 1.6;\n}\n\n.ed-ready-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.SeoService }]; }, null); })();
//# sourceMappingURL=event-detail.component.js.map