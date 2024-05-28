import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { APP_STATE_TOKEN, ConfigurationService } from '@ropabajo/core';

@Component({
  selector: 'ropabajo-header',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  navbarCollapsed = true;
  downloadCount = 1;

  constructor(
    private store: Store,
    private configurationService: ConfigurationService
  ) {}

  ngOnInit(): void {
    //console.log(this.configurationService.global(), 'global header');

    const globalConfig = this.store.selectSnapshot(
      APP_STATE_TOKEN.GLOBAL_CONFIG
    );
    console.log(globalConfig, 'GLOBAL_CONFIG  header');

    const globalConfigElement = document.querySelector('global-config') as any;
    globalConfigElement.setConfig(globalConfig);
  }
}
