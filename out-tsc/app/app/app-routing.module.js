import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanYourVisitComponent } from './pages/plan-your-visit/plan-your-visit.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';
import { BirthdayPartiesComponent } from './pages/birthday-parties/birthday-parties.component';
import { GroupEventsComponent } from './pages/group-events/group-events.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CorporateEventsComponent } from './pages/corporate-events/corporate-events.component';
import { FieldTripsComponent } from './pages/field-trips/field-trips.component';
import { LiveEventsComponent } from './pages/live-events/live-events.component';
import { EventDetailComponent } from './pages/live-events/event-detail/event-detail.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: HomeComponent },
    { path: 'plan-your-visit', component: PlanYourVisitComponent },
    { path: 'attractions', component: AttractionsComponent },
    { path: 'birthday-parties', component: BirthdayPartiesComponent },
    { path: 'group-events', component: GroupEventsComponent },
    { path: 'group-events/corporate-events', component: CorporateEventsComponent },
    { path: 'group-events/field-trips', component: FieldTripsComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'memberships', component: MembershipsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'live-events', component: LiveEventsComponent },
    { path: 'live-events/:slug', component: EventDetailComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
export class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            })], RouterModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled'
                    })],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map