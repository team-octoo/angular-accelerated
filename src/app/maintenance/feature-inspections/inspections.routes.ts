import { Routes } from '@angular/router';
import { InspectionsComponent } from './inspections.component';

export const INSPECTIONS_ROUTES: Routes = [
    {
        path: '',
        component: InspectionsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'overview',
            },
            {
                path: 'overview',
                loadComponent: () =>
                    import('./overview/inspections-overview.component').then(
                        (m) => m.InspectionsOverviewComponent,
                    ),
            },
            {
                path: 'detail/:id',
                loadComponent: () =>
                    import('./detail/inspections-detail.component').then(
                        (m) => m.InspectionsDetailComponent,
                    ),
                children: [
                    {
                        path: 'tasks',
                        loadComponent: () =>
                            import(
                                './detail/detail-tasks/inspections-detail-tasks.component'
                            ).then((m) => m.InspectionsDetailTasksComponent),
                    },
                    {
                        path: 'info',
                        loadComponent: () =>
                            import(
                                './detail/detail-info/inspections-detail-info.component'
                            ).then((m) => m.InspectionsDetailInfoComponent),
                    },
                    {
                        path: 'available-tasks',
                        loadComponent: () =>
                            import(
                                './detail/detail-available-tasks/inspections-detail-available-tasks.component'
                            ).then(
                                (m) =>
                                    m.InspectionsDetailAvailableTasksComponent,
                            ),
                    },
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'tasks',
                    },
                ],
            },
        ],
    },
];
