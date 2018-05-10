import { NgModule } from '@angular/core';


// PAGES ROUTE
import { PAGES_ROUTES } from './pages.routes';
// COMPONENTES

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

// SERVICIOS


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent

  ],
  imports: [
    SharedModule,
    PAGES_ROUTES

  ]
})
export class PagesModule { }
