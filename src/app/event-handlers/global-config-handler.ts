import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { APP_STATE_TOKEN } from '@ropabajo/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigHandler {
  constructor(private store: Store) {}

  initializeConfig() {
    const globalConfig = this.store.selectSnapshot(
      APP_STATE_TOKEN.GLOBAL_CONFIG
    );

    const globalConfigElement = document.querySelector('global-config') as any;

    globalConfigElement.setConfig(globalConfig);
  }
}
