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
import { TicketsPassesComponent } from './pages/tickets-passes/tickets-passes.component';
import { TicketDetailComponent } from './pages/ticket-detail/ticket-detail.component';

@NgModule({
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
    EventDetailComponent,
    TicketsPassesComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
