import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './shared/components/people-list/people-list.component';
import { SharedRoutingModule } from './shared/shared-routing.module';

const routes: Routes = [
  ...SharedRoutingModule,
  { path: '', redirectTo: '/people-list', pathMatch: 'full' },
  { path: 'people-list', component: PeopleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

