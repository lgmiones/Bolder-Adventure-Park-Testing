import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
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
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
