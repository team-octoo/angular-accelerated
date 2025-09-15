import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionItem } from './shared/ui-components';
import {
    ApplicationFooterComponent,
    ApplicationHeaderComponent,
    ApplicationNavigationComponent,
} from './shell';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        ApplicationHeaderComponent,
        ApplicationNavigationComponent,
        ApplicationFooterComponent,
    ],
    providers: [ActionItem],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
