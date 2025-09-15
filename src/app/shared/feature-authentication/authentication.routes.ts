import { Routes } from '@angular/router';
import { AuthenticationLoginComponent } from './login/login.component';

export const AUTHENTICATION_ROUTES: Routes = [
    {
        path: 'login',
        title: 'Shopfloor - Login',
        component: AuthenticationLoginComponent,
    },
];
