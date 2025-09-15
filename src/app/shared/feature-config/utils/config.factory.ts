import { inject } from '@angular/core';
import { ConfigService } from '../data/config.service';

export function loadConfigFactory() {
    return () => inject(ConfigService).loadConfig();
}
