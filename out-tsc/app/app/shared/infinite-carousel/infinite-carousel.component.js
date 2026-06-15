import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function InfiniteCarouselComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "img", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "assets/carousel-images/" + img_r2, i0.ɵɵsanitizeUrl)("alt", img_r2);
} }
function InfiniteCarouselComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "img", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const img_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "assets/carousel-images/" + img_r3, i0.ɵɵsanitizeUrl);
} }
export class InfiniteCarouselComponent {
    constructor() {
        this.speed = 'normal';
        this.carouselImages = [
            'Carousel-1.jpg',
            'Carousel-2.jpg',
            'Carousel-3.jpg',
            'Carousel-4.jpg',
            'Carousel-5.jpg',
            'Carousel-6.jpg',
            'Carousel-7.jpg',
            'Carousel-8.jpg',
            'Carousel-9.jpg',
            'Carousel-10.jpg',
            'Carousel-11.jpg',
            'Carousel-13.jpg',
            'Carousel-30.jpg'
        ];
    }
}
InfiniteCarouselComponent.ɵfac = function InfiniteCarouselComponent_Factory(t) { return new (t || InfiniteCarouselComponent)(); };
InfiniteCarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InfiniteCarouselComponent, selectors: [["app-infinite-carousel"]], inputs: { speed: "speed" }, decls: 5, vars: 4, consts: [[1, "carousel-section"], [1, "carousel-track-wrapper"], [1, "carousel-track"], ["class", "carousel-slide", 4, "ngFor", "ngForOf"], ["class", "carousel-slide", "aria-hidden", "true", 4, "ngFor", "ngForOf"], [1, "carousel-slide"], ["loading", "lazy", "decoding", "async", "width", "480", "height", "320", 3, "src", "alt"], ["aria-hidden", "true", 1, "carousel-slide"], ["alt", "", "loading", "lazy", "decoding", "async", "width", "480", "height", "320", 3, "src"]], template: function InfiniteCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        i0.ɵɵtemplate(3, InfiniteCarouselComponent_div_3_Template, 2, 2, "div", 3);
        i0.ɵɵtemplate(4, InfiniteCarouselComponent_div_4_Template, 2, 1, "div", 4);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵclassMap("speed-" + ctx.speed);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.carouselImages);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.carouselImages);
    } }, directives: [i1.NgForOf], styles: [".carousel-section[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  padding: 1.5rem 0;\n  background: var(--black, #030303);\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 120px;\n    z-index: 2;\n    pointer-events: none;\n  }\n\n  &::before {\n    left: 0;\n    background: linear-gradient(to right, var(--black, #030303), transparent);\n  }\n\n  &::after {\n    right: 0;\n    background: linear-gradient(to left, var(--black, #030303), transparent);\n  }\n}\n\n.carousel-track-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  width: max-content;\n  animation: carousel-scroll 38s linear infinite;\n}\n\n\n.speed-slow[_ngcontent-%COMP%]   .carousel-track[_ngcontent-%COMP%]  { animation-duration: 56s; }\n.speed-normal[_ngcontent-%COMP%]   .carousel-track[_ngcontent-%COMP%] { animation-duration: 38s; }\n.speed-fast[_ngcontent-%COMP%]   .carousel-track[_ngcontent-%COMP%]  { animation-duration: 22s; }\n\n@keyframes carousel-scroll {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n\n.carousel-slide[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 320px;\n  height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img {\n    transform: scale(1.05);\n  }\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InfiniteCarouselComponent, [{
        type: Component,
        args: [{ selector: 'app-infinite-carousel', template: "<div class=\"carousel-section\" [class]=\"'speed-' + speed\">\n  <div class=\"carousel-track-wrapper\">\n    <div class=\"carousel-track\">\n      <!-- First set \u2014 lazy load, fixed dimensions prevent CLS -->\n      <div class=\"carousel-slide\" *ngFor=\"let img of carouselImages\">\n        <img [src]=\"'assets/carousel-images/' + img\" [alt]=\"img\"\n             loading=\"lazy\" decoding=\"async\" width=\"480\" height=\"320\" />\n      </div>\n      <!-- Duplicate for seamless loop \u2014 lazy, aria-hidden to avoid duplicate alt text -->\n      <div class=\"carousel-slide\" *ngFor=\"let img of carouselImages\" aria-hidden=\"true\">\n        <img [src]=\"'assets/carousel-images/' + img\" alt=\"\"\n             loading=\"lazy\" decoding=\"async\" width=\"480\" height=\"320\" />\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".carousel-section {\n  width: 100%;\n  overflow: hidden;\n  padding: 1.5rem 0;\n  background: var(--black, #030303);\n  position: relative;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 120px;\n    z-index: 2;\n    pointer-events: none;\n  }\n\n  &::before {\n    left: 0;\n    background: linear-gradient(to right, var(--black, #030303), transparent);\n  }\n\n  &::after {\n    right: 0;\n    background: linear-gradient(to left, var(--black, #030303), transparent);\n  }\n}\n\n.carousel-track-wrapper {\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-track {\n  display: flex;\n  gap: 16px;\n  width: max-content;\n  animation: carousel-scroll 38s linear infinite;\n}\n\n/* Speed variants */\n.speed-slow .carousel-track  { animation-duration: 56s; }\n.speed-normal .carousel-track { animation-duration: 38s; }\n.speed-fast .carousel-track  { animation-duration: 22s; }\n\n@keyframes carousel-scroll {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(-50%); }\n}\n\n.carousel-slide {\n  flex: 0 0 auto;\n  width: 320px;\n  height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n    transition: transform 0.4s ease;\n  }\n\n  &:hover img {\n    transform: scale(1.05);\n  }\n}\n"] }]
    }], null, { speed: [{
            type: Input
        }] }); })();
//# sourceMappingURL=infinite-carousel.component.js.map