import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataFetcherComponent } from './data-fetcher/data-fetcher.component';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
    // { path: 'home', component: SidebarComponent },
    { path: 'DB', component: DataFetcherComponent },
    { path: 'homeyes', component: HomeComponent},
    { path: 'Analytics', component: AnalyticsComponent},
    { path: '', redirectTo: '/homeyes', pathMatch: 'full' }
];
