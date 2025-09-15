import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Signal,
    untracked,
} from '@angular/core';
import {
    ApplicationState,
    ApplicationStateService,
} from '../../shared/feature-application-state';
import { ActionItem } from '../../shared/ui-components/action-item/action-item.component';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-application-header',
    imports: [RouterModule, ActionItem],
    templateUrl: './application-header.component.html',
    styleUrls: ['./application-header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationHeaderComponent {
    private readonly applicationStateService: ApplicationStateService = inject(
        ApplicationStateService,
    );

    currentFactorySignal: Signal<string> = computed(() => {
        return this.applicationStateService.state()?.factory ?? 'NO SITE';
    });

    toggleLocation() {
        const currentFactory: string = untracked(
            this.applicationStateService.state,
        )?.factory;

        const factoryToSet: string =
            currentFactory === 'De Kade' ? 'De Kien' : 'De Kade';

        this.applicationStateService.setFactory(factoryToSet);
    }
}
