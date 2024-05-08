import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState } from '@ropabajo/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ropabajo-header',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navbarCollapsed = true;
  downloadCount = 1;
  @Select(AppState.isLoading) isLoading$!: Observable<boolean>;
}
