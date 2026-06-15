import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function PageHeroComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.tag);
} }
function PageHeroComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.subtitle);
} }
export class PageHeroComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
        this.backgroundImage = '';
        this.tag = '';
        this.observer = null;
    }
    ngAfterViewInit() {
        this.initScrollObserver();
    }
    initScrollObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                var _a, _b;
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.transitionDelay = (_a = el.dataset['srDelay']) !== null && _a !== void 0 ? _a : '0s';
                    el.classList.add('sr-visible');
                    (_b = this.observer) === null || _b === void 0 ? void 0 : _b.unobserve(el);
                }
            });
        }, { threshold: 0.13, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.sr').forEach(el => { var _a; return (_a = this.observer) === null || _a === void 0 ? void 0 : _a.observe(el); });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
}
PageHeroComponent.ɵfac = function PageHeroComponent_Factory(t) { return new (t || PageHeroComponent)(); };
PageHeroComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PageHeroComponent, selectors: [["app-page-hero"]], inputs: { title: "title", subtitle: "subtitle", backgroundImage: "backgroundImage", tag: "tag" }, decls: 12, vars: 5, consts: [[1, "page-hero"], ["fetchpriority", "high", "loading", "eager", "decoding", "sync", "width", "1920", "height", "640", 1, "ph-bg-img", 3, "src", "alt"], [1, "ph-overlay-dark"], [1, "ph-overlay-grad"], [1, "ph-deco-line"], [1, "ph-content"], ["class", "ph-tag sr sr-up", 4, "ngIf"], ["data-sr-delay", "0.08s", 1, "ph-title", "sr", "sr-up"], ["data-sr-delay", "0.18s", 1, "ph-accent-line", "sr", "sr-up"], ["class", "ph-subtitle sr sr-up", "data-sr-delay", "0.24s", 4, "ngIf"], [1, "ph-bottom-fade"], [1, "ph-tag", "sr", "sr-up"], ["data-sr-delay", "0.24s", 1, "ph-subtitle", "sr", "sr-up"]], template: function PageHeroComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelement(1, "img", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, PageHeroComponent_span_6_Template, 2, 1, "span", 6);
        i0.ɵɵelementStart(7, "h1", 7);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "div", 8);
        i0.ɵɵtemplate(10, PageHeroComponent_p_10_Template, 2, 1, "p", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "div", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.backgroundImage, i0.ɵɵsanitizeUrl)("alt", ctx.title);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.tag);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.subtitle);
    } }, directives: [i1.NgIf], styles: [".page-hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: clamp(380px, 60vh, 640px);\n  \n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\n\n\n.ph-bg-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 30%;\n  z-index: 0;\n  \n  will-change: auto;\n}\n\n\n.ph-overlay-dark[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.52);\n  z-index: 1;\n}\n\n.ph-overlay-grad[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(3, 3, 3, 0.15) 0%,\n    transparent 30%,\n    transparent 55%,\n    rgba(3, 3, 3, 0.9) 100%\n  );\n  z-index: 2;\n}\n\n\n.ph-deco-line[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  pointer-events: none;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: -10%;\n    bottom: -10%;\n    width: 60%;\n    height: 3px;\n    background: var(--orange, #f45113);\n    transform: rotate(-8deg);\n    transform-origin: left bottom;\n    opacity: 0.5;\n  }\n}\n\n\n.ph-bottom-fade[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 120px;\n  background: linear-gradient(to bottom, transparent, var(--black, #030303));\n  z-index: 3;\n}\n\n\n.ph-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 4;\n  text-align: center;\n  padding: 0 1.5rem 3.5rem;\n  width: 100%;\n  max-width: 900px;\n}\n\n.ph-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--orange, #f45113);\n  color: #fff;\n  font-family: var(--font-ui, 'Barlow Condensed', Arial, sans-serif);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 3px;\n  margin-bottom: 0.9rem;\n}\n\n.ph-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display, 'Bebas Neue', Impact, sans-serif);\n  font-size: clamp(3.5rem, 9vw, 7.5rem);\n  color: #fff;\n  margin: 0 0 0.3rem;\n  line-height: 1;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 32px rgba(0,0,0,0.6);\n}\n\n.ph-accent-line[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 4px;\n  background: var(--orange, #f45113);\n  margin: 0 auto 1rem;\n  border-radius: 2px;\n}\n\n.ph-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-body, 'Inter', Arial, sans-serif);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 540px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n\n\n.ph-content[_ngcontent-%COMP%]   .sr[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.ph-content[_ngcontent-%COMP%]   .sr-up[_ngcontent-%COMP%] { transform: translateY(20px); }\n.ph-content[_ngcontent-%COMP%]   .sr.sr-visible[_ngcontent-%COMP%] { opacity: 1; transform: none; }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeroComponent, [{
        type: Component,
        args: [{ selector: 'app-page-hero', template: "<section class=\"page-hero\">\n  <!-- Real <img> instead of CSS background \u2014 enables fetchpriority + proper LCP -->\n  <img\n    class=\"ph-bg-img\"\n    [src]=\"backgroundImage\"\n    [alt]=\"title\"\n    fetchpriority=\"high\"\n    loading=\"eager\"\n    decoding=\"sync\"\n    width=\"1920\"\n    height=\"640\"\n  />\n\n  <!-- layered overlays -->\n  <div class=\"ph-overlay-dark\"></div>\n  <div class=\"ph-overlay-grad\"></div>\n  <!-- decorative diagonal line -->\n  <div class=\"ph-deco-line\"></div>\n\n  <div class=\"ph-content\">\n    <span class=\"ph-tag sr sr-up\" *ngIf=\"tag\">{{ tag }}</span>\n    <h1 class=\"ph-title sr sr-up\" data-sr-delay=\"0.08s\">{{ title }}</h1>\n    <div class=\"ph-accent-line sr sr-up\" data-sr-delay=\"0.18s\"></div>\n    <p class=\"ph-subtitle sr sr-up\" *ngIf=\"subtitle\" data-sr-delay=\"0.24s\">{{ subtitle }}</p>\n  </div>\n\n  <!-- bottom fade into the page -->\n  <div class=\"ph-bottom-fade\"></div>\n</section>\n", styles: [".page-hero {\n  position: relative;\n  width: 100%;\n  height: clamp(380px, 60vh, 640px);\n  /* No background-image here \u2014 using <img> element instead for LCP */\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  overflow: hidden;\n}\n\n/* \u2500\u2500 hero background image (replaces background-attachment:fixed) \u2500\u2500 */\n.ph-bg-img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 30%;\n  z-index: 0;\n  /* will-change: auto tells browser no transform animation \u2014 avoids compositing layer */\n  will-change: auto;\n}\n\n/* \u2500\u2500 overlays \u2500\u2500 */\n.ph-overlay-dark {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.52);\n  z-index: 1;\n}\n\n.ph-overlay-grad {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(3, 3, 3, 0.15) 0%,\n    transparent 30%,\n    transparent 55%,\n    rgba(3, 3, 3, 0.9) 100%\n  );\n  z-index: 2;\n}\n\n/* \u2500\u2500 diagonal decorative line \u2500\u2500 */\n.ph-deco-line {\n  position: absolute;\n  inset: 0;\n  z-index: 2;\n  pointer-events: none;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: -10%;\n    bottom: -10%;\n    width: 60%;\n    height: 3px;\n    background: var(--orange, #f45113);\n    transform: rotate(-8deg);\n    transform-origin: left bottom;\n    opacity: 0.5;\n  }\n}\n\n/* \u2500\u2500 bottom fade \u2500\u2500 */\n.ph-bottom-fade {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 120px;\n  background: linear-gradient(to bottom, transparent, var(--black, #030303));\n  z-index: 3;\n}\n\n/* \u2500\u2500 content \u2500\u2500 */\n.ph-content {\n  position: relative;\n  z-index: 4;\n  text-align: center;\n  padding: 0 1.5rem 3.5rem;\n  width: 100%;\n  max-width: 900px;\n}\n\n.ph-tag {\n  display: inline-block;\n  background: var(--orange, #f45113);\n  color: #fff;\n  font-family: var(--font-ui, 'Barlow Condensed', Arial, sans-serif);\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.85rem;\n  border-radius: 3px;\n  margin-bottom: 0.9rem;\n}\n\n.ph-title {\n  font-family: var(--font-display, 'Bebas Neue', Impact, sans-serif);\n  font-size: clamp(3.5rem, 9vw, 7.5rem);\n  color: #fff;\n  margin: 0 0 0.3rem;\n  line-height: 1;\n  letter-spacing: 0.01em;\n  text-shadow: 0 4px 32px rgba(0,0,0,0.6);\n}\n\n.ph-accent-line {\n  width: 64px;\n  height: 4px;\n  background: var(--orange, #f45113);\n  margin: 0 auto 1rem;\n  border-radius: 2px;\n}\n\n.ph-subtitle {\n  font-family: var(--font-body, 'Inter', Arial, sans-serif);\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.8);\n  max-width: 540px;\n  margin: 0 auto;\n  line-height: 1.5;\n}\n\n/* \u2500\u2500 Scroll reveal (locally scoped for safety) \u2500\u2500 */\n.ph-content .sr {\n  opacity: 0;\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.ph-content .sr-up { transform: translateY(20px); }\n.ph-content .sr.sr-visible { opacity: 1; transform: none; }\n"] }]
    }], null, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], backgroundImage: [{
            type: Input
        }], tag: [{
            type: Input
        }] }); })();
//# sourceMappingURL=page-hero.component.js.map