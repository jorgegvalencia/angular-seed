import { NotFoundRouting } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRouting
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
