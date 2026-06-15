import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
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
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            SharedModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    HomeComponent,
                    PlanYourVisitComponent,
                    AttractionsComponent,
                    BirthdayPartiesComponent,
                    GroupEventsComponent,
                    FaqsComponent,
                    MembershipsComponent,
                    ContactUsComponent,
                    CorporateEventsComponent,
                    FieldTripsComponent,
                    LiveEventsComponent,
                    EventDetailComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    SharedModule
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        HomeComponent,
        PlanYourVisitComponent,
        AttractionsComponent,
        BirthdayPartiesComponent,
        GroupEventsComponent,
        FaqsComponent,
        MembershipsComponent,
        ContactUsComponent,
        CorporateEventsComponent,
        FieldTripsComponent,
        LiveEventsComponent,
        EventDetailComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule] }); })();
//# sourceMappingURL=app.module.js.map