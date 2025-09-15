import { Routes } from '@angular/router';
import { ApplicationHomeComponent, ApplicationAboutComponent } from './shell';
import { AuthorizationGuard } from './shared/feature-authorization';
import { AUTHENTICATION_ROUTES } from './shared/feature-authentication';

export const APP_ROUTES: Routes = [
    ...AUTHENTICATION_ROUTES,
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        title: 'AA Workshop',
        component: ApplicationHomeComponent,
    },
    {
        path: 'about',
        title: 'AA Workshop - About',
        component: ApplicationAboutComponent,
    },
    {
        path: 'maintenance',
        title: 'AA Workshop - Maintenance',
        canActivate: [AuthorizationGuard],
        loadChildren: () =>
            import('./maintenance').then((m) => m.MAINTENANCE_ROUTES),
    },
    {
        path: 'planning',
        title: 'AA Workshop - Planning',
        canActivate: [AuthorizationGuard],
        loadChildren: () => import('./planning').then((m) => m.PLANNING_ROUTES),
    },
];
