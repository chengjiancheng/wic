import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { QueueComponent } from './queue.component';
import { HeroDetailComponent } from './hero-detail.component';
import { Login } from './login';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: Login
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'myticket',
    component: HeroesComponent
  },
  {
    path: 'queue',
    component: QueueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [Login,DashboardComponent, QueueComponent,HeroesComponent, HeroDetailComponent];
