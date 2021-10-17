import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TouchscreenComponent } from './components/touchscreen/touchscreen.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActivityCalAppPageComponent } from './components/activity-cal-app-page/activity-cal-app-page.component';
import { MealPlanAppPageComponent } from './components/meal-plan-app-page/meal-plan-app-page.component';
import { StoryComponent } from './components/story/story.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TouchscreenComponent,
    ContactComponent,
    ActivityCalAppPageComponent,
    MealPlanAppPageComponent,
    StoryComponent,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
