import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const pagesRoutes: Routes = [
    {
        path: '',
      component: PagesComponent,
      children: [
          { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
          { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }},
          { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes' }},
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]},
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
