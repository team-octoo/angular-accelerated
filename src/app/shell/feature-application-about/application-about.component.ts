import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-application-about',
    imports: [],
    templateUrl: './application-about.component.html',
    styleUrls: ['./application-about.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationAboutComponent {}
