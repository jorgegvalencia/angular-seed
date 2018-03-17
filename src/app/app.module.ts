import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { SettingsModule } from './pages/settings/settings.module';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoggerService } from './core/services/logger/logger.service';
import { ConsoleLoggerService } from './core/services/logger/console-logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Main modules
    AppRoutingModule,
    CoreModule,
    SharedModule,
    // Feature modules
    HomeModule,
    SettingsModule,
    NotFoundModule
  ],
  providers: [
    { provide: LoggerService, useClass: ConsoleLoggerService },
    // Guards
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
