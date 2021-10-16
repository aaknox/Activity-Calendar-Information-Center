import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCalAppPageComponent } from './components/activity-cal-app-page/activity-cal-app-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MealPlanAppPageComponent } from './components/meal-plan-app-page/meal-plan-app-page.component';
import { StoryComponent } from './components/story/story.component';
import { TeamComponent } from './components/team/team.component';
import { TouchscreenComponent } from './components/touchscreen/touchscreen.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'touchscreen',
    component: TouchscreenComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'apps/activity-calendar',
    component: ActivityCalAppPageComponent
  },
  {
    path: 'apps/meal-planner',
    component: MealPlanAppPageComponent
  },
  {
    path: 'about/story',
    component: StoryComponent
  },
  {
    path: 'about/team',
    component: TeamComponent
  },
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
