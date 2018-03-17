import { HomeRouting } from './home.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    HomeRouting
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
