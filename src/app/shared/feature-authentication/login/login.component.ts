import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../data/authentication.service';

@Component({
    standalone: true,
    selector: 'app-login',
    imports: [RouterModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class AuthenticationLoginComponent implements OnInit {
    authenticationService: AuthenticationService = inject(
        AuthenticationService,
    );
    router: Router = inject(Router);

    ngOnInit(): void {
        this.redirectIfAuthenticated();
    }

    private redirectIfAuthenticated(): void {
        if (this.authenticationService.isAuthenticated()) {
            console.log('Redirecting');
            this.router.navigate(['/']);
        }
    }
}
