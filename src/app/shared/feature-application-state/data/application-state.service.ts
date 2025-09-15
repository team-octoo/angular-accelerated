import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ConfigService } from '../../feature-config';
import { ApplicationState } from './application-state.entity';

@Injectable({
    providedIn: 'root',
})
export class ApplicationStateService {
    private config = inject(ConfigService).config;

    private stateSignal: WritableSignal<ApplicationState> = signal({
        isAuthenticated: false,
        username: 'Operator',
        factory: this.config()?.factory,
    });

    readonly state = this.stateSignal.asReadonly();

    setFactory(factoryToSet: string) {
        this.stateSignal.update((currentState: ApplicationState) => {
            return {
                ...currentState,
                factory: factoryToSet,
            };
        });
    }
}
