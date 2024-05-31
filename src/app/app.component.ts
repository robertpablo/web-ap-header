import { Component, OnInit } from '@angular/core';
import { ConfigHandler } from './event-handlers';

@Component({
  selector: 'ropabajo-header',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  navbarCollapsed = true;
  downloadCount = 1;

  constructor(private configHandler: ConfigHandler) {}

  ngOnInit(): void {
    this.configHandler.initializeConfig();
  }
}
