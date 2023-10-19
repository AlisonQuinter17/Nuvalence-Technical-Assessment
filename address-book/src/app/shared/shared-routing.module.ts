import { Routes } from '@angular/router';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';

export const SharedRoutingModule: Routes = [
  { path: 'details/:id', component: PeopleDetailsComponent }
];
