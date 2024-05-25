import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '@ropabajo/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ropabajo-header',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  navbarCollapsed = true;
  downloadCount = 1;

  private url = this.configuration.global();

  constructor(private configuration: ConfigurationService) {}

  ngOnInit(): void {
    console.log(environment.urls.appConfig);
    console.log(this.url);
  }
}
