import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class SeoService {
    constructor(titleService, meta) {
        this.titleService = titleService;
        this.meta = meta;
        this.siteName = 'Bolder Adventure Park';
        this.baseUrl = 'https://www.bolderadventurepark.com';
        this.defaultImage = 'https://www.bolderadventurepark.com/assets/After-hero-section/Attractions%20-%20A%20view%20from%20Mezz%201.jpg';
    }
    update(config) {
        var _a, _b;
        const fullTitle = config.path === '/'
            ? this.siteName + ' — Indoor Adventure Park, Grand Prairie TX'
            : `${config.title} — ${this.siteName}`;
        const url = `${this.baseUrl}${(_a = config.path) !== null && _a !== void 0 ? _a : ''}`;
        const image = (_b = config.image) !== null && _b !== void 0 ? _b : this.defaultImage;
        this.titleService.setTitle(fullTitle);
        this.meta.updateTag({ name: 'description', content: config.description });
        if (config.keywords) {
            this.meta.updateTag({ name: 'keywords', content: config.keywords });
        }
        this.meta.updateTag({ property: 'og:title', content: fullTitle });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:image', content: image });
        this.setCanonical(url);
    }
    setCanonical(url) {
        let link = document.querySelector("link[rel='canonical']");
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta)); };
SeoService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeoService, factory: SeoService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeoService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.Title }, { type: i1.Meta }]; }, null); })();
//# sourceMappingURL=seo.service.js.map