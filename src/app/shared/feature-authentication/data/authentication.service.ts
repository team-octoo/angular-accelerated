import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    isLoggedIn: boolean = true;

    login(): Observable<boolean> {
        this.isLoggedIn = true;
        return of(this.isLoggedIn);
    }

    logout(): Observable<boolean> {
        this.isLoggedIn = false;
        return of(this.isLoggedIn);
    }

    isAuthenticated(): boolean {
        return true;
    }
}
