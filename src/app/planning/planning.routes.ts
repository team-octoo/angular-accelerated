import { Routes } from '@angular/router';

export const PLANNING_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./feature-dashboard').then(
                (m) => m.PlanningDashboardComponent,
            ),
    },
    {
        path: 'scheduling',
        loadComponent: () =>
            import('./feature-scheduling').then(
                (m) => m.PlanningSchedulingComponent,
            ),
    },
];
