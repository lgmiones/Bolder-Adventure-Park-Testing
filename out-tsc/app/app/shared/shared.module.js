import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeroComponent } from './page-hero/page-hero.component';
import { InfiniteCarouselComponent } from './infinite-carousel/infinite-carousel.component';
import * as i0 from "@angular/core";
export class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            RouterModule
        ], CommonModule,
        RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PageHeroComponent,
                    InfiniteCarouselComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [
                    CommonModule,
                    RouterModule,
                    PageHeroComponent,
                    InfiniteCarouselComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [PageHeroComponent,
        InfiniteCarouselComponent], imports: [CommonModule,
        RouterModule], exports: [CommonModule,
        RouterModule,
        PageHeroComponent,
        InfiniteCarouselComponent] }); })();
//# sourceMappingURL=shared.module.js.map