import { SettingsRouting } from './settings.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRouting
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
