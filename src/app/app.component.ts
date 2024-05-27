import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '@ropabajo/core';

@Component({
  selector: 'ropabajo-header',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  navbarCollapsed = true;
  downloadCount = 1;

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    console.log(this.configurationService.global(), 'global header');
  }
}
