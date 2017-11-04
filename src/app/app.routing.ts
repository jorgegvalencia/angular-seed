import { NotFoundComponent } from './features/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './features/home/home.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
