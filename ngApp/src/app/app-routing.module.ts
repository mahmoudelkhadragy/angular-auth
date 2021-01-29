import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  {
    path: 'special-events',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
