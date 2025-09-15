import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-application-navigation',
    imports: [RouterModule],
    templateUrl: './application-navigation.component.html',
    styleUrls: ['./application-navigation.component.css'],
})
export class ApplicationNavigationComponent {}
