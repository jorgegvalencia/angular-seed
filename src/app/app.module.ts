import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundModule } from './features/not-found/not-found.module';
import { SettingsModule } from './features/settings/settings.module';
import { HomeModule } from './features/home/home.module';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

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
    // Guards
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
