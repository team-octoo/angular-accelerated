import { Routes } from '@angular/router';

export const MAINTENANCE_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inspections',
    },
    {
        path: 'inspections',
        loadChildren: () =>
            import('./feature-inspections').then((m) => m.INSPECTIONS_ROUTES),
    },
    {
        path: 'repairs',
        loadComponent: () =>
            import('./feature-repairs').then((m) => m.RepairsComponent),
    },
];
