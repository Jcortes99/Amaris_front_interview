import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataFetcherComponent } from './data-fetcher/data-fetcher.component';

export const routes: Routes = [
    { path: 'home', component: SidebarComponent },
    { path: 'DB', component: DataFetcherComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
