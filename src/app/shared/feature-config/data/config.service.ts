import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ApplicationConfig } from './config.entity';
import { HttpClient } from '@angular/common/http';
import { retry, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
    private readonly CONFIG_URL: string = '/assets/config/config.json';
    private readonly DEFAULT_CONFIG: ApplicationConfig = {
        apiUrl: '',
        factory: '',
    };

    private http = inject(HttpClient);
    private configSignal: WritableSignal<ApplicationConfig> = signal(
        this.DEFAULT_CONFIG,
    );

    readonly config = this.configSignal.asReadonly();

    loadConfig() {
        return this.http.get<ApplicationConfig>(this.CONFIG_URL).pipe(
            retry(10),
            tap((config: ApplicationConfig) => this.setConfig(config)),
        );
    }

    private setConfig(config: ApplicationConfig) {
        this.configSignal.set(config);
    }
}
