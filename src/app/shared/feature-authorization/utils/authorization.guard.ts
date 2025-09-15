import { inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthenticationService } from '../../feature-authentication';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
    private readonly authenticationService: AuthenticationService = inject(
        AuthenticationService,
    );
    private readonly router: Router = inject(Router);

    canActivate(): boolean {
        console.log(
            '%cAuthorizationGuard canActivate?',
            `color:${this.checkAuth() ? 'rgb(4, 255, 0)' : 'rgb(255, 0, 0)'}`,
        );
        return this.checkAuth();
    }

    canActivateChild(): boolean {
        return this.checkAuth();
    }

    canLoad(): boolean {
        return this.checkAuth();
    }

    private checkAuth(): boolean {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);

            return false;
        }
    }
}
