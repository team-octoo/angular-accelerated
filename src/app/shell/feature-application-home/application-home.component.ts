import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Signal,
} from '@angular/core';
import { ApplicationStateService } from '../../shared/feature-application-state';

@Component({
    standalone: true,
    selector: 'app-application-home',
    imports: [],
    templateUrl: './application-home.component.html',
    styleUrls: ['./application-home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationHomeComponent {
    private readonly applicationStateService: ApplicationStateService = inject(
        ApplicationStateService,
    );

    readonly usernameSignal: Signal<string> = computed(
        () => this.applicationStateService.state().username,
    );
    readonly factorySignal: Signal<string> = computed(
        () => this.applicationStateService.state().factory,
    );
}
