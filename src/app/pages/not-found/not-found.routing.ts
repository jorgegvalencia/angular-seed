import { NotFoundComponent } from './not-found.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const NotFoundRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '**',
    component: NotFoundComponent
  }
]);
