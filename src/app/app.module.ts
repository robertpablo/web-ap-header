import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {
  AppGlobalConfigState,
  AppStoreActions,
  CORE_CONFIG,
  ConfigService,
  CoreConfig,
  CoreModule,
} from '@ropabajo/core';
import { NgxsModule, Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

const coreConfig: CoreConfig = {
  appConfigUrl: environment.urls.appConfig, //'http://localhost:9098/assets/config/app-config.json',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule.forRoot(coreConfig, { devLoginUrl: 'https://your-api-url.com' }),
    NgxsModule.forRoot([AppGlobalConfigState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: true, // environment.production
    }),
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' },
    { provide: CORE_CONFIG, useValue: coreConfig },
    DecimalPipe,
    ConfigService,
  ],
})
export class AppModule {}
